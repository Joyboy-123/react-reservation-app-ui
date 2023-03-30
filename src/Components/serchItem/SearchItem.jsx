import React from "react";
import { useNavigate } from "react-router-dom";
import "./SearchItem.css";

const SearchItem = () => {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/hotels/123");
  };
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRatting">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailText">
          <span className="siPrice">₹1234</span>
          <span className="siTaxOp">Include Taxes and fees</span>
          <button className="siCheckButton" onClick={handleSearch}>
            See Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
