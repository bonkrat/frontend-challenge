import { classnames } from "tailwindcss-classnames";

export const formStyles = classnames(
  "flex",
  "flex-auto",
  "lg:justify-start",
  "lg:px-0",
  "md:pr-48",
  "sm:justify-between",
  "items-end"
);

export const selectedAmountStyle = classnames("bg-purple-800", "text-white");

export const contributionAmountStyles = selected =>
  classnames(
    "bg-gray-200",
    "rounded",
    "mx-1",
    "md:px-4",
    "px-4",
    "py-2",
    "cursor-pointer",
    { [`${selectedAmountStyle}`]: selected }
  );
