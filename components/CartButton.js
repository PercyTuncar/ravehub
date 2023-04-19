import { useCart } from '../contexts/CartContext';
import CartBadge from './CartBadge';

const CartButton = () => {
  const { cartItems, addToCart } = useCart();

  const handleClick = (product) => {
    addToCart(product);
  };

  return (
    <button onClick={handleClick}>
      <CartBadge count={cartItems.length} />
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6" />
      </svg>
    </button>
  );
};

export default CartButton;
