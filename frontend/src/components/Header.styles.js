import { classnames } from "tailwindcss-classnames";

export const root = classnames("sticky", "top-0", "flex", "flex-col", "z-10");

export const header = classnames(
  "flex",
  "px-4",
  "sm:px-2",
  "md:px-8",
  "lg:px-16",
  "border",
  "border-t-0",
  "border-l-0",
  "border-r-0",
  "w-full",
  "justify-between",
  "bg-white"
);

export const headerText = classnames(
  "font-bold",
  "h-16",
  "flex",
  "justify-center",
  "items-center"
);

export const loading = loading =>
  classnames("-mt-1", {
    /* eslint-disable-next-line */
    ["opacity-0"]: !loading,
    /* eslint-disable-next-line */
    ["opacity-100"]: loading
  });
