import React from "react";
import MyShipments from "../components/myShipments/MyShipments";
import StatusBar from "../components/statusBar/StatusBar";
import Table from "../components/tableDetails/Table";

function DashboardClient() {
  return (
    <div className="flex flex-col p-5 gap-5">
      <div className="flex justify-between">
        {/* navBar y botones */}
        <div className="bg-Amethyst w-1/2 max-w-[270px] h-[150px] "></div>
      </div>

      <div className="flex flex-col sm:flex-row gap-5">
        <div>
          <MyShipments />
        </div>
        <div className="flex ms:flex-col gap-5">
          <StatusBar />
          <Table />
        </div>
      </div>
    </div>
  );
}

export default DashboardClient;
