import React, { useState } from 'react';

import { TaskProps } from '../types';
import Form from '../components/Form';
import List from '../components/List';
import Stopwatch from '../components/Stopwatch';
import style from './App.module.scss';

const App = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [selected, setSelected] = useState<TaskProps>();

  const selectTask = (selectedTask: TaskProps) => {
    setSelected(selectedTask);
    setTasks(prevTasks => prevTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false,
    })));
  }

  const finishTask = () => {
    if (selected) {
      setSelected(undefined);

      setTasks(prevTasks => prevTasks.map(task => {
        if (task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true,
          }
        }
        return task;
      }));
    }
  }

  return (
    <div className={style.App}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Stopwatch selected={selected} finishTask={finishTask} />
    </div>
  );
}

export default App;
