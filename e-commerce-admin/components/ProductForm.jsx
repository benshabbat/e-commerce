import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { FiUpload } from "react-icons/fi";
const ProductForm = ({ nameMethod, data = null,images=[] }) => {
  const [formData, setFormData] = useState(data);
  const [images, setImages] = useState(images);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const createProduct = async (e) => {
    e.preventDefault();
    await axios.post("/api/products", formData);
    router.push("/products");
  };
  const updateProduct = async (e) => {
    e.preventDefault();
    await axios.put("/api/products", formData);
    router.push("/products");
  };
  const onSubmit = async (e) => {
    if (nameMethod === "Edit") updateProduct(e);
    if (nameMethod === "Save") createProduct(e);
  };
  const uploadPhotos = async (e) => {
    const { files } = e.target;
    if (files?.length > 0) {
      const data = new FormData();
      for (const file of files) {
        data.append("file", file);
      }
      const res = await axios.post("/api/upload", data);
      setImages((oldImages) => [...oldImages, ...res.data.links]);
      console.log(res.data);
    }
  };
  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <label>Product Name</label>
      <input
        type="text"
        name="name"
        placeholder="product name"
        onChange={handleChange}
        value={formData?.name}
      />
      <label>Photos</label>
      <div className="mb-2">
        <label
          className="h-24 w-24 border-4 border-gray-400
         flex text-ceter items-center justify-center gap-1 text-sm text-gray-500 rounded-md cursor-pointer"
        >
          <FiUpload />
          Upload
          <input type="file" className="hidden" onChange={uploadPhotos} />
        </label>
        {!formData?.photos?.length ? (
          <div>dont have any photos for this product </div>
        ) : (
          formData?.photos?.map((photo) => (
            <img key={photo.id} src={photo.url} alt={photo.description} />
          ))
        )}
      </div>
      <label>Description</label>
      <textarea
        type="text"
        name="description"
        placeholder="description"
        onChange={handleChange}
        value={formData?.description}
      />
      <label>Price</label>
      <input
        type="number"
        name="price"
        placeholder="price"
        onChange={handleChange}
        value={formData?.price}
      />
      <button className="btn-primary" type="submit">
        {nameMethod}
      </button>
    </form>
  );
};

export default ProductForm;
