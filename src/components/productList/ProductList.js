import Product from "../product/Product";
import {
  useProducts,
  useProductsActions,
} from "../productsProvider/ProductsProvider";

const ProductList = () => {
    
  const products = useProducts();
  const dispatch = useProductsActions();

  return (
    <div className="py-1 px-1">
      {products.map((product, index) => {
        return (
          product.quantity !== 0 && (
            <Product
              key={product.id}
              product={product}
              index={index}
              onDelete={() => dispatch({ type: "delete", id: product.id })}
              onIncrement={() =>
                dispatch({ type: "increment", id: product.id })
              }
              onDecrement={() =>
                dispatch({ type: "decrement", id: product.id })
              }
            />
          )
        );
      })}
    </div>
  );
};

export default ProductList;
