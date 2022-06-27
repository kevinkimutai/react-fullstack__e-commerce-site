import React from "react";

import { MdKeyboardArrowRight } from "react-icons/md";

import "./Row.css";

const rowsExample = [
  {
    id: 1,
    imgSrc:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/756866f0-25e4-4b5d-8b7c-546c2111da69_600x.png?v=1625045615",

    name: "WXM4 Sony Headphones",
    price: 15000,
  },
  {
    id: 1,
    imgSrc:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/756866f0-25e4-4b5d-8b7c-546c2111da69_600x.png?v=1625045615",

    name: "WXM4 Sony Headphones",
    price: 15000,
  },
  {
    id: 1,
    imgSrc:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/756866f0-25e4-4b5d-8b7c-546c2111da69_600x.png?v=1625045615",

    name: "WXM4 Sony Headphones",
    price: 15000,
  },
  {
    id: 1,
    imgSrc:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/756866f0-25e4-4b5d-8b7c-546c2111da69_600x.png?v=1625045615",

    name: "WXM4 Sony Headphones",
    price: 15000,
  },
  {
    id: 1,
    imgSrc:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/756866f0-25e4-4b5d-8b7c-546c2111da69_600x.png?v=1625045615",

    name: "WXM4 Sony Headphones",
    price: 15000,
  },
  {
    id: 1,
    imgSrc:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/756866f0-25e4-4b5d-8b7c-546c2111da69_600x.png?v=1625045615",

    name: "WXM4 Sony Headphones",
    price: 15000,
  },
  {
    id: 1,
    imgSrc:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/756866f0-25e4-4b5d-8b7c-546c2111da69_600x.png?v=1625045615",

    name: "WXM4 Sony Headphones",
    price: 15000,
  },
];

const Row = ({ category }) => {
  return (
    <div className="row">
      <div className="row-header">
        <h3>{category}</h3>
        <div>
          See All <MdKeyboardArrowRight className="row-icon" />
        </div>
      </div>
      <div className="rows-container">
        {rowsExample.map((data) => (
          <div className="rows-item">
            <img src={data.imgSrc} alt="product" />
            <h2 className="row-item__name">{data.name}</h2>
            <h3 className="row-item__price">
              <span>Kshs</span>
              {data.price}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
