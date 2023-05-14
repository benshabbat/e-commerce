import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
const EditProduct = () => {
  const router = useRouter();
  const { idProduct } = router.query;
  console.log(idProduct);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products?id=" + idProduct);
      setFormData(data);
    };
    fetchData();
  }, [idProduct]);

  const [formData, setFormData] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
    const updateProduct = async (e) => {
    e.preventDefault();
    await axios.put("/api/products?id=" + idProduct,formData);
    router.push("/products");
  };
  return (
    <Layout>
      <h1>Update Product</h1>
      <form className="flex flex-col" onSubmit={updateProduct}>
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
          Edit
        </button>
      </form>
    </Layout>
  );
};

export default EditProduct;
