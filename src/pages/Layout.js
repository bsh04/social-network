import React from 'react';
import Header from "../Shared/Header/Header";
import {Redirect, Route, Switch} from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";
import ResetPassword from "./Reset/ResetPassword";
import Main from "./Main/Main";

const Layout = (props) => {
    return (
        <>
            <Header/>
            <div className='body-container'>
                <Switch>
                    <Route path="/" exact component={Login}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path='/register' exact component={Register}/>
                    <Route path='/reset' exact component={ResetPassword}/>
                    <Route path='/main' exact component={Main}/>
                    <Redirect to='/'/>
                </Switch>
            </div>
        </>
    );
};

export default Layout;