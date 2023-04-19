import { useContext } from 'react';
import { AuthContext } from '../contexts/auth-context';
import { useRouter } from 'next/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';
import React, { useState } from 'react';


export default function Login() {
  const router = useRouter();
  const { setCurrentUser } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setCurrentUser(userCredential.user);
      router.push('/perfil');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main>
      <section>
        <div>
          <div>
            <h1>FocusApp</h1>
            <form>
              <div>
                <label htmlFor="email-address">Email address</label>
                <input
                  type="email"
                  label="Email address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  placeholder="Contraseña"
                />
              </div>
              {error && <p>{error}</p>}
              <button type="submit" onClick={handleSubmit}>
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
