import React, { useEffect, useState } from "react";
import Category from "./Category";
const CategoryList = ({category}) => {
  console.log(category);
  const [list,setList]= useState([])
  const [isLoading,setIsLoading] = useState(false)
    useEffect(()=>{
        const getData = async()=>{
            setIsLoading(true);
            const response = await fetch(`https://newsapi.org/v2/top-headlines/sources?category=${category}&apiKey=a612a032fc214df2962a6fcd6d4fe944`)
            const data = await response.json();
            setTimeout(()=>{
              setList(data.sources)
              setIsLoading(false);
            },1000)
        }
        getData();
    },[category])
  return (
    <>
     <Category data={list} loading={isLoading} />
    </>
  )
}

export default CategoryList;