import React, { useState } from 'react';

import { TaskProps } from '../interfaces/tasks';
import Form from '../components/Form';
import List from '../components/List';
import Stopwatch from '../components/Stopwatch';
import style from './App.module.scss';

const App = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  return (
    <div className={style.App}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Stopwatch />
    </div>
  );
}

export default App;
