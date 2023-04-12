import "./ProductCard.css";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCardText } from "react-icons/bs";

import { useWishlist } from "../../utils/useWishlist";
import { useShowSideSlider } from "../../utils/useShowSideSlider";

const ProductCard = ({ product, view }) => {
  const { addToWishlist } = useWishlist();
  const { showSideSlider } = useShowSideSlider();

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
                onClick={(e) => {
                  e.preventDefault();

                  addToWishlist(product);
                  showSideSlider("wishlist");
                }}
              />
            </div>
            {view && (
              <div
                className="view-similar-container"
                onClick={(e) => {
                  e.preventDefault();
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
