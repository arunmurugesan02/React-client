import React, { useEffect, useState } from "react";
import NewsHome from "./NewsHome";

const NewsList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      await fetch(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=a612a032fc214df2962a6fcd6d4fe944"
      )
        .then((response) => response.json())
        .then((val) => {
          const articlesWithIds = val.articles.map((article, index) => ({
            ...article,
            id: index + 1,
          }));
          setTimeout(() => {
            setData(articlesWithIds);
            setIsLoading(false);
          }, 1000);
        });
    };
    getData();
  }, []);

  
  return (
    <div>
      <NewsHome data={data} loading={isLoading} />
    </div>
  );
};

export default NewsList;
