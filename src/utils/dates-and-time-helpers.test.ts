import { formatMilliseconds, formatDate } from "./dates-and-time-helpers";
import { DEFAULT_TRACK_TIME } from "@src/constants";

describe("formatMilliseconds", () => {
  describe("when the date provided has a valid format", () => {
    it("format milliseconds to mm:ss", () => {
      const result1 = formatMilliseconds(65000);
      expect(result1).toBe("01:05");

      const result2 = formatMilliseconds(3600000);
      expect(result2).toBe("60:00");

      const result3 = formatMilliseconds(74000);
      expect(result3).toBe("01:14");
    });
  });
  describe("when the date provided has not a valid format", () => {
    it("returns `00:00` when milliseconds is undefined", () => {
      const result = formatMilliseconds(undefined);

      expect(result).toBe(DEFAULT_TRACK_TIME);
    });

    it("returns `00:00` when milliseconds is null", () => {
      const result = formatMilliseconds(null);

      expect(result).toBe(DEFAULT_TRACK_TIME);
    });
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
