import TableCategory from "./TableCategory"
import TableItems from "./TableItems"


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

const columns = [
    "Id",
    "Peso",
    "Despacho",
    "Destino",
    "Precio",
    "Estado",
];

const states = [
    {
        Entregado: "#1DBA23",
        Almacen: "#FFF500",
        Progreso: "#97A1FF",
        Transito: "#0038FF",
        Cancelado: "#FF0000",
    }
]


const Table = () => {
    return (
        <div className="w-full h-auto p-3 bg-gray rounded-lg flex flex-col items-center justify-center ">
            <div className="w-full h-full flex flex-col items-center justify-between">
                <div className=" flex flex-col items-start p-3 text-black w-full">
                    <h2 className="text-xl font-bold ">Detalles del Envio</h2>
                </div>
                <div className=" w-full h-1/2 flex flex-col items-center justify-between ">
                    <TableCategory columns={columns} />
                    <TableItems items={items} states={states}/>
                </div>
            </div>
        </div>
    );
};

export default Table;