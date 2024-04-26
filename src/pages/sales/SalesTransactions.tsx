const data = [
    {
        id: 'P345889',
        itemName: 'Noodles Pares',
        qty: '1',
        price: '89',
        time: '9:32 AM',
        date: '9-2-24',
        user: 'Josh',
    },
    {
        id: 'P234765',
        itemName: 'Sardines',
        qty: '9',
        price: '120',
        time: '9:34 AM',
        date: '9-3-24',
        user: 'Josh',
    },
    {
        id: 'P453454',
        itemName: 'Lucky me noodles',
        qty: '5',
        price: '99',
        time: '9:40 AM',
        date: '9-4-24',
        user: 'John',
    },    
    {
        id: 'P093323',
        itemName: 'Candy pops',
        qty: '2',
        price: '98',
        time: '9:48 AM',
        date: '9-4-24',
        user: 'Josh',
    },    
    {
        id: 'P876999',
        itemName: 'Soy sauce',
        qty: '6',
        price: '25',
        time: '9:50 AM',
        date: '9-4-24',
        user: 'John',
    },    
    {
        id: 'P643324',
        itemName: 'Knorr seasoning',
        qty: '8',
        price: '65',
        time: '10:01 AM',
        date: '9-4-24',
        user: 'Josh',
    },    
    {
        id: 'P532442',
        itemName: 'Coke 1.5L',
        qty: '2',
        price: '94',
        time: '10:32 AM',
        date: '9-4-24',
        user: 'Josh',
    },
    {
        id: 'P532442',
        itemName: 'Coke 1.5L',
        qty: '2',
        price: '94',
        time: '10:32 AM',
        date: '9-4-24',
        user: 'Josh',
    },
    {
        id: 'P532442',
        itemName: 'Coke 1.5L',
        qty: '2',
        price: '94',
        time: '10:32 AM',
        date: '9-4-24',
        user: 'Josh',
    },
    {
      id: 'P532442',
      itemName: 'Coke 1.5L',
      qty: '2',
      price: '94',
      time: '10:32 AM',
      date: '9-4-24',
      user: 'Josh',
    },
    {
      id: 'P532442',
      itemName: 'Coke 1.5L',
      qty: '2',
      price: '94',
      time: '10:32 AM',
      date: '9-4-24',
      user: 'Josh',
    },
    {
      id: 'P532442',
      itemName: 'Coke 1.5L',
      qty: '2',
      price: '94',
      time: '10:32 AM',
      date: '9-4-24',
      user: 'Josh',
    },
    {
        id: 'P532442',
        itemName: 'Coke 1.5L',
        qty: '2',
        price: '94',
        time: '10:32 AM',
        date: '9-4-24',
        user: 'Josh',
    },
];

const SalesTransactions = () => {
    return (
        <table className="w-full h-full">
        <thead>
          <tr className="text-xl text-left font-bold border-b border-b-slate-700 pb-7">
            <th className="px-3 py-2">ID</th>
            <th className="px-3 py-2">Item Name</th>
            <th className="px-3 py-2">Qty</th>
            <th className="px-3 py-2">Price</th>
            <th className="px-3 py-2">Time</th>
            <th className="px-3 py-2">Date</th>
            <th className="px-3 py-2">User</th>
          </tr>
        </thead>
        <tbody className="rounded-3xl">
          {data.slice(0, 15).map((item, index) => (
            <tr
              key={index}
              className="hover:cursor-pointer hover:bg-primary rounded-3xl transition-all duration-200"
            >
              <td className="px-3 py-3">{item.id}</td>
              <td className="px-3 py-3">{item.itemName}</td>
              <td className="px-3 py-3">{item.qty}</td>
              <td className="px-3 py-3">{item.price}</td>
              <td className="px-3 py-3">{item.time}</td>
              <td className="px-3 py-3">{item.date}</td>
              <td className="px-3 py-3">{item.user}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
};

export default SalesTransactions;