import Header from "../components/header/Header";
import StatusBar from "../components/statusBar/StatusBar";
import Table from "../components/tableDetails/Table";

import { useParams } from "react-router-dom";

function DashboardVisitor() {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="h-[100vh]  flex flex-col p-2 gap-2 md:gap-4 bg-purpleDark">
      <Header />
      <div className="flex flex-col mt-2 h-full sm:flex-row gap-5 rounded-[24px] bg-Amethyst">
        <div className="flex flex-col justify-center gap-5 w-full">
          <StatusBar />
          <Table />
        </div>
      </div>
    </div>
  );
}

export default DashboardVisitor;
