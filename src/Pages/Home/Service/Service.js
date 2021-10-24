import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";
import { BsFillCartPlusFill } from "react-icons/bs";

 
const Service = (props) => {
  // const {service} = props;
  const { id, name, price, description, img } = props.service;
  return (
    <div className="service m-2 p-2 pb-3">
      <img src={img} alt="" width="70%" />
      <h3>{name}</h3>
      <h5>Price: {price}</h5>
      <p className="px-3">{description}</p>
      <button 
      // onClick={() => props.hendlAddToCart(props.service)}
      className="btn btn-danger m-2"><BsFillCartPlusFill /> add cart</button>
      <Link to={`booking/${id}`}>
        <button className="btn btn-success ps-3 pe-3">
          Book {name.toLowerCase()}
        </button>
      </Link>
    </div>
  );
};

export default Service;
