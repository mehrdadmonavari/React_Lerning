import { useState } from "react/cjs/react.development";
import ProductList from "./components/productList/ProductList";
import styles from "./App.module.css";
import ProductHeader from "./components/productHeader/ProductHeader";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Coat",
      price: "200$",
      color: "red",
      description: "this is coat",
    },
    {
      id: 2,
      name: "Hat",
      price: "300$",
      color: "red",
      description: "this is coat",
    },
    {
      id: 3,
      name: "Pants",
      price: "450$",
      color: "red",
      description: "this is coat",
    },
    {
      id: 4,
      name: "jacket",
      price: "180$",
      color: "red",
      description: "this is coat",
    },
    {
      id: 5,
      name: "Shawl",
      price: "180$",
      color: "red",
      description: "this is coat",
    },
  ]);

  const deleteHandler = (id) => {
    const filtredProduct = products.filter((product) => {
      return product.id !== id;
    })
    setProducts(filtredProduct);
  }

  return (
    <div className="container-fluid">
    <div className="card m-5">
      <div className="card-header">
        <ProductHeader />
      </div>
      <div className="card-body">
        <ProductList products={products} onDelete={deleteHandler} />
      </div>
    </div>
    </div>
  );
};

export default App;
