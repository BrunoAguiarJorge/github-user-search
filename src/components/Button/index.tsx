import React from 'react';
import './styles.css';
import './../../../src/App.css';

type Props = {
  text: string;
}

const Button = ({ text }: Props) => {
    return (
      <button className="main-btn-style">
          <p className="main-btn-title">{text}</p>
        </button>
    );
}

export default Button;