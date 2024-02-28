import Button from "../button/button";
import SearchId from "../searchId/SearchId";
import services from "../../services/api";
import useToken from "./../../hooks/useToken";

function AdminStates({ productId = "", setProducts }) {
  const { token } = useToken();
  const recive = async () => {
    const status = "In Warehouse";
    services.sendToFirstBase({ id: productId, status, token }).then((res) => {
      if (res.status === 200) {
        services.getProductData({ id: productId }).then((data) => {
          setProducts(data);
        });
        alert(res.message);
      } else {
        alert(res.message);
      }
    });
  };

  const updateState = async (state) => {
    services
      .updateProductState({ id: productId, status: state, token })
      .then((res) => {
        if (res.status === 200) {
          services.getProductData({ id: productId }).then((data) => {
            setProducts(data);
          });
          alert(res.message);
        } else {
          alert(res.message);
        }
      });
  };

  return (
    <div className="flex flex-col py-4 px-4 w-full sm:min-w-[361px] h-full gap-8 text-white">
      <h1 className="flex text-[24px] ">Estados</h1>
      <p className="flex text-center  text-[24px]">
        Ingrese el Nro. de seguimiento para actualizar los estados del paquete
      </p>
      <SearchId ruta="admin" />
      <div className="flex flex-col gap-4 items-center w-fit mx-auto  text-black ">
        <Button
          text="Recibir despacho"
          className="text-[17px]"
          onClick={recive}
        />
        <Button
          text="En progreso"
          className="text-[17px]"
          onClick={() => updateState("In Progress")}
        />
        <Button
          text="En transito"
          className="text-[17px]"
          onClick={() => updateState("In Transit")}
        />
        <Button
          text="Entregado"
          className="text-[17px]"
          onClick={() => updateState("Delivered")}
        />
      </div>
    </div>
  );
}

export default AdminStates;
