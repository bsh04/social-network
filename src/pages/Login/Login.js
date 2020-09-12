import React, {useState} from 'react';
import './login.scss'
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import CustomAlert from "../../Alert/Alert";

const Login = (props) => {

    const [visiblePassword, setVisiblePassword] = useState(false)
    const [alertVisible, setAlertVisible] = useState(false)

    const handleSubmit = () => {
        setAlertVisible(true)
    }

    return (
        <div className='login'>
            {/*{*/}
            {/*    alertVisible ?*/}
            {/*        <CustomAlert visibleAlert={setAlertVisible}/>*/}
            {/*        : null*/}
            {/*}*/}
            <div className='card-login'>
                <h2>Вход в аккаунт</h2>
                <form>
                    <label className='d-flex align-items-center'>
                        <PersonIcon className='text-black-50'/>
                    </label>
                    <input type="number" className='login-inputs' placeholder='Введите свой номер телефона'
                           aria-label='Номер телефона'/>
                </form>
                <form>
                    <label className='d-flex align-items-center'>
                        <LockIcon className='text-black-50'/>
                    </label>
                    <input type={visiblePassword ? 'text' : "password"} className='login-inputs'
                           placeholder='Введите свой пароль'
                           aria-label='Пароль'/>
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
                        <a href='/register' className='login-reset-password'>Зарегистрироваться</a>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center pt-4'>
                        <p className='my-0'>Вы забыли свой пароль?</p>
                        <a href='#' className='login-reset-password'>Сбросить пароль</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;