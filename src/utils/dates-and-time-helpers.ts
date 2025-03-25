import { format } from "date-fns";

type FormatMilliseconds = (milliseconds: number | undefined | null) => string;
type FormatDate = (date: string, outputFormat?: string) => string;

export const formatMilliseconds: FormatMilliseconds = (milliseconds) => {
  if (milliseconds) {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  } else {
    return "00:00";
  }
};

export const formatDate: FormatDate = (date, outputFormat = "dd/MM/yyyy") =>
  format(new Date(date), outputFormat);
