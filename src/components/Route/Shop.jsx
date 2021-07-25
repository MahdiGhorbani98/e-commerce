import React from 'react'
import Products from '../Products';
import Filter from '../Filter';
export default function Shop() {
    return (
        <div>
            <Filter/>
            <div className="products__cart">
            <Products/>
            </div>  
        </div>
    )
}
