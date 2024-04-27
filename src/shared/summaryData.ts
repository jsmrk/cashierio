interface SummaryData {
  title: string;
  icon: string;
  percentage: number;
  number: number;
}

export const SummaryData: SummaryData[] = [
  {
    title: "Today's Revenue",
    icon: "/src/assets/dashboard/Coin.svg",
    percentage: 32.4,
    number: 10243.0,
  },
  {
    title: "Today's Sold",
    icon: "/src/assets/dashboard/Order.svg",
    percentage: -12.4,
    number: 23456.0,
  },
  {
    title: "Today's Customer",
    icon: "/src/assets/dashboard/Customer.svg",
    percentage: 2.4,
    number: 1234,
  },
];
