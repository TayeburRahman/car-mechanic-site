import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  // const {service} = props;
  const { id, name, price, description, img } = service;
  return (
    <div className="service m-2 p-2 pb-3">
      <img src={img} alt="" width="70%" />
      <h3>{name}</h3>
      <h5>Price: {price}</h5>
      <p className="px-3">{description}</p>
      <Link to={`booking/${id}`}>
        <button className="btn btn-success ps-3 pe-3">
          Book {name.toLowerCase()}
        </button>
      </Link>
    </div>
  );
};

export default Service;
