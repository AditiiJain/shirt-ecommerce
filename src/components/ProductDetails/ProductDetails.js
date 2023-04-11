import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
// import { Error } from "../../index";
import { BsHandbagFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdListBox } from "react-icons/io";
// import Loader from "../../img/loader.gif";
import useSpecificProduct from "../../utils/useSpecificProduct";
import { useState } from "react";
import { ZoomModal } from "../../index";
import { useDispatch, useSelector } from "react-redux";
import { SET_CART_ITEMS } from "../../redux/cartItemsSlice";
import { showSideSlider, addToWishlist } from "../../utils/commonFunctions";

const ProductDetails = () => {
  const [selectSize, setSelectSize] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const { shirtId } = useParams();
  const productData = useSpecificProduct(shirtId);
 
  const sideSliderShow = useSelector(
    (state) => state.sideSliderShow.sideSliderShow
  );
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  console.log(wishlist,"product")
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const dispatch = useDispatch();

  const addToCart = (item) => {
    let temporary = {
      ...item[0],
      selectedSize: selectSize,
    };
    const temp = temporary;

    let arr = [...cartItems, temp];
    let newCart = [];

    for (let i = 0; i < arr.length; i++) {
      if (!newCart.includes(arr[i])) {
        newCart.push(arr[i]);
      }
    }
    // console.log(newWishlist);
    dispatch(SET_CART_ITEMS(newCart));
    localStorage.setItem("cartItems", JSON.stringify(newCart));
  };

  return (
    <>
      {!productData ? (
        <div className="loading">
          Loading...
          {/* <img src={Loader} alt="" /> */}
          </div>
        
      ) : (
        <>
          <div className="specific-product-page-container">
            <div className="specific-product-images-container">
              {productData?.[0].images.map((image, index) => (
                <div
                  key={image}
                  className="image-grid-col"
                  onClick={() => {
                    setIsOpenModal(true);
                    setSlideIndex(index);
                  }}
                >
                  <div className="image-grid-container">
                    <div
                      className="image-grid-image"
                      style={{ backgroundImage: `url(${image})` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="specific-product-details-container">
              <div className="specific-product-details-top">
                <p className="specific-product-details-brand">
                  {productData?.[0]?.brand}
                </p>
                <p className="specific-product-details-description">
                  {productData?.[0]?.longDescription}
                </p>
                <div className="specific-product-details-ratings">
                  <span className="">{productData?.[0]?.ratings}</span>
                  <span className="star-icon">
                    <BsStarFill />
                  </span>
                </div>
              </div>

              <div className="specific-product-details-middle">
                <p className="specific-product-details-price">
                  ₹{productData?.[0].price}
                </p>
                <p className="specific-product-details-tax">
                  inclusive of all taxes
                </p>

                <div className="specific-product-details-select-size">
                  <p className="specific-product-details-select-size-header">
                    SELECT SIZE
                  </p>
                  <div className="specific-product-details-size-buttons">
                    {productData?.[0]?.sizes?.map((size) => {
                      return (
                        <button
                          className={`size-button ${
                            selectSize == size ? "selected-size" : ""
                          }`}
                          key={size}
                          onClick={() => {
                            setSelectSize(size);
                          }}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="specific-product-details-bottom">
                <button
                  className={`specific-product-details-cart-btn ${
                    selectSize == "" ? "btn-disabled" : ""
                  }`}
                  onClick={() => {
                    addToCart(productData);
                  }}
                  disabled={selectSize == "" ? true : false}
                >
                  <span className="icon-btn">
                    <BsHandbagFill />
                  </span>
                  <span>ADD TO CART</span>
                </button>
                <div
                  className="specific-product-details-wishlist-btn"
                  onClick={() => {
                    addToWishlist(wishlist, dispatch, productData[0]);
                    showSideSlider(dispatch, sideSliderShow, "wishlist");
                  }}
                >
                  <span className="icon-btn">
                    <AiOutlineHeart />
                  </span>
                  <span>WISHLIST</span>
                </div>
              </div>
              <div className="bottom-border"></div>
              <div className="specific-product-details-detail">
                <h3>
                  <span>PRODUCT DETAILS</span>
                  {/* <span>
                    <IoMdListBox />
                  </span> */}
                </h3>
                <p> {productData?.[0]?.shirtDetails}</p>
              </div>
            </div>
          </div>
          {isOpenModal && (
            <ZoomModal
              slideIndex={slideIndex}
              images={productData?.[0]?.images}
              setIsOpenModal={setIsOpenModal}
            />
          )}
        </>
      )}
    </>
  );
};
export default ProductDetails;
