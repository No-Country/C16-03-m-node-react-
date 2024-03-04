import React, { useState } from "react";
import Spinner from "../spinner/Spinner";

function MyShipments({ products, handleFilter, isLoading }) {
  // Estado para almacenar el ID del producto activo
  const [activeProduct, setActiveProduct] = useState(null);

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
          <p className="text-sm">En tránsito</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="w-4 h-4 rounded-full bg-black"></div>
          <p className="text-sm">Entregado</p>
        </div>
      </div>
      {isLoading && <Spinner />}
      <div className="max-h-[300px] overflow-y-auto">
        <div className="flex flex-col gap-3 text-black text-[18px]">
          {products?.map((product) => (
            <button
              key={product._id}
              className="border rounded-[20px] p-1 h-12 text-center bg-white items-center flex justify-center"
              onClick={() => {
                handleFilter(product._id);
                setActiveProduct(product._id);
              }}
            >
              <p
                className={`text-${product._id === activeProduct ? "green" : "black"}`}
              >
                {product._id}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyShipments;
