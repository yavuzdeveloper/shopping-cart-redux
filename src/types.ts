export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_CART = 'INCREASE_CART';
export const DECREASE_CART = 'DE_CREASE_CART';

interface AddCartAction {
  type: typeof ADD_TO_CART;
  payload: Book;
}
interface RemoveCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: Book;
}
interface IncreaseCartAction {
  type: typeof INCREASE_CART;
  payload: Book;
}
interface DecreaseCartAction {
  type: typeof DECREASE_CART;
  payload: Book;
}

export type ListAction = AddCartAction | RemoveCartAction | IncreaseCartAction | DecreaseCartAction;

export interface Book {
  id: number;
  name: string;
  author: string;
  price: number;
  image: string;
}

export interface CartModel {
items: CartItem[];
}

export interface CartItem {
  book: Book;       
  count: number;
}