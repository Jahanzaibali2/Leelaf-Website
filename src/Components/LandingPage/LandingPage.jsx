import React from 'react'
import './LandingPage.css'
import Picture from "../../assets/Lp-Home-Aunty.png"
import Button from '../Button/Button'
import ShoppingCartLogo from '../../assets/shoopingCart.png'
import Logo from '../../assets/leelafLogo.png'

export default function LandingPage() {
    return (
        <div className='lp'>
            
            <div className="lp-nav">
                <div className="lp-logo">
                    <img src={Logo} alt="x" />
                </div>

                

                <div className="lp-shopplogo">
                    <img src={ShoppingCartLogo} alt="." />
                </div>



            </div>



            <div className="lp-content">

                <h3>Elevating modesty and empowering the hijab</h3>

                <p>It is a long established fact that a reader</p>
                <Button buttonText={"ShopNow"} />
            </div>

        </div>
    )
}
