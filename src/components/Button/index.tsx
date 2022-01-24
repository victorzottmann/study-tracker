import style from "./Button.module.scss";

// Same as const Button: React.FC<{ text: string }> = ({ text }) => {}
const Button = ({
  text,
  type = "button",
  onClick,
}: {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}) => {
  return (
    <button 
      className={style.button} 
      type={type} 
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
