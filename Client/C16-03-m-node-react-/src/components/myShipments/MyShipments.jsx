import React from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../button/button";

function MyShipments() {
  return (
    <div className="flex flex-col py-4 px-4 w-full sm:min-w-[361px] h-full gap-8 bg-bgDashboard rounded-[24px] text-white">
      <h1 className="flex justify-center text-[24px]">Mis envíos</h1>
      <div className="flex flex-col items-start w-fit mx-auto ">
        <div className="flex gap-4 items-center">
          <div className="w-4 h-4 rounded-full bg-white"></div>
          <p className="text-sm">Cancelado</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="w-4 h-4 rounded-full bg-pink ite"></div>
          <p className="text-sm">En almacen</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="w-4 h-4 rounded-full bg-green"></div>
          <p className="text-sm">En progreso</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="w-4 h-4 rounded-full bg-Amethyst"></div>
          <p className="text-sm">En transito</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="w-4 h-4 rounded-full bg-black"></div>
          <p className="text-sm">Entregado</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 text-black text-[18px]">
        <div className="border rounded-[20px] p-1 h-12 text-center bg-white items-center flex justify-center">
          <p>45654657</p>
        </div>
        <div className="border rounded-[20px] p-1 h-12 text-center bg-white items-center flex justify-center">
          <p>45654657</p>
        </div>
        <div className="border rounded-[20px] p-1 h-12 text-center bg-white items-center flex justify-center">
          <p>45654657</p>
        </div>
        <div className="border rounded-[20px] p-1 h-12 text-center bg-white items-center flex justify-center">
          <p>45654657</p>
        </div>
        <div className="border rounded-[20px] p-1 h-12 text-center bg-white items-center flex justify-center">
          <p>45654657</p>
        </div>
      </div>
    </div>
  );
}

export default MyShipments;
