import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3 className="productName">{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button className="productBtn" onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}
