import { useContext } from "react";
import CartContext from "../store/CartContext";
import Modal from "./UI/Modal";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  //cart 파일에서 사용한 로직 재사용
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      }),
    });
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"}>
      <form onSubmit={handleSubmit}>
        <h2>결제</h2>
        <p>결제 금액: {currencyFormatter.format(cartTotal)}</p>
        <Input label="이름" type="text" id="name" />
        <Input label="이메일" type="email" id="email" />
        <Input label="도로명 주소" type="text" id="street" />

        <div className="control-row">
          <Input label="우편번호" type="text" id="postal-code" />
          <Input label="도시" type="text" id="city" />
        </div>

        <p className="modal-actions">
          {/* type="button" 잊지말기 */}
          <Button type="button" textOnly onClick={handleClose}>
            닫기
          </Button>
          <Button>주문</Button>
        </p>
      </form>
    </Modal>
  );
}
