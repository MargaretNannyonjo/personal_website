import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const confirmSubmit = window.confirm("Form submitted, Thank you");

    if (confirmSubmit) {
      navigate("/");
    }
  };

  return (
    <>
      <div className="contact">
        <h1>Contact me</h1>

        <div className="form-div">
          <form
            action="https://formspree.io/f/mpzvpreg"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              {...register("name", {
                required: "This field is required",
                message: "Enter Name",
              })}
            />
            <p style={{ color: "red", fontSize: "small" }}>
              {errors.emailAddress?.message}
            </p>

            <input
              type="text"
              name="email"
              placeholder="Email Address"
              {...register("emailAddress", {
                required: "This field is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <p style={{ color: "red", fontSize: "small" }}>
              {errors.emailAddress?.message}
            </p>

            <input
              type="text"
              placeholder="phone number"
              name="phone Number"
              {...register("message", { required: "This field is required" })}
            />
            <p style={{ color: "red", fontSize: "small" }}>
              {errors.phoneNumber?.message}
            </p>

            <input
              type="text"
              name="message"
              placeholder="Message"
              {...register("message", {
                required: "This field is required",
              })}
            />
            <p style={{ color: "red", fontSize: "small" }}>
              {errors.message?.message}
            </p>

            <button className="submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
