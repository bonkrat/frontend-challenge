import CurrentUserContainer, { CurrentUser } from "../containers/CurrentUser";
import { useState } from "react";
import { createContainer } from "unstated-next";

jest.mock("react", () => ({
  useState: jest.fn(() => ["foo", "bar"])
}));

jest.mock("unstated-next", () => ({
  createContainer: jest.fn()
}));

it("creates a global state container for user data", () => {
  CurrentUser();
  expect(useState).toHaveBeenCalledWith({});
  expect(createContainer).toHaveBeenCalledWith(CurrentUser);
});
