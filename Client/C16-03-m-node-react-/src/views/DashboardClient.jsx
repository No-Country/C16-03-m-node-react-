import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import MyShipments from "../components/myShipments/MyShipments";
import StatusBar from "../components/statusBar/StatusBar";
import Table from "../components/tableDetails/Table";
import NewShipment from "../components/newShipment/NewShipment";
import api from "../services/api";
import useUserConfig from "./../hooks/useUserConfig";

function DashboardClient() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [productFilter, setProductFilter] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { token } = useUserConfig();

  const handleFilter = (productId) => {
    const product = products.find((product) => product._id === productId);
    setProductFilter(product);
  };

  useEffect(() => {
    api.getClientProducts({ token }).then((res) => {
      setIsLoading(false);
      setProducts(res.products);
    });
  }, [token]);

  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };
  console.log(productFilter);

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
            <div className="w-full h-full flex flex-col pt-10 rounded-lg">
              <StatusBar initialStatus={{ product: productFilter }} />
              <Table productFilter={productFilter} />
            </div>
          </div>
        </div>
        {isModalVisible && <NewShipment handleActive={handleModalClose} />}
      </div>
    </main>
  );
}

export default DashboardClient;
