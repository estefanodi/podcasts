import "@testing-library/jest-dom";
require("jest-fetch-mock").enableMocks();
global.TextEncoder = require("util").TextEncoder;
global.fetch = jest.fn();

const originalError = console.error;
beforeAll(() => {
  console.error = jest.fn();
});
afterAll(() => {
  console.error = originalError;
});
