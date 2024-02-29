function noAction() {
  console.log("Button no recibe parámetro para onClick");
}

export default function Button({
  text,
  onClick,
  bgcolor = "bg-green",
  ...rest
}) {
  return (
    <button
      className={`w-44 h-12 ${bgcolor} rounded-[24px] ${rest.className}`}
      onClick={onClick ? () => onClick() : noAction}
    >
      {text}
    </button>
  );
}
