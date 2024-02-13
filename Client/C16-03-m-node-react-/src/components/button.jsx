import React from "react";

function noAction(){
    console.log("Button no recibe parámetro para onClick")
}

export default function Button({ text, onClick, ...rest }) {
    return (
      <button  className="w-44 h-12 text-black text-md bg-green rounded-md" onClick={onClick ? () => onClick(...rest) : noAction}>
        {text}
      </button>
    )
  }