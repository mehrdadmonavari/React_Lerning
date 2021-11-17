import { useState } from "react";
import { useProductsActions } from "../productsProvider/ProductsProvider";

const ProductsFilter = () => {
  //.

  const [filterValue, setFilterValue] = useState("");

  const [sortValue, setSortValue] = useState("");

  /** Get Dipatch Method Of Products */

  const productsDispatch = useProductsActions();

  /** Filter Handler */

  const filterHandler = (e) => {
    setFilterValue(e.target.value);
    productsDispatch({ type: "filter", event: e });
  };

  const sortHandler = (e) => {
    setSortValue(e.target.value);
    productsDispatch({ type: "sort", event: e });
  }

  /** Return Component */

  return (
    <div className="form-group row">
      <div className="form-group col-md-3 ml-3 mt-1">
        <lebel>Order By</lebel>
        <select
          className="form-control mt-1"
          value={filterValue}
          onChange={(e) => filterHandler(e)}
        >
          <option value="All" selected>All</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
      <div className="form-group col-md-3 ml-3 mt-1">
        <lebel>Sort By</lebel>
        <select
          className="form-control mt-1"
          value={sortValue}
          onChange={(e) => sortHandler(e)}
        >
          <option value="Highest">Highest</option>
          <option value="Lowest">Lowest</option>
        </select>
      </div>
    </div>
  );
};

export default ProductsFilter;
