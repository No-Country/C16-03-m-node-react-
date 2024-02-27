
import TextInput from "../TextInput/TextInput";
import Button from "../button/button";

function AdminStates() {
    return (
        <div className="flex flex-col py-4 px-4 w-full sm:min-w-[361px] h-full gap-8 bg-bgDashboard rounded-[24px] text-white">
            <h1 className="flex justify-center text-[24px]">Estados</h1>
            <p className="flex justify-center text-center text-[24px]">ingrese el Nro de seguimiento para actualizar los estados del paquete</p>
            <TextInput type="text" placeholdertext="Nro de seguimiento" />
            <div className="flex flex-col gap-4 items-center w-fit m-auto ">
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
