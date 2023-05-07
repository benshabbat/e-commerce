import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import axios from "axios";
const products = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <Layout>
      <Link className="btn-primary" href={"/products/new"}>
        Add a new Product
      </Link>

      <table className="basic">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Name</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => {
            return (
              <tr key={product?._id}>
                <td>{product?.name}</td>
                <td>buttons</td>
               
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
};

export default products;
