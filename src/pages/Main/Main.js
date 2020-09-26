import React from 'react';
import './main.scss'
import LeftMenuItem from "../../components/leftMenuItem";

const Main = (props) => {
    return (
        <div className='main'>
            <div className='main__body main__body_theme'>
                <div className='main__left-menu main__left-menu_theme'>
                    {
                        listItemLeftMenu.map((item, index) => <LeftMenuItem key={index} item={item}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Main;

const listItemLeftMenu = [
    {
        id: 1,
        title: 'Лента',
    },
    {
        id: 2,
        title: 'Диалоги',
    },
    {
        id: 3,
        title: 'Друзья',
    },
    {
        id: 4,
        title: 'Настойки',
    },
    {
        id: 5,
        title: 'Выход',
    },
]