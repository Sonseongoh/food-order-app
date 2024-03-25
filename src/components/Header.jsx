import foodLogoImg from "../assets/logo.jpg";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={foodLogoImg} alt="restaurant" />
        <h1>음식 주문</h1>
      </div>
      <nav>
        <button>장바구니(0)</button>
      </nav>
    </header>
  );
}
