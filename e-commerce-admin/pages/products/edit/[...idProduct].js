import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import ProductForm from "@/components/ProductForm";
const EditProduct = () => {
  const [formData, setFormData] = useState();
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


  const updateProduct = async (e) => {
    e.preventDefault();
    await axios.put("/api/products?id=" + idProduct, formData);
    router.push("/products");
  };
  return (
    <Layout>
      <h1>Update Product</h1>
      {formData && (
        <ProductForm
        setFormData={setFormData}
          formData={formData}
          nameMethod="Edit"
          onSubmit={updateProduct}
        />
      )}
    </Layout>
  );
};

export default EditProduct;
