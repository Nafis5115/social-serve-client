export const formattedDate = (date) => {
  const dateObj = new Date(date); // ✅ convert to Date
  const options = { year: "numeric", month: "long", day: "numeric" };
  return dateObj.toLocaleDateString("en-US", options);
};
