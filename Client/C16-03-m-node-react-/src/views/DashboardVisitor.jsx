import HeaderNoButtons from "../components/header/HeaderNoButtons";
import StatusBar from "../components/statusBar/StatusBar";
import Table from "../components/tableDetails/Table";
import { useEffect, useState } from "react";
import services from "../services/api";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/spinner/Spinner";

function DashboardVisitor() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState();
  const [errorId, setErrorId] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await services.getProductData({ id: id });
        setProductData(data);
        setLoading(false);
        setErrorId(false);
      } catch (error) {
        error.json().then(() => {
          setLoading(false);
          setErrorId(true);
        });
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="h-[100vh] flex flex-col p-2 gap-2 md:gap-4 items-center bg-purpleDark">
      <HeaderNoButtons />
      <div className="flex flex-col mt-2 h-full sm:flex-row gap-5 rounded-[24px] lg:w-[90%] sm:w-3/4 min-[360px]:w-full bg-Amethyst">
        <div className="w-full h-full flex flex-col pt-4 gap-5">
          {loading ? (
            <Spinner />
          ) : errorId ? (
            <div className="flex flex-col mt-2 h-full sm:flex-row gap-5 rounded-[24px] lg:w-[90%] sm:w-3/4 min-[360px]:w-full bg-Amethyst">
              <h2 className="text-white  text-center text-lg font-bold ml-11">
                {`No se encontró ningún paquete con el ID proporcionado. Por favor, verifique el ID e inténtelo de nuevo.`}
              </h2>
              <Link
                className="text-green text-center text-lg"
                to="/"
                cursor="pointer"
              >
                Volver a inicio
              </Link>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col justify-around items-center space-y-4">
              <StatusBar initialStatus={productData} />
              <Table productFilter={productData.product} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardVisitor;
