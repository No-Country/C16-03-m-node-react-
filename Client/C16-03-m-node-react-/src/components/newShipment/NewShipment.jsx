import Button from "../button/button";
import Logo from "../logo/Logo";
import TextLanding from "../textLanding/TextLanding";
import TextInput from "../TextInput/TextInput";
import { IoCloseCircleOutline } from "react-icons/io5"

function NewShipment({ handleActive }) {


  return (
    <div className="fixed inset-0 flex items-center justify-center transition-opacity bg-bgForm min-w-[360px]">
      <div className="relative flex flex-col w-1/3 h-5/6 overflow-auto bg-white rounded-3xl min-w-[360px]">
        <div className="absolute top-0 right-0 mr-4 mt-2">
            <button onClick={() => handleActive()}>
              <IoCloseCircleOutline />
            </button>
        </div>
        <div className="flex flex-col items-center gap-4 p-4 py-8">
          <div>
            <Logo register/>
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
            <TextInput type="text" placeholdertext="Tipo de envío" />
            <TextInput type="number" placeholdertext="Peso" />
            <TextInput type="number" placeholdertext="Alto" />
            <TextInput type="number" placeholdertext="Ancho" />
            <TextInput type="number" placeholdertext="Largo" />
            <TextInput type="text" placeholdertext="Origen" />
            <TextInput type="text" placeholdertext="Destino" />
            <TextInput type="precio" placeholdertext="Precio" />
            <Button
              text="Listo"
              bgcolor="bg-green"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewShipment;
