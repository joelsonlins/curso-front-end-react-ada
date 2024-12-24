import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { RootReducer, rootReducer } from "../../redux/root-reducer";

interface CartProps {
  showCart: boolean;
}

export const Cart: React.FC<CartProps> = ({ showCart }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );

  const dispatch = useDispatch()

  const total = cart.reduce((totalCart, product) => {
    return totalCart + product.price;
  }, 0);

  return (
    <S.Container showCart={showCart}>
      <S.Title>Carrinho</S.Title>
      <S.CartProductList>
        {cart.map((product) => (
          <S.CartProductItem key={product.id}>
            <strong>{product.title}</strong> - ${product.price}
            <button
              onClick={() =>
                dispatch({ type: "cart/remove-product", payload: product })
              }
            >
              Remove
            </button>
          </S.CartProductItem>
        ))}
        <S.CartTotal>Total: ${total} </S.CartTotal>
      </S.CartProductList>
    </S.Container>
  );
};
