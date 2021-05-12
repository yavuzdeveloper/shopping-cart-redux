// import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Book, CartItem, CartModel } from './types';
import { removeFromCart, decrease, increase } from './actions'
import { ReducerState} from './reducers';

const Cart = (props:{ cart:CartModel, decrease:Function, 
    removeFromCart: Function, increase: Function}) => { 
        //  console.log("AAAA1: ",props);
        console.log("AAAA: ",props.cart);


        
    return (
        <div>
            <div className="cart">
                <h3>CART</h3>
                {props.cart.items.map((item:CartItem) => (
                <div className="book"  key={item.book.id}>
                    <img src={item.book.image} alt={item.book.name}  />
                    <div>
                        <h4>{item.book.name}</h4>
                        <p>Price:  &#8378;{item.book.price}£</p>
                        <p>Author: {item.book.author}</p>
                        <p>Subtotal {item.count}: £8.99</p>
                        <p> count: {item.count}</p>
                        <button onClick={() => props.decrease(item.book)}>-</button>
                        <button onClick={() => props.removeFromCart(item.book)}>Delete</button>
                        <button onClick={() => props.increase(item.book)}>+</button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state:ReducerState) => {
    return {
        cart: state.cart   
    }
}

const mapActionsToProps = ({ removeFromCart, increase, decrease });

export default connect(mapStateToProps, mapActionsToProps)(Cart);


