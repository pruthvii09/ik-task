export function formatDate(inputDate) {
  const dateObj = new Date(inputDate);
  const dateOptions = { month: "short", day: "2-digit" };
  const day = dateObj.toLocaleDateString("en-US", { weekday: "long" });
  const date = dateObj.toLocaleDateString("en-US", dateOptions);
  return { day, date };
}
