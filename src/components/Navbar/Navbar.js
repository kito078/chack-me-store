import React, { useState, useEffect, useContext } from "react";
import { FaHeart, FaBars, FaTimes } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { GiFlatTire } from "react-icons/gi";
import { FaCanadianMapleLeaf } from "react-icons/fa";

import "./Navbar.css";
import { Link } from "react-router-dom";
import CartContext from "../../store/cart-context";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const cartCtx = useContext(CartContext);

  const numberOfItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <nav className={` navbar ${isSticky ? "sticky" : ""}`}>
      <div className="nav-container ">
        <Link to="/" className="my-link">
          <div className="ms-4  ms-lg-5 ps-lg-5">
            <a href="/" className="brand-name ms-5 ms-md-2">
              <h5 className=" d-flex">
                <span className="footer-brand  me-1 d-md-none">
                  <FaCanadianMapleLeaf />
                </span>
                <span className="brand-chake mb-3 mb-md-2">Shop</span>
                <span className="brand-store ">Store</span>
              </h5>
            </a>
          </div>
        </Link>

        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" className="my-link">
                {" "}
                Home
              </Link>
            </li>

            <li className="last-link">
              <Link className="my-link">Shop</Link>
            </li>
            <li className="last-link">
              <Link to="/about" className="my-link">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="icons ">
          <Link to="/cart" className="my-link-2">
            <span className="icon-container">
              <span className="icon-num">{numberOfItems}</span>
              <BsCart3 />
            </span>
          </Link>

          <Link className="my-link-2 me-lg-5 pe-lg-5 ">
            <span className="icon-container icon-nav">
              <span className="icon-num">0</span>
              <FiHeart />
            </span>
          </Link>

          <div className="toggler " onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// import { useContext, useState } from "react";
// import "./Navbar.css";
// import { Button } from "reactstrap";
// import { FaCanadianMapleLeaf } from "react-icons/fa";
// import { BsCartPlusFill } from "react-icons/bs";
// import CartContext from "../../store/cart-context";
// import { Link } from "react-router-dom";

// export default function Navbar(props) {
//   const [isNavExpanded, setIsNavExpanded] = useState(false);

//   const cartCtx = useContext(CartContext);

//   const productsCount = cartCtx.items.reduce((curNumber, item) => {
//     return curNumber + item.amount;
//   }, 0);

//   console.log(productsCount);
//   return (
//     <div className="nav-container">
//       <nav className="container navigation">
//         <a href="/" className="brand-name ms-5 ms-md-2">
//           <h5 className="mb-4 d-flex">
//             <span className="footer-brand me-1">
//               <FaCanadianMapleLeaf />
//             </span>
//             <span className="brand-chake mt-3">Shop</span>
//             <span className="brand-store mt-3">Store</span>
//           </h5>
//         </a>
//         <button
//           className="hamburger"
//           onClick={() => {
//             setIsNavExpanded(!isNavExpanded);
//           }}
//         >
//           {/* icon from Heroicons.com */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             viewBox="0 0 20 20"
//             fill="white"
//           >
//             <path
//               fillRule="evenodd"
//               d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </button>
//         <div
//           className={
//             isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
//           }
//         >
//           <ul>
//             <li>
//               <a href="/home">Home</a>
//             </li>
//             <Link to="/cart">
//               <li className="cart__nav mb-4 mb-md-0" onClick={props.onShowCart}>
//                 <span className="pb-5">
//                   Cart
//                   <BsCartPlusFill />
//                 </span>{" "}
//                 {productsCount}
//               </li>
//             </Link>

//             <li>
//               <a href="/contact">Contact</a>
//             </li>
//           </ul>
//         </div>
//         <div></div>
//       </nav>
//     </div>
//   );
// }
