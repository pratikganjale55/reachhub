import React, { useEffect, useState } from "react";
import apiClient from "../utils/api";

import { getPlayerAll } from "../Redux/PlayersReducer/action";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
const PlayersTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { player, isLoading } = useSelector((state) => state.playerReducer);

  const handleRating = (item) => {
    navigate(`/rating/${item.username}`, { state: { item } })
  };
  useEffect(() => {
    dispatch(getPlayerAll());
  }, [dispatch]);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="table-responsive mt-2 ms-2 p-2">
          <table className="table table-success table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">SR.NO</th>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Rating</th>
                <th scope="col">Progress</th>
              </tr>
            </thead>
            <tbody>
              {player?.map((item, i) => {
                return (
                  <tr
                    style={{ cursor: "pointer" }}
                    onClick={() => handleRating(item)}
                  >
                    <th scope="row">{i + 1}</th>
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.perfs.classical.rating}</td>
                    <td>{item.perfs.classical.progress}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default PlayersTable;
