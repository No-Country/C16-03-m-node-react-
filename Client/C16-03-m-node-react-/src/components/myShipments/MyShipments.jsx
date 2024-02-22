import React from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../button/button";

function MyShipments() {
  return (
    <div className="flex flex-col py-8 px-11 w-full sm:min-w-[361px] h-full gap-5 bg-purple text-white">
      <h1 className="flex justify-center text-[32px]">Mis envios</h1>
      <div className="flex flex-col items-start mb-16">
        <div className="flex gap-2">
          <div className="w-4 h-4 rounded-full bg-white"></div>
          <p>Cancelado</p>
        </div>
        <div className="flex gap-2">
          <div className="w-4 h-4 rounded-full bg-pink"></div>
          <p>En almacen</p>
        </div>
        <div className="flex gap-2">
          <div className="w-4 h-4 rounded-full bg-green"></div>
          <p>En progreso</p>
        </div>
        <div className="flex gap-2">
          <div className="w-4 h-4 rounded-full bg-Amethyst"></div>
          <p>En transito</p>
        </div>
        <div className="flex gap-2">
          <div className="w-4 h-4 rounded-full bg-black"></div>
          <p>Entregado</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 text-black">
        <div className="border p-1 h-12 text-center bg-white items-center flex justify-center">
          <p>45654657</p>
        </div>
        <div className="border p-1 h-12 text-center bg-white items-center flex justify-center">
          <p>45654657</p>
        </div>
        <div className="border p-1 h-12 text-center bg-white items-center flex justify-center">
          <p>45654657</p>
        </div>
        <div className="border p-1 h-12 text-center bg-white items-center flex justify-center">
          <p>45654657</p>
        </div>
        <div className="border p-1 h-12 text-center bg-white items-center flex justify-center">
          <p>45654657</p>
        </div>
      </div>
    </div>
  );
}

export default MyShipments;
