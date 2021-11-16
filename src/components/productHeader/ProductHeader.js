import { useProducts } from "../productsProvider/ProductsProvider";

const ProductHeader = (props) => {

  const products = useProducts()

  return (
    <div>
      <h2 className="card-title">Product List</h2>
      <h6 className="card-subtitle mt-1">number of products: <span>{products.length}</span></h6>
    </div>
  );
};

export default ProductHeader;
