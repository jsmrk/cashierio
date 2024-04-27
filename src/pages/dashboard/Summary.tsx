import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SummaryData } from "@/shared/summaryData";
import UP from "@/assets/dashboard/up.svg";
import DOWN from "@/assets/dashboard/down.svg";

const Summary = () => {
  const formatNumber = (num: number) => {
    return num.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  return (
    <div className="flex gap-5">
      {SummaryData.map((data, index) => (
        <Card key={index} className="w-full">
          <CardHeader className="flex flex-row items-center gap-3 text-grey font-semibold">
            <img src={data.icon} alt="" className="size-8" />
            {data.title}
          </CardHeader>
          <CardContent className="flex items-center justify-evenly gap-3">
            <div className="text-white font-bold text-xl">
              {formatNumber(data.number)}
            </div>
            <div className="flex gap-2 text-xl">
              <div
                className={`${
                  data.percentage > 0 ? "text-green-300" : "text-red-300"
                } flex items-center gap-3`}
              >
                {data.percentage}%
                {data.percentage > 0 ? (
                  <img src={UP} alt="Up Logo" />
                ) : (
                  <img src={DOWN} alt="Down Logo" />
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Summary;
