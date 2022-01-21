import style from './Button.module.scss';

// Same as const Button: React.FC<{ text: string }> = ({ text }) => {}
const Button = ({ text, type }: { text: string, type?: "button" | "submit" | "reset" | undefined }) => {
  return (
    <button className={style.button} type={type}>
      {text}
    </button>
  );
}

export default Button;