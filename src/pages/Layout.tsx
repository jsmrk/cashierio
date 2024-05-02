import Sidebar from "@/components/Sidebar";
import { Settings } from "lucide-react";
import { Routes, Route } from "react-router-dom";
import Cashier from "./cashier/Cashier";
import Dashboard from "./dashboard/Dashboard";
import Inventory from "./inventory/Inventory";
import Sales from "./sales/Sales";

export const Layout = () => {
  return (
    <div className="flex h-screen w-screen bg-dark-100">
      <div className="h-full basis-1/12">
        <Sidebar />
      </div>
      <div className="p-5 h-full w-full">
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/cashier" element={<Cashier />}></Route>
          <Route path="/inventory" element={<Inventory />}></Route>
          <Route path="/sales" element={<Sales />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
        </Routes>
      </div>
    </div>
  );
};
