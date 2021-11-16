import { createContext, useReducer } from "react";
import { useContext } from "react/cjs/react.development";
import { productsData } from "../../db/ProductsData";

const initialState = productsData;

const reducer = (state, action) => {
  switch (action.type) {
    //
    /** increment action */

    case "increment": {
      const index = state.findIndex((product) => product.id === action.id);
      const product = { ...state[index] };
      product.quantity++;
      const products = [...state];
      products[index] = product;
      return products;
    }

    /** decrement action */

    case "decrement": {
      const index = state.findIndex((product) => product.id === action.id);
      const product = { ...state[index] };
      if (product.quantity !== 1) {
        product.quantity--;
        const products = [...state];
        products[index] = product;
        return products;
      } else {
        const filtredProduct = state.filter((product) => {
          return product.id !== action.id;
        });
        return filtredProduct;
      }
    }

    /** delete action */

    case "delete": {
      const filtredProduct = state.filter((product) => {
        return product.id !== action.id;
      });
      return filtredProduct;
    }

    /** filter action */

    case "filter": {
      if (action.event.target.value === "All") {
        return initialState;
      } else {
        const filtredProducts = initialState.filter((product) => {
          return (
            product.size.indexOf(action.event.target.value) >= 0 && product
          );
        });
        return filtredProducts;
      }
    }

    /** default action */

    default:
      return state;
  }
};

const ProductsContext = createContext();

const ProductsContextDispatcher = createContext();

const ProductsProvider = ({ children }) => {
  const [products, productsDispatch] = useReducer(reducer, initialState);

  return (
    <ProductsContext.Provider value={products}>
      <ProductsContextDispatcher.Provider value={productsDispatch}>
        {children}
      </ProductsContextDispatcher.Provider>
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => {
  return useContext(ProductsContext);
};

export const useProductsActions = () => {
  return useContext(ProductsContextDispatcher);
};
