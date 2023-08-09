import { PRODUCTS } from "../../Products";
import { useContext } from "react";
import { ShopContxt } from "../../context/ShopContxt";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContxt);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1> Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map(
          (product) =>
            cartItems[product.id] !== 0 && (
              <CartItem key={product.id} product={product} />
            )
        )}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shpping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Your Cart Is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
