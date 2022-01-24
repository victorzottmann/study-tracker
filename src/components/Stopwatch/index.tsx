import { useEffect, useState } from "react";

import { timeInSeconds } from "../../commons/utils/time";
import { StopwatchProps } from "../../types";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss";


const Stopwatch = ({ selected }: StopwatchProps) => {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeInSeconds(selected?.time));
    }
  }, [selected]);

  const startCountdown = (timer: number = 0) => {
    setTimeout(() => {
      if (timer > 0) {
        setTime(timer - 1);
        return startCountdown(timer - 1);
      }
    }, 1000)
  }

  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Choose a task and start the stopwatch</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button
        text="Start"
        onClick={() => startCountdown(time)}
      />
    </div>
  );
};

export default Stopwatch;
