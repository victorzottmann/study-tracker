import { ListItemProps } from "../../../types";
import style from "./ListItem.module.scss";

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
