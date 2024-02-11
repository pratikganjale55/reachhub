import React, { useEffect } from "react";
import HistoryChart from "../components/HistoryChart";
import style from "../styles/players.module.css";
import { getPlayerRating } from "../Redux/RatingReducer/action";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const RatingHistory = () => {
  const dispatch = useDispatch();
  const { username } = useParams();
  const playerInfo = useLocation().state.item;

  const { rating } = useSelector((state) => state.ratingReducer);
  const transformedData = rating?.map((item) => {
    const [year, month, day, rating] = item;
    const date = `${day}/${month + 1}/${year}`;
    return [date, rating];
  });

  const chartData = [
    ["Date", "Rating", { role: "style" }],
    ...transformedData.map((item) => [...item, getRandomColor()]),
  ];
  useEffect(() => {
    dispatch(getPlayerRating(username));
  }, []);
  return (
    <div className="d-flex">
      <div
        className={`vstack gap-3 col-2 border bg-info-subtle text-center p-2 ${style.leftDiv}`}
      >
        <div class="p-2 border-bottom fs-5">UserId : {playerInfo?.id}</div>
        <div class="p-2 border-bottom fs-5">Name : {playerInfo?.username}</div>
        <div class="p-2 border-bottom fs-5">Progress : {playerInfo?.perfs?.classical?.progress}</div>
        <div class="p-2 border-bottom fs-5 ">Rating : {playerInfo?.perfs?.classical?.rating}</div>
      </div>
      <div className="col-10 p-2">
        <p> </p>
        <HistoryChart chartData={chartData} />
      </div>
    </div>
  );
};

export default RatingHistory;
