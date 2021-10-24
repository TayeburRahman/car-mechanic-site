import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../../Fakedb/Fackdb";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // // stp.4 add to data in a localStorage no.1
  // useEffect(() => {
  //   // product add localStorage
  //   if (services.length) {
  //     const savedCart = getStoredCart();
  //     const storedCart = [];
  //     for (const key in savedCart) {
  //       const addedProduct = services.find((product) => product.key === key);
  //       // prouduct count
  //       if (addedProduct) {
  //         const quantity = savedCart[key];
  //         addedProduct.quantity = quantity;

  //         storedCart.push(addedProduct);
  //       }
  //     }
  //     setCart(storedCart);
  //   }
  // }, [services]);

  // //stp.3> hendl add to cart buttos No.2 <3
  // const hendlAddToCart = (product) => {
  //   const exists = cart.find((pd) => pd.key === product.key);
  //   let newCart = [];
  //   if (exists) {
  //     const rest = cart.filter((pd) => pd.key !== product.key);
  //     exists.quantity = exists.quantity + 1;
  //     newCart = [...rest, product];
  //   } else {
  //     product.quantity = 1;
  //     newCart = [...cart, product];
  //   }
  //   setCart(newCart);
  //   addToDb(product.key);
  // };

  return (
    <div id="survices">
      <h2 className="text-primary mt-5 mb-4">Our services</h2>
      <div className="service-container">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
