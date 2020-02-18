import useQueryToTest from "../hooks/useQuery";
import { useQuery } from "@apollo/react-hooks";
import { useEffect } from "react";
import GlobalLoading from "../containers/GlobalLoading";
import { toast } from "react-toastify";

jest.mock("react", () => ({
  useEffect: jest.fn()
}));

jest.mock("../containers/GlobalLoading", () => ({
  useContainer: jest.fn(() => ({
    globalLoading: ["ross"],
    setGlobalLoading: jest.fn()
  }))
}));

jest.mock("@apollo/react-hooks", () => ({
  useQuery: jest
    .fn(args => ({ loading: false, error: false, data: {} }))
    .mockReturnValueOnce({
      loading: false,
      error: "error",
      data: {}
    })
    .mockReturnValueOnce({
      loading: true,
      error: false,
      data: {}
    })
}));

jest.mock("react-toastify", () => ({
  toast: {
    error: jest.fn()
  }
}));

afterEach(() => {
  useQuery.mockClear();
  useEffect.mockClear();
  GlobalLoading.useContainer.mockClear();
});

it("should show an error toast if there is an error", () => {
  useQueryToTest("NAMESPACE", "arg1");

  expect(toast.error).toHaveBeenCalledWith("Something went wrong! :(");
});

it("sets the global loading state while the query is loading", () => {
  const results = useQueryToTest("NAMESPACE", "arg1");

  expect(results).toMatchObject({
    loading: true,
    error: false,
    data: {}
  });

  expect(useEffect).toHaveBeenCalled();
  useEffect.mock.calls[0][0]();

  expect(
    GlobalLoading.useContainer.mock.results[0].value.setGlobalLoading.mock.calls[0][0]()
  ).toEqual(["ross", "NAMESPACE"]);
});

it("removes the namespace when the loading state clears", () => {
  const results = useQueryToTest("ross", "arg1");

  expect(results).toMatchObject({
    loading: false,
    error: false,
    data: {}
  });

  expect(useEffect).toHaveBeenCalled();
  useEffect.mock.calls[0][0]();

  expect(
    GlobalLoading.useContainer.mock.results[0].value.setGlobalLoading.mock.calls[0][0]()
  ).toEqual([]);
});

it("executes the mutation", () => {
  useQueryToTest("NAMESPACE", "arg1", "arg2");
  expect(useQuery).toHaveBeenCalledWith("arg1", "arg2");
});
