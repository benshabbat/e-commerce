import React,{useState} from "react";
import Layout from "@/components/Layout";
const newProduct = () => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: 100,
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
  
        }));
      };
      const onSubmit = async (e) => {
        e.preventDefault();

      };
  return (
    <Layout>
      <h1>New Product</h1>
      <form className="flex flex-col" onSubmit={}>
        <label>Product Name</label>
        <input type="text" name="name" placeholder="product name" onChange={handleChange} />
        <label>Description</label>
        <textarea type="text" name="description" placeholder="description" onChange={handleChange} />
        <label>Price</label>
        <input type="number" name="price" placeholder="price" onChange={handleChange} />
        <button className="btn-primary" type="submit">Save</button>
      </form>
    </Layout>
  );
};

export default newProduct;
