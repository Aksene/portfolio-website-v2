import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide']

const COLOR = ['primary', 'blue', 'red', 'green']

export const Button = ({ 
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize, 
    buttonColor
}) => {
    // Checks to see if the button being passed exists in the array i
    // If not it use the first one (btn--primary)
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null

    return (
        <button 
        className={`btn ${checkButtonStyle} ${checkButtonSize} 
        ${checkButtonColor}`} onClick={onClick} type={type}
        >
            <p1 className="button-text">
                {children}
            </p1>
        </button>
    )
};