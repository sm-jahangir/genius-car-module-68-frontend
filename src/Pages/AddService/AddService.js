import React from "react";
import { useForm } from "react-hook-form";

function AddService() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="container">
      <h1>AddService</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        First Name:{" "}
        <input {...register("firstName", { required: true, maxLength: 20 })} />{" "}
        <br />
        <br />
        Last Name:{" "}
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        <br />
        <br />
        Age: <input type="number" {...register("age", { min: 18, max: 99 })} />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default AddService;
