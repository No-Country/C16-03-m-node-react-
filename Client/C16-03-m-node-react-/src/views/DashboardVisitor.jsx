import Header from "../components/header/Header";
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
    <div className="h-[100vh]  flex flex-col p-2 gap-2 md:gap-4 bg-purpleDark">
      <Header />
      <div className="flex flex-col mt-2 h-full sm:flex-row gap-5 rounded-[24px] bg-Amethyst">
        <div className="flex flex-col justify-center gap-5 w-full">
          <StatusBar />
          <Table products={products} />
        </div>
      </div>
    </div>
  );
}

export default DashboardVisitor;
