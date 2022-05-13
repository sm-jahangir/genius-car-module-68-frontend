import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useServiceDetail from "../../../hooks/useServiceDetail";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user, setUser] = useState({
    name: "Jahangir Alam",
    email: "admin@mail.com",
    service: "Ecommerce",
    address: "Rabeya road gazipur Dhaka",
    phone: "01767275819",
  });
  const handleAddressChange = (event) => {
    console.log(event.target.value);
    const { address, ...rest } = user;
    const newAddress = event.target.value;
    const newUser = { address: newAddress, ...rest };
    setUser(newUser);
    console.log(newUser);
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Please Checkout your booking : {service.name}</h2>
      <form>
        <input
          className="form-control my-2"
          value={user.name}
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          className="form-control my-2"
          value={user.email}
          type="email"
          name="email"
          placeholder="email"
          required
        />
        <input
          className="form-control my-2"
          value={user.service}
          type="text"
          name="service"
          placeholder="service"
          required
        />
        <input
          className="form-control my-2"
          value={user.address}
          type="text"
          onChange={handleAddressChange}
          name="address"
          placeholder="address"
          required
        />
        <input
          className="form-control my-2"
          value={user.phone}
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
