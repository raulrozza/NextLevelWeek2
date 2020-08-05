import React, { InputHTMLAttributes } from 'react';

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...props }) => {
  return (
    <div className="input-block">
        <label htmlFor={name}>{label}</label>
        <input id={name} {...props} />
    </div>
  );
}

export default Input;
