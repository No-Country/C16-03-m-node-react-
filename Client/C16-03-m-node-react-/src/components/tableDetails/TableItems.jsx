const TableItems = ({ items, states }) => {
  return (
    // console.log(items),
    <div className="w-full h-full flex lg:flex-row sm:flex-col min-[320px]:flex-col lg:items-center lg:justify-center">
      {items.map((item) => (
        <div
          key={item.id}
          className="w-full  flex lg:flex-row sm:flex-col min-[320px]:flex-col min-[320px]:text-xs items-center justify-center lg:text-md gap-10 sm:text-sm text-black"
        >
          {Object.entries(item).map(([key, value]) => {
            const stateColor = states[0][value];
            // const backgroundColor = stateColor || "transparent ";
            return (
              <div
                key={key}
                className="lg:w-1/2 min-[320px]:w-auto h-auto p-2 rounded-lg text-white flex lg:flex-col sm:flex-row items-center justify-center"
                style={{ color : stateColor }}
                // style={{ backgroundColor }}
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
