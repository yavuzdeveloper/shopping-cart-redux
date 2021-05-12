import './App.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'; //store bağlanmak
import { addToCart } from './actions'
import { Book, CartModel } from './types';
import { ReducerState } from './reducers';


const Products = (props:{ books: Book[], addToCart: Function}) => {
  return (
    <div>
      <div>
        <h3>BOOKS</h3>
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
  }
}

const mapActionsToProps = ({ addToCart })

export default connect (mapStateToProps, mapActionsToProps)(Products);
