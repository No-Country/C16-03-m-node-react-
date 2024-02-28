import TableCategory from "./TableCategory";
import TableItems from "./TableItems";

// Datos del paquete
function dataPackage(products = {}) {
  return [
    {
      id: products._id,
      descrption: products.description,
      peso: products.packageData?.weightKg,
      despacho: products.originData,
      destino: products.destinationData,
      estado: products.status,
    },
  ];
}

// const items = [
//   {
//     id: "1",
//     descrption: "Producto de tecnologia",
//     despacho: "Sucursal A",
//     destino: "Sucursal B",
//     precio: "$505",
//     estado: "Almacen",
//   },
// ];

const columns = ["Id", "Descripcion", "Peso", "Despacho", "Destino", "Estado"];

const states = [
  {
    Delivered: "#1DBA23",
    "In Warehouse": "#FFF500",
    "In Progress": "#97A1FF",
    "In Transit": "#0038FF",
    Canceled: "#FF0000",
  },
];

const Table = ({ products = {} }) => {
  const items = dataPackage(products?.product);

  return (
    <div className="w-full min-[320px]:h-auto lg:h-auto  p-3 bg-Amethyst rounded-3xl flex flex-col items-center justify-center ">
      <div className="w-full h-full flex flex-col ">
        <div className=" flex flex-col items-center min-[320px]:items-center p-3 text-white w-full">
          <h2 className="text-[24px] lg:text-[45px] sm:text-lg font-bold ">
            Detalles del Envio
          </h2>
        </div>
        <div className="lg:w-full sm:w-full lg:h-full sm:h-full min-[320px]:w-full min-[320px]:h-full flex lg:flex-col sm:flex-row">
          <div className="min-[320px]:w-1/2  sm:w-1/2 lg:w-full h-full">
            <TableCategory columns={columns} />
          </div>
          <div className="min-[320px]:w-1/2 sm:w-1/2 lg:w-full h-full">
            <TableItems items={items} states={states} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
