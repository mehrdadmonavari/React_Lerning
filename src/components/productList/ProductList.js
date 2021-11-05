import Product from "../product/Product";

const ProductList = (props) => {
    return ( 
        <div className="py-1 px-1">
            {props.products.map((product, index) => {
                return <Product key={product.id} product={product} index={index} onDelete={props.onDelete} />
            })}
        </div>
     );
}
 
export default ProductList;