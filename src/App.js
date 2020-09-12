import React from 'react';
import Login from "./pages/Login/Login";
import {Route, Switch} from "react-router-dom";
import Register from "./pages/Register/Register";

function App() {
    return (
            <Switch>
                <Route path={"/log"} render={() => <Login/>}/>
                <Route path='/register' component={Register}/>
            </Switch>
    );
}

export default App;
