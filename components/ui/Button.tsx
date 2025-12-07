type ButtonProps = {
  text: string;
  textOnHover?: "accent" | "success" | "warning" | "error";
  onClick?: () => void;
};

export default function Button({ text, textOnHover, onClick }: ButtonProps) {
  const hoverColors: Record<string, string> = {
    accent: "hover:text-accent",
    success: "hover:text-success",
    warning: "hover:text-warning",
    error: "hover:text-error",
  };

  const textHighlight = textOnHover ? hoverColors[textOnHover] : hoverColors["accent"];

  return (
    <button
      onClick={onClick}
      className={`transition-[scale] duration-300 ease-in px-4 py-2 bg-background text-gray-light rounded-md hover:scale-125 ${textHighlight}`}
    > {text}
    </button>

  );

}

