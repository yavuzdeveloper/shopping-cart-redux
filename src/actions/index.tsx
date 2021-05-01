import { BookType } from '../types';



export const addToCart = (book:BookType[]) => { 
    return { type: 'ADDTO_CART', payload: book};
}