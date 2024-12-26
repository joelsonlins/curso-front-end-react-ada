import { Cart } from "../Cart/Cart";
import { useState } from "react";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { login, logout } from "../../redux/User/user-slice";

export const Header: React.FC = () => {
  const { user } = useSelector(
    (rootReducer: RootReducer) => rootReducer.userReducer
  );
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );

  const dispatch = useDispatch();

  const [showCart, setShowCart] = useState(false);
  const isLogged = user !== null;

  function handleUserAuth() {
    // usuário não está logado
    if (user == null) {
      // dspachar a action de login
      dispatch(
        login({
          name: "Walisson Silva",
          email: "walssin@email.com",
        })
      );
    } else {
      dispatch(logout({}));
    }
  }
  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>

        <S.ButtonsWrapper>
          {/* botão de login e logout */}
          <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogOut /> : <FiLogIn />}{" "}
          </S.AuthButton>
          {/* botão carrinho */}
          <S.Cartbutton onClick={() => setShowCart(!showCart)}>
            Carrinho <FiShoppingCart />
          </S.Cartbutton>
        </S.ButtonsWrapper>
      </S.Wrapper>

      <Cart showCart={showCart} cart={cart} />
    </S.StyledHeader>
  );
};
