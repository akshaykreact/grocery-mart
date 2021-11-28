import React from "react";

export default function Product(props){
  const {product,onAdd} = props;
    return (
        <div>
            <img className="small" src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <div> <span class="WebRupee">&#x20B9;</span>{product.price}</div>
            <div>
                <button onClick={() => onAdd(product)}>Add To Cart</button>
            </div>
        </div>
    );
}