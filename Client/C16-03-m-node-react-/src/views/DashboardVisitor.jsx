

import HeaderNoButtons from "../components/header/HeaderNoButtons";
import StatusBar from "../components/statusBar/StatusBar";
import Table from "../components/tableDetails/Table";
import { useEffect, useState } from "react";
import services from "../services/api";

import { useParams } from "react-router-dom";

function DashboardVisitor() {
  const { id } = useParams();

const [products, setProducts] = useState();

  useEffect(() => {
    services.getProductData({ id: id }).then((res) => {
      console.log(res);
      setProducts(res);
    });
  }, [id]);

  return (
    <div className="h-[100vh]  flex flex-col p-2 gap-2 md:gap-4 items-center bg-purpleDark">
      <HeaderNoButtons />
      <div className="flex flex-col mt-2 h-full sm:flex-row gap-5 rounded-[24px] lg:w-[90%] sm:w-3/4 min-[360px]:w-full  bg-Amethyst">
        <div className="flex flex-col w-full p-6 justify-center gap-5">
          <StatusBar initialStatus= {products}  />
          <Table products={products} />
        </div>
      </div>
    </div>
  );
}

export default DashboardVisitor;
