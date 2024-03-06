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
  const [destination, setDestination] = useState(null);
  const [sending, setSending] = useState(null);
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
  const handleDestination = (e) => {
    setDestination(e.target.value);
  };

  const handleSending = (e) => {
    setSending(e.target.value);
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
      price: calculatePrice(),
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
            <IoCloseCircleOutline className="text-3xl" />
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
            <div>
              <p>Salida</p>
              <select
                onChange={handleSending}
                value={sending}
                name="originData"
                id=""
                className="sm:w-[300px] text-center border border-gray-300 rounded-[24px] px-4 py-2 bg-greyForm focus:outline-none text-base focus:border-blue-500  placeholder-black input-focus-placeholder::text-green"
              >
                <option value="Base1">Base1</option>
                <option value="Base2">Base2</option>
                <option value="Base3">Base3</option>
              </select>
            </div>
            <div>
              <p>Llegada</p>
              <select
                onChange={handleDestination}
                value={destination}
                name="destinationData"
                id=""
                className="sm:w-[300px] text-center border border-gray-300 rounded-[24px] px-4 py-2 bg-greyForm focus:outline-none text-base focus:border-blue-500  placeholder-black input-focus-placeholder::text-green"
              >
                <option value="Base1">Base1</option>
                <option value="Base2">Base2</option>
                <option value="Base3">Base3</option>
              </select>
            </div>
            {/* <TextInput name="originData" type="text" placeholdertext="Origen" />
            <TextInput
              name="destinationData"
              type="text"
              placeholdertext="Destino"
            /> */}

            {type === "Package" && (
              <>
                <div className="flex flex-col">
                  <label htmlFor="Peso">Peso</label>
                  <input
                    name="weightKg"
                    className="sm:w-[300px] text-center border border-gray-300 rounded-[24px] px-4 py-2 bg-greyForm focus:outline-none text-base focus:border-blue-500  placeholder-black input-focus-placeholder::text-green"
                    type="number"
                    placeholder="Peso (Kg)"
                    value={peso}
                    onChange={setInputPeso}
                  />
                </div>
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
            <p className="w-2/3 text-center border border-gray-300 rounded-[24px] px-4 py-2 bg-greyForm ">
              Precio : $ {calculatePrice()}
            </p>
            <Button text="Listo" bgcolor="bg-green" type="submit" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default NewShipment;
