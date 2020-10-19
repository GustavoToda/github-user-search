import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}

const Button = ({text}: Props) => {
    return (
        <button className="btn-icon">
              <h1 className="txt-style">
                {text}
              </h1>
       </button>
    );
}

export default Button;

