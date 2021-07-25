import React from 'react';
// import { useEffect } from 'react';
import useProduct from '../ContextHook'


function Products() {

    const prod = useProduct();

    let products = prod.products;   
    

    return (
        <div className={`${products.length > 2? "productsHolder" : products.length ===2? "productsHolder2" : "productsHolder1" }`}>
            {
            products.map(
                (item,index)=>(
                    <div key={index} className="productItem">
                        <div className="productButtons">
                            <span className="">{item.isFreeShipping?<i className="freeShipping fas fa-shipping-fast"></i>:null}</span>
                            <button className="btnAddCart" onClick={()=>prod.handleAddCart(item)}>
                                {    
                                    <i className="icons fas fa-shopping-bag"></i>
                                }
                            </button>
                        </div>
                        <div className="productInfo">
                            <img className="picture" src={`${process.env.PUBLIC_URL}/products/${item.sku}.jpg`}  alt="no" />
                            <h3 className="title">{item.title}</h3>
                            <p className="price">{item.price}$</p>
                        </div>

                    </div> 
                ) 
            )}
        </div>
    )
}

export default Products