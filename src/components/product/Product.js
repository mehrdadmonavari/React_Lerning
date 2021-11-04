function Product(props) {
  return (
    <div>
      <h3>
        {props.name} #{props.index}
        <span>
          <button onClick={() => props.onAddOne(props.id)}>addOne</button>
        </span>
      </h3>
      <div>color : {props.color}</div>
      <div>description : {props.description}</div>
    </div>
  );
}

export default Product;
