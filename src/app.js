import ProductList from "./components/productList/ProductList";
import ProductHeader from "./components/productHeader/ProductHeader";
import ProductsProvider from "./components/productsProvider/ProductsProvider";
import styles from "./App.module.css";

const App = () => {
  return (
    <ProductsProvider>
      <div className="container-fluid">
        <div className="card m-5">
          <div className="card-header">
            <ProductHeader />
          </div>
          <div className="card-body">
            <ProductList />
          </div>
        </div>
      </div>
    </ProductsProvider>
  );
};

export default App;
