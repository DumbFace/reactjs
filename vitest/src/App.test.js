import { describe, it, expect } from "vitest";
import { CallApiExample, GetOrderProductReport } from "./utils/helper";

// describe("something truthy and falsy", () => {
//   it("true to be true", () => {
//     expect(true).toBe(true);
//   });

//   it("false to be false", () => {
//     expect(false).toBe(false);
//   });
// });

// describe("Test call api", () => {
//   it("Api is okay", async () => {
//     const response = await CallApiExample();
//     console.log("status: ", response.status);
//     const data = await response.json();
//     console.log('data: ', data);
//     // expect(CallApiExample).toBe(true);
//   });
// });

describe("Product Report", () => {
  it("Api is okay", async () => {
    const response = await GetOrderProductReport();
    console.log("status: ", response.status);
    const data = await response.json();
    console.log("data: ", data);
    expect(response.status).toBe(200);
  });
}, 30000);
