import React, { useState } from "react";
import { useForm } from "react-hook-form";
import userSchema from "../utils/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import style from "../styles/players.module.css";
import getApi from "../utils/api";
import { Link, useNavigate } from "react-router-dom";
import FormControll from "../components/FormControll";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(userSchema) });
  const [message, setMessage] = useState();
  const navigate = useNavigate();
  const formData = async (data) => {
    try {
      console.log(data);
      const response = await getApi.post("/register", data);
      console.log(response.data.message);
      setMessage(response.data.message);
      if (response.data.message == "successfully signup with email") {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.authDiv}>
      <form onSubmit={handleSubmit(formData)} className={style.form}>
        <div className="text-center p-2 fs-4">SIGN-UP</div>

        <FormControll
          register={register}
          message={message}
          errors={errors}
          text="Have account go Login page"
        />
        <Link to="/" className="text-primary">
          <p>Have an account? Go to Login page</p>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
