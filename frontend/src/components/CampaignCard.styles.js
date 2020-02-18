import { classnames } from "tailwindcss-classnames";

export default {
  card: (size, hero) =>
    classnames("flex", "flex-grow", "px-2", "mb-4", [...size]),

  image: (hero = false) =>
    classnames(
      "h-auto",
      "flex-none",
      "bg-cover",
      "rounded-t",
      "lg:rounded-t-none",
      "lg:rounded-l",
      "text-center",
      "overflow-hidden",
      /* eslint-disable-next-line */
      { ["w-48"]: !hero },
      /* eslint-disable-next-line */
      { ["lg:w-64"]: hero },
      /* eslint-disable-next-line */
      { ["md:w-56"]: hero },
      /* eslint-disable-next-line */
      { ["w-48"]: hero }
    ),

  cardContents: (hero = false) =>
    classnames(
      "border-b",
      "border-l",
      "lg-border-l-0",
      "bg-white",
      "rounded-b",
      "lg:rounded-b-none",
      "lg: rouned-r",
      "flex",
      "flex-col",
      "justify-between",
      "leading-normal",
      "p-4",
      "w-full",
      /* eslint-disable-next-line */
      { ["md:p-8"]: hero },
      /* eslint-disable-next-line */
      { ["border-t"]: !hero }
    ),

  title: classnames("mb-8"),

  titleText: classnames(
    "text-gray-900",
    "font-bold",
    "text-lx",
    "hover:text-purple-900",
    "cursor-pointer"
  ),

  creator: (hero = false) =>
    classnames(
      "text-sm",
      "mb-4",
      "text-gray-500",

      /* eslint-disable-next-line */
      { ["text-base"]: hero }
    ),

  description: (hero = false) =>
    classnames(
      "text-gray-700",
      "text-sm",
      /* eslint-disable-next-line */
      { ["pb-12"]: hero },
      /* eslint-disable-next-line */
      { ["md:text-base"]: hero }
    ),

  fund: classnames("flex", "justify-between")
};
