export interface TaskProps {
  title: string,
  time: string,
  selected: boolean,
  completed: boolean,
  id: string,
}

export interface ListProps {
  tasks: TaskProps[],
  selectTask: (task: TaskProps) => void; 
}

export interface ListItemProps extends TaskProps {
  selectTask: (task: TaskProps) => void;
}

export interface StopwatchProps {
  selected: TaskProps | undefined,
}

export interface ClockProps {
  time: number | undefined,
}
