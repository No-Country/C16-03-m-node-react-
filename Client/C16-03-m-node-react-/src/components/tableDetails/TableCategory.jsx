

const TableCategory = ({ columns }) => {
    return (

        <div className="w-full bg-Amethyst flex items-center justify-around gap-3 text-lg text-black">
            {columns.map(column => (
                <div key={column.key} className="">
                    {column.label}
                </div>
            ))}
        </div>

    );
};

export default TableCategory;