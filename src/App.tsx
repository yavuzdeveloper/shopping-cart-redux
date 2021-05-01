import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import{ data } from './data';
//import Button from '@atlaskit/button';
import { Link } from 'react-router-dom';
import Products from './Products';
import Cart from './Cart';
import { Route } from "react-router-dom";
import { connect } from 'react-redux'; //store bağlanmak
import { BookType } from './types';


const App = (props:any) => {  //console.log("BOOKLİST:", props.bookList)
  const [state, setState] = useState({
    bookList: data,
    cart: []
  })

  return (
    <div className="App">
      <header className="App-header">
        <h3>shopping cart </h3>
         <div>
            <Link to="/">Go shopping</Link></div>
            <div style={{float:"right"}}>
              <Link to="/cart">My Cart</Link>
            </div>
            
          
        
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
        <Route exact path="/" component={Products} />
        <Route path="/cart" component={Cart} />
  
    </div>
  );
}

const mapStateToProps = (state:any) => {
  return {
    bookList : state.bookList
  }
}
export default connect(mapStateToProps)(App);