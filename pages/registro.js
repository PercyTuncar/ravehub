import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
} from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../lib/firebase';

 

export default function Registro() {
  const router = useRouter();
  const db = getFirestore();
  const storage = getStorage();

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telefono, setTelefono] = useState('');
  const [imagen, setImagen] = useState(null);
  const [subiendoImagen, setSubiendoImagen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Crear usuario en Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);

      // Subir imagen a Firebase Storage
      if (imagen) {
        setSubiendoImagen(true);
        const imagenRef = ref(storage, `imagenes-perfil/${user.uid}`); 
        await uploadBytes(imagenRef, imagen);
        setSubiendoImagen(false);
      }

      // Obtener la URL de la imagen subida
      const imagenRef = ref(storage, `imagenes-perfil/${user.uid}`);
      const imagenURL = await getDownloadURL(imagenRef);

      // Actualizar el perfil del usuario con el nombre y la imagen de perfil
      await updateProfile(user, {
        displayName: `${nombre} ${apellido}`,
        photoURL: `https://firebasestorage.googleapis.com/v0/b/${process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET}/o/imagenes-perfil%2F${user.uid}?alt=media`,
      });

      // Guardar los datos del usuario en Firestore
      const userObj = {
        nombre,
        apellido,
        email,
        telefono,
        imagenURL // Agregar la URL de la imagen aquí
      };
      await addDoc(collection(db, 'users'), userObj); // Utilizar addDoc en lugar de setDoc

      router.push('/login');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    }
  };

  const handleImagenSeleccionada = (event) => {
    const imagenSeleccionada = event.target.files[0];
    setImagen(imagenSeleccionada);
  };

  return (
    <main className="formulario-rave">
    <section className="registro">
      <div className="registro-columna">
        <form>
          <div className="registro-fila">
            <label htmlFor="nombre" className="registro-label">Nombre</label>
            <input
              type="text"
              label="Nombre"
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
              required
              placeholder="Nombre"
              className="registro-input"
            />
          </div>
          <div className="registro-fila">
      <label htmlFor="apellido" className="registro-label">Apellido</label>
      <input
        type="text"
        label="Apellido"
        value={apellido}
        onChange={(event) => setApellido(event.target.value)}
        required
        placeholder="Apellido"
        className="registro-input"
      />
    </div>

    <div className="registro-fila">
      <label htmlFor="email-address" className="registro-label">Email address</label>
      <input
        type="email"
        label="Email address"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        placeholder="Email"
        className="registro-input"
      />
    </div>

    <div className="registro-fila">
      <label htmlFor="password" className="registro-label">Password</label>
      <input
        type="password"
        label="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
        placeholder="Contraseña"
        className="registro-input"
      />
    </div>

    <div className="registro-fila">
      <label htmlFor="telefono" className="registro-label">Teléfono</label>
      <input
        type="text"
        label="Teléfono"
        value={telefono}
        onChange={(event) => setTelefono(event.target.value)}
        placeholder="Teléfono"
        className="registro-input"
      />
    </div>

    <div className="registro-fila">
      <label htmlFor="imagen" className="registro-label">Imagen de perfil</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImagenSeleccionada}
        className="registro-input"
      />
      {subiendoImagen && <p>Subiendo imagen...</p>}
    </div>

    <button type="submit" onClick={handleSubmit} className="registro-submit">
      Registrarse
    </button>
  </form>
</div>
</section>
</main>
  );
}