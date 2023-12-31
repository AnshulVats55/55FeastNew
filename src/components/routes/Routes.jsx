import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import CommonLayout from '../../pages/commonLayout/CommonLayout';
import Home from '../home/Home';
import BookMeal from '../../pages/bookyourmeal/BookMeal';
import Authmodal from '../../pages/authmodal/Authmodal';
import SignupForm from '../signupForm/SignupForm';
import LoginForm from '../loginForm/LoginForm';
import BurgerImage from '../../assets/burger.png';
import HotdogImage from '../../assets/hotdog.png';

const AllRoutes = () => {
  return (
    <Router>
        {
            localStorage.getItem("currentUserName")
            ?
            <>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<CommonLayout component={<Home />} />} />
                    <Route exact path="/bookyourmeal" element={<CommonLayout component={<BookMeal />} />} />
                </Routes>
            </>
            :
            <>
                <Routes>
                    <Route exact path="/" element={<Authmodal image={BurgerImage} component={<LoginForm />} />} />
                    <Route exact path="/signup" element={<Authmodal image={HotdogImage} component={<SignupForm />} />} />
                </Routes>
            </>
        }
    </Router>
  );
}

export default AllRoutes;