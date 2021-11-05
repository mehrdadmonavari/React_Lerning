import Product from "../product/Product";

const ProductList = (props) => {
    return ( 
        <div className="py-1 px-1">
            {props.products.map((product, index) => {
                return product.quantity !== 0 && <Product key={product.id} product={product} index={index} onDelete={props.onDelete} onIncrement={props.onIncrement} onDecrement={props.onDecrement} />
            })}
        </div>
     );
}
 
export default ProductList;