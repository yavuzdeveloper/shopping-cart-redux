
import { connect } from 'react-redux';
import { CartItem, CartModel } from './types';
import { removeFromCart, decrease, increase } from './actions'
import { ReducerState} from './reducers';
import { Link } from 'react-router-dom';

const Cart = (props:{ cart:CartModel, decrease:Function, 
    removeFromCart: Function, increase: Function}) => { 

    
    const totalPrice = props.cart.items.reduce((total, item) => 
        (total += (item.count)*(item.book.price)), 0 );
    
    return ( 
        <div style={{padding:"0 10px 0 10px"}}>
            <h3>
                <Link to="/">Products</Link> 
                <div style={{float:"right"}}>
                    <span>My Cart ({ props.cart.items.reduce((total, item) => (total += item.count), 0 )})</span>
                </div>    
            </h3>
            <div className="cart">
               { !props.cart.items.length && 
               <div className="empty">
                   <h3>Your Cart Empty</h3>
               </div>
               }
                {props.cart.items.map((item:CartItem) => (
                <div className="book"  key={item.book.id}>
                    <img src={item.book.image} alt={item.book.name}  />
                    <div>
                        <h4>{item.book.name}</h4>
                        <p>Price: {item.book.price}£</p>
                        <p>Author: {item.book.author}</p>
                        <p>Count: {item.count}</p>
                        <p>Subtotal: {(item.book.price*item.count).toFixed(2)}£</p>
                        <button onClick={() => props.decrease(item.book)}>-</button>
                        <button onClick={() => props.removeFromCart(item.book)}>Delete</button>
                        <button onClick={() => props.increase(item.book)}>+</button>
                    </div>
                </div>
                ))}
            </div>
                <div style={{float:"right"}}>
                    <h3>Total Cart Price: £ {totalPrice.toFixed(2)}</h3>   
                </div> 
        </div>
    )
}

const mapStateToProps = (state:ReducerState) => {
    return {
        cart: state.cart   
    }
}

// const mapActionsToProps = ({ removeFromCart, increase, decrease });
// export default connect(mapStateToProps, mapActionsToProps)(Cart);

export default connect(mapStateToProps, { removeFromCart, increase, decrease })(Cart);