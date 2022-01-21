import { TaskProps } from '../../interfaces/tasks';
import ListItem from './ListItem';
import style from './List.module.scss';


const List = ({ tasks }: { tasks: TaskProps[] }) => {
  return (
    <aside className={style.taskList}>
      <h2> Today's tasks </h2>
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
