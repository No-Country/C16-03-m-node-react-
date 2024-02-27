

import StatusBar from "../components/statusBar/StatusBar";
import Table from "../components/tableDetails/Table";
import HeaderNoButtons from "../components/header/HeaderNoButtons";
import AdminStates from "../components/adminStates/AdminStates";


function DashboardAdmin() {
    return (
        <main className="w-full sm:h-[100vh] min-[360px]:h-auto bg-purpleDark  ">
            <div className=" w-full lg:h-full sm:h-full min-[320px]:h-auto flex flex-col p-2 bg-Dark">
                <HeaderNoButtons/>
                <div className="w-full mt-2 h-full flex flex-col sm:flex-row gap-3">
                    <div className="lg:w-1/4 sm:w-1/2 h-full min-[360px]:w-full">
                        <AdminStates />
                    </div>
                    <div className="flex flex-col gap-5 lg:w-3/4 sm:w-1/2 min-[360px]:w-full h-full justify-center bg-Amethyst rounded-[24px]  ">

                        <div className="w-full h-full flex flex-col justify-center pt-10 rounded-lg">
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
