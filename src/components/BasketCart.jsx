import React from 'react'
import useProduct from '../ContextHook'
export default function BasketCart() {

    const prod = useProduct();

    let cartItem = prod.cartItem;
    let totalScores =0;
    return (
        <div>
            <div className="cartIcon">
                <span className="totalPrice">
                    {cartItem.length > 0 ?"$"+(cartItem.reduce((a,cart)=>a+ cart.count * cart.price,0)).toFixed(1) : "$00"}
                </span>
                <button className="btnAddCart" onClick={()=>document.querySelector('.basket').classList.toggle('activeBasket')}>
                                {    
                                    <i className="shadow mainIcon fas fa-shopping-bag"></i>
                                }
                </button>
            </div>

            <div className="basket">
                <div className="basketContainer">
                    {
                        cartItem.map(i=> {totalScores=totalScores+ i.count})
                    }
                    <p>{cartItem.length > 0 ? `You have ${totalScores} products in the cart`  : "Your cart is empty"}</p>

                    <ul className="itemsCart">
                        {
                        cartItem.map((item,index)=>
                            item.count > 0 ?
                            <section key={index}>
                                <li className="liCart" >
                                        <img className="picture__cart" src={`${process.env.PUBLIC_URL}/products/${item.sku}.jpg`}  alt="no" />
                                        <div className="liCart__info">
                                            <div className="title__cart">{item.title}</div> 
                                            <button className="btnRemoveCart " onClick={()=>prod.handleRemoveCart(item)}><i className="far fa-times-circle"></i></button> 
                                            <div className="flexRow">   <span className="xxx">×</span> <span>{item.count}</span>    </div>
                                            <div className="flexRow2">   <span className="dolar">$</span> <span>{(item.count * item.price).toFixed(1)}</span>     </div>
                                        </div>

                                </li>


                            </section> 
                            : null
                            )
                        }
                    </ul>
                    {cartItem.length > 0 ? <button className="checkout" onClick={()=>alert("not ready")}>Checkout</button> : null}
                </div>

            </div>
        </div>
    )
}
