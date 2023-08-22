import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";
const newProduct = () => {
  return (
    <Layout>
      <h1>New Product</h1>
      <ProductForm nameMethod="Save" />
    </Layout>
  );
};

export default newProduct;
