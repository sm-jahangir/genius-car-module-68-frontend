import React from "react";
import useServices from "../../hooks/useServices";

function ManageServices() {
  const [services, setServices] = useServices();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      const url = `https://guarded-escarpment-12321.herokuapp.com/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Success:", data);
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="container">
      <h2>ManageServices</h2>
      {services.map((service) => (
        <div key={service._id}>
          <h4>
            {service.name}{" "}
            <button
              onClick={() => {
                handleDelete(service._id);
              }}
            >
              X
            </button>
          </h4>
        </div>
      ))}
    </div>
  );
}

export default ManageServices;
