import React from "react";
import { useParams } from "react-router-dom";
import Campaign from "../components/Campaign";

/**
 * Renders the view for a single campaign.
 */
export default () => {
  const { id } = useParams();
  return <Campaign id={id} />;
};
