

const TableItems = ({ items }) => {
    return (
        <div className="w-full flex bg-green ">
            {items.map(item => (
                <div key={item.key} className="w-full flex items-center justify-around gap-3 text-lg text-black">
                    {Object.entries(item).map(([key, value]) => (
                        <div key={key} className="table-cell">
                            {value}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default TableItems