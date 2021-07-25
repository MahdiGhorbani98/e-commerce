import React , {useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import BasketCart from './BasketCart'
export default function Header() {

    useEffect(() => {
        window.onscroll = ()=>{
            // if(document.body.scrollTop > 50 || document.documentElement.scrollTop>50)
            // {
            //     document.querySelector('header').style.padding = "13px"
            // }else{
            //     document.querySelector('header').style.padding = "21px"
            // }
            if(document.body.scrollTop > 50 || document.documentElement.scrollTop>50)
            {
                document.querySelector('header').classList.add('paddingHeader__scrolling')
            }else{
                document.querySelector('header').classList.remove('paddingHeader__scrolling')
            }


        }

    }, [])

    return (
        <div className="HeaderHolder">
            <header className="paddingHeader">
                <div className="Brand">
                    <h2>
                        <button className="btnAddCart" onClick={null}>
                                {    
                                    <i className="shadow mainIcon fas fa-bars"></i>
                                }
                        </button>
                        <span>
                            Olibaba
                        </span>
                    
                    </h2>
                </div>
                <div className="tabsHolder">
                    <ul className="tabs">
                        <li>
                            <NavLink className="Link" activeClassName="activeTab" to='/' exact>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="Link" activeClassName="activeTab" to='/shop'>Shop</NavLink>
                        </li>
                        <li>
                            <NavLink className="Link" activeClassName="activeTab" to='/about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink className="Link" activeClassName="activeTab" to='/contact'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="CartHeader">{<BasketCart/>}</div>
            </header>
        </div>
    )
}
