import style from './Button.module.scss';

// Same as const Button: React.FC<{ text: string }> = ({ text }) => {}
const Button = ({ text }: { text: string }) => {
  return (
    <button className={style.button}>
      {text}
    </button>
  );
}

export default Button;