import React, { useState } from 'react';

import style from './List.module.scss';
import ListItem from './ListItem';

const List = () => {
  const [tasks, setTasks] = useState(
    [
      {
        title: 'React',
        time: '02:00:00'
      }, 
      {
        title: 'Javascript',
        time: '01:00:00'
      }, 
      {
        title: "Typescript",
        time: "03:00:00"
      }
    ]
  );

  return (
    <aside className={style.taskList}>
      <h2 onClick={() => {
        // add the new task (inside {}) to all the other ones [...tasks] => spread operator
        setTasks([...tasks, { title: "Study states", time: "05:00:00" }])
      }}> Today's tasks </h2>
      <ul>
        {tasks.map((item, index) => (
          // {...item} gets all props passed into the ListItem component
          // title and time in this case
          <ListItem key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
