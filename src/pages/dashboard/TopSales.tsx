import CardHeader from "../../components/CardHeader";
import OutlineButton from "../../components/OutlineButton";
import TopSalesList from "./TopSalesList";

const data = [
  {
    imgUrl: "/src/assets/dishes/1.svg",
    name: "Spicy seasoned seafood noodles",
    sales: 200,
  },
  {
    imgUrl: "/src/assets/dishes/2.svg",
    name: "Salted pasta with mushroom sauce",
    sales: 120,
  },
  {
    imgUrl: "/src/assets/dishes/3.svg",
    name: "Beef dumpling in hot and sour soup",
    sales: 80,
  },
];

const TopSales = () => {
  return (
    <div>
      <CardHeader>Top Sales</CardHeader>
      <TopSalesList data={data}></TopSalesList>
      <OutlineButton>View All</OutlineButton>
    </div>
  );
};

export default TopSales;
