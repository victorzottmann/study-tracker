import { TaskProps } from "../../../types/tasks";
import style from "./ListItem.module.scss";

interface ListItemProps extends TaskProps {
  selectTask: (task: TaskProps) => void;
}

const ListItem = ({
  title,
  time,
  selected,
  completed,
  id,
  selectTask,
}: ListItemProps) => {
  return (
    <li
      className={`
        ${style.item}
        ${selected ? style.selectedItem : ""}
      `}
      onClick={() =>
        selectTask({
          title,
          time,
          selected,
          completed,
          id,
        })
      }
    >
      <h3>{title}</h3>
      <span>{time}</span>
    </li>
  );
};

export default ListItem;
