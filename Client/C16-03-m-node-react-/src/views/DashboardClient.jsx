
import MyShipments from "../components/myShipments/MyShipments";
import StatusBar from "../components/statusBar/StatusBar";
import Table from "../components/tableDetails/Table";
import Header from '../components/header/Header'
import Button from "../components/button/button";

function DashboardClient() {
  return (
    <main className="w-full h-[100vh] ">
      <div className=" w-full lg:h-full sm:h-full min-[320px]:h-auto flex flex-col p-2 bg-Dark">
        <Header />
        <div className=" w-full h-auto lg:hidden sm:hidden items-start justify-center gap-5 p-5 min-[360px]:flex ">
          <Button text="Nuevo envío" bgcolor="bg-green" />
          <Button text="Nuevo envío" bgcolor="bg-green" />
          <Button text="Nuevo envío" bgcolor="bg-green" />
        </div>
        <div className="w-full h-full flex flex-col sm:flex-row gap-5">
          <div className="lg:w-1/4 sm:w-1/2 h-full min-[360px]:w-full">
            <MyShipments />
          </div>
          <div className="flex flex-col gap-5 lg:w-3/4 sm:w-1/2 min-[360px]:w-full h-full justify-around bg-Amethyst rounded-lg  ">
            <div className=" w-full h-auto lg:flex sm:flex items-start justify-center gap-5 p-5 min-[360px]:hidden ">
              <Button text="Nuevo envío" bgcolor="bg-green" />
              <Button text="Nuevo envío" bgcolor="bg-green" />
              <Button text="Nuevo envío" bgcolor="bg-green" />
            </div>
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
