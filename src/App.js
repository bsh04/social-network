import React, {useEffect} from 'react';
import Login from "./pages/Login/Login";
import {Route, Switch, Redirect} from "react-router-dom";
import Register from "./pages/Register/Register";
import ResetPassword from "./pages/Reset/ResetPassword";
import {AlertContext} from "./hoc/Alert/AlertContext";
import CustomAlert from "./hoc/Alert/Alert";
import Header from "./Shared/Header/Header";

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/login" exact component={Login}/>
                <Route path='/register' exact component={Register}/>
                <Route path='/reset' exact component={ResetPassword}/>
                <Redirect to='/'/>
            </Switch>
        </div>
    );
}

export default App;
