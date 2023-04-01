import { useContext, useState } from "react";
import "./Navbar.css";
import { Button } from "reactstrap";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsCartPlusFill } from "react-icons/bs";
import { CartContext } from "../../cart-context";

export default function Navbar(props) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const cart = useContext(CartContext);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <div className="nav-container">
      <nav className="container navigation">
        <a href="/" className="brand-name ms-5">
          <h5 className="mb-4 d-flex">
            <span className="footer-brand me-1">
              <BsFillMoonStarsFill />
            </span>
            <span className="brand-chake mt-3">Chake</span>
            <span className="brand-store mt-3">Store</span>
          </h5>
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from Heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <Button
                className="btn--nav mb-4 mb-md-0"
                onClick={props.onShowCart}
              >
                <span className="pb-5">
                  <BsCartPlusFill />
                </span>{" "}
                {productsCount} (items)
              </Button>
            </li>
          </ul>
        </div>
        <div></div>
      </nav>
    </div>
  );
}

// import { useState } from "react";
// import "./Navbar.css";
// import { BsCartPlusFill } from "react-icons/bs";
// import { IoIosHeartEmpty } from "react-icons/io";
// import { Button, Row, Col } from "reactstrap";

// export default function Navbar(props) {
//   const [isNavExpanded, setIsNavExpanded] = useState(false);

//   return (
//     <nav className="container navigation">
//       <div>
//         <a href="/" className="brand-name">
//           chackStore
//         </a>
//       </div>
//       <div>
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
//       </div>
//       <div>
//         <div
//           className={
//             isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
//           }
//         >
//           <ul>
//             <li>
//               <a href="/home">Home</a>
//             </li>
//             <li>
//               <a href="/about">About</a>
//             </li>
//             <li>
//               <a href="/contact">Contact</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       {/* <div>
//         <ul className="nav-icons">
//           <li className="nav-list">
//             <IoIosHeartEmpty />
//             <div className="nav-continer">
//               <span>3</span>
//             </div>
//           </li>
//           <li className="nav-list">
//             <BsCartPlusFill />

//             <div className="nav-continer">
//               <span>3</span>
//             </div>
//           </li>
//           <Button
//             onClick={props.onShowCart}
//             className="btn-button rounded-pill px-5 py-2"
//             color="primary"
//           >
//             About Me
//           </Button>
//         </ul>
//       </div> */}
//     </nav>
//   );
// }
