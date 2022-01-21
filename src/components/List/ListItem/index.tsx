import { TaskProps } from '../../../interfaces/tasks';
import style from '../List.module.scss';

// Same as const ListItem: React.FC<{ title: string, time: string }> = ({ title, time }) => {}
const ListItem = ({ title, time, selected, completed, id }: TaskProps) => {
  console.log('Current item: ', { title, time, selected, completed, id });
  
  return (
    <li className={style.item}>
      <h3>{title}</h3>
      <span>{time}</span>
    </li>
  );
}

export default ListItem;