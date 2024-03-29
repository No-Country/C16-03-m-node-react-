const diccionario = {
  Delivered: "Entregado",
  "In Warehouse": "En Almacén",
  "In Progress": "En Progreso",
  "In Transit": "En Tránsito",
  Cancel: "Cancelado",
  Package: "Paquete",
  Letter: "Carta",
};

const TableItems = ({ items, states }) => {
  return (
    <div className="w-full h-full flex lg:flex-row sm:flex-col min-[320px]:flex-col lg:items-center lg:justify-center">
      <div className="w-full h-full flex lg:flex-row sm:flex-col min-[320px]:flex-col lg:items-center lg:justify-center lg:text-[24px] gap-2 sm:text-sm text-white font-bold">
        {Object.entries(items[0]).map(([key, value]) => {
          const stateColor = states[0][value];
          return (
            <div
              key={key}
              className="lg:w-1/2 min-[320px]:w-auto h-auto p-2 rounded-3xl text-white flex lg:flex-col sm:flex-row items-center justify-center"
              style={{ color: stateColor }}
            >
              {Object.keys(diccionario).includes(value)
                ? diccionario[value]
                : value}
              {!value && "-"}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TableItems;
