import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import axios from "axios";
const DeleteProduct = () => {
  const [formData, setFormData] = useState();
  const router = useRouter();
  const { idProduct } = router?.query;

  const goBack = () => {
    router.push("/products");
  };

  useEffect(() => {
    if (idProduct) {
      const fetchData = async () => {
        const { data } = await axios.get("/api/products?id=" + idProduct);
        setFormData(data);
      };
      fetchData();
    }
  }, [idProduct]);
  return (
    <Layout>
      <h1>Do you really want to delete "{formData?.name}"?</h1>
      <button>Yes</button>
      <button onClick={goBack}>No</button>
    </Layout>
  );
};

export default DeleteProduct;
