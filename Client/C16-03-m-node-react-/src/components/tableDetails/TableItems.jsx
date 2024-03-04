const diccionario = {
  Delivered: "Entregado",
  "In Warehouse": "En almacen",
  "In Progress": "En progreso",
  "In Transit": "En tránsito",
  Cancel: "Cancelado",
};

const TableItems = ({ items, states }) => {
  return (
    <div className="w-full h-full flex lg:flex-row sm:flex-col min-[320px]:flex-col lg:items-center lg:justify-center">
      <div className="w-full h-full flex lg:flex-row sm:flex-col min-[320px]:flex-col lg:items-center lg:justify-center lg:text-lg gap-2 sm:text-sm text-white font-bold">
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
              {!value && "Pendiente"}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TableItems;
