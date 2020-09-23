import React, { useState} from 'react';
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import {Link} from "react-router-dom";

const Register = () => {

    const [visiblePassword, setVisiblePassword] = useState(false)
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = () => {
        if (phone !== '' && password !== '') {
            console.log(phone, password)
        } else {
            console.log('заполните все поля')
        }
    }

    return (
        <div className='login'>
            <div className='login__card login__card_theme'>
                <h2>Создание нового аккаунта</h2>
                <form className='form form_theme'>
                    <label className='d-flex align-items-center'>
                        <PersonIcon className='text-black-50'/>
                    </label>
                    <input type="number" placeholder='Введите свой номер телефона'
                           aria-label='Номер телефона'
                            onChange={(value) => setPhone(value.target.value)}
                    />
                </form>
                <form className='form form_theme'>
                    <label className='d-flex align-items-center'>
                        <LockIcon className='text-black-50'/>
                    </label>
                    <input type={visiblePassword ? 'text' : "password"}
                           placeholder='Введите свой пароль'
                           aria-label='Пароль'
                            onChange={(value) => setPassword(value.target.value)}
                    />
                    {
                        visiblePassword ?
                            <VisibilityOffIcon className='label mr-2'
                                               onClick={() => setVisiblePassword(false)}/>
                            :
                            <VisibilityIcon className='label mr-2' onClick={() => setVisiblePassword(true)}/>
                    }
                </form>
                <div className='d-flex justify-content-center pt-4'>
                    <button onClick={() => handleSubmit()}>Зарегистрироваться</button>
                </div>
                <div className='d-flex flex-column align-items-center pb-3'>
                    <div className='d-flex flex-column justify-content-center align-items-center pt-4'>
                        <p className='my-0'>У Вас уже есть аккаунт?</p>
                        <Link to='/login' className='login-reset-password'>Войти</Link>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center pt-4'>
                        <p className='my-0'>Вы забыли свой пароль?</p>
                        <Link to='/reset' className='login-reset-password'>Сбросить пароль</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;