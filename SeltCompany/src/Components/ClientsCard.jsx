import React from "react";
import "../Styles/about.css";

const ClientsCard = ({ clients }) => {
      return (
            <div className="clients_card">
                  <img src={clients.img} alt={clients.img} />
                  <div className="cards_text">
                        <h2>{clients.title}</h2>
                        <p>{clients.description}</p>
                  </div>
            </div>
      );
};

export default ClientsCard;
