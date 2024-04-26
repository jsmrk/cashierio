type RecentTransaction = {
  id: number;
  customer: string;
  order: string[];
  totalPayment: number;
  date: Date; // Correct data type for date with time
};

export const recentTransactions: RecentTransaction[] = [
  {
    id: 1,
    customer: "Alice",
    order: ["Noodles", "Sikwati"],
    totalPayment: 125,
    date: new Date("2023-01-05T10:30:00"), // ISO 8601 date format with time
  },
  {
    id: 2,
    customer: "Bob",
    order: ["Pad Thai", "Mango Sticky Rice", "Spring Rolls"],
    totalPayment: 87,
    date: new Date("2023-01-07T14:00:00"),
  },
  {
    id: 3,
    customer: "Charlie",
    order: ["Tom Yum Soup", "Green Curry"],
    totalPayment: 102,
    date: new Date("2023-03-09T08:15:00"),
  },
  {
    id: 4,
    customer: "David",
    order: ["Spring Rolls", "Pineapple Fried Rice"],
    totalPayment: 78,
    date: new Date("2023-05-11T12:45:00"),
  },
  {
    id: 5,
    customer: "Emily",
    order: ["Massaman Curry", "Chicken Satay"],
    totalPayment: 141,
    date: new Date("2024-07-01T09:00:00"),
  },
  {
    id: 6,
    customer: "Fiona",
    order: ["Pad See Ew", "Boat Noodles"],
    totalPayment: 95,
    date: new Date("2024-09-03T17:30:00"),
  },
  {
    id: 7,
    customer: "George",
    order: ["Noodles", "Pad Thai"],
    totalPayment: 138,
    date: new Date("2024-11-05T15:00:00"),
  },
  {
    id: 8,
    customer: "Henry",
    order: ["Mango Sticky Rice", "Tom Yum Soup"],
    totalPayment: 69,
    date: new Date("2024-01-07T19:00:00"),
  },
  {
    id: 9,
    customer: "Isla",
    order: ["Green Curry", "Spring Rolls"],
    totalPayment: 114,
    date: new Date("2024-03-09T10:30:00"),
  },
  {
    id: 10,
    customer: "Jack",
    order: ["Pineapple Fried Rice", "Massaman Curry"],
    totalPayment: 107,
    date: new Date("2024-05-11T13:30:00"),
  },
  {
    id: 11,
    customer: "Zara",
    order: ["Chicken Adobo", "Turon"],
    totalPayment: 98,
    date: new Date("2023-01-10T08:45:00"),
  },
  {
    id: 12,
    customer: "Yuri",
    order: ["Lumpiang Shanghai", "Pancit Canton"],
    totalPayment: 120,
    date: new Date("2023-02-14T11:30:00"),
  },
  {
    id: 13,
    customer: "Xavier",
    order: ["Sinigang", "Buko Pie"],
    totalPayment: 110,
    date: new Date("2023-03-12T07:00:00"),
  },
  {
    id: 14,
    customer: "Willa",
    order: ["Lechon", "Kare-Kare"],
    totalPayment: 145,
    date: new Date("2023-04-18T12:15:00"),
  },
  {
    id: 15,
    customer: "Victor",
    order: ["Halo-Halo", "Arroz Caldo"],
    totalPayment: 85,
    date: new Date("2024-08-05T17:20:00"),
  },
  {
    id: 16,
    customer: "Uma",
    order: ["Chicken Inasal", "Biko"],
    totalPayment: 105,
    date: new Date("2024-10-07T14:40:00"),
  },
  {
    id: 17,
    customer: "Tim",
    order: ["Suman", "Ensaymada"],
    totalPayment: 80,
    date: new Date("2024-12-11T19:00:00"),
  },
  {
    id: 18,
    customer: "Sara",
    order: ["Bibingka", "Palabok"],
    totalPayment: 95,
    date: new Date("2024-02-14T10:50:00"),
  },
  {
    id: 19,
    customer: "Ron",
    order: ["Sisig", "Longganisa"],
    totalPayment: 133,
    date: new Date("2024-04-09T13:25:00"),
  },
  {
    id: 20,
    customer: "Quincy",
    order: ["Pork Barbecue", "Caldereta"],
    totalPayment: 112,
    date: new Date("2024-06-22T15:10:00"),
  },
];
