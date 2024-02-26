
import MyShipments from "../components/myShipments/MyShipments";
import StatusBar from "../components/statusBar/StatusBar";
import Table from "../components/tableDetails/Table";
import Header from '../components/header/Header'


function DashboardClient() {
  return (
    <main className="w-full lg:h-[100vh] sm:h-[100vh] min-[360px]:h-auto bg-purpleDark  ">
      <div className=" w-full lg:h-full sm:h-full min-[320px]:h-auto flex flex-col p-2 bg-Dark">
        <Header />
        <div className="w-full mt-2 h-full flex flex-col sm:flex-row gap-3">
          <div className="lg:w-1/4 sm:w-1/2 h-full min-[360px]:w-full">
            <MyShipments />
          </div>
          <div className="flex flex-col gap-5 lg:w-3/4 sm:w-1/2 min-[360px]:w-full h-full justify-around bg-Amethyst rounded-[24px]  ">

            <div className="w-full h-full flex flex-col justify-around rounded-lg">
              <StatusBar />
              <Table />
            </div>
          </div>
        </div>
      </div>
    </main>

  );
}

export default DashboardClient;
