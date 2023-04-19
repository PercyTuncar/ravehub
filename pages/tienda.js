import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useCart } from "../contexts/CartContext";


const Tienda = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const getProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const products = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        details: {
          size: doc.data().size,
          gender: doc.data().gender,
          // agregar más detalles aquí si es necesario
        },
      }));
      setProducts(products);
    };
    getProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    console.log("Producto agregado al carrito: ", product);
  };

  return (
    <div className="tienda-container">
      <h1 className="text-3xl font-bold mb-4">Tienda</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <div className="aspect-w-3 aspect-h-4 mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="object-cover rounded-lg"
              />
            </div>
            <h2 className="text-lg font-bold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-2">Precio: ${product.price}</p>
            <p className="text-gray-600 mb-2">Talla: {product.details.size}</p>
            <p className="text-gray-600 mb-2">Género: {product.details.gender}</p>
            <button
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full"
              onClick={() => handleAddToCart(product)}
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tienda;
