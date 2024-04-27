import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardHeader from "../../components/CardHeader";
import { faClipboard, faPesoSign } from "@fortawesome/free-solid-svg-icons";

const TotalSales = () => {
  return (
    <div>
      <CardHeader>Total Records</CardHeader>
      <div className="flex items-center mt-3">
        <FontAwesomeIcon
          icon={faPesoSign}
          style={{color : "#2bf338"}}
          className="h-16 w-16 mr-7 mt-10 text-custom-red"
        />
        <div className="text-6xl font-bold mt-9">199.50</div>
      </div>
    </div>
  );
};

export default TotalSales;
