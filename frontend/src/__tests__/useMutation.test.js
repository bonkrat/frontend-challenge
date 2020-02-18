import useMutationToTest from "../hooks/useMutation";
import { useMutation } from "@apollo/react-hooks";
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
  useMutation: jest
    .fn(args => [jest.fn(), { loading: false, error: false, data: {} }])
    .mockReturnValueOnce([
      jest.fn(),
      {
        loading: false,
        error: "error",
        data: {}
      }
    ])
    .mockReturnValueOnce([
      jest.fn(),
      {
        loading: true,
        error: false,
        data: {}
      }
    ])
}));

jest.mock("react-toastify", () => ({
  toast: {
    error: jest.fn()
  }
}));

afterEach(() => {
  useMutation.mockClear();
  useEffect.mockClear();
  GlobalLoading.useContainer.mockClear();
});

it("should show an error toast if there is an error", () => {
  useMutationToTest("NAMESPACE", "arg1");

  expect(toast.error).toHaveBeenCalledWith("Something went wrong! :(");
});

it("sets the global loading state while the query is loading", () => {
  const results = useMutationToTest("NAMESPACE", "arg1");

  results[0]();

  expect(useMutation.mock.results[0].value[0]).toHaveBeenCalled();

  expect(results[1]).toMatchObject({
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
  const results = useMutationToTest("ross", "arg1");

  results[0]();

  expect(useMutation.mock.results[0].value[0]).toHaveBeenCalled();

  expect(results[1]).toMatchObject({
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
  useMutationToTest("NAMESPACE", "arg1", "arg2");
  expect(useMutation).toHaveBeenCalledWith("arg1", "arg2");
});
