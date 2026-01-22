export const daysAgo = (date) => {
  const today = new Date();
  const past = new Date(date);

  const diffTime = today - past;
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
};
