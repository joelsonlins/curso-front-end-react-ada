import { useDispatch} from "react-redux";
import * as S from "./styles";
import { removeProduct } from "../../redux/Cart/cart-slice";
import { Product } from "../../data/products";

interface CartProps {
  showCart: boolean;
  cart: Product[]
}

export const Cart: React.FC<CartProps> = ({ showCart, cart }) => {


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
                dispatch(removeProduct(product))
              }
            >
              Remove
            </button>
          </S.CartProductItem>
        ))}
        <S.CartTotal data-testid="total">Total: ${total} </S.CartTotal>
      </S.CartProductList>
    </S.Container>
  );
};
