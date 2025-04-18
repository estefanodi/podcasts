import { INVALID_DATE, DEFAULT_TRACK_TIME } from "@src/constants";

type FormatMilliseconds = (milliseconds: number | undefined | null) => string;
type FormatDate = (date: string, outputFormat?: string) => string;

export const formatMilliseconds: FormatMilliseconds = (milliseconds) => {
  if (milliseconds == null || isNaN(milliseconds)) {
    return DEFAULT_TRACK_TIME;
  }

  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
};

export const formatDate: FormatDate = (date, outputFormat = "dd/MM/yyyy") => {
  const dateObj = new Date(date);

  if (isNaN(dateObj.getTime())) {
    return INVALID_DATE;
  }

  const day = dateObj.getDate().toString().padStart(2, "0");
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const year = dateObj.getFullYear();

  return outputFormat
    .replace("dd", day)
    .replace("MM", month)
    .replace("yyyy", year.toString());
};
