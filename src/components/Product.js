import React from "react";

export default function Product(props) {
  const { product, onAdd, onRemove } = props;
  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>#{product.price}</div>
      <div>
        <div className="col">
          <button className="cart" onClick={() => onAdd(product)}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
