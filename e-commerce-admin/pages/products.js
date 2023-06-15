import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import axios from "axios";
import { BsPencilSquare } from "react-icons/bs";
import { MdOutlineDeleteForever } from "react-icons/md";
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => {
            return (
              <tr key={product?._id}>
                <td>{product?.name}</td>
                <td>
                  <Link href={"/products/edit/" + product?._id}>
                    <BsPencilSquare className="w-6 h-6" />
                    Edit
                  </Link>
                  <Link
                    href={"/products/delete/" + product?._id}
                    className="btn-red"
                  >
                    <MdOutlineDeleteForever className="w-6 h-6" />
                    Delete
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  )
};

export default products;
