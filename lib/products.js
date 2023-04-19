import { firestore } from './firebase';

export const getProducts = async (perPage, page, filters) => {
  let productsRef = firestore.collection('products');

  // Apply filters
  if (filters) {
    if (filters.gender) {
      productsRef = productsRef.where('gender', '==', filters.gender);
    }

    if (filters.size) {
      productsRef = productsRef.where('size', '==', filters.size);
    }

    if (filters.price) {
      productsRef = productsRef.where('price', '<=', filters.price);
    }
  }

  // Get total number of products
  const total = (await productsRef.get()).docs.length;

  // Apply pagination
  const offset = (page - 1) * perPage;
  productsRef = productsRef.orderBy('createdAt', 'desc').limit(perPage).offset(offset);

  const products = (await productsRef.get()).docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return {
    products,
    total,
  };
};
