import { classnames } from "tailwindcss-classnames";

export const form = classnames(
  "flex",
  "w-auto",
  "flex-col",
  "sm:flex-col",
  "md:flex-row",
  "lg:justify-start",
  "lg:px-0",
  "md:pr-48",
  "justify-center",
  "sm:justify-between",
  "items-center",
  "md:items-start",
  "md:justify-start"
);

export const amounts = classnames("flex", "flex-row", "mb-8", "sm:mb-4");

export const selectedAmountStyle = classnames("bg-purple-800", "text-white");

export const contributionAmountStyles = selected =>
  classnames(
    "bg-gray-200",
    "rounded",
    "mr-2",
    "sm:mr-4",
    "md:mr-4",
    "px-4",
    "md:px-4",
    "py-2",
    "cursor-pointer",
    { [`${selectedAmountStyle}`]: selected }
  );
