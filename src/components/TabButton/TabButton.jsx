import React from 'react';
import './TabButton.css';

const TabButton = (props) => {
    return (
            <li>
                <button
                    className={props.isSelected ? 'active' : ''}
                    onClick={props.onClick}>
                    {props.children}
                </button>
            </li>
    );
};

export default TabButton;
