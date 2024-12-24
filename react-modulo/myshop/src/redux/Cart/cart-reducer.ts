import { Product } from "../../data/products";

interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [],
}

interface CartAction {
  type: string,
  payload: Product;
}

export function cartReducer(state = initialState, action: CartAction) {
  switch (action.type) {
    case "cart/add-prduct":
      return {
        ...state,
        cart: [
          ...state.cart,
          action.payload, // pauload: produto que se deseja adicionar ao carrinho
        ]
      }
    case "cart/remove-product":
      const producToRemove = action.payload
      const cartFiltered = state.cart.filter((product) => product.id !== producToRemove.id)
      return {
        ...state,
        cart: cartFiltered
      }
    default:
      return state;

  }
}