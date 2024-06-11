export const trimPrice = (price: number) => {
  let newPrice;
  if (price > 0 && price < 1) {
    newPrice = price.toFixed(5);
  } else if (price >= 1 && price < 100) {
    newPrice = price.toFixed(3);
  } else if (price > 100 && price < 1000) {
    newPrice = price.toFixed(2);
  } else if (price > 1000) {
    newPrice = price.toFixed(1);
  } else {
    newPrice = Math.round(price);
  }
  return newPrice;
};
