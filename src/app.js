import { useState } from "react/cjs/react.development";
import ProductList from "./components/productList/ProductList";
import ProductHeader from "./components/productHeader/ProductHeader";
import styles from "./App.module.css";
import RandomProvider from "./components/randomContext/RandomProvider";
import RandomOne from "./components/randomContext/RandomOne";
import CountReducer from "./components/counterContext/CountReducer";
import Count from "./components/counterContext/Count";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Coat",
      price: "200$",
      color: "red",
      description: "this is coat",
      quantity: 1,
    },
    {
      id: 2,
      name: "Hat",
      price: "300$",
      color: "red",
      description: "this is coat",
      quantity: 1,
    },
    {
      id: 3,
      name: "Pants",
      price: "450$",
      color: "red",
      description: "this is coat",
      quantity: 1,
    },
    {
      id: 4,
      name: "jacket",
      price: "180$",
      color: "red",
      description: "this is coat",
      quantity: 1,
    },
    {
      id: 5,
      name: "Shawl",
      price: "180$",
      color: "red",
      description: "this is coat",
      quantity: 1,
    },
  ]);

  const deleteHandler = (id) => {
    const filtredProduct = products.filter((product) => {
      return product.id !== id;
    });
    setProducts(filtredProduct);
  };

  const incrementHandler = (id) => {
    const index = products.findIndex((product) => product.id === id);
    const product = products[index];
    product.quantity++;
    const productsArr = [...products];
    productsArr[index] = product;
    setProducts(productsArr);
  };

  const decrementHandler = (id) => {
    const index = products.findIndex((product) => product.id === id);
    const product = products[index];
    if (product.quantity !== 1) {
      product.quantity--;
      const productsArr = [...products];
      productsArr[index] = product;
      setProducts(productsArr);
    } else {
      deleteHandler(id);
    }
  };

  return (
    <Count />
    // <RandomProvider>
    //   <RandomOne />
    // </RandomProvider>
    // <div className="container-fluid">
    //   <div className="card m-5">
    //     <div className="card-header">
    //       <ProductHeader count={products.length} />
    //     </div>
    //     <div className="card-body">
    //       <ProductList
    //         products={products}
    //         onDelete={deleteHandler}
    //         onIncrement={incrementHandler}
    //         onDecrement={decrementHandler}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default App;
