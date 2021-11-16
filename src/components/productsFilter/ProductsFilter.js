import { useState } from "react";
import { useProductsActions } from "../productsProvider/ProductsProvider";

const ProductsFilter = () => {
  //.

  const [selectValue, setSelectValue] = useState("");

  /** Get Dipatch Method Of Products */

  const productsDispatch = useProductsActions();

  /** Filter Handler */

  const filterHandler = (e) => {
    setSelectValue(e.target.value);
    productsDispatch({ type: "filter", event: e });
  };

  /** Return Component */

  return (
    <div className="form-group row">
      <lebel className="ml-3 mt-1 col-md-1 text-center">Order By</lebel>
      <select
        className="form-control col-md-1"
        value={selectValue}
        onChange={(e) => filterHandler(e)}
      >
        <option value="All">All</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select>
    </div>
  );
};

export default ProductsFilter;
