import React from 'react';
import './BofaButton.css';

export enum BUTTON_TYPE {
    primary = 'primary', secondary = 'secondary'
}

export interface BofaButtonProps {
    label: string;
    faIconClasses?: string;
    type?: BUTTON_TYPE;
    isDisabled?: boolean;
}

function BofaButton({
    label,
    faIconClasses,
    type,
    isDisabled
}: BofaButtonProps) {
    const {primary} = BUTTON_TYPE;
    return (
        <button className={`bofa-btn ${type || primary} ${isDisabled && 'disabled'}`}>
            {label}{faIconClasses && <i className={`btn-icon ${faIconClasses}`} aria-hidden={true} />}
        </button>
    );
}

export default BofaButton;