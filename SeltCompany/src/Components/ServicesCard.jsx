import React from "react";
import "../Styles/services.css";

const ServicesCard = ({ services }) => {
      return (
            <div className="card_services">
                  <img src="" alt="" />
                  <h2>{services.title}</h2>
                  <p>{services.description}</p>
            </div>
      );
};

export default ServicesCard;
