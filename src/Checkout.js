import React from 'react';
import "./Checkout.css";
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
    const [{basket},dispatch] = useStateValue(); 
    console.log(basket);
    return (
        <div className="checkout">
        <div className="checkout__left">
            <img className="checkout__ad" src="https://m.media-amazon.com/images/G/01/digital/video/sonata/Superhero_UK_Acquisition_FT_Apr_20/f4b165f5-678a-48bb-a049-11e7ddc2168d._UR3000,600_SX1500_FMwebp_.jpg"/>

            {basket?.length === 0 ? (
                <div className="checkout__title">
                    <h2>Your Shopping Basket is empty!</h2>
                    <p>You have no items in your basket. To buy one or more items click on "Add to basket" next to the item.</p>
                </div>  
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shopping Cart</h2>
                    {basket.map( item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}
                        />
                    ))}
                </div>
            )}
        </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
    </div>
        

    )
}

export default Checkout;
