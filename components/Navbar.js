import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/auth-context';
import { signOut } from '../lib/firebase';
import { useRouter } from 'next/router';
import CartBadge from './CartBadge';
import { CartContext } from '../contexts/CartContext';

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser && router.asPath === '/perfil') {
      router.push('/login');
    }
  }, [currentUser, router]);

  const handleSignOut = async () => {
    try {
      await signOut();
      window.location.reload();
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  const isAdmin = currentUser && currentUser.email === 'percy@tuncar.dev';

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link href="/">
            <span  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
              Inicio
            </span> 
          </Link>
          <Link href="/tienda">
            <span  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
              Tienda
            </span> 
          </Link>
          <Link href="/contacto">
            <span  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
              Contacto
            </span> 
          </Link>
          <Link href="/blog">
            <span  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
              Blog
            </span> 
          </Link>

          {!currentUser ? (
            <>
              <Link href="/registro">
                <span  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
                  Registro
                </span> 
              </Link>
              <Link href="/login">
                <span  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
                  Iniciar Sesión
                </span> 
              </Link>
            </>
          ) : (
            <>
              <Link href="/perfil">
                <span  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
                  Perfil
                </span> 
              </Link>
              {isAdmin && (
                <Link href="/admin">
                  <span  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
                    Admin
                  </span> 
                </Link>
              )}
              <button
                onClick={handleSignOut}
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
              >
                Cerrar Sesión
              </button>
              <Link href="/carrito">
                <span  className="ml-4">
                  <CartBadge quantity={cartItems.length} />
                </span> 
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar
