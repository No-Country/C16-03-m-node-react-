import TableCategory from "./TableCategory";
import TableItems from "./TableItems";

// Datos del paquete

const items = [
  {
    id: "1",
    peso: "10 kg",
    despacho: "Sucursal A",
    destino: "Sucursal B",
    precio: "$505",
    estado: "Almacen",
  },
];

const columns = ["Id", "Peso", "Despacho", "Destino", "Precio", "Estado"];

const states = [
  {
    Entregado: "#1DBA23",
    Almacen: "#FFF500",
    Progreso: "#97A1FF",
    Transito: "#0038FF",
    Cancelado: "#FF0000",
  },
];

const Table = () => {
  return (
    <div className="w-full  min-[320px]:h-auto lg:h-auto  p-3 bg-bgDetailDashboard rounded-[24px] flex flex-col items-center justify-center ">
      <div className="w-full h-full flex flex-col ">
        <div className=" flex flex-col lg:items-start sm:items-center min-[320px]:items-center p-3 text-black w-full">
          <h2 className="lg:text-xl sm:text-lg font-bold ">
            Detalles del Envio
          </h2>
        </div>
        <div className=" lg:w-full sm:w-full lg:h-full sm:h-full min-[320px]:w-full min-[320px]:h-full flex lg:flex-col sm:flex-row ">
          <div className="min-[320px]:w-1/2  sm:w-1/2 lg:w-full h-full ">
            <TableCategory columns={columns} />
          </div>
          <div className="min-[320px]:w-1/2 sm:w-1/2 lg:w-full h-full ">
            <TableItems items={items} states={states} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
