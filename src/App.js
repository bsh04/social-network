import React, {useState} from 'react';
import ToggleTheme from "./Shared/Theme/ToggleTheme";
import './Theme/light_theme.scss'
import './Theme/dark_theme.scss'
import Layout from "./pages/Layout";

function App() {

    const [theme, setTheme] = useState('light')
    return (
        <div className={theme}>
            <Layout/>
            <ToggleTheme setTheme={setTheme}/>
        </div>
    )
}

export default App;
