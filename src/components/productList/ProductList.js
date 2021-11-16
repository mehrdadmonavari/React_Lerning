import Product from "../product/Product";
import {
  useProducts,
  useProductsActions,
} from "../productsProvider/ProductsProvider";

const ProductList = () => {

  /**
   * Get Products
   * Get Dispatch Method Of Products
   */

  const products = useProducts();
  const dispatch = useProductsActions();

  /** Return Conponent */

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
