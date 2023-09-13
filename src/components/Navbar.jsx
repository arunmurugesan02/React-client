import React from "react";
import "../css/Navbar.css"
import { Link } from "react-router-dom";
const Navbar = ({user}) => {
  return (
    <div className="navbar">
      <span className="logo"><Link to='/' className="logo">Arun App</Link></span>
      {
        user ? (
          <ul className="list">
          <li className="listItem">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAUVBMVEUAv6X///8AvKEAu57P7efr+fclwqr5/v31/PsAuJvl+PWu5duA1saT3dB21cWg4NRGx7G26N9VzLhr0sDH7ueI2cvW8+7e9fG+6uJi0L04xa4If1+FAAAF3UlEQVR4nO2bbZOzKgyGEari22pta63//4cek1qryFsU95kzs/myO50WL0O4CRBY9M+N/WuAP4Q/hAAIaX6/1o8SrSr6Tv4qQn6tbkmWCSH4ZOO/GWvK+pL+AkLe/yTwUKYx+LgpOioGCUFeX4nQPn3J0VRPEgUBoSuZ6/kThWhrAoQvQnodMq/nfyjKZ1gEWQyE508d8uMJ4YXQD4IIgBCsjAMhdG22A+ANUYdAkOUeD8wQyf0wwoUcBCrEw6WbDoRKL0IUE60jLK0IsjnSCbMfxHU3wj057IK3idKmVBaEa5jng/GXJSDMCEWITpgZBjODEaEKSQCj0xiUJoRHoDBYMHQ0hCo0AfRFTkEIGgczQ6IfF1qE6xkEI0OjZdAh3E8BAIabJ4JMzkJgvPJDaMKH4mxCM3FuEQILgmrbLGaDcDnRB0wbDiqCPJofuEwULoTyZAK27QoFoTs3EMD4y47Qnk4wdsXFhtDvzZVJ1lgQ5PAbBCwrzAinzE4aa6QJId3hhGEY6HrOryaEK3lA8hJ+Rw+gwYSwwwmYCf3Q0Xs9Qkd/m3ds0yd33uoR6MIo6r0xlMU6BEluh7EpG6RnmsvE4YtAz9b4D/xsxHjSJ5ZFDvdFeNH7AfKPASLrRUbg3RYh35GuQQzjrEPXNFFtEXp6P0Ar45Jn7Il0R09sEXYMbliijX/qXaOJPTcI9H4Aibtn098D6vRByOltFJPvshy9Qf15qSLQ54dkVJcYG3uMv6/pv1cRyOqCovAeCbB38KQSMC4VhBsVAdOvVv2XgnBREMjRCK/eTY3B2oAsrrxYI6TUWRJF4dN7yRiQMfUl5mliQsipCCJeuA6zIKo0zENiQrhT3diuxACk7kJ9i2aNQO1JfO+voKJQUntiWCPUVC/I1cSAIk2WhjUCcYPtnSkssOGNciKBSFcIxFjCMb1MEjLoCeLeyDEEyHlWqRK6pac1kh1BwLR1LekDzBi0NPYQAh+flzZrqju5lUMIIMjKhhDmb7TdiSMIoo+2WRZscyuecTWzRiDN1Rwmlc2HBVka1rpASYExRdlGP0iDpIh0skYg5c+wBNjmFygNLcENikBTAgmmF8kS1RhMvoT8b972mhAIHkRRSGONRaT9a+zPBQIlAzacbFCHFv8cJn8QvIcTSrHZOn+Ez0Lig+BNjzLYXbQ2DvTUP43NFQTvEQ2nO5IJnWWQx/hnHpGC4LsBj0FkWL7h9k3s21CrImzUzmAC3Gcc/SANnuvjORq/y1rPeERRMPkam/WUhnkl80Uo/Ip1CutXUXO9CDDBUBD8RhOsZS1rNxRprzx0cTozI3hNtCgKuTnmMVg7j4beE76C4DVf4wLW9sVE+oZVrEF4egxo2EKXtiegcHlIw1JjvwgeuoYrUfueDkx/sbOhZT8sN4DdAolrWftOBCyyfaQh0iKkLv/hDO/YJ8ZR61wkrw6OlziuqQrXsi7lwVzImTXkBgTnVnJV17Uz3OFLjrBaT/irsylXH5rKPclfehoR6Ntmu+y75bhF+I3jYkDILQgeIzoAgVJHoRwY0zdRd1hkRdixG041rhbdqQj0LXUqgXpwv63ieJx9aLypJNkgSMqykG6a2sdtOY3PpL3bdJVNmqKik2q7kGDYPk5b3XWeQGkrDnUIKf3I0s+4tiJZW2Z3UmVRtqknMiNEMlTh7dK4oTTcUHL5DM+gLbGzIERd6L4wEpjLb/OwfsjMBfrmIuQ0ZNEh10eiAyFKyQeHRgDr/QBrTXyg0kc+WAvz7TcD7iyAI4S24tUXIYpvRx3Bmf1egMctkeKYI/jLeV/GfVcmfu13hNsFXghRdGn21SBysxxREcbe2KERnJXWrWIiQiSvA+3WDGe+N7cId+j61vsGGxes8vMADWEMzKrhHns4gv307sb2IYya3VUNs/TIuKgebr3XtbW9CGDPvsRLnVx9+PhBW1+Iz9+FACYvRVU2AxMiG02wZHg96t6/+wMgfCx926E2/teXnP8Q/hDC238FXD4go662uwAAAABJRU5ErkJggg==" alt=""  className="avatar"/>
          </li>
          <li className="listItem" >Arun </li>
          <li className="listItem">Logout</li>
        </ul>
        ): 
         <Link to='/login' className="logo">Login</Link>
      }
     
    </div>
  );
};

export default Navbar;
