import styles from "./Product.css"

const Product = (props) => {
    const {id, name, price, color, description} = props.product;

    return ( 
        <div className="d-flex justify-content-start align-items-center text-center p-4 my-3">
            <h4 className="mx-3">{name}</h4>
            <div className="mx-3">price: {price}</div>
            <div className="mx-3">color: {color}</div>
            <div className="mx-3">color: {description}</div>
        </div>
     );
}
 
export default Product;