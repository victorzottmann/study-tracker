import style from './Clock.module.scss'

const Clock = () => {
  return (
    <>
      <span className={style.clockNumber}>0</span>
      <span className={style.clockNumber}>0</span>
      <span className={style.clockDivider}>:</span>
      <span className={style.clockNumber}>0</span>
      <span className={style.clockNumber}>0</span>
    </>
  );
}

export default Clock;