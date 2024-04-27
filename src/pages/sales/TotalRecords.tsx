import CardHeader from "../../components/CardHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";

const TotalRecords = () => {
  return (
    <div>
      <CardHeader>Total Records</CardHeader>
      <div className="flex items-center mt-3">
        <FontAwesomeIcon
          icon={faClipboard}
          className="h-16 w-16 mr-7 mt-10 text-custom-red"
        />
        <div className="text-6xl font-bold mt-9">15</div>
      </div>
    </div>
  );
};

export default TotalRecords;
