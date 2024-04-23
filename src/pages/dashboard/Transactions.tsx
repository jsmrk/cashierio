const data = [
  {
    customer: "Alice",
    order: ["Noodles", "Sikwati"],
    totalPayment: 125,
    date: "1-5-23",
  },
  {
    customer: "Bob",
    order: ["Pad Thai", "Mango Sticky Rice", "Spring Rolls"],
    totalPayment: 87,
    date: "1-7-23",
  },
  {
    customer: "Charlie",
    order: ["Tom Yum Soup", "Green Curry"],
    totalPayment: 102,
    date: "3-9-23",
  },
  {
    customer: "David",
    order: ["Spring Rolls", "Pineapple Fried Rice"],
    totalPayment: 78,
    date: "5-11-23",
  },
  {
    customer: "Emily",
    order: ["Massaman Curry", "Chicken Satay"],
    totalPayment: 141,
    date: "7-1-24",
  },
  {
    customer: "Fiona",
    order: ["Pad See Ew", "Boat Noodles"],
    totalPayment: 95,
    date: "9-3-24",
  },
  {
    customer: "George",
    order: ["Noodles", "Pad Thai"],
    totalPayment: 138,
    date: "11-5-24",
  },
  {
    customer: "Henry",
    order: ["Mango Sticky Rice", "Tom Yum Soup"],
    totalPayment: 69,
    date: "1-7-24",
  },
  {
    customer: "Isla",
    order: ["Green Curry", "Spring Rolls"],
    totalPayment: 114,
    date: "3-9-24",
  },
  {
    customer: "Jack",
    order: ["Pineapple Fried Rice", "Massaman Curry"],
    totalPayment: 107,
    date: "5-11-24",
  },
  {
    customer: "Alice",
    order: ["Noodles", "Sikwati"],
    totalPayment: 125,
    date: "1-5-23",
  },
  {
    customer: "Bob",
    order: ["Pad Thai", "Mango Sticky Rice", "Spring Rolls"],
    totalPayment: 87,
    date: "1-7-23",
  },
  {
    customer: "Charlie",
    order: ["Tom Yum Soup", "Green Curry"],
    totalPayment: 102,
    date: "3-9-23",
  },
  {
    customer: "David",
    order: ["Spring Rolls", "Pineapple Fried Rice"],
    totalPayment: 78,
    date: "5-11-23",
  },
  {
    customer: "Emily",
    order: ["Massaman Curry", "Chicken Satay"],
    totalPayment: 141,
    date: "7-1-24",
  },
  {
    customer: "Fiona",
    order: ["Pad See Ew", "Boat Noodles"],
    totalPayment: 95,
    date: "9-3-24",
  },
  {
    customer: "George",
    order: ["Noodles", "Pad Thai"],
    totalPayment: 138,
    date: "11-5-24",
  },
  {
    customer: "Henry",
    order: ["Mango Sticky Rice", "Tom Yum Soup"],
    totalPayment: 69,
    date: "1-7-24",
  },
  {
    customer: "Isla",
    order: ["Green Curry", "Spring Rolls"],
    totalPayment: 114,
    date: "3-9-24",
  },
  {
    customer: "Jack",
    order: ["Pineapple Fried Rice", "Massaman Curry"],
    totalPayment: 107,
    date: "5-11-24",
  },
];

const Transactions = () => {
  return (
    <table className="w-full h-full">
      <thead>
        <tr className="text-xl text-left font-bold border-b border-b-slate-700 pb-7">
          <th className="px-3 py-2">Customer</th>
          <th className="px-3 py-2">Order</th>
          <th className="px-3 py-2">Payment</th>
          <th className="px-3 py-2">Date</th>
        </tr>
      </thead>
      <tbody className="rounded-3xl">
        {data.slice(0, 8).map((item, index) => (
          <tr
            key={index}
            className="hover:cursor-pointer hover:bg-primary rounded-3xl transition-all duration-200"
          >
            <td className="px-3 py-3 ">{item.customer}</td>
            <td className="px-3 py-3">{item.order}</td>
            <td className="px-3 py-3">{item.totalPayment}</td>
            <td className="px-3 py-3">{item.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Transactions;
