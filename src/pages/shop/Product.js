import { useContext } from "react";
import { ShopContxt } from "../../context/ShopContxt";

const Product = ({ product }) => {
  const { id, productName, price, productImage } = product;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContxt);

  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};

export default Product;
