import { Product } from "../../data/products";
import * as S from "./styles";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );
  const dispatch = useDispatch();
  const isProductOnCart =
    cart.find((productOnCart) => product.id === productOnCart.id) !== undefined;

  function handleAddProductToCart() {
    // despachar a acttion de adicionar o produto ao carrinho
    dispatch({
      type: "cart/add-product",
      payload: product,
    });
  }

  function handleRemoveProductOnCart(){
    dispatch({
      type: "cart/remove-product",
      payload: product,
    })
  }

  return (
    <S.Card>
      <S.ProductImage src={product.image} alt={product.description} />

      <S.ProductTitle>{product.title}</S.ProductTitle>

      <S.ReviewPriceContainer>
        <S.Review>
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.round(product.rating.rate) ? (
              <AiFillStar key={index} />
            ) : (
              <AiOutlineStar key={index} />
            )
          )}
          (` ${product.rating.rate}`)
        </S.Review>
        <S.Price>${product.price}</S.Price>
      </S.ReviewPriceContainer>

      <S.AddToCartButoonWrapper>
        {isProductOnCart ? (
          <S.RemoveFromCartButton onClick={handleRemoveProductOnCart}>
            Remover do carrinho
            <FiShoppingCart />
          </S.RemoveFromCartButton>
        ) : (
          <S.AddToCartButoon onClick={handleAddProductToCart}>
            Adicionar ao carrinho
            <FiShoppingCart />
          </S.AddToCartButoon>
        )}
      </S.AddToCartButoonWrapper>
    </S.Card>
  );
};
