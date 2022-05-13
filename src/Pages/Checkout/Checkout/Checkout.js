import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useServiceDetail from "../../../hooks/useServiceDetail";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);
  // const [user, setUser] = useState({
  //   name: "Jahangir Alam",
  //   email: "admin@mail.com",
  //   service: "Ecommerce",
  //   address: "Rabeya road gazipur Dhaka",
  //   phone: "01767275819",
  // });
  // const handleAddressChange = (event) => {
  //   console.log(event.target.value);
  //   const { address, ...rest } = user;
  //   const newAddress = event.target.value;
  //   const newUser = { address: newAddress, ...rest };
  //   setUser(newUser);
  //   console.log(newUser);
  // };
  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const order = {
      service: service.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    console.log(order);
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Please Checkout your booking : {service.name}</h2>
      <form onSubmit={handlePlaceOrder}>
        <input
          className="form-control my-2"
          value={user.displayName}
          readOnly
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          className="form-control my-2"
          value={user.email}
          disabled
          readOnly
          type="email"
          name="email"
          placeholder="email"
          required
        />
        <input
          className="form-control my-2"
          type="text"
          name="service"
          placeholder="service"
          required
        />
        <input
          className="form-control my-2"
          type="text"
          name="address"
          placeholder="address"
          autoComplete="off"
          required
        />
        <input
          className="form-control my-2"
          type="text"
          name="phone"
          placeholder="phone"
          required
        />
        <input
          className="btn btn-primary btn-sm"
          type="submit"
          value="Add Customer Info"
        />
      </form>
    </div>
  );
};

export default Checkout;
