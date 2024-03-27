import { useContext } from "react";
import foodLogoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={foodLogoImg} alt="restaurant" />
        <h1>음식 주문</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          장바구니({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
