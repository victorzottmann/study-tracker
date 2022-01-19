import React from "react";

const tasks = [
  {
    title: "React",
    time: "02:00:00",
  },
  {
    title: "JavaScript",
    time: "01:30:00",
  },
  {
    title: "TypeScript",
    time: "03:00:00",
  },
];

const List = () => {
  return (
    <aside>
      <h2>Tasks for today</h2>
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              <h3>{task.title}</h3>
              <span>{task.time}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default List;
