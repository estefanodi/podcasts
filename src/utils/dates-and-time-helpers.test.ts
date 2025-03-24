import {
  formatMilliseconds,
  formatDate,
  isDateDifference24Hours,
} from "./dates-and-time-helpers";

describe("formatMilliseconds", () => {
  it("format milliseconds to mm:ss", () => {
    const result1 = formatMilliseconds(65000);
    expect(result1).toBe("01:05");

    const result2 = formatMilliseconds(3600000);
    expect(result2).toBe("60:00");

    const result3 = formatMilliseconds(74000);
    expect(result3).toBe("01:14");
  });
});

describe("formatDate", () => {
  it("format a given date to the default format", () => {
    const date = "2025-03-23T15:36:50.000Z";
    const result = formatDate(date);

    expect(result).toBe("23/03/2025");
  });

  it("format a given date to a custom format", () => {
    const date = "2025-03-23T15:36:50.000Z";
    const result = formatDate(date, "yyyy-MM-dd");

    expect(result).toBe("2025-03-23");
  });
});

describe("isDateDifference24Hours", () => {
  const createDate = (hoursDifference: number) => {
    const currentDate = new Date();
    currentDate.setHours(currentDate.getHours() + hoursDifference);
    return currentDate.toISOString();
  };

  it("returns true if the date difference is 24 hours or more", () => {
    const date24HoursAgo = createDate(-24);
    const result = isDateDifference24Hours(date24HoursAgo);

    expect(result).toBe(true);

    const date25HoursAgo = createDate(-25);
    const result2 = isDateDifference24Hours(date25HoursAgo);

    expect(result2).toBe(true);

    const date24HoursAhead = createDate(24);
    const result3 = isDateDifference24Hours(date24HoursAhead);

    expect(result3).toBe(true);
  });

  it("returns false if the date difference is less than 24 hours", () => {
    const date1HourAgo = createDate(-1);
    const result1 = isDateDifference24Hours(date1HourAgo);

    expect(result1).toBe(false);

    const date12HoursAgo = createDate(-12);
    const result2 = isDateDifference24Hours(date12HoursAgo);

    expect(result2).toBe(false);

    const date23HoursAhead = createDate(23);
    const result3 = isDateDifference24Hours(date23HoursAhead);

    expect(result3).toBe(false);
  });
});
