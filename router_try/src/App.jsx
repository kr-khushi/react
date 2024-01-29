import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Nav from "./Component/Nav";
import Order from "./Component/Order";
import Nomatch from "./Component/Nomatch";
import Feature from "./Component/Feature";
import Product from "./Component/Product";
import NewFeature from "./Component/NewFeature";
import User from "./Component/User";
import UserDetail from "./Component/UserDetail";
import Admin from "./Component/Admin";
import Profile from "./Component/Profile";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="order" element={<Order />}></Route>
        <Route path="product" element={<Product />}>
          <Route path="feature" element={<Feature />}></Route>
          <Route path="newfeature" element={<NewFeature />}></Route>
        </Route>
        <Route path="user" element={<User />}>
          <Route path=":userId" element={<UserDetail />}></Route>
          <Route path="admin" element={<Admin />}></Route>
        </Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="*" element={<Nomatch />}></Route>
      </Routes>
    </>
  );
};

export default App;
