import React from "react";
import Button from "../UI/Button/Button";

import "./ProductPreview.css";

const ProductPreview = () => {
  return (
    <div className="product-preview">
      <div className="preview">
        <div className="preview__content">
          <h3># New Collection</h3>
          <h2>V8 Smart watch</h2>
          <Button>Buy Now</Button>
        </div>
        <div className="preview__hero">
          <img
            src="https://m.media-amazon.com/images/I/41jPj8Yn5wS._AC_SY580_.jpg"
            alt="smart watch"
          />
        </div>
      </div>
      <div className="preview">
        <div className="preview__content">
          <h3># New Collection</h3>
          <h2>VR Goggles</h2>
          <Button>Buy Now</Button>
        </div>
        <div className="preview__hero">
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/756866f0-25e4-4b5d-8b7c-546c2111da69_600x.png?v=1625045615"
            alt="smart watch"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
