import React, {useEffect, useState}  from "react";
import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";
import axios from "axios";
import { useRouter } from "next/router";
const EditProduct = () => {
  const [formData, setFormData] = useState()
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
  return (
    <Layout>
      <h1>Update Product</h1>
      {formData && <ProductForm nameMethod="Edit" data={formData}/>}
    </Layout>
  );
};

export default EditProduct;
