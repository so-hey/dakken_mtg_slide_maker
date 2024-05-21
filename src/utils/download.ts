const dateToFlieName = (date: Date) => {
  return `${date.getFullYear}${date.getMonth() + 1}${date.getDate().toString().padStart(2, "0")}`;
};
