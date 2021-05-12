import { Book, ADD_TO_CART, REMOVE_FROM_CART, DECREASE_CART, INCREASE_CART } from '../types';



export const addToCart = (book:Book) => { 
    return { 
        type: ADD_TO_CART, 
        payload: book
    };
} 

export const removeFromCart = (book:Book) => { 
    return { 
        type: REMOVE_FROM_CART, 
        payload: book
    };
} 

export const increase = (book:Book) => {
    return {
        type: INCREASE_CART,
        payload: book
    }
}

export const decrease = (book:Book) => {
    return {
        type: DECREASE_CART,
        payload: book
    }
}

// export const increase = (book:Book) => { 
//     return { type: 'ADD_TO_CART', payload: book};
// } 