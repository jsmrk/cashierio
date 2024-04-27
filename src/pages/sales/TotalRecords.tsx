import CardHeader from "../../components/CardHeader";
import records from "../../assets/sales-icons/records.png";

const TotalRecords = () => {
  return (
    <div className="flex items-center">
      <img
        src={records}
        alt="Sales Records Icon"
        className="h-16 w-16 mr-4"
      />
      <CardHeader>Total Records</CardHeader>
      <div className="text-6xl font-bold mt-10">15</div>
    </div>
  );
};

export default TotalRecords;
