import TableCategory from "./TableCategory"
import TableItems from "./TableItems"


// const rows = [
//     {
//         key: "1",
//         name: "Tony Reichert",
//         role: "CEO",
//         status: "Active",
//     },
//     {
//         key: "2",
//         name: "Zoey Lang",
//         role: "Technical Lead",
//         status: "Paused",
//     },
//     {
//         key: "3",
//         name: "Jane Fisher",
//         role: "Senior Developer",
//         status: "Active",
//     },
//     {
//         key: "4",
//         name: "William Howard",
//         role: "Community Manager",
//         status: "Vacation",
//     },
// ];

// const columns = [
//     {
//         key: "id",
//         label: "Id",
//     },
//     {
//         key: "peso",
//         label: "Peso",
//     },
//     {
//         key: "despacho",
//         label: "Despacho",
//     },
//     {
//         key: "destino",
//         label: "Destino",
//     },
//     {
//         key: "precio",
//         label: "Precio",
//     },
// ];

// const Table = () => {
//     return (



//         <div>
//             <div className="bg-purple flex flex-col items-center p-3 text-white ">
//                 <h2 className="text-xl font-bold ">Detalles del Envio</h2>
//             </div>
//             <div className="flex items-center justify-between ">
//                 <TableCategory columns={columns}>
//                     {(column) => (
//                         <h3 key={column.key}>{column.label}</h3>
//                     )}
//                 </TableCategory>
//                 <TableItems items={rows}>
//                     {(item) => (
//                         <h4 key={item.key}>
//                             {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
//                         </h4>
//                     )}
//                 </TableItems>
//             </div>
//         </div>
//     )
// }

// export default Table

const items = [
    {
        id: "1",
        peso: "10 kg",
        despacho: "Sucursal A",
        destino: "Sucursal B",
        precio: "$50",
    },
];

const columns = [
    {
        key: "id",
        label: "Id",
    },
    {
        key: "peso",
        label: "Peso",
    },
    {
        key: "despacho",
        label: "Despacho",
    },
    {
        key: "destino",
        label: "Destino",
    },
    {
        key: "precio",
        label: "Precio",
    },
];

const Table = () => {
    return (
        <div>
            <div className="bg-purple flex flex-col items-center p-3 text-white ">
                <h2 className="text-xl font-bold ">Detalles del Envio</h2>
            </div>
            <div className="flex flex-col items-center justify-between ">
                <TableCategory columns={columns} />
                <TableItems items={items} />
            </div>
        </div>
    );
};

export default Table;