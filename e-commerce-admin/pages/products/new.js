import React from "react";
import Layout from "@/components/Layout";
const newProduct = () => {
  return (
    <Layout>
      <div className="flex flex-col">
        <input type="text" placeholder="product name" />
        <textarea  type="text" placeholder="description"/>
      </div>
    </Layout>
  );
};

export default newProduct;
