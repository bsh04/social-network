import React, {useState} from 'react';
import './login.scss'
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import {NavLink} from "react-router-dom";

const Login = (props) => {

    const [visiblePassword, setVisiblePassword] = useState(false)
    const [alertVisible, setAlertVisible] = useState(false)
    const [validPassword, setValidPassword] = useState(true)
    const [validPhone, setValidPhone] = useState(true)
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const user = {
        phone: '89969378313',
        password: 'admin'
    }

    const handleSubmit = () => {

        if (user.password === password) {
            setValidPassword(true)
        } else {
            setValidPassword(false)
        }

        if (user.phone === phone) {
            setValidPhone(true)
        } else {
            setValidPhone(false)
        }

        setAlertVisible(true)
    }

    return (
        <div className='login'>
            <div className='login__card'>
                <h2>Вход в аккаунт</h2>
                <form className={validPhone ? 'form' : 'form form_wrong'}>
                    <label className='d-flex align-items-center'>
                        <PersonIcon className='text-black-50'/>
                    </label>
                    <input type="number"
                           placeholder='Введите свой номер телефона'
                           aria-label='Номер телефона'
                           onChange={(e) => {
                               setPhone(e.target.value)
                               setValidPhone(true)
                           }}
                    />
                </form>
                <form className={validPassword ? 'form' : 'form form_wrong'}>
                    <label className='d-flex align-items-center'>
                        <LockIcon className='text-black-50'/>
                    </label>
                    <input type={visiblePassword ? 'text' : "password"}
                           placeholder='Введите свой пароль'
                           aria-label='Пароль'
                           onChange={(e) => {
                               setPassword(e.target.value)
                               setValidPassword(true)
                           }}
                    />
                    {
                        visiblePassword ?
                            <VisibilityOffIcon className='text-black-50 mr-2'
                                               onClick={() => setVisiblePassword(false)}/>
                            :
                            <VisibilityIcon className='text-black-50  mr-2' onClick={() => setVisiblePassword(true)}/>
                    }
                </form>
                <div className='d-flex justify-content-center pt-4'>
                    <button onClick={() => handleSubmit()}>Войти</button>
                </div>
                <div className='d-flex flex-column align-items-center pb-3'>
                    <div className='d-flex flex-column justify-content-center align-items-center pt-4'>
                        <p className='my-0'>У Вас нет аккаунта?</p>
                        <NavLink  to='/register'>Зарегистрироваться</NavLink>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center pt-4'>
                        <p className='my-0'>Вы забыли свой пароль?</p>
                        <NavLink to='/reset'>Сбросить пароль</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;