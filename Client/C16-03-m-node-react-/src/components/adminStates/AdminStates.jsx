import Button from "../button/button";
import SearchId from "../searchId/SearchId";

function AdminStates() {
  return (
    <div className="flex flex-col py-4 px-4 w-full sm:min-w-[361px] h-full gap-8 text-white">
      <h1 className="flex text-[24px] ">Estados</h1>
      <p className="flex text-center  text-[24px]">
        Ingrese el Nro. de seguimiento para actualizar los estados del paquete
      </p>
      <SearchId ruta="admin" />
      <div className="flex flex-col gap-4 items-center w-fit mx-auto ">
        <Button text="state 1" className="" />
        <Button text="state 2" className="" />
        <Button text="state 3" className="" />
        <Button text="state 4" className="" />
        <Button text="state 5" className="" />
      </div>
    </div>
  );
}

export default AdminStates;
