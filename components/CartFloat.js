import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import CartBadge from "./CartBadge";

const CartFloat = () => {
  const { cartItems, cartQuantity, addToCart, removeFromCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const handleCartToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };

  const handleClearCart = () => {
    // Lógica para limpiar el carrito
  };

  const calculateCartTotal = () => {
    // Lógica para calcular el precio total del carrito
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        className="flex items-center bg-green-500 text-white rounded-full p-2 shadow-lg"
        onClick={handleCartToggle}
      >
        <CartBadge quantity={cartQuantity} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg absolute right-0 bottom-16 w-80">
          <p className="text-lg font-bold py-2 px-4 border-b">
            Carrito de compras
          </p>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item.id} className="py-2 px-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-gray-500">{item.description}</p>
                  </div>
                  <div>
                    <p className="font-bold">${item.price}</p>
                    <div className="flex items-center justify-between mt-2">
                      <button
                        className="text-gray-400 hover:text-gray-500"
                        onClick={() => handleRemoveFromCart(item)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3-11a1 1 0 00-2 0v5a1 1 0 102 0v-5zm-6 0a1 1 0 112 0v5a1 1 0 11-2 0v-5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <p className="font-bold">{item.quantity}</p>
                      <button
                        className="text-gray-400 hover:text-gray-500"
                        onClick={() => handleAddToCart(item)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm-4-9a1 1 0 011-1h6a1 1 0 010 2H7a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between py-2 px-4">
            <p className="font-bold">Total:</p>
            <p className="font-bold">${calculateCartTotal()}</p>
          </div>
          <div className="flex justify-end py-2 px-4">
            <button
              className="bg-red-500 text-white rounded-full px-4 py-2"
              onClick={handleClearCart}
            >
              Limpiar carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartFloat;
