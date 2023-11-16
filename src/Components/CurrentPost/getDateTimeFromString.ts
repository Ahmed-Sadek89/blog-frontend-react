const getDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

const getTime = (date: Date): string => {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};

export const getDateTimeFromString = (
  isoString: string
): { date: string; time: string } => {
  const date = new Date(isoString);

  const dateString = getDate(date);
  const timeString = getTime(date);

  return { date: dateString, time: timeString };
};
