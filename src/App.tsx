import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="bg-dark-100 col-span-11"></div>
    </div>
  );
}

export default App;
