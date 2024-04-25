import Card from "@/components/Card";
import SidebarTitle from "@/components/SidebarTitle";

const Cashier = () => {
  return (
    <div className="h-full w-full grid grid-cols-3 gap-7 text-white">
      {/* Left */}
      <div className="flex flex-col col-span-2 gap-5">
        <div>
          <SidebarTitle className={""}>Jess Mark A. Baguio</SidebarTitle>
        </div>
        <div></div>
      </div>
      {/* Right */}
      <Card className="flex flex-col col-span-1 gap-5">2</Card>
    </div>
  );
};

export default Cashier;
