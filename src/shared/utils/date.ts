export const formattedDate = (isoDate: string | null): string => {
  return isoDate
    ? new Date(isoDate).toLocaleTimeString("ru", { timeStyle: "short" })
    : "-";
};