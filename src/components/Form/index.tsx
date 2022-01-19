import React from "react";
import Button from "../Button";

const Form = () => {
  return (
    <form>
      <div>
        <label htmlFor="task"></label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="What do you want to study?"
          required
        />
      </div>
      <div>
        <label htmlFor="time"></label>
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
      <Button />
    </form>
  );
};

export default Form;
