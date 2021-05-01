import './App.css';
import{ data } from './data';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'; //store bağlanmak
import { addToCart } from './actions'
//import { BookType } from './types';


const Products = (props:any) => {
  console.log("PROPS-BOOK",props.bookList);
  console.log("CART:",props.cart);

  return (
    <div>

      <div className="book">
        <h3>BOOKS</h3>
          {data.map(book => (<div>
            <img src={book.image} alt={book.name}  />
            <p>{book.name}</p>
            <p>price: {book.price}$</p>
            <p>{book.author}</p>
            <button onClick={()=> props.addToCart(book)}>Add to Cart</button>
          </div>
          ))}
  
      </div>
    </div>
  );
}

const mapStateToProps = (state:any) =>{
  return{
    bookList: state.bookList,
    cart: state.cart
  }
}

const mapActionsToProps = ({ addToCart })

export default connect (mapStateToProps, mapActionsToProps)(Products);