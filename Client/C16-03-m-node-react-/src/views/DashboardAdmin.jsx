import StatusBar from "../components/statusBar/StatusBar";
import Table from "../components/tableDetails/Table";
import HeaderNoButtons from "../components/header/HeaderNoButtons";
import AdminStates from "../components/adminStates/AdminStates";
import useToken from "../hooks/useToken";

function DashboardAdmin() {
  const { token } = useToken();
  
  return (
    <main className="w-full sm:h-[100vh] min-[360px]:h-auto bg-purpleDark  ">
      <div className=" w-full lg:h-full sm:h-full min-[320px]:h-auto flex flex-col p-2 bg-Dark">
        <HeaderNoButtons />
        <div className="w-full mt-2 h-full flex flex-col sm:flex-row gap-3">
          <div className="h-full lg:w-1/4 sm:w-1/2 min-[360px]:w-full bg-bgDashboard rounded-[24px]">
            <AdminStates />
          </div>
          <div className="flex flex-col gap-5 lg:w-3/4 sm:w-1/2 min-[360px]:w-full justify-center bg-Amethyst rounded-[24px]  ">
            <div className="w-full h-full flex flex-col  pt-10 rounded-3xl">
              <StatusBar />
              <Table />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DashboardAdmin;
