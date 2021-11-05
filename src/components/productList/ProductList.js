import Product from "../product/Product";

const ProductList = (props) => {
    return ( 
        <div className="py-4 px-3">
            {props.products.map((product) => {
                return <Product key={product.id} product={product} />
            })}
        </div>
     );
}
 
export default ProductList;