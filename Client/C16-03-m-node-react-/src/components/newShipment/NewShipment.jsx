import Button from "../button/button";
import Logo from "../logo/Logo";
import TextLanding from "../textLanding/TextLanding";
import TextInput from "../TextInput/TextInput";

function NewShipment({ handleActive }) {


  return (
    <div className="fixed inset-0 flex items-center justify-center transition-opacity bg-bgForm">
      <div className="relative flex flex-col w-1/3 h-5/6 overflow-auto bg-white rounded-3xl min-w-[450px]">
        <div className="absolute top-0 right-0 mr-4 mt-2">
          <button onClick={() => handleActive()}>x</button>
        </div>
        <div className="flex flex-col items-center gap-16 p-4 py-8">
          <div>
            <Logo />
          </div>
          <div>
            <TextLanding
              titulo="Nuevo envío"
              parrafo="Introduzca los datos de envío"
              textColor="text-black"
              variant="form"
            />
          </div>
          <div className="flex flex-col gap-6 items-center">
            <TextInput type="text" placeholdertext="Tipo de envío" />
            <TextInput type="number" placeholdertext="Peso" />
            <TextInput type="text" placeholdertext="Despacho" />
            <TextInput type="text" placeholdertext="Destino" />
            <TextInput type="text" placeholdertext="Nombre del destinatario" />
            <TextInput type="number" placeholdertext="Precio" />
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
