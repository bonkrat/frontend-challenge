import React from "react";
import { classnames } from "tailwindcss-classnames";

const root = classnames("flex", "flex-col");
const row = classnames("flex", "h-64", "flex-grow", "px-2", "mb-2");
const heroImage = classnames("w-1/6", "bg-gray-100");
const heroDescription = classnames("bg-gray-100", "mx-4", "w-5/6");
const image = classnames("w-1/2", "bg-gray-100");
const description = classnames("bg-gray-100", "mx-6", "w-1/2");

/**
 * Placeholder for campaigns while they load.
 */
const CampaignListPlaceholder = () => (
  <div className={root}>
    <div className={row}>
      <div className={heroImage}></div>
      <div className={heroDescription}></div>
    </div>

    <div className={row}>
      <div className={image}></div>
      <div className={description}></div>
    </div>

    <div className={row}>
      <div className={image}></div>
      <div className={description}></div>
    </div>
  </div>
);

export default CampaignListPlaceholder;
