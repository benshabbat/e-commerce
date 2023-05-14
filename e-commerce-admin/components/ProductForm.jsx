import React from 'react'

const ProductForm = ({handleChange,formData,nameMethod,onSubmit}) => {
  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
    <label>Product Name</label>
    <input
      type="text"
      name="name"
      placeholder="product name"
      onChange={handleChange}
      value={formData?.name}
    />
    <label>Description</label>
    <textarea
      type="text"
      name="description"
      placeholder="description"
      onChange={handleChange}
      value={formData?.description}
    />
    <label>Price</label>
    <input
      type="number"
      name="price"
      placeholder="price"
      onChange={handleChange}
      value={formData?.price}
    />
    <button className="btn-primary" type="submit">
      {nameMethod}
    </button>
  </form>
  )
}

export default ProductForm