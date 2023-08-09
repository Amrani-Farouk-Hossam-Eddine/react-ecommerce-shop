import { useContext } from "react";
import { ShopContxt } from "../../context/ShopContxt";

const CartItem = ({ product }) => {
  const { id, productName, price, productImage } = product;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContxt);
  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            type="text"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
