import Cart from "../Cart";
import { data } from "../data";
import { BookType } from '../types';


interface ReducerState { 
    bookList:BookType[], 
    cart:BookType[] 
}
type Action = {
    type: 'ADDTO_CART',
    payload: BookType
}

const INITIAL_STATE = {
    bookList: data,
    cart: []
}

export const reducer = (state: ReducerState = INITIAL_STATE, action: Action) => {
    switch(action.type) {
        case 'ADDTO_CART':
            return { ...state, cart: [...state.cart, action.payload]}
        default:
            return state;
    }
    
}