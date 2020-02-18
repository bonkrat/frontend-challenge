import React from "react";
import { classnames } from "tailwindcss-classnames";

const root = classnames("flex", "flex-col");
const row = classnames("flex", "h-64", "flex-grow", "px-2", "mb-2");
const image = classnames("md:w-1/2", "bg-gray-100", "py-56");
const description = classnames("bg-gray-100", "mx-6", "md:w-1/2", "py-56");
export const campaignHeader = classnames(
  "flex",
  "flex-col",
  "bg-purple-100",
  "w-full",
  "p-16",
  "flex",
  "justify-center",
  "items-center"
);

/**
 * Placeholder for the campaign view while it fetches data.
 */
const CampaignListPlaceholder = () => (
  <div className={root}>
    <div className={campaignHeader}></div>

    <div className={row}>
      <div className={image}></div>
      <div className={description}></div>
    </div>
  </div>
);

export default CampaignListPlaceholder;
