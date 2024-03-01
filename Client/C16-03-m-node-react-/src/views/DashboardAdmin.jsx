import StatusBar from "../components/statusBar/StatusBar";
import Table from "../components/tableDetails/Table";
import HeaderNoButtons from "../components/header/HeaderNoButtons";
import AdminStates from "../components/adminStates/AdminStates";
import useUserConfig from "../hooks/useUserConfig";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import services from "../services/api";
import Spinner from "../components/spinner/Spinner";
import { useNavigate } from "react-router";

function DashboardAdmin() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [products, setProducts] = useState();
  const [errorId, setErrorId] = useState(false);
  const [loading, setLoading] = useState(true);
  const { token } = useUserConfig();

  useEffect(() => {
    setLoading(true);
    services
      .getProductData({ id: id })
      .then((res) => {
        if (res && res.product._id !== id) {
          setErrorId(true);
        } else {
          setProducts(res);
          setErrorId(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setErrorId(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (!token) {
    return navigate("/");
  }

  return (
    console.log(token),
    (
      <main className="w-full sm:h-[100vh] min-[360px]:h-auto bg-purpleDark  ">
        <div className=" w-full lg:h-full sm:h-full min-[320px]:h-auto flex flex-col p-2 ">
          <HeaderNoButtons />
          <div className="w-full mt-2 h-full flex flex-col sm:flex-row gap-3">
            <div className="h-full lg:w-1/4 sm:w-1/2 min-[360px]:w-full bg-bgDashboard rounded-[24px]">
              <AdminStates productId={id} setProducts={setProducts} />
            </div>
            <div className="w-full h-full flex flex-col pt-4 gap-5 bg-Amethyst rounded-[24px]">
              {loading ? (
                <Spinner />
              ) : errorId ? (
                <div className="flex flex-col p-6 justify-center gap-5">
                  <h2 className="text-white text-center text-lg font-bold ml-11">
                    {id
                      ? `No se encontró ningún paquete con el ID proporcionado. Por favor, verifique el ID e inténtelo de nuevo.`
                      : "Ingrese el Nro. de seguimiento para actualizar los estados del paquete"}
                  </h2>
                </div>
              ) : (
                <>
                  <StatusBar initialStatus={products} />
                  <Table products={products} />
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    )
  );
}

export default DashboardAdmin;
