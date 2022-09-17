import { describe, expect, test } from "@jest/globals";

describe("This is a simple test", () => {
  test("Check the sampleFunction function", () => {
    expect("hello").toEqual("hello");
  });
});