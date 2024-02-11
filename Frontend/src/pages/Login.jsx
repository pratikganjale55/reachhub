import React from "react";
import style from "../styles/players.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import userSchema from "../utils/userSchema";
import FormControll from "../components/FormControll";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/AuthReducer/action";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(userSchema) });
  const { isSuccess } = useSelector((state) => state.authReducer);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const formData = async (data) => {
    dispatch(login(data))
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        console.log("Login failed:", error);
      });
  };

  return (
    <div>
      <div className={style.authDiv}>
        <form onSubmit={handleSubmit(formData)} className={style.form}>
          <div className="text-center p-2 fs-4">LOGIN</div>

          <FormControll
            register={register}
            message={isSuccess}
            errors={errors}
          />
          <Link to="/register" className="text-primary">
            <p>Don't have an account? Go to Signup page</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
