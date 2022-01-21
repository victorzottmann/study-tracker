import style from './List.module.scss';
import ListItem from './ListItem';

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
          // {...item} gets all props passed into the ListItem component
          <ListItem key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
