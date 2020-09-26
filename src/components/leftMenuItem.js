import React from 'react';

const LeftMenuItem = (props) => {
    return (
        <div className='main__left-menu-item main__left-menu-item_theme'>
            <p>{props.item.title}</p>
        </div>
    );
};

export default LeftMenuItem;