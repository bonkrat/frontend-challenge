import { classnames } from "tailwindcss-classnames";

export const backers = classnames("flex", "text-base", "text-gray-500");

export const backer = size =>
  classnames(
    "rounded-full",
    `h-${size}`,
    `w-${size}`,
    "flex",
    "items-center",
    "justify-center",
    "text-white"
  );
