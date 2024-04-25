interface data {
  id: string;
  product: string;
  stock: number;
  price: number;
}

function generateRandomId(): string {
  // This function generates a random string suitable for an ID
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < 10; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}

const data = [
  {
    id: generateRandomId(),
    product: "Monitor",
    stock: 13,
    price: 5400,
  },
  {
    id: generateRandomId(),
    product: "Keyboard",
    stock: 8,
    price: 35,
  },
  {
    id: generateRandomId(),
    product: "Mouse",
    stock: 15,
    price: 20,
  },
  {
    id: generateRandomId(),
    product: "Headphones",
    stock: 22,
    price: 79,
  },
  {
    id: generateRandomId(),
    product: "Webcam",
    stock: 5,
    price: 45,
  },
  {
    id: generateRandomId(),
    product: "Laptop",
    stock: 3,
    price: 899,
  },
  {
    id: generateRandomId(),
    product: "Tablet",
    stock: 7,
    price: 349,
  },
  {
    id: generateRandomId(),
    product: "Speaker",
    stock: 10,
    price: 99,
  },
  {
    id: generateRandomId(),
    product: "Gaming Chair",
    stock: 4,
    price: 249,
  },
  {
    id: generateRandomId(),
    product: "Printer",
    stock: 6,
    price: 125,
  },
];

const CashierTable = () => {
  return (
    <table className="w-full">
      <thead>
        <tr className="text-xl text-left font-bold border-b border-b-slate-700 pb-7">
          <th className="px-3 py-2">ID</th>
          <th className="px-3 py-2">Product</th>
          <th className="px-3 py-2">Stock</th>
          <th className="px-3 py-2">Price</th>
        </tr>
      </thead>
      <tbody className="rounded-3xl">
        {data.slice(0, 3).map((item, index) => (
          <tr
            key={index}
            className="hover:cursor-pointer hover:bg-primary rounded-3xl transition-all duration-200"
          >
            <td className="px-3 py-3 ">{item.id}</td>
            <td className="px-3 py-3">{item.product}</td>
            <td className="px-3 py-3">{item.stock}</td>
            <td className="px-3 py-3">{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CashierTable;
