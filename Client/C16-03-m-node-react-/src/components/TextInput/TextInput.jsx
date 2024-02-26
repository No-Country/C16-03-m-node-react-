function TextInput({ placeholdertext, type }) {
  const handleKeyDown = (event) => {
    if (type === "number" && event.key === "-") {
      event.preventDefault();
    }
  };

  const isNumberType = type === "number" || type === "precio";
  const isReadOnly = type === "precio";

  return (
    <>
      <style>{`
                .input-focus-placeholder::placeholder {
                    color: #666;
                }

                .input-focus-placeholder:focus::placeholder {
                    color: #999;
                }
            `}</style>

      <input
        type={isNumberType ? "number" : "text"}
        className="w-350 h-50 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none text-base focus:border-blue-500 placeholder-black input-focus-placeholder"
        placeholder={placeholdertext}
        {...(isNumberType ? { min: "0" } : {})}
        onKeyDown={handleKeyDown}
        readOnly={isReadOnly}
      />
    </>
  );
}

export default TextInput;
