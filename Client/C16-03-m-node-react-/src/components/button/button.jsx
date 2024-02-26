import { Link } from 'react-router-dom';

function noAction() {
  console.log("Button no recibe parámetro para onClick");
}

export default function Button({
  text,
  onClick,
  bgcolor = "bg-green",
  to,
  ...rest
}) {
  return (
    <Link to={to}>
      <button
        className={`w-44 h-12 ${bgcolor} text-md rounded-[24px] ${rest.className}`}
        onClick={onClick ? () => onClick() : noAction}
      >
        {text}
      </button>
    </Link>
  );
}
