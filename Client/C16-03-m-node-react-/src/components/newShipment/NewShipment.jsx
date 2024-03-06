import Button from "../button/button";
import Logo from "../logo/Logo";
import TextLanding from "../textLanding/TextLanding";
import TextInput from "../TextInput/TextInput";
import { IoCloseCircleOutline } from "react-icons/io5";
import services from "../../services/api";
import { useState } from "react";
import Alert from "sweetalert2";
import useUserConfig from "../../hooks/useUserConfig";

function NewShipment({ handleActive, reRenderProducts }) {
  const [type, setType] = useState("Package");
  const { token } = useUserConfig();

  const [peso, setPeso] = useState(0);

  const calculatePrice = () => {
    if (type === "Letter") return 500;
    return peso * 500;
  };

  const setInputPeso = (e) => {
    setPeso(e.target.value);
  };

  const handleChangeType = (e) => {
    setType(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const inputs = e.target;
    const getInputValue = (inputName) => inputs[inputName]?.value;
    const formData = {
      description: getInputValue("description"),
      originData: getInputValue("originData"),
      destinationData: getInputValue("destinationData"),
      packageData: {
        weightKg: getInputValue("weightKg"),
        heightCm: getInputValue("heightCm"),
        widthCm: getInputValue("widthCm"),
        lengthCm: getInputValue("lengthCm"),
      },
      status: "",
      price: getInputValue("price"),
    };

    try {
      const res = await services.postNewShipment(formData, token);
      Alert.fire({
        icon: "success",
        title: "Envío creado correctamente",
        text: `El número de seguimiento de tu envío es: ${res.productId}`,
        didClose() {
          handleActive();
          reRenderProducts();
        },
      });
    } catch (error) {
      error.json().then((res) => {
        Alert.fire({
          icon: "error",
          title: "Ha ocurrió un error",
          text: `${res.message}`,
        });
      });
    }
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
            {/* <div className="flex gap-4"> */}
            <div>
              <p>Tipo de Envío</p>
              <select
                onChange={handleChangeType}
                value={type}
                name="description"
                id=""
                className="sm:w-[300px] text-center border border-gray-300 rounded-[24px] px-4 py-2 bg-greyForm focus:outline-none text-base focus:border-blue-500  placeholder-black input-focus-placeholder::text-green"
              >
                <option value="Package">Paquete</option>
                <option value="Letter">Carta</option>
              </select>
            </div>
            <TextInput name="originData" type="text" placeholdertext="Origen" />
            <TextInput
              name="destinationData"
              type="text"
              placeholdertext="Destino"
            />

            {type === "Package" && (
              <>
                <input
                  type="number"
                  placeholder="peso.."
                  value={peso}
                  onChange={setInputPeso}
                />
                <TextInput
                  name="heightCm"
                  type="number"
                  placeholdertext="Alto"
                  min={0}
                />
                <TextInput
                  name="widthCm"
                  type="number"
                  placeholdertext="Ancho"
                  min={0}
                />
                <TextInput
                  name="lengthCm"
                  type="number"
                  placeholdertext="Largo"
                  min={0}
                />
              </>
            )}
            <p>Precio : {calculatePrice()}</p>
            <Button text="Listo" bgcolor="bg-green" type="submit" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default NewShipment;
