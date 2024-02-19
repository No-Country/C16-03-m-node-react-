
const TableItems = ({ items, states }) => {
    return (
        <div className="w-full flex">
            {items.map(item => (
                <div key={item.id} className="w-full flex items-center justify-around gap-3 text-lg text-black">
                    {Object.entries(item).map(([key, value]) => {
                        const stateColor = states[0][value];
                        const backgroundColor = stateColor || 'transparent'; 

                        return (
                            <div key={key} className="w-1/2 h-auto p-2 rounded-lg bg-white flex items-center justify-center" style={{ backgroundColor }}>
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
