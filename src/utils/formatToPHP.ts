export const formatToPHP = (price: number) => {
  const formatted = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
  }).format(price);

  return formatted;
};
