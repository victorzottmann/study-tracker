import React from 'react';

import style from './List.module.scss';

const List = () => {
  const tasks = [
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
  ];

  return (
    <aside className={style.taskList}>
      <h2> Today's tasks </h2>
      <ul>
        {tasks.map((item, index) => (
          <li key={index} className={style.item}>
            <h3>{item.title}</h3>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;
