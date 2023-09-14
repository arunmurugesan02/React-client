import React from "react";
import Card from "../components/Card";
import "../css/Home.css";

const Home = ({ data }) => {
  console.log(data);
  return (
    <div className="home">
     {
      data.map((item) =>(
        <Card item={item} />
      ))
     }
    </div>
  );
};

export default Home;
