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
      <div className=" w-full lg:h-full sm:h-full min-[320px]:h-auto flex flex-col p-2 bg-Dark">
        <HeaderNoButtons />
        <div className="w-full mt-2 h-full flex flex-col sm:flex-row gap-3">
          <div className="h-full lg:w-1/4 sm:w-1/2 min-[360px]:w-full bg-bgDashboard rounded-[24px]">
            <AdminStates />
          </div>
          <div className="w-full h-full flex flex-col pt-4 gap-5">
            {loading ? (
              <Spinner />
            ) : (
              <div className="flex flex-col gap-5  sm:w-full h-full min-[360px]:w-full justify-center bg-Amethyst rounded-[24px]  ">
                <StatusBar initialStatus={products} />
                <Table products={products} />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default DashboardAdmin;
