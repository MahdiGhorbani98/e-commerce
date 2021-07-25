import React from 'react'
import useProduct from '../ContextHook'

export default function Filter() {
    let prod = useProduct()
    return (
        <div className="countainerFilter">
            <div className="filterHeader">
                <div className="address__founded">
                    <p className="navAddress">Home <span>{window.location.pathname}</span> </p>
                    <p>{prod.products.length} {prod.products.length===1?"Product found":"Products found"}</p>
                </div>
                <h1>Shop</h1>
                <div className="selects">
                    <div className="selectPrice">
                        {/* <label >Order by</label> */}
                        <select name="price" id="price" value={prod.sort} onChange={prod.handleSortChange}>
                            <option value="default">Price (default)</option>
                            <option value="lth">lowest to highest</option>
                            <option value="htl">highest to lowest</option>
                        </select>
                    </div>            
                    <div>
                        {/* <label >Filter by</label> */}
                        <select name="size" id="size" value={prod.size} onChange={prod.handleSizeChange}>
                            <option  value="all">Size (All)</option>
                            <option value="44">44</option>
                            <option value="43">43</option>
                            <option value="42">42</option>
                            <option value="41">41</option>
                            <option value="40">40</option>
                            <option value="39">39</option>
                        </select>
                    </div>
                </div>            
            </div>
        </div>
    )
}
