import React from "react";
import "./PrincessCard.css";
import "../../princesses.json"

const PrincessCard = (props) => (
  <span className="clicked" onClick={() => props.markCard(props.pData.id)}>
    <div className="card card-base">
      <div className="img-container">
        <img
          alt="princess"
          src={props.pData.image}
        />
      </div>
      
    </div>
  </span>

);

export default PrincessCard;
