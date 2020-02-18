import { classnames } from "tailwindcss-classnames";

export const campaignHeader = classnames(
  "flex",
  "flex-col",
  "bg-purple-100",
  "w-full",
  "p-8",
  "flex",
  "justify-center",
  "items-center"
);

export const campaignTitle = classnames(
  "text-2xl",
  "text-white",
  "text-indigo-800"
);

export const campaignCreator = classnames("text-md", "text-purple-400");

export const campaignBody = classnames(
  "flex",
  "flex-auto",
  "flex-wrap",
  "justify-center",
  "h-auto"
);

export const image = classnames(
  "h-64",
  "sm:h-64",
  "md:h-64",
  "lg:h-auto",
  "w-full",
  "sm:w-full",
  "md:w-full",
  "lg:w-1/2",
  "bg-cover",
  "rounded-br-lg",
  "text-center",
  "overflow-hidden"
);

export const campaignDetails = classnames(
  "h-auto",
  "flex",
  "flex-col",
  "justify-between",
  "md:w-full",
  "lg:w-1/2",
  "py-4",
  "px-8"
);

export const goal = classnames(
  "text-lg",
  "text-gray-700",
  "flex",
  "justify-between"
);

export const funds = classnames("text-purple-900");

export const fundBar = classnames("w-full", "text-2xl");

export const campaignDescription = classnames("my-10", "lg:mb-16");

export const backedBy = classnames("md: mb-16", "my-4");

export const backedByText = classnames("mb-2", "text-gray-700");
