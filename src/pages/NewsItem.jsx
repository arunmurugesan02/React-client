import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./Home"; // Import the 'Home' component if it's defined in a separate file

const NewsItem = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=a612a032fc214df2962a6fcd6d4fe944"
      )
        .then((response) => response.json())
        .then((val) => {
            setData(val.articles)});
    };
    getData();
  }, []);

  console.log(data);

  return (
    <div>
      <Home data={data} />
    </div>
  );
};

export default NewsItem;
