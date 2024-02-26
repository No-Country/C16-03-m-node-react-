const TableCategory = ({ columns }) => {
  return (
    <div className="w-full h-full flex lg:flex-row sm:flex-col min-[320px]:flex-col lg:items-center lg:justify-center lg:text-lg gap-10 sm:text-sm text-white font-bold   ">
      {columns.map((label, index) => (
        <div
          key={index}
          className="w-full p-2 flex lg:flex-row sm:flex-col items-center justify-center"
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export default TableCategory;
