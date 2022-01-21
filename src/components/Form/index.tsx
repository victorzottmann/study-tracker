import React from 'react';

import Button from '../Button';
import style from './Form.module.scss';

const Form = () => {
  return (
    <form className={style.newTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">
          Add a new task
        </label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="What would like to study?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">
          Time
        </label>
        <input
          type="time"
          name="time"
          id="time"
          step="1"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button text="Add" />
    </form>
  )
}

export default Form;