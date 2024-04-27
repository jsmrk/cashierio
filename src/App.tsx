import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Sales from "./pages/sales/Sales";
import Settings from "./pages/Settings";
import Sidebar from "./components/Sidebar";
import Cashier from "./pages/cashier/Cashier";

function App() {
  return (
    <div className="flex h-screen w-screen bg-dark-100">
      <div className="h-full basis-1/12">
        <Sidebar />
      </div>
      <div className="p-5 h-full w-full">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/cashier" element={<Cashier />}></Route>
          <Route path="/sales" element={<Sales />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
