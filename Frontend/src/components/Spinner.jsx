import React from "react";
import style from "../styles/players.module.css" ;
const spinnerArr = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];
const Spinner = () => {
  return (
    <>
    <div className={style.spinnerDiv}>
      {spinnerArr?.map((item, i) => {
        return (
          <div className={`spinner-grow text-${item}`} role="status">
            <span className="sr-only">...</span>
          </div>
        );
      })}
      </div>
    </>
  );
};

export default Spinner;
