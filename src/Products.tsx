import './App.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'; 
import { addToCart } from './actions'
import { Book, CartModel } from './types';
import { ReducerState } from './reducers';


const Products = (props:{ books: Book[], addToCart: Function,  cart:CartModel }) => {
  return (
    <div>
      <h3>
        <span style={{padding:"0 0 0 10px"}}>Products</span>
        <div style={{float:"right", padding:"0 10px 0 0"}}>
        <Link to="/cart">My Cart({ props.cart.items.reduce((total, item) => (total += item.count), 0 )})</Link>
        </div>
      </h3>
      <div>
        {props.books.map((book:Book) => (
          <div className="book">
            <img src={book.image} alt={book.name} />
              <div className="bookContent"  key={book.id}>
                <h4>{book.name}</h4>
                <p>Price: {book.price}£</p>
                <p>Author: {book.author}</p>
                <button onClick={()=> props.addToCart(book)}>Add to Cart</button>
              </div>
          </div>
        ))}
    </div>
    </div>
  );
}

const mapStateToProps = (state:ReducerState) => {
  return{
    books: state.books,
    cart: state.cart 
  }
}


export default connect (mapStateToProps,{ addToCart })(Products);
