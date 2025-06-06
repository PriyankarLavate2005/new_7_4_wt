// AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ForgotPassword from '../pages/ForgotPassword.js';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Forecast from '../pages/Forcast.js';
import cart from '../components/Cart.js'
import Logout from '../pages/Logout.js';
import SignUp from '../pages/Signup.js';
import Navbar from '../components/Navbar';
import CropInfo from '../CropInfo/CropInfo.js';
import Login from '../pages/Login.js';
import PrivateCompenents from '../components/Privatecomponent.js';
import Products from '../pages/Products.js';
import MyProfile from '../pages/UserProfile.js';
import Settings from '../pages/Settings.js';
import ContactPage from '../pages/Contact';
import UserUploadedProducts from '../pages/userUploadedProducts.js';
import Cart from '../components/Cart.js';
import CartPage from '../components/CartPage.js';
const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<PrivateCompenents />}>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/products" element={<Products />} />
          <Route path="/userprofile" element={<MyProfile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="/userUploadedProducts" element={<UserUploadedProducts/>}/>
          <Route path="/forcast" element={<Forecast/>} />
          <Route path="/cart" element={<CartPage/>} />
        </Route>
        <Route path='/cropInfo' element={<CropInfo />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
};

export default AppRoutes;