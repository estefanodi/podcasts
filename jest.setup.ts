import "@testing-library/jest-dom";
require("jest-fetch-mock").enableMocks();
global.TextEncoder = require("util").TextEncoder;
global.fetch = jest.fn();

jest.spyOn(console, "error").mockImplementation((msg, ...args) => {
  return;
});
