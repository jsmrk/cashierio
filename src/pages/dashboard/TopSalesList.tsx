type Props = {
  data: {
    imgUrl: string;
    name: string;
    sales: number;
  }[];
};

const TopSalesList = ({ data }: Props) => {
  return (
    <div className="py-5">
      {data.map((data) => (
        <div key={data.imgUrl} className="flex gap-5 py-3 items-center">
          <div>
            <img src={data.imgUrl} alt={data.name} />
          </div>
          <div>
            <div className="font-bold">{data.name}</div>
            <div className="text-grey">{data.sales} dishes sales</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopSalesList;
