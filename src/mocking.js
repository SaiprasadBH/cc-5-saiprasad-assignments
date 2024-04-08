import assert from "assert";

const businessHours = [9, 17];

// good practice with data injection
export default function isValidPurchase(date) {
  assert(date instanceof Date, "Argument must be a date");

  const currentHour = date.getHours();
  const [open, close] = businessHours;

  if (currentHour > open && currentHour < close) return { message: "Success" };

  return { message: "Error" };
}
