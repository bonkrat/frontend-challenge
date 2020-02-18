import { classnames } from "tailwindcss-classnames";

export default {
  card: size =>
    classnames(
      "flex",
      "flex-grow",
      "flex-col",
      "sm:flex-col",
      "md:flex-row",
      "px-2",
      "mb-4",
      [...size]
    ),

  image: (hero = false) =>
    classnames(
      "bg-cover",
      "rounded-t",
      "lg:rounded-t-none",
      "lg:rounded-l",
      "overflow-hidden",
      "h-32",
      "sm:h-64",
      "md:h-auto",
      /* eslint-disable-next-line */
      { ["sm:w-0"]: !hero },
      /* eslint-disable-next-line */
      { ["md:w-48"]: !hero },
      /* eslint-disable-next-line */
      { ["lg:w-64"]: hero },
      /* eslint-disable-next-line */
      { ["md:w-56"]: hero },
      /* eslint-disable-next-line */
      { ["md:w-48"]: hero },
      /* eslint-disable-next-line */
      { ["sm:w-0"]: hero }
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

  fund: classnames(
    "flex",
    "justify-start",
    "md:justify-between",
    "flex-wrap",
    "sm:flex-wrap",
    "md:flex-no-wrap"
  ),

  fundBar: classnames(
    "w-full",
    "sm:w-full",
    "md:w-3/4",
    "md:mb-0",
    "sm:mb-16",
    "mb-16"
  ),

  fundButton: classnames(
    "w-full",
    "sm:w-full",
    "md:w-1/4",
    "md:my-0",
    "sm:my-16",
    "md:my-0",
    "sm:mx-0"
  )
};
