import React from "react";
import NewsNavbar from "../components/NewsNavbar";
import Card from "../components/CardCategory";
import "../css/Category.css";
import LoadingSpinner from "../components/LoadingSpinner";

const Category = ({ data ,loading}) => {
  return (
    <>
      <NewsNavbar />
      {
        loading ? <LoadingSpinner /> 
        :

      <div className="Category">
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      }
    </>
  );
};

export default Category;
