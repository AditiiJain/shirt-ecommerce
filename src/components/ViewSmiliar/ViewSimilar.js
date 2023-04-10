import { useSelector } from "react-redux";
import "./ViewSimilar.css";
import React from "react";
import { ProductCard } from "../../index";


function ViewSimilar() {
  const products = useSelector((state) => state.productItems.productItems);
  console.log(products, "p");
  return (
    <div className="view-container">
      {products?.length &&
        products?.map((product) => {
          return <ProductCard key={product?.id} product={product} view={false}/>;
        })}
    </div>
  );
}

export default ViewSimilar;
