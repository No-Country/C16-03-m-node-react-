import HeaderNoButtons from "../components/header/HeaderNoButtons";
import StatusBar from "../components/statusBar/StatusBar";
import Table from "../components/tableDetails/Table";
import { useEffect, useState } from "react";
import services from "../services/api";

import { Link, useParams } from "react-router-dom";

function DashboardVisitor() {
  const { id } = useParams();
  const [products, setProducts] = useState();
  const [errorId, setErrorId] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    services
      .getProductData({ id: id })
      .then((res) => {
        console.log(res);
        if (res && res.product._id !== id) {
          setErrorId(true);
        } else {
          setProducts(res);
        }
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setErrorId(true);
      })
      .finally(() => {
        setLoading(false); // Se establece loading en false independientemente del resultado de la petición
      });
  }, [id]);

  return (
    <div className="h-[100vh] flex flex-col p-2 gap-2 md:gap-4 items-center bg-purpleDark">
      <HeaderNoButtons />
      <div className="flex flex-col mt-2 h-full sm:flex-row gap-5 rounded-[24px] lg:w-[90%] sm:w-3/4 min-[360px]:w-full bg-Amethyst">
        <div className="flex flex-col w-full p-6 justify-center gap-5">
          {loading ? (
            <div className="border-dotted w-24 h-24 border-8 border-bgForm rounded-full animate-spin mx-auto"></div>
          ) : errorId ? (
            <div className="flex flex-col w-full p-6 justify-center gap-5">
              <h2 className="text-pink text-center text-xl font-bold ml-11">
                El id no existe
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
            <>
              <StatusBar initialStatus={products} />
              <Table products={products} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardVisitor;
