import { IconType } from "react-icons";

interface ButtonProps {
  text: string;
  Icon?: IconType;
  pos?: string;
  variant: string;
}

const Button = ({ text, Icon, pos, variant }: ButtonProps) => {
  return (
    <button
      className={`w-40 h-14 ${
        variant === "filled"
          ? "bg-black text-white"
          : "bg-transparent text-black"
      } rounded flex items-center justify-center gap-2`}
    >
      {Icon && pos === "start" && <Icon className="w-7 h-7" />}
      {text}
      {Icon && pos === "end" && <Icon className="w-7 h-7" />}
    </button>
  );
};

export default Button;
