import { ListProps } from '../../types';
import ListItem from './ListItem';
import style from './List.module.scss';


const List = ({ tasks, selectTask }: ListProps) => {
  return (
    <aside className={style.taskList}>
      <h2> Today's tasks </h2>
      <ul>
        {tasks.map((item) => (
          // {...item} gets all props passed into the ListItem component
          // title, time, selected, completed, and id in this case
          <ListItem key={item.id} {...item} selectTask={selectTask} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
