import moment from 'moment';
import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import "./Order.css";
import CurrencyFormat from "react-currency-format";


function Order({order}) {
    return (
        <div className="order">
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    rating={item.rating}
                    price={item.price}
                    image={item.image}
                    hideButton="true"
                />
            ))}
            <CurrencyFormat 
                renderText={(value) => (
                        <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rs "}
            />
        </div>
    )
}

export default Order;
