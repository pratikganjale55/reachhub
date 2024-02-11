import React from "react";
import style from "../styles/players.module.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const FormControll = ({ register, message, errors }) => {
  const { isLoading } = useSelector((state) => state.authReducer);
  return (
    <>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Username
        </label>
        <input
          type="text"
          name="userName"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          {...register("userName", { required: true })}
        />
        {errors.userName && (
          <p className="text-danger text-opacity-75">
            {errors.userName?.message}
          </p>
        )}
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="form-control"
          id="exampleInputPassword1"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <p className="text-danger text-opacity-75">
            {errors.password?.message}
          </p>
        )}
      </div>
      {message && <p className="text-danger text-opacity-75 ">{message}</p>}
      <button type="submit" className="btn btn-primary w-100%">
        {isLoading ? (
          <div className="spinner-grow text-info" role="status"></div>
        ) : (
          "Submit"
        )}
      </button>
    </>
  );
};

export default FormControll;
