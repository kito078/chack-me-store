// import React, { useRef, useState } from "react";
// import "./ProductItemForm.css";
// import { Button, Row, Col, Input } from "reactstrap";

// function ProductItemForm(props) {
//   const [isAmountValid, setIsAmountValid] = useState(true);
//   const inputRef = useRef();

//   const submitHandler = (event) => {
//     event.preventDefault();

//     const enteredAmount = inputRef.current.value;
//     console.log(enteredAmount);
//     const enteredAmountNumber = +enteredAmount;

//     if (
//       enteredAmount.trim().length === 0 ||
//       enteredAmountNumber < 1 ||
//       enteredAmountNumber > 5
//     ) {
//       setIsAmountValid(false);
//       return;
//     }
//     // console.log(enteredAmountNumber);
//     props.onAddToCart(enteredAmountNumber);
//   };

//   return (
//     <form className="productForm" onSubmit={submitHandler}>
//       <Row>
//         <Col>
//           <input
//             ref={inputRef}
//             type="number"
//             min={1}
//             max={5}
//             defaultValue={1}
//           />
//         </Col>
//         <Col>
//           <Button className="rounded-pill px-4 py-2" color="primary" outline>
//             primary
//           </Button>
//           {!isAmountValid && <p>amount should be not be less than (1or5)</p>}
//         </Col>
//       </Row>
//     </form>
//   );
// }

// export default ProductItemForm;
