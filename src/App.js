import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Post from "./pages/Post";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NewsItem from "./pages/NewsList";
import CategoryList from "./pages/CategoryList";

function App() {
  const [user,setUser] = useState(null)
  useEffect(() => {
    const getUser = async () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      }).then(response =>{
        if(response.status === 200) return response.json();
        throw new Error("authentication failed")
      }).then(data =>{
        setUser(data.user)
      }).catch(err =>{
        console.log(err);
      })
    };
    getUser();
  }, []);
  console.log(user);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home  user={user}/>} />
          <Route
            path="/login"
            element={user ? <Navigate to="/news/home" /> : <Login />}
          />
         
           <Route path="/news/post/:id" element={user ?<Post /> : <Navigate to='/login' />} />

          {/* <Route
            path="/news/home"
            element={user ? <NewsItem /> : <Navigate to="/login" />}
          /> */}
          <Route path="/news/home" element={<NewsItem />} />
          <Route path="/news/science" element={<CategoryList  category={'science'}  />} />
          <Route path="/news/sports" element={<CategoryList category={'sports'} />} />
          <Route path="/news/technology" element={<CategoryList category={'technology'}/>} />
          <Route path="/news/entertainment" element={<CategoryList category={'entertainment'}/>} />   

           


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
