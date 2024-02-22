const TableItems = ({ items, states }) => {
  return (
    <div className="w-full h-full flex lg:flex-row sm:flex-col min-[320px]:flex-col  items-center justify-center">
      {items.map((item) => (
        <div
          key={item.id}
          className="w-full  flex lg:flex-row sm:flex-col min-[320px]:flex-col min-[320px]:text-xs items-center justify-center lg:text-lg gap-10 sm:text-sm text-black"
        >
          {Object.entries(item).map(([key, value]) => {
            const stateColor = states[0][value];
            const backgroundColor = stateColor || "transparent";
            return (
              <div
                key={key}
                className="lg:w-1/2 min-[320px]:w-auto h-auto p-2 rounded-lg bg-white flex lg:flex-col sm:flex-row items-center justify-center"
                style={{ backgroundColor }}
              >
                {value}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default TableItems;
