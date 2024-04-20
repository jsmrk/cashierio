import CardHeader from "../../components/CardHeader";
import OutlineButton from "../../components/OutlineButton";

type Props = {};

const TopSales = (props: Props) => {
  return (
    <div>
      <CardHeader>Top Sales</CardHeader>
      <OutlineButton>View All</OutlineButton>
    </div>
  );
};

export default TopSales;
