import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Cashier from "./pages/Cashier";
import Sales from "./pages/Sales";
import Settings from "./pages/Settings";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-screen w-screen bg-dark-100">
      <div className="">
        <Sidebar />
      </div>
      <div className="">
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
