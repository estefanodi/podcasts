import { intervalToDuration, format } from "date-fns";

type FormatMilliseconds = (ms: number) => string;
type FormatDate = (date: string, outputFormat?: string) => string;

export const formatMilliseconds: FormatMilliseconds = (ms) => {
  const duration = intervalToDuration({ start: 0, end: ms });

  const minutes = duration.minutes
    ? `${duration.minutes}`.padStart(2, "0")
    : "00";
  const seconds = duration.seconds
    ? `${duration.seconds}`.padStart(2, "0")
    : "00";

  return `${minutes}:${seconds}`;
};

export const formatDate: FormatDate = (date, outputFormat = "dd/MM/yyyy") =>
  format(new Date(date), outputFormat);
