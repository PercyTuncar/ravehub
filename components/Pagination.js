const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;
    const hasPreviousPage = currentPage > 1;
    const hasNextPage = currentPage < totalPages;
  
    return (
      <nav className="flex justify-center">
        <ul className="flex">
          <li className="px-2 py-1">
            <button
              className={`bg-white hover:bg-gray-200 rounded-l-md ${
                isFirstPage ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={() => {
                if (!isFirstPage) handlePageChange(currentPage - 1);
              }}
              disabled={isFirstPage}
            >
              ◀️
            </button>
          </li>
          {[...Array(totalPages)].map((_, index) => (
            <li key={index} className="px-2 py-1">
              <button
                className={`bg-white hover:bg-gray-200 rounded-md ${
                  currentPage === index + 1 ? 'font-bold' : ''
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li className="px-2 py-1">
            <button
              className={`bg-white hover:bg-gray-200 rounded-r-md ${
                isLastPage ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={() => {
                if (!isLastPage) handlePageChange(currentPage + 1);
              }}
              disabled={isLastPage}
            >
              ▶️
            </button>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Pagination;
  