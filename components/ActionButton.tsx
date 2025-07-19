import { Button } from "./ui/button";

interface ActionButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

const ActionButton = ({
  text,
  className,
  onClick,
  size = "md",
  disabled,
}: ActionButtonProps) => {
  const sizeClasses = {
    sm: "text-xs px-3 py-1.5 h-8",
    md: "text-sm px-4 py-2 h-10",
    lg: "text-base px-5 py-2.5 h-12",
  };

  return (
    <Button
      variant="darkGold"
      className={`bg-[#BC8940] hover:bg-[#A07633] text-white font-bold ${
        sizeClasses[size]
      } ${className || ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default ActionButton;
