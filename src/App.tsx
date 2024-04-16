import Sidebar from "./components/Sidebar"


function App() {


  return (
    <div className="grid grid-cols-6 h-screen w-screen">
     <div className="col-span-1"><Sidebar/></div>
     <div className="bg-red-300 col-span-5">Layout</div>
    </div>
  )
}

export default App
