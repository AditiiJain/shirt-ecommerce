import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useSpecificProduct = (shirtId) => {
  const [specificProductData, setSpecificProductData] = useState(null);
  const productItems = useSelector(
    (state) => state?.productItems?.productItems
  );

  async function getSpecificProductInfo() {
    const data = productItems?.filter((product) => product?.id == shirtId);
    setSpecificProductData(data);
  }

  useEffect(() => {
    getSpecificProductInfo(shirtId);
  }, [productItems]);
  return specificProductData;
};
export default useSpecificProduct;
