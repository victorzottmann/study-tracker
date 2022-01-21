import React from 'react';

import style from './Button.module.scss';

const Button: React.FC<{ text: string }> = (props) => {
  return (
    <button className={style.button}>
      {props.text}
    </button>
  );
}

export default Button;