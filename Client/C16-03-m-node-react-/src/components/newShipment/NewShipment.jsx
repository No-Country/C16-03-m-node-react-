import Button from "../button/button";
import Logo from "../logo/Logo";
import TextLanding from "../textLanding/TextLanding";
import TextInput from "../TextInput/TextInput";
import { IoCloseCircleOutline } from "react-icons/io5";
import services from "../../services/api";
import { useState } from "react";

function NewShipment({ handleActive }) {
  const [type, setType] = useState(null);
  const token = localStorage.getItem("token");
  const [product, setProduct] = useState({
    description: "",
    originData: "",
    destinationData: "",
    packageData: {
      weightKg: 0,
      heightCm: 0,
      widthCm: 0,
      lengthCm: 0,
    },
    status: "In progress",
    price: 0,
  });

  const handleChangeType = (e) => {
    setType(e.target.value);
  };

  const handleChange = (e) => {
    if (
      ["weightKg", "heightCm", "widthCm", "lengthCm"].includes(e.target.name)
    ) {
      setProduct({
        ...product,
        packageData: {
          ...product.packageData,
          [e.target.name]: e.target.value,
        },
      });
    } else {
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      });
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await services.postNewShipment(product);
    handleActive();
  };

  return (
    <form
      onSubmit={submitForm}
      className="fixed inset-0 flex items-center justify-center transition-opacity bg-bgForm min-w-[360px]"
    >
      <div className="relative flex flex-col w-1/3 h-5/6 bg-white rounded-3xl min-w-[360px]">
        <div className="absolute top-0 right-0 mr-4 mt-2">
          <button onClick={() => handleActive()}>
            <IoCloseCircleOutline />
          </button>
        </div>
        <div className="flex flex-col items-center gap-4 p-4 my-6 overflow-auto overscroll-contain">
          <div>
            <Logo register />
          </div>
          <div>
            <TextLanding
              titulo="Nuevo envío"
              parrafo="Introduzca los datos de envío"
              textColor="text-black"
              variant="form"
            />
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="flex gap-4">
              <p>Descripción</p>
              <select
                onChange={handleChangeType}
                value={type}
                name="description"
                id=""
              >
                <option value="package">Paquete</option>
                <option value="letter">Carta</option>
              </select>
            </div>
            <TextInput
              name="originData"
              type="text"
              placeholdertext="Origen"
              handleChange={handleChange}
            />
            <TextInput
              name="destinationData"
              type="text"
              placeholdertext="Destino"
              handleChange={handleChange}
            />

            {type === "package" && (
              <>
                <TextInput
                  name="weightKg"
                  type="number"
                  placeholdertext="Peso"
                  handleChange={handleChange}
                />
                <TextInput
                  name="heightCm"
                  type="number"
                  placeholdertext="Alto"
                  handleChange={handleChange}
                />
                <TextInput
                  name="widthCm"
                  type="number"
                  placeholdertext="Ancho"
                  handleChange={handleChange}
                />
                <TextInput
                  name="lengthCm"
                  type="number"
                  placeholdertext="Largo"
                  handleChange={handleChange}
                />
              </>
            )}
            <TextInput
              name="price"
              type="number"
              placeholdertext="Precio"
              handleChange={handleChange}
            />
            <Button text="Listo" bgcolor="bg-green" type="submit" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default NewShipment;
