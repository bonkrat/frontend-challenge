import { classnames } from "tailwindcss-classnames";

export const campaign = classnames(
  "flex",
  "flex-wrap",
  "md:-mx-2",
  "mb-4",
  "justify-center"
);

export const heroCampaign = classnames(campaign, "md:text-2xl");
