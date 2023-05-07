import React from 'react'
import Layout from "@/components/Layout";
import Link from 'next/link';
const products = () => {
  return (
    <Layout>
      <Link className='bg-blue-900 text-white rounded-md p-2' href={"/products/new"}>Add a new Product</Link>
    </Layout>
  )
}

export default products