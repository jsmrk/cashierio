import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardHeader from "../../components/CardHeader";
import { faBoxesStacked } from "@fortawesome/free-solid-svg-icons";

const TotalQuantity = () => {
  return (
    <div>
      <CardHeader>Total Quantity</CardHeader>
      <div className="flex items-center mt-3">
        <FontAwesomeIcon
          icon={faBoxesStacked}
          style={{ color: "#987143" }}
          className="h-16 w-16 mr-7 mt-10 text-custom-red"
        />
        <div className="text-6xl font-bold mt-9">25</div>
      </div>
    </div>
  );
};
export default TotalQuantity;
