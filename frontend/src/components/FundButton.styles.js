import { classnames } from "tailwindcss-classnames";

export const button = loading =>
  classnames(
    "rounded-lg",
    "border-2",
    "border-white",
    "text-white",
    "py-2",
    "px-4",
    "ml-4",
    /* eslint-disable-next-line */
    { ["cursor-pointer"]: !loading },
    /* eslint-disable-next-line */
    { ["bg-purple-700"]: !loading },
    /* eslint-disable-next-line */
    { ["hover:bg-purple-900"]: !loading },
    /* eslint-disable-next-line */
    { ["cursor-not-allowed"]: loading },
    /* eslint-disable-next-line */
    { ["hover:bg-gray-500"]: loading },
    /* eslint-disable-next-line */
    { ["bg-gray-500"]: loading },
    /* eslint-disable-next-line */
    { ["opacity-80"]: loading }
  );
