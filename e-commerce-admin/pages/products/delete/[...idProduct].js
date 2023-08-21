import { useEffect, useState } from "react";
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

  const deleteProduct = async () => {
    await axios.delete("/api/products?id=" + idProduct);
    goBack();
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
      <h1 className="text-center">
        Do you really want to delete "{formData?.name}"?
      </h1>
      <div className="flex gap-2 justify-center">
        <button onClick={deleteProduct} className="btn-red">Yes</button>
        <button onClick={goBack} className="btn-default">
          No
        </button>
      </div>
    </Layout>
  );
};

export default DeleteProduct;
