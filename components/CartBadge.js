const CartBadge = ({ quantity }) => {
    return (
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4h16v4H4zm10 10a2 2 0 11-4 0 2 2 0 014 0zm5.2 2.6a6 6 0 10-9.2 0H4v4h16v-4h-4.8z"
          />
        </svg>
        {quantity > 0 && (
          <span
            className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full"
          >
            {quantity}
          </span>
        )}
      </div>
    );
  };
  
  export default CartBadge;
  