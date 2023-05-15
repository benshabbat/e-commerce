import React, { useState} from "react";
import axios from "axios";
import { useRouter } from "next/router";
const ProductForm = ({ nameMethod,data=null }) => {
  const [formData, setFormData] = useState(data);
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
