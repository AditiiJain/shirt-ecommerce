import React from "react";
import { useSelector } from "react-redux";
import { WishlistCard } from "../../index";
import "./Wishlist.css";

function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  return (
    <div className="wishlist-container">
      {wishlist.length ? (
        wishlist.map((item) => {
          return <WishlistCard key={item?.id} item={item} />;
        })
      ) : (
        <div className="nothing-added-wishlist">Nothing added to wishlist</div>
      )}
    </div>
  );
}

export default Wishlist;
