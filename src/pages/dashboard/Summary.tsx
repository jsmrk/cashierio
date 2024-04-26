import Card from "../../components/Card";

interface SummaryDataItem {
  title: string;
  icon: string;
  percentage: number;
  number: number;
}

const summaryData: SummaryDataItem[] = [
  {
    title: "Total Revenue",
    icon: "/src/assets/dashboard/Coin.svg",
    percentage: 32.4,
    number: 10243.0,
  },
  {
    title: "Total Dish Ordered",
    icon: "/src/assets/dashboard/Order.svg",
    percentage: -12.4,
    number: 23456.0,
  },
  {
    title: "Total Customer",
    icon: "/src/assets/dashboard/Customer.svg",
    percentage: 2.4,
    number: 1234,
  },
];

const Summary = () => {
  const formatNumber = (num: number) => {
    // Function to format number with commas
    return num.toLocaleString("en-US", {
      minimumFractionDigits: 0, // No decimals
      maximumFractionDigits: 0,
    });
  };

  return (
    <div className="w-full h-full flex gap-7">
      {summaryData.map((data, index) => (
        <Card
          key={index}
          className="basis-1/3 flex flex-col justify-between gap-4"
        >
          <div className="flex gap-3 justify-start items-center">
            <div className="bg-dark-100 p-3 rounded-xl">
              <img
                src={data.icon}
                alt={`${data.title} icon`}
                className="size-7 text-green-300"
              />
            </div>
            <div
              className={`${
                data.percentage > 0 ? "text-green-300" : "text-red-300"
              } text-xl`}
            >
              {data.percentage > 0 ? "+" : ""}
              {data.percentage} %{" "}
            </div>
            <div>
              {data.percentage > 0 ? (
                <img
                  src="/src/assets/dashboard/up.svg"
                  alt="up icon"
                  className="size-7"
                />
              ) : (
                <img
                  src="/src/assets/dashboard/down.svg"
                  alt="down icon"
                  className="size-7"
                />
              )}
            </div>
          </div>
          <div className="text-3xl font-bold">{formatNumber(data.number)}</div>
          <div className="text-grey text-xl">{data.title}</div>
        </Card>
      ))}
    </div>
  );
};

export default Summary;
