import React, { useState } from 'react'
import { connect } from 'react-redux';

const Cart = (props:any) => {  console.log("BB", props.bookList);

    // const [book, setBook] = useState(props.book);

    return (
        <div>
            <div className="cart">
        <h3>CART</h3>
          {props.cart.map((book:any) => (<div>
            <img src={book.image} alt={book.name}  />
            <p>{book.name}</p>
            <p>price: {book.price}$</p>
            <p>{book.author}</p>
            <button>+</button>
            <button>-</button>
            <button>Delete</button>
          </div>
          ))}
  
      </div>
            
        </div>
    )
}

const mapStateToProps = (state:any) => {
    return {
        bookList: state.bookList,
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart);


