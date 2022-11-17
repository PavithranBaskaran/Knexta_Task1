import React from "react";
import "../CSS/feature.css";
import { featureData } from "../data";

function Feature() {
  return (
    <>
      <div className="feature-wrapper">
        <div className="feature-heading">
          <h3>FEATURED ENGAGEMENTS</h3>
        </div>
        <div className="feature-box-wrapper">
          {featureData.map((item) => {
            return (
              <div className="feature-container">
                <h3>{item.brand}</h3>
                <p>{item.tagLine}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Feature;
