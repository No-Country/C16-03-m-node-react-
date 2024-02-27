import React from "react";

function HamburguerMenu({ onClick }) {
  return (
    <div className="ms:hidden" onClick={onClick} style={{ cursor: "pointer" }}>
      <svg
        width="45"
        height="40"
        viewBox="0 0 45 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.555542 0H45V6.66667H0.555542V0ZM0.555542 16.6667H45V23.3333H0.555542V16.6667ZM0.555542 33.3333H45V40H0.555542V33.3333Z"
          fill="#BDC1C6"
        />
      </svg>
    </div>
  );
}

export default HamburguerMenu;

