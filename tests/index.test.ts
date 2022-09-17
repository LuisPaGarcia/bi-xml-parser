import { describe, expect, test } from "@jest/globals";
import { greeting } from "../src/";

describe("This is a simple test", () => {
  test("Check the sampleFunction function", () => {
    expect(greeting()).toEqual("hello");
  });
});