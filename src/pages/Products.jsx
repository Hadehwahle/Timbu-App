import { useNavigate } from "react-router-dom";
const sneaks = [
  {
    id: 1,
    name: "YEEZY BOOST",
    price: 240,
    photoName: "images/yeezy.png",
    cart: "icons/cart-pro.svg",
  },
  {
    id: 2,
    name: "SKETCHERS",
    price: 140,
    photoName: "images/sketches.png",
    cart: "icons/cart-pro.svg",
  },
  {
    id: 3,
    name: "NIKE AIR MAX",
    price: 370,
    photoName: "images/nikeairmax.png",
    cart: "icons/cart-pro.svg",
  },
  {
    id: 4,
    name: "BALENCIAGA",
    price: 280,
    photoName: "images/balenciaga.png",
    cart: "icons/cart-pro.svg",
  },
  {
    id: 5,
    name: "FILA",
    price: 220,
    photoName: "images/fila.png",
    cart: "icons/cart-pro.svg",
  },
  {
    id: 6,
    name: "NIKE AIR JORDAN",
    price: 340,
    photoName: "images/nikeairjordan.png",
    cart: "icons/cart-pro.svg",
  },
  {
    id: 7,
    name: "NEW BALANCE",
    price: 200,
    photoName: "images/newbalance.png",
    cart: "icons/cart-pro.svg",
  },
  {
    id: 8,
    name: "ADDIDAS",
    price: 120,
    photoName: "images/addidas.png",
    cart: "icons/cart-pro.svg",
  },
  {
    id: 9,
    name: "ALL STAR",
    price: 100,
    photoName: "images/allstar.png",
    cart: "icons/cart-pro.svg",
  },
];

function Products() {
  return (
    <>
      <section className="products">
        {sneaks.map((product) => (
          <Shop data={product} />
        ))}
      </section>
    </>
  );
}
function Shop(props) {
  const navigate = useNavigate();
  const { name, price, photoName, cart } = props.data;
  return (
    <div className="product">
      <img onClick={() => navigate("/cart")} className="cart-icon" src={cart} />

      <img className="shoe-sneak" src={photoName} />
      <div className="name-price">
        <p>{name}</p>
        <p className="dollar">${price}</p>
      </div>
    </div>
  );
}
export default Products;
