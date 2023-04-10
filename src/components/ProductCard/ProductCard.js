import "./ProductCard.css";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCardText } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { SET_WISHLIST } from "../../redux/wishlistSlice";
import { SET_SIDE_SLIDER_SHOW } from "../../redux/sideSliderShowSlice";

const ProductCard = ({ product, view }) => {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const dispatch = useDispatch();
  const sideSliderShow = useSelector(
    (state) => state.sideSliderShow.sideSliderShow
  );
  const showSideSlider = (type) => {
    const payload = {
      show: !sideSliderShow,
      type: type,
    };
    dispatch(SET_SIDE_SLIDER_SHOW(payload));
  };

  const addToWishlist = (item) => {
    let arr = [...wishlist, item];
    let newWishlist = [];

    for (let i = 0; i < arr.length; i++) {
      if (!newWishlist.includes(arr[i])) {
        newWishlist.push(arr[i]);
      }
    }
    dispatch(SET_WISHLIST(newWishlist));
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  };

  return (
    <>
      <Link to={`/shirt/${product?.id}`} className="product-link">
        <div className="product-card-container">
          <div className="product-card-top">
            <div className="product-image-container">
              <img src={product?.images[0]} alt="" className="product-image" />
            </div>
            <div className="wishlist-icon-container">
              <AiOutlineHeart
                className="wishlist-icon"
                onClick={() => addToWishlist(product)}
              />
            </div>
            {view && (
              <div
                className="view-similar-container"
                onClick={() => {
                  showSideSlider("viewSimilar");
                }}
              >
                <span>
                  <BsCardText />
                </span>
                <span>View Similar</span>
              </div>
            )}
          </div>

          <div className="product-card-bottom">
            <p className="product-card-brand">{product?.brand}</p>
            <p className="product-card-shortDescription">
              {product?.shortDescription}
            </p>
            <p className="product-card-price">Rs. {product?.price}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
