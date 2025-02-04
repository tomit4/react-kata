const getOrdinalSuffix = (day: number): string => {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

const convertISODate = (isoString: string): string => {
  const date = new Date(isoString);

  const dayOfWeek = date.toLocaleString("en-US", { weekday: "long" });
  const month = date.toLocaleString("en-US", { month: "short" });

  const day = date.getDate();
  const ordinalSuffix = getOrdinalSuffix(day);

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${dayOfWeek}, ${month} ${day}${ordinalSuffix} ${formattedHours}:${formattedMinutes} ${ampm}`;
};

export { convertISODate };
