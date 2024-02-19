
const TableCategory = ({ columns }) => {
    return (
        <div className="w-full  flex items-center justify-around gap-3 text-lg text-black font-bold">
            {columns.map((label, index) => (
                <div key={index} className="w-1/2 h-auto p-2  flex items-center justify-center">
                    {label}
                </div>
            ))}
        </div>
    );
};

export default TableCategory;