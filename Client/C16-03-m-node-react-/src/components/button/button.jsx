

function noAction() {
  console.log("Button no recibe parámetro para onClick");
}

export default function Button({ text, onClick, bgcolor = "bg-green" }) {
  return (
    <button
      className={`w-44 h-12 ${bgcolor} text-md rounded-md`}
      onClick={onClick ? () => onClick() : noAction}
    >
      {text}
    </button>
  );
}
