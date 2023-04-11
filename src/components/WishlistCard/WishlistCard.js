import React from "react";
import "./WishlistCard.css";
import { TfiClose } from "react-icons/tfi";
import { useSelector, useDispatch } from "react-redux";
import { SET_WISHLIST } from "../../redux/wishlistSlice";
import { Link } from "react-router-dom";

function WishlistCard({ item }) {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const dispatch = useDispatch();
  const removeFromWishlist = () => {
    let newWishlist = wishlist.filter((product) => product.id !== item.id);
    console.log(newWishlist, "e");
    dispatch(SET_WISHLIST(newWishlist));
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  };
  return (
    <Link to={`/shirt/${item?.id}`} className="link">
      <div className="wishlist-card-container">
        <div className="wishlist-card-img-container">
          <img src={item?.images?.[0]} alt="shirt" />
          <div
            className="wishlist-remove"
            onClick={(e) => {
              // e.preventDefault();
              removeFromWishlist();
            }}
          >
            <TfiClose />
          </div>
        </div>
        <div className="wishlist-card-info">
          <p className="wishlist-card-brand">{item?.brand}</p>
          <p className="wishlist-card-price">₹{item?.price}</p>
        </div>
        {/* <button className="wishlist-card-add-to-cart">MOVE TO BAG</button> */}
      </div>
    </Link>
  );
}

export default WishlistCard;
