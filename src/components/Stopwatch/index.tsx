import { useEffect, useState } from "react";

import { timeInSeconds } from "../../commons/utils/time";
import { TaskProps } from "../../types/tasks";
import Button from "../Button"
import Clock from "./Clock"
import style from './Stopwatch.module.scss'

interface StopwatchProps {
  selected: TaskProps | undefined,
}

const Stopwatch = ({ selected }: StopwatchProps) => {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeInSeconds((selected?.time)));
    } 
  }, [selected]);

  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Choose a card and start the stopwatch</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button text="Start" />
    </div>
  );
}

export default Stopwatch;