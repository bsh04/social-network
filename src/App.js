import React, {useEffect, useState} from 'react';
import Login from "./pages/Login/Login";
import {Route, Switch, Redirect} from "react-router-dom";
import Register from "./pages/Register/Register";
import ResetPassword from "./pages/Reset/ResetPassword";
import Header from "./Shared/Header/Header";
import ToggleTheme from "./Shared/Theme/ToggleTheme";
import './Theme/light_theme.scss'
import './Theme/dark_theme.scss'

function App() {

    const [theme, setTheme] = useState('light')
    return (
        <div className={theme}>
                <Header/>
                <Switch>
                    <Route path="/" exact component={Login}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path='/register' exact component={Register}/>
                    <Route path='/reset' exact component={ResetPassword}/>
                    <Redirect to='/'/>
                </Switch>
            <ToggleTheme setTheme={setTheme}/>
        </div>
    )
}

export default App;
