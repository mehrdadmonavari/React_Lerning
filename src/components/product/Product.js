import styles from "./Product.module.css";

const Product = (props) => {
  const { id, name, price, color, description } = props.product;
  return (
    <div className="d-flex justify-content-between p-3 my-2 border rounded-lg">
      <div className={styles.vertical + " d-flex justify-content-between align-items-center text-center"}>
        <div className={styles.f_16 + " font-weight-bold"}>{props.index} .</div>
        <h5 className="my-0 ml-3 mr-4">{name}</h5>
        <div className="mx-3">price: {price}</div>
        <div className="mx-3">color: {color}</div>
        <div className="mx-3">color: {description}</div>
      </div>
      <div className="d-flex justify-content-end align-items-center">
        <button className="btn btn-outline-info mx-1">+</button>
        <button className="btn btn-outline-info mx-1">-</button>
        <button className="btn btn-outline-danger mx-1" onClick={() => props.onDelete(id)}>delete</button>
      </div>
    </div>
  );
};

export default Product;
