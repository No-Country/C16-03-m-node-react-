import StatusBar from "../components/statusBar/StatusBar";
import Table from "../components/tableDetails/Table";
import HeaderNoButtons from "../components/header/HeaderNoButtons";
import AdminStates from "../components/adminStates/AdminStates";
import useToken from "../hooks/useToken";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import services from "../services/api";
import Spinner from "../components/spinner/Spinner";
import { Link } from "react-router-dom";

function DashboardAdmin() {
  const { id } = useParams();
  const [products, setProducts] = useState();
  const [errorId, setErrorId] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    services
      .getProductData({ id: id })
      .then((res) => {
        console.log(res.product._id, id);
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

  const { token } = useToken();
  console.log(token);
  console.log(errorId);
  return (
    <main className="w-full sm:h-[100vh] min-[360px]:h-auto bg-purpleDark  ">
      <div className=" w-full lg:h-full sm:h-full min-[320px]:h-auto flex flex-col p-2 ">
        <HeaderNoButtons />
        <div className="w-full mt-2 h-full flex flex-col sm:flex-row gap-3">
          <div className="h-full lg:w-1/4 sm:w-1/2 min-[360px]:w-full bg-bgDashboard rounded-[24px]">
            <AdminStates />
          </div>
          <div className="w-full h-full flex flex-col pt-4 gap-5 bg-Amethyst rounded-[24px]">
            {loading ? (
              <Spinner />
            ) : errorId ? (
              <div className="flex flex-col p-6 justify-center gap-5">
                <h2 className="text-pink text-center text-xl font-bold ml-11">
                  El id no existe
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
  );
}

export default DashboardAdmin;
