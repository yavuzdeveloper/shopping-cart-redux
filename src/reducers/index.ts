import { data } from "../data";
import { Action } from "redux";
import { createStore } from "redux";
import { Book,  CartModel, CartItem, 
    ADD_TO_CART, REMOVE_FROM_CART, INCREASE_CART, DECREASE_CART, ListAction } from '../types';
import Cart from "../Cart";
import { isTemplateExpression } from "typescript";


export interface ReducerState { 
    cart: CartModel, 
    books: Book[]
}

export const INITIAL_STATE: ReducerState = {
    books: data,
    cart: {items: []}
}


export const  reducer = (
    state: ReducerState = INITIAL_STATE,
    action: ListAction
): ReducerState => {
    switch (action.type) {
        case ADD_TO_CART:  
            const addBook = state.cart.items.find(item => item.book.id === action.payload.id) 
            if(addBook){
                addBook.count = addBook.count + 1; 
            }else{ 
                state.cart.items.push({ count:1, book:action.payload }); 
            }  
            return state;
        
        case INCREASE_CART: 
            const increaseBook = state.cart.items.find(item => item.book.id === action.payload.id)
            if(increaseBook){                            
                increaseBook.count = increaseBook.count + 1;   console.log("COUNT:",increaseBook.count);
            } 
            // state.cart.items.map(item=> item.book.id === action.payload.id){
            //     item.count = item.count + 1;
            // }
            return state;        
            



        //     ...state, card: state.card.map(item => item.id === action.payload.id 
        //         ? {...item, count: item.count + 1}: item)
        
        // case REMOVE_FROM_CART:
        //     state.cart.items.filter(item => item.book.id !== action.payload.id){
        //         state.cart.items.push()
        //     }    
        //     return state;

        // case DECREASE_CARD:
        //     return {
        //         ...state, card: state.card.map(item => item.id === action.payload.id 
        //         ? {...item, count: item > 1 ? item.count - 1 : 1}: item) 
        //     }



        default:
            return state;
    }
};
export const store = createStore(reducer);






// export const reducer = (
//     state: ReducerState = INITIAL_STATE,
//     action: ListAction
// ): ReducerState => {
//     switch(action.type) { 
//         case ADD_TO_CARD:
//             state.card.items.push({ count:1, book:action.payload});
//             return state;
//             //{         //...state, card: [...state.card, action.payload]}  
//                //state
//                 // ...state,
//                 // card: state.card,
//                 // {...items, }
//                 // card: state.card.items.find(item => item.book.id === action.payload.id)
//                 //     ? state.card.items.map(item => item.book.id === action.payload.id
//                 //         ? {...item, count: item.count + 1 }
//                 //         : { count:1, book:action.payload}
//                 //         )
//                 //         :{ count:1, book:action.payload}

                
   
//          //default: return state;
//            // }
//         // case REMOVE_FROM_CARD:
//         //     return { 
//         //        //...state, card: state.card.filter(item => item.id !== action.payload.id)
//         //        ...state, card: state.card.map(item => {
//         //            console.log("ITEM:",item);
//         //             console.log("ITEM.id:",item.id);
//         //             console.log("Action:",action);
//         //              console.log("Action.payload.id:",action.payload.id);
//         //              console.log("COUNT:",item.count);
//         //        })
//         //     }   
//         // case INCREASE_CARD:
//         //     return { 
//         //     ...state, card: state.card.map(item => item.id === action.payload.id 
//         //         ? {...item, count: item.count + 1}: item)

// // ...state, card: state.card.map(item => {
// //     console.log("ITEM:",item);
// // console.log("ITEM.id:",item.id);
// // console.log("Action.payload.id:",action.payload.id);
// // })

//         //     }

//         // case DECREASE_CARD:
//         //     return {
//         //         ...state, card: state.card.map(item => item.id === action.payload.id 
//         //         ? {...item, count: item > 1 ? item.count - 1 : 1}: item) 
//         //     }





//             default: return state;
//     }
// }   

// export const store = createStore(reducer);