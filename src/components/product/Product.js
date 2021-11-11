import styles from "./Product.module.css";
import { BiTrash } from "react-icons/bi";
import { useContext, useEffect } from "react";

const Product = (props) => {
  const { id, name, price, color, description, quantity } = props.product;
  const decrementView = () => {
    return <span>{quantity === 1 ? <BiTrash className="mb-1" /> : "-"}</span>;
  };

  useEffect(() => {
    console.log("use Effect");
    return () => {
      console.log("unmount use Effects");
    };
  }, []);

  return (
    <div className="d-flex justify-content-between p-3 my-2 border rounded-lg">
      <div
        className={
          styles.vertical +
          " d-flex justify-content-between align-items-center text-center"
        }
      >
        <div className={styles.f_16 + " font-weight-bold"}>{props.index} .</div>
        <h5 className="my-0 ml-3 mr-4">{name}</h5>
        <div className="mx-3">price: {price}</div>
        <div className="mx-3">color: {color}</div>
        <div className="mx-3">description: {description}</div>
      </div>
      <div className="d-flex justify-content-end align-items-center">
        <span className="badge badge-pill badge-secondary mx-3 py-2 px-2">
          {quantity}
        </span>
        <button
          className="btn btn-outline-info font-weight-bold mx-1"
          onClick={() => props.onIncrement(id)}
        >
          +
        </button>
        <button
          className={
            "btn " +
            (quantity === 1 ? "btn-outline-danger" : "btn-outline-info px-3") +
            " mx-1 font-weight-bold"
          }
          onClick={() => props.onDecrement(id)}
        >
          {decrementView()}
        </button>
        <button
          className="btn btn-outline-danger mx-1"
          onClick={() => props.onDelete(id)}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Product;
