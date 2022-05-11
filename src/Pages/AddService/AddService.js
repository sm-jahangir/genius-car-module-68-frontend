import React from "react";
import { useForm } from "react-hook-form";

function AddService() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const url = "http://localhost:4000/service";

    fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    console.log(data);
  };
  return (
    <div className="container">
      <h1>AddService</h1>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        Name:{" "}
        <input
          className="mb-2 form-control"
          placeholder="Enter Input"
          {...register("name", { required: true, maxLength: 20 })}
        />{" "}
        Description:{" "}
        <textarea
          className="mb-2 form-control"
          placeholder="Enter Input"
          {...register("description")}
        />
        Price:{" "}
        <input
          className="mb-2 form-control"
          placeholder="Enter Input"
          type="number"
          {...register("price")}
        />
        Photo URL:{" "}
        <input
          className="mb-2 form-control"
          placeholder="Enter Input"
          {...register("img")}
        />
        <input className="btn btn-primary mb-2" type="submit" />
      </form>
    </div>
  );
}

export default AddService;
