import { ClockProps } from '../../../types';
import style from './Clock.module.scss'


const Clock = ({ time = 0 }: ClockProps) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  
  const [minuteIndexZero, minuteIndexOne] = String(minutes).padStart(2, '0');
  const [secondIndexZero, secondIndexOne] = String(seconds).padStart(2, '0');

  return (
    <>
      <span className={style.clockNumber}>{minuteIndexZero}</span>
      <span className={style.clockNumber}>{minuteIndexOne}</span>
      <span className={style.clockDivider}>:</span>
      <span className={style.clockNumber}>{secondIndexZero}</span>
      <span className={style.clockNumber}>{secondIndexOne}</span>
    </>
  );
}

export default Clock;