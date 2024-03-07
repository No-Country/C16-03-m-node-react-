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
      className={`w-44 h-12 ${bgcolor}  bg-green rounded-[24px] hover:bg-green/80 hover:border-green border-2 ${rest.className}`}
      onClick={onClick ? () => onClick() : noAction}
      cursor="pointer"
    >
      {text}
    </button>
  );
}
