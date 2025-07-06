import React, { useState } from 'react';
import eyeOpen from '../assets/eye.png';
import eyeClosed from '../assets/eye-closed.png';

const PasswordInput = ({
    id,
    name,
    value,
    onChange,
    placeholder = '',
    required = false,
}) => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="password-container">
            <input
                type={visible ? 'text' : 'password'}
                id={id}
                name={name}
                className="input-field"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            />
            <img
                src={visible ? eyeClosed : eyeOpen}
                alt="Toggle visibility"
                className="toggle-password-icon"
                onClick={() => setVisible((prev) => !prev)}
            />
        </div>
    );
};

export default PasswordInput;
