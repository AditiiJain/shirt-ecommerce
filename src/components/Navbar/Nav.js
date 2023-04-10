import Logo from "../../img/logo.png";
import Avatar from "../../img/avatar.png";
import { motion } from "framer-motion";
import { MdAdd, MdLogout } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";

import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";
import { app } from "../../firebase.config";
import { SET_USER } from "../../redux/userSlice";
import { useSelector } from "react-redux";
import { SET_SIDE_SLIDER_SHOW } from "../../redux/sideSliderShowSlice";
import "./Nav.css";

const Nav = () => {
  const [isMenu, setIsMenu] = useState(false);
  const user = useSelector((state) => state.user.user);
  const sideSliderShow = useSelector(
    (state) => state.sideSliderShow.sideSliderShow
  );
  
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const showSideSlider = (type) => {
    const payload = {
      show: !sideSliderShow,
      type: type,
    };
    dispatch(SET_SIDE_SLIDER_SHOW(payload));
  };
  async function login() {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      console.log(providerData?.[0]);
      dispatch(SET_USER(providerData[0]));
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } //if already user is there then, menu should be displayed
    else {
      setIsMenu((prev) => !prev);
    }
  }

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();
    dispatch(SET_USER(null));
  };

  return (
    <>
      <header className="header-container">
        {/* desktop and tablet */}
        <div className="header-desktop-container">
          <div className="logo-search-parent">
            <Link to="/">
              <div className="logo-container">
                <img src={Logo} alt="logo" className="logo " />
              </div>
            </Link>
          </div>

          <div className="cart-wishlist-avatar-container ">
            <div className="icon-container">
              <AiOutlineHeart
                className="icon"
                onClick={() => showSideSlider("wishlist")}
              />
            </div>
            <div className="icon-container">
              <HiOutlineShoppingBag
                className="icon"
                onClick={() => showSideSlider("cart")}
              />
              {/* {cartItems && cartItems.length > 0 && (
                <div className="w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center absolute -top-2 left-5">
                  <p className="text-xs text-white font-semibold">
                    {cartItems.length}
                  </p>
                </div>
              )} */}
            </div>

            <div className="relative">
              <div className="avatar" onClick={() => login()}>
                <motion.img
                  whileTap={{ scale: 0.6 }}
                  className="avatar-img"
                  src={user ? user.photoURL : Avatar}
                  alt="user profile"
                />
              </div>
              {isMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  className=" w-40 bg-gray-50  top-12 right-0 shadow-xl rounded-lg absolute flex flex-col"
                >
                  <p
                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                    onClick={() => logout()}
                  >
                    Logout
                    <MdLogout />
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* mobile */}
        {/* <div className="flex items-center justify-between md:hidden w-full h-full">
          <div className="flex items-center justify-center relative">
            <MdShoppingBasket
              className="text-textColor text-2xl cursor-pointer"
              onClick={() => showCart()}
            />
            {cartItems && cartItems.length > 0 && (
              <div className="w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center absolute -top-2 left-5">
                <p className="text-xs text-white font-semibold">
                  {cartItems.length}
                </p>
              </div>
            )}
          </div>

          <Link to="/">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="logo" className="w-8 object-cover" />
              <p className="text-headingColor text-xl font-bold">City</p>
            </div>
          </Link>

          <div className="relative">
            <div
              className="w-10 h-10 min-w-[40px] min-h-[40px] drop-shadow-2xl cursor-pointer  rounded-full"
              onClick={() => login()}
            >
              <motion.img
                whileTap={{ scale: 0.6 }}
                className="h-full w-full rounded-full"
                src={user ? user.photoURL : Avatar}
                alt="user profile"
              />
            </div>
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50  top-12 right-0 shadow-xl rounded-lg absolute flex flex-col"
              >
                {user && user.email === "iaditi.jain08@gmail.com" && (
                  <Link to="createItem">
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base hover:rounded-tr-md hover:rounded-tl-md "
                      onClick={() => {
                        setIsMenu(false);
                      }}
                    >
                      New Item
                      <MdAdd />
                    </p>
                  </Link>
                )}

                <ul className="flex flex-col">
                  <li
                    className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100  px-4 py-2"
                    onClick={() => {
                      setIsMenu(false);
                    }}
                  >
                    Home
                  </li>
                  <li
                    className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100  px-4 py-2"
                    onClick={() => {
                      setIsMenu(false);
                    }}
                  >
                    Menu
                  </li>
                  <li
                    className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100  px-4 py-2"
                    onClick={() => {
                      setIsMenu(false);
                    }}
                  >
                    About
                  </li>
                  <li
                    className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100  px-4 py-2"
                    onClick={() => {
                      setIsMenu(false);
                    }}
                  >
                    Service
                  </li>
                </ul>

                <p
                  className="m-2 p-2 rounded-md flex items-center gap-3 cursor-pointer hover:bg-gray-300 hover:rounded-br-md hover:rounded-bl-md transition-all duration-100 ease-in-out text-textColor text-base bg-gray-200 justify-center shadow-md"
                  onClick={() => logout()}
                >
                  Logout
                  <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div> */}
      </header>
    </>
  );
};

export default Nav;
