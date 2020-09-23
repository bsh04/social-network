import React from 'react';
import {Alert} from '@material-ui/lab'

const CustomAlert = (props) => {

    return (
        <div className='custom-alert'>
            <Alert severity="error">Ошибка при входе в аккаунт</Alert>
        </div>
    );
};

export default CustomAlert;