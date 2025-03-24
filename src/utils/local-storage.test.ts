import { setLocalStorageItem, getLocalStorageItem } from "./local-storage";

describe("localStorage", () => {
  beforeEach(() => {
    localStorage.clear();

    jest.spyOn(console, "error").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("sets an item in localStorage", () => {
    const mockKey = "user";
    const mockValue = { name: "John", age: 30 };
    const setItemSpy = jest.spyOn(Storage.prototype, "setItem");
    setLocalStorageItem(mockKey, mockValue);

    expect(setItemSpy).toHaveBeenCalledWith(mockKey, JSON.stringify(mockValue));
  });

  it("gets an item from localStorage", () => {
    const mockKey = "user";
    const mockValue = { name: "John", age: 30 };
    localStorage.setItem(mockKey, JSON.stringify(mockValue));

    const result = getLocalStorageItem(mockKey);

    expect(result).toEqual(mockValue);
  });

  it("returns null if the item does not exist in localStorage", () => {
    const mockKey = "nonExistentKey";
    const result = getLocalStorageItem(mockKey);

    expect(result).toBeNull();
  });
});
