import React, { Component, useState } from "react";
import ProductList from "./components/productList/ProductList";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Coat",
      color: "red",
      description: "this is Coat!!!",
    },
    {
      id: 2,
      name: "Hat",
      color: "Blue",
      description: "this is Hat!!!",
    },
    {
      id: 3,
      name: "Pants",
      color: "yellow",
      description: "this is Pants!!!",
    },
    {
      id: 4,
      name: "Gloves",
      color: "orange",
      description: "this is Gloves!!!",
    },
    {
      id: 5,
      name: "jacket",
      color: "black",
      description: "this is Gloves!!!",
    },
  ]);
  console.log(products);
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default App;
