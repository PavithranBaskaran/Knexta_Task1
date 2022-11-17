import React from "react";
import "../CSS/second.css";
import { secondData } from "../data";

function Second() {
  return (
    <>
      <div className="second-wrapper">
        <div className="second-top">
          <div className="second-top-left">
            <h3>
              BASIC/DEPT® is a global branding and digital design agency
              building products, services, and eCommerce experiences that turn
              cultural values into company value.
            </h3>
            <button>SEE THE WORK</button>
          </div>
          <div className="second-top-right">
            <div>B/D®</div>
          </div>
        </div>
        <div className="second-bottom">
          <div className="second-bottom-img-wrapper">
            {secondData.map((item) => {
              return (
                <div className="img-container">
                  {item.isVideo ? (
                    <video  autoplay>
                      <source src={item.src} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={`${item.src}`} />
                  )}

                  <h3>{item.heading}</h3>
                  <p>{item.subHead}</p>
                </div>
              );
            })}
          </div>
          {/* <hr className="line"/> */}
        </div>
        
      </div>
    </>
  );
}

export default Second;
