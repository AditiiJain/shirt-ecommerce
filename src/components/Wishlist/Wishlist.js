import React from "react";
import NotFound from "../../img/NotFound.svg";
import { WishlistCard } from "../../index";
import "./Wishlist.css";
import { useWishlist } from "../../utils/useWishlist";

function Wishlist() {
  const { wishlist } = useWishlist();

  return (
    <>
      <div className="wishlist-container">
        {wishlist.length != 0 && wishlist.map((item) => {
            return <WishlistCard key={item?.id} item={item} />;
          })}
      </div>
      {wishlist.length == 0 && (
        <div className="nothing-added-wishlist">
          <img src={NotFound} alt="Not found" />
          <p>Add items to the Wishlist</p>
        </div>
      )}
    </>
  );
}

export default Wishlist;
