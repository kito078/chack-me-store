import ImageOne from "../../images/s3.jpg";
import ImageTwo from "../../images/s4.jpg";
import ImageThree from "../../images/s2.jpg";
import ImageFour from "../../images/s1.jpg";
import ImageFive from "../../images/s5.jpg";

import { AiTwotoneStar } from "react-icons/ai";

export const PRODUCTS = [
  {
    id: 1,
    name: "Floral Print Buttoned",
    price: 23.44,
    title: "Dark Mouldin' Gel Wax With Coconut Oil 125Ml",
    description:
      "Firm Hold, Shine, Moisturizing & Conditioning. Also great for laying hairline",
    img: ImageOne,
    stars: <AiTwotoneStar />,
    bage: "NEW",
  },
  {
    id: 2,
    name: "Floral Print Buttoned",
    price: 23.44,
    title: "Sunlight Regular Degreasing Dishwashing Liquid Detergent",
    description:
      "A degreasing dishwashing liquid detergent with Triple Action Power for clean and fresh-smelling dishes.",
    img: ImageOne,
    stars: <AiTwotoneStar />,
    bage: "HOT",
    bage: "NEW",
  },
  {
    id: 3,
    name: "HANDY ANDY",
    price: 23.44,
    title: "Handy Andy Lemon Multipurpose Cleaning Cream 750ml",
    description:
      "A multipurpose cleaning cream with 100% natural cleaning particles to remove 100% of stubborn dirt and grease..",
    img: ImageThree,
    stars: <AiTwotoneStar />,
    bage: "NEW",
  },
  {
    id: 4,
    name: "Floral Print Buttoned",
    price: 23.44,
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea .",
    img: ImageTwo,
    stars: <AiTwotoneStar />,
    bage: "HOT",
  },
  {
    id: 5,
    name: "Floral Print Buttoned",
    price: 23.44,
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea .",
    img: ImageOne,
    stars: <AiTwotoneStar />,

    bage: "NEW",
  },
  {
    id: 6,
    name: "Floral Print Buttoned",
    price: 23.44,
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
    img: ImageThree,
    stars: <AiTwotoneStar />,
    bage: "HOT",
  },
  {
    id: 7,
    name: "Floral Print Buttoned",
    price: 23.44,
    title: "Lorem ipsum dolor",

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea .",
    img: ImageTwo,
    stars: <AiTwotoneStar />,
    bage: "HOT",
  },
  {
    id: 8,
    name: "Rush",
    price: 23.44,
    title: "Rush Methylated Spirits - 750ml",

    description: "Twice distilled from Pinot Noir grape pomace..",
    img: ImageOne,
    stars: <AiTwotoneStar />,
    bage: "NEW",
  },
];

function getProductData(id) {
  let productData = PRODUCTS.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("product data does not exist for ID" + id);
    return undefined;
  }

  return productData;
}

export { getProductData };
