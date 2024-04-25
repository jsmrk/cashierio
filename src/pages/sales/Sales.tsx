import React from "react";
import SidebarTitle from "../../components/SidebarTitle";
import Card from "../../components/Card";
import SalesTransactions from "./SalesTransactions";

const Sales = () => {
  return (
  <div className="flex flex-col col-span-7 gap-7 ">
  <SidebarTitle className="basis-1/6">Sales</SidebarTitle>
  <Card className="basis-4/6">
      <SalesTransactions />
  </Card>
  <div className="flex flex-col col-span-3 gap-5">
  <Card className="basis-1/2">

  </Card>
    <Card className="basis-1/2">

      </Card>
      <Card className="basis-1/2">
        
      </Card>
    </div>
  </div>
  );
};

export default Sales;
