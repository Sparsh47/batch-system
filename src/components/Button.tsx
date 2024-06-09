import { IconType } from "react-icons";

interface ButtonProps {
  text: string;
  Icon?: IconType;
  pos?: string;
  variant: ButtonVariant;
}

export enum ButtonVariant {
  White = "white",
  Ghost = "ghost",
  Filled = "filled",
}

const variants = {
  [ButtonVariant.White]: "bg-white text-black",
  [ButtonVariant.Ghost]: "bg-transparent text-black",
  [ButtonVariant.Filled]: "bg-black text-white",
};

const Button = ({ text, Icon, pos, variant }: ButtonProps) => {
  return (
    <button
      className={`w-44 h-14 ${variants[variant]} rounded flex items-center justify-center gap-2`}
    >
      {Icon && pos === "start" && <Icon className="w-5 h-5" />}
      {text}
      {Icon && pos === "end" && <Icon className="w-5 h-5" />}
    </button>
  );
};

export default Button;
