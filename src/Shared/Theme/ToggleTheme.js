import React, {useEffect, useState} from 'react';
import './theme.scss'
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness3Icon from '@material-ui/icons/Brightness3';

const ToggleTheme = (props) => {


    useEffect(() => {
        props.setTheme(theme)
    })

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

    const changeTheme = (value) => {
        setTheme(value)
        localStorage.setItem('theme', value)
    }

    return (
        <>
            <div className='toggle-theme'>
                {
                    theme === 'light'
                        ?
                        <Brightness3Icon className='dark-theme' onClick={() => changeTheme('dark')}/>
                        :
                        <Brightness7Icon className='light-theme' onClick={() => changeTheme('light')}/>
                }
            </div>
        </>
    );
};

export default ToggleTheme;
