import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { auth, db, storage } from "../lib/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { AuthContext } from "../contexts/auth-context";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [size, setSize] = useState("");
  const [gender, setGender] = useState("");
  const router = useRouter();
  const { currentUser } = useContext(AuthContext);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Comprobar si el usuario está autenticado
    if (!currentUser || currentUser.email !== "percy@tuncar.dev") {
      console.log("Acceso denegado");
      return;
    }

    // Comprobar si la imagen ha sido subida
    if (!url) {
      console.log("Por favor sube una imagen antes de guardar el producto");
      return;
    }

    const productRef = collection(db, "products");
    const product = {
      title,
      price,
      image: url,
      size,
      gender
    };

    addDoc(productRef, product)
      .then(() => {
        console.log("Product added successfully!");
        router.push("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleImageUpload = () => {
    // Comprobar si se ha seleccionado una imagen
    if (!image) {
      console.log("Por favor selecciona una imagen antes de subirla");
      return;
    }

    setUploading(true);

    const storageRef = ref(storage, `products/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error(error);
        setUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            setUrl(downloadURL);
            setUploading(false);
          })
          .catch((error) => {
            console.error(error);
            setUploading(false);
          });
      }
    );
  };
  return (
    <div>
      <h1>Admin Panel</h1>
      <form onSubmit={handleSubmit}>
  <div>
    <label htmlFor="title">Title</label>
    <input
      type="text"
      id="title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
  </div>
  <div>
    <label htmlFor="price">Price</label>
    <input
      type="number"
      id="price"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
    />
  </div>
  <div>
    <label htmlFor="size">Size</label>
    <select id="size" value={size} onChange={(e) => setSize(e.target.value)}>
      <option value="">- Selecciona una talla -</option>
      <option value="S">S</option>
      <option value="M">M</option>
      <option value="L">L</option>
    </select>
  </div>
  <div>
    <label htmlFor="gender">Gender</label>
    <select
      id="gender"
      value={gender}
      onChange={(e) => setGender(e.target.value)}
    >
      <option value="">- Selecciona un género -</option>
      <option value="Masculino">Masculino</option>
      <option value="Femenino">Femenino</option>
      <option value="Unisex">Unisex</option>
    </select>
  </div>
  <div>
    <label htmlFor="image">Image</label>
    <input type="file" id="image" onChange={handleChange} />
  </div>
  {uploading && (
    <div>
      <progress value={uploadProgress} max="100" />
    </div>
  )}
  {!url && (
    <div>
      <button type="button" onClick={handleImageUpload}>
        Subir imagen
      </button>
    </div>
  )}
  {url && (
    <div>
      <p>La imagen ha sido subida correctamente:</p>
      <img src={url} alt="product" />
    </div>
  )}
  <button type="submit" disabled={!url}>
    Guardar producto
  </button>
</form>

    </div>
  );
};

export default Admin;
