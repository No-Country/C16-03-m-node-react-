import React from "react";
import MyShipments from "../components/myShipments/MyShipments";
import StatusBar from "../components/statusBar/StatusBar";
import Table from "../components/tableDetails/Table";
import Header from '../components/header/Header'

function DashboardClient() {
  return (
    <div className="flex flex-col p-2">
      <Header />

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
