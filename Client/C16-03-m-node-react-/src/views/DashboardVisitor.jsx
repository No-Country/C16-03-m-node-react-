import React from "react";
import Header from "../components/header/Header";
import StatusBar from "../components/statusBar/StatusBar";
import Table from "../components/tableDetails/Table";

function DashboardVisitor() {
  return (
    <div className="flex flex-col p-2 gap-2 md:gap-4">
      <Header />
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="flex-col gap-5 w-full">
          <StatusBar />
          <Table />
        </div>
      </div>
    </div>
  );
}

export default DashboardVisitor;
