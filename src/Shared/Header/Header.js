import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import './header.scss'

const Header = (props) => {


    const [reduceHeader, setReduceHeader] = useState(false)

    useEffect(() => {
        scrollHandler()
        window.addEventListener("scroll", scrollHandler)
    })

    const scrollHandler = () => {
        if (window.scrollY > 20) setReduceHeader(true)
        else setReduceHeader(false)
    }

    return (
        <div className="navbar-app">
            <div className='navbar-app__body'>
                <div className='navbar-app__brand-body'>
                    <NavLink className="navbar-app__brand" to="/">SN</NavLink>
                </div>
                <div className='navbar-app__items'>
                    <NavLink className="navbar-app__register" to="/register">Регистрация</NavLink>
                    <div className='navbar-app__login-body'>
                        <NavLink className="navbar-app__login" to="/login">Вход</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;