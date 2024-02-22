

function TextInput({ placeholdertext, type }) {
    return (

    <>
        <input
            type={type}
            className="w-350 h-50 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none text-base focus:border-blue-500 placeholder-black"
            placeholder={placeholdertext}
        />
    </>

    );
}

export default TextInput