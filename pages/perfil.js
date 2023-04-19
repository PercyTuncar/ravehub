import { useState, useEffect } from 'react';
import { auth } from '../lib/firebase';

const Perfil = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  if (!currentUser) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <h1>
        <title>Perfil - Mi Aplicación</title>
      </h1>
      <h1>Bienvenido, {currentUser.displayName}!</h1>
      <p>Nombre: {currentUser.displayName}</p>
      <p>Email: {currentUser.email}</p> 
    </>
  );
};

export default Perfil;
