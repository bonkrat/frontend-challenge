import GlobalLoadingContainer, {
  GlobalLoading
} from "../containers/GlobalLoading";
import { useState } from "react";
import { createContainer } from "unstated-next";

jest.mock("react", () => ({
  useState: jest.fn(() => [["foo"], "bar"])
}));

jest.mock("unstated-next", () => ({
  createContainer: jest.fn()
}));

it("creates a global state container for user data", () => {
  const results = GlobalLoading();
  expect(results).toEqual({
    globalLoading: ["foo"],
    setGlobalLoading: "bar",
    isGlobalLoading: true
  });
  expect(useState).toHaveBeenCalledWith([]);
  expect(createContainer).toHaveBeenCalledWith(GlobalLoading);
});
