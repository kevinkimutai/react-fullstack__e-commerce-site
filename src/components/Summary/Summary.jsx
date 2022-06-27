import React from "react";

import "./Summary.css";

import {
  MdOutlineDeliveryDining,
  MdRepeat,
  MdOutlineShield,
  MdPhone,
} from "react-icons/md";

const summaryData = [
  {
    summary: "Free shipping",
    icon: <MdOutlineDeliveryDining />,
    summaryText: "lorem ipsum dole restra hasdoi",
  },
  {
    summary: "Easy Returns",
    icon: <MdRepeat />,
    summaryText: "lorem ipsum dole restra hasdoi",
  },
  {
    summary: "24/7 support",
    icon: <MdPhone />,
    summaryText: "lorem ipsum dole restra hasdoi",
  },
  {
    summary: "100% Secure and Safe",
    icon: <MdOutlineShield />,
    summaryText: "lorem ipsum dole restra hasdoi",
  },
];

const Summary = () => {
  return (
    <div className="summary-container">
      {summaryData.map((data) => (
        <div className="summary">
          <MdOutlineDeliveryDining className="summary__icon" />
          <div>
            <h2>100% Secure and Safe</h2>
            <p>lorem ipsum dole restra hasdoi</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Summary;
