/* eslint-disable react/jsx-pascal-case */
import React from "react";
import "./Speciel_section.css";
import img from "../../../img/pexels-yuri-manei-2272854.jpg";
import icon_bar from "../../../image/title_separate.png";
import Blue_spase_data from "../Blue_Spase/Blue_spase_data";
const Special_Section = () => {
  return (
    <div className="Speciel_section">
      <div className="container mt-5 ">
        <div className="text-center mb-5">
          <h2 className="text-dark">
            ALL <span className="theme-color">Nancy </span> Chair{" "}
          </h2>
          <img src={icon_bar} alt="" />
          <h4 className="w-75 m-auto text-dark">
          Some common types of table are the dining room table, which is used for seated persons to eat meals; the coffee table, which is a low table used in living rooms to display items or serve refreshments; and the bedside table, which is used to place an alarm clock and a lamp. There are also a range of specialized types of tables, such as drafting tables, used for doing architectural drawings, and sewing tables.
          </h4>
        </div>

        <div className="row mt-5 pt-5">
          <div className="col-md-6 ">
            <div className="wrap">
              <h2 className=" text-dark pb-4">
                Easy To Find <span className="theme-color">Quality</span>{" "}
                Eyeglasses{" "}
              </h2>
              <p className=" text-dark">
                {" "}
                For our business customers, IKEA offers products tested for commercial use. Check the “Product Information” tab.
              </p>

              <div className="mt-3">
                <ul>
                  <li className="text-dark">
                  Need a bigger dining table for extra guests? Try adding a smaller table to your usual table. When it's not on temporary dining duty, it can serve as somewhere to work or as a sideboard.
                  </li>
                  <li className="text-dark">
                  That’s why we have a wide variety of designs for you. From drop-leaf tables to extendable ones, wall mounted to gateleg, to everything you need to fit both guests and gourmet dishes.
                  </li>
                  <li className="text-dark">
                  Long and cozy breakfasts with freshly baked bread after a late sleep in. Hearty Sunday roasts with friends and family. Yummy weekend brunches with scrambled eggs, bacon and scones. Dining room tables are at the heart of it all. So, you’ll want to choose one that can handle the pressure.
                  </li>
                </ul>
              </div>
              <button className="btn btn-primary mt-2">
                More Info!
              </button>
            </div>
          </div>

          <div className="col-md-6">
            <div className="img">
              <img className="img-fluid" src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special_Section;
