import React, { useState } from "react";
import style from "../styles/players.module.css";
import getUrl from "../utils/api";

const Marque = () => {
  const [isDownload, setIsDownload] = useState(false);

  const handlDownloadCSV = async () => {
    try {
      setIsDownload(true);
      const response = await getUrl.get("/players/rating-history-csv", {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "rating-history.csv");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
      setIsDownload(false);
    } catch (error) {
      console.log("Error downloading CSV:", error);
    }
  };
  return (
    <div className="d-flex mt-2">
      <div className={`col-10 ${style.container}`}>
        <div className={style.ticker}>
          <div className={style.title}>
            <h5>Breaking News</h5>
          </div>
          <div className={style.news}>
            <marquee className={style.newsContent}>
              <p>Showing top 50 chess player in classical game.</p>
            </marquee>
          </div>
        </div>
      </div>

      <button
        className={`mt-3 ms-4 p-2 border border-0 ${style.csvBtn} `}
        onClick={handlDownloadCSV}
      >
        {isDownload ? (
          <div className="spinner-grow text-info" role="status"></div>
        ) : (
          "Download CSV"
        )}
      </button>
    </div>
  );
};

export default Marque;
