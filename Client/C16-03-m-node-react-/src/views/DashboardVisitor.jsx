

import HeaderNoButtons from "../components/header/HeaderNoButtons";
import StatusBar from "../components/statusBar/StatusBar";
import Table from "../components/tableDetails/Table";

function DashboardVisitor() {
  return (
    <div className="h-[100vh]  flex flex-col p-2 gap-2 md:gap-4 items-center bg-purpleDark">
      <HeaderNoButtons />
      <div className="flex flex-col mt-2 h-full sm:flex-row gap-5 rounded-[24px] lg:w-3/4 sm:w-3/4 min-[360px]:w-full  bg-Amethyst">
        <div className="flex flex-col justify-center gap-5 w-full">
          <StatusBar />
          <Table />
        </div>
      </div>
    </div>
  );
}

export default DashboardVisitor;
