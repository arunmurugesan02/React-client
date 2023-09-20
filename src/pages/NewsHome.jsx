import React from "react";
import Card from "../components/Card";
import "../css/NewsHome.css";
import NewsNavbar from "../components/NewsNavbar";
import LoadingSpinner from "../components/LoadingSpinner";
const NewsHome = ({ data ,loading}) => {
  return (
    <>
      <NewsNavbar />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <span className="breaking">Breaking news</span>
          <div className="newsHome">
            {data.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NewsHome;
