import React from 'react';
import '../css/App.css';
import Axios from 'axios'

// import BasketCart from './BasketCart';
import {useState,useEffect} from 'react';
import {Switch,Route, Redirect} from 'react-router-dom'
import Header from './Header'
import About from './Route/About';
import Home from './Route/Home';
import Shop from './Route/Shop'
import loadable from '@loadable/component'
export const ProductContext = React.createContext();

const ShopSplit = loadable(()=>import('./Route/Shop'))
function App() {
   

   let [productsList,setProductsList]= useState([]);
   let [productsFilter,setProductsFilter]= useState([]);
   let [sort,setSort]= useState("default");
   let [size,setSize]= useState("all");
   let [cartItem,setCartItem] = useState([]);
   

  function handleAddCart(product){

    let count = 0;
    let valid = false
    cartItem.forEach((item)=>{
        if(item.id === product.id)
        {
          valid=true;
          
          let i = {...item,...item.count++}
          setCartItem(pre=>[...pre])
          //setCartItem((pre)=> [...pre , pre.id=== item.id?{...item,...item.count++}:{} ] )
        }
    })
    if(!valid)
    {
      setCartItem((pre)=> [...pre , {...product , count:pre.count? pre.count+1 : count+1  }] )
    } 
  }

  function handleRemoveCart(product){
    cartItem.forEach(item=>{
      if(item.id === product.id){
        let i =  {...item,...item.count--}

        setCartItem(pre => [...pre])
      }

    })

    setCartItem(cartItem.filter(item=>{
      return item.count>0;
    })
    )
    // cartItem.filter(item =>{
    //   return item.id !== product.id
    // })
    // setCartItem(...cartItem)
  }


  function handleSize(e) {
    setSize(e.target.value)
  } 
  const handleSort = (e)=>{
    setSort(e.target.value);
  }
  

  useEffect(() => {
    if(sort !== "default")
    {
      productsList.sort( (a,b)=>(sort==="htl") ?(a.price<b.price?1:-1):(a.price>b.price?1:-1))
    }else{
      productsList.sort((a,b)=>(a.id>b.id?1:-1));
    } 
    setProductsFilter([...productsList])

    setProductsFilter(productsList.filter(
      (item)=>{
        if (size === "all")
        {return item}
        else{
          return(item.availableSizes.includes(size)) 
        }
      }
    ) 
    )



}, [size]);

  useEffect(() => {
    if(sort !== "default")
    {
      productsFilter.sort( (a,b)=>(sort==="htl") ?(a.price<b.price?1:-1):(a.price>b.price?1:-1))
    }else{
      productsFilter.sort((a,b)=>(a.id>b.id?1:-1));
    }

    return setProductsFilter([...productsFilter])
}, [sort]);



  useEffect(() => {
    
    Axios.get("https://api.npoint.io/1b13efa38db743f3f443")
    .then((data)=>{
      setProductsList(data.data.products);
      setProductsFilter(data.data.products);
    })

    return () => {
      
    }
  },[])


//////////////////////////LocalStorage///////////////////////////////
  useEffect(() => {
    const c = JSON.parse(localStorage.getItem("cart") || [])
    setCartItem(c)
  }, [])

  useEffect(() => {
    localStorage.setItem('cart' , JSON.stringify(cartItem))
    localStorage.removeItem('myValueInLocalStorage')
  }, [cartItem])



  return (
      <ProductContext.Provider value={
        {
          products : productsFilter,
          cartItem : cartItem,
          sort : sort,
          size : size,
          handleAddCart : handleAddCart,
          handleRemoveCart : handleRemoveCart,
          handleSizeChange : handleSize,
          handleSortChange : handleSort
        }
      }>
        <div>
          <div className="countainer">
            <Header/>
            <Switch>

              {/* <Route exact path={`/`} render={ (routerProps) => < Home routerProps={routerProps} />} /> */}
              {/* <Route exact path="/e-commerce">
                  <Redirect to="/shop" />
              </Route> */}

              <Redirect exact from={'/e-commerce'} to={'/shop'} />
              <Route path='/' component={Home} exact />

              <Route path='/shop' component={ShopSplit}/>

              <Route path='/about'  component={About} />

              <Route path='/cotact'  component={null} />


              {/* <Route component={null}/> */}

            </Switch>
          </div>
        </div>
      </ProductContext.Provider>

  );
}

export default App ;
