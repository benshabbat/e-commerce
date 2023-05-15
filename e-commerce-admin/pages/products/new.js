import React, { useState } from "react";
import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import ProductForm from "@/components/ProductForm";
const newProduct = () => {
  const [formData, setFormData] = useState();
  const router = useRouter();

  const createProduct = async (e) => {
    e.preventDefault();
    await axios.post("/api/products", formData);
    router.push("/products");
  };
  return (
    <Layout>
      <h1>New Product</h1>
      <ProductForm
          setFormData={setFormData}
          formData={formData}
          nameMethod="Save"
          onSubmit={createProduct}
        />
    </Layout>
  );
};

export default newProduct;
