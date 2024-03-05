import { useCallback, useEffect, useState } from "react";
import Header from "../components/header/Header";
import MyShipments from "../components/myShipments/MyShipments";
import StatusBar from "../components/statusBar/StatusBar";
import Table from "../components/tableDetails/Table";
import NewShipment from "../components/newShipment/NewShipment";
import api from "../services/api";
import useUserConfig from "./../hooks/useUserConfig";
import { WaitBackground } from "../components/waitBackground/WaitBackground";
import { useNavigate } from "react-router-dom";

function DashboardClient() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [productFilter, setProductFilter] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const { token } = useUserConfig();

  const handleFilter = (productId) => {
    const product = products.find((product) => product._id === productId);
    setProductFilter(product);
  };

  const getProducts = useCallback(() => {
    api.getClientProducts({ token }).then((res) => {
      setIsLoading(false);
      setProducts(res.products);
    });
  }, [token]);

  useEffect(() => {
    getProducts();
  }, [token, getProducts]);

  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  if (!token) return navigate("/");

  return (
    <main className="w-full sm:h-[100vh] min-[360px]:h-auto bg-purpleDark  ">
      <div className=" w-full lg:h-full sm:h-full min-[320px]:h-auto flex flex-col p-2 bg-Dark">
        <Header openModal={handleModalOpen} />
        <div className="w-full mt-2 h-full flex flex-col sm:flex-row gap-3">
          <div className="lg:w-1/4 sm:w-1/2 h-full min-[360px]:w-full">
            <MyShipments
              products={products}
              handleFilter={handleFilter}
              isLoading={isLoading}
            />
          </div>
          <div className="flex flex-col gap-5 lg:w-3/4 sm:w-1/2 min-[360px]:w-full justify-center bg-Amethyst rounded-[24px]  ">
            {products.length && productFilter ? (
              <div className="w-full h-full flex flex-col pt-10 rounded-lg">
                <StatusBar initialStatus={{ product: productFilter }} />
                <Table productFilter={productFilter} />
              </div>
            ) : (
              <WaitBackground
                title="¡Bienvenido al Panel de Control para la Gestión de Envíos!"
                paragraph="Crea un nuevo envío y comienza a gestionarlos"
              />
            )}
          </div>
        </div>
        {isModalVisible && (
          <NewShipment
            reRenderProducts={getProducts}
            handleActive={handleModalClose}
          />
        )}
      </div>
    </main>
  );
}

export default DashboardClient;
