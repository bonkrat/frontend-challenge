import { classnames } from "tailwindcss-classnames";

export const userInfo = classnames("flex", "items-center");

export const avatar = (loading = false) =>
  classnames(
    "rounded-full",
    "h-12",
    "w-12",
    "flex",
    "items-center",
    "justify-center",
    "text-white",
    /* eslint-disable-next-line */
    { ["border"]: loading }
  );

export const balance = classnames(
  "text-purple-800",
  "text-white",
  "font-bold",
  "rounded",
  "px-4",
  "py-2"
);
