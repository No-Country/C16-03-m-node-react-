import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function TextInput({
  placeholdertext,
  type,
  name,
  handleChange,
  min,
  max,
  pattern,
  required,
}) {
  const [inputValue, setInputValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    handleChange ? handleChange(newValue) : null;
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="relative">
      <input
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        className="sm:w-[300px] text-center border border-gray-300 rounded-[24px] px-4 py-2 focus:outline-none text-base focus:border-blue-500  placeholder-black input-focus-placeholder::text-green"
        placeholder={placeholdertext}
        value={inputValue}
        onChange={handleInputChange}
        min={min}
        max={max}
        pattern={pattern}
        required={required}
        name={name}
      />
      {type === "password" && (
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
          onClick={togglePasswordVisibility}
          type="button"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      )}
    </div>
  );
}

export default TextInput;
