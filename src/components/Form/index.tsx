import React, { Component } from "react";

import { TaskProps } from "../../interfaces/tasks";
import Button from "../Button";
import style from "./Form.module.scss";
import { v4 as uuidv4 } from 'uuid';

class Form extends Component<{
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}> {
  state = {
    title: "",
    time: "00:00",
  };

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.props.setTasks((prevTasks) => 
      [
        ...prevTasks, 
        { 
          ...this.state,
          selected: false,
          completed: false,
          id: uuidv4(),
        },
      ]
    );
    this.setState(
      { 
        task: "", 
        time: "00:00" 
      }
    );
  }

  render() {
    return (
      <form className={style.newTask} onSubmit={this.handleSubmit.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Add a new task</label>
          <input
            type="text"
            name="task"
            id="task"
            value={this.state.title}
            onChange={(e) =>
              this.setState({ ...this.state, title: e.target.value })
            }
            placeholder="What would like to study?"
            required
          />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="time">Time</label>
          <input
            type="time"
            name="time"
            id="time"
            step="1"
            min="00:00:00"
            max="24:00:00"
            value={this.state.time}
            onChange={(e) =>
              this.setState({ ...this.state, time: e.target.value })
            }
            required
          />
        </div>
        <Button text="Add" />
      </form>
    );
  }
}

export default Form;
