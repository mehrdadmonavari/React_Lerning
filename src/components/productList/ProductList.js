import React, { Component } from 'react';
import Product from "../product/Product";

function ProductList(props) {
  return (
    <div>
      {props.products.map((p, i) => {
        return (
          <Product
            key={p.id}
            name={p.name}
            color={p.color}
            description={p.description}
            index={i}
            id={p.id}
            onAddOne={p.onAddOne()}
            // onAddTwo={p.onAddTwo()}
            // onAddTree={p.onAddTree()}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
