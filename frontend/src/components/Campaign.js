import React from "react";
import PropTypes from "prop-types";
import * as styles from "./Campaign.styles";
import useQuery from "../hooks/useQuery";
import { CAMPAIGN_QUERY } from "./Campaign.graphql";
import FundedBar from "./FundedBar";
import FundForm from "./FundForm";
import Backers from "./Backers";
import CampaignPlaceholder from "./CampaignPlaceholder";

/**
 * Renders a fullpage view of a campaign.
 */
export const Campaign = ({
  id,
  title,
  creator,
  image,
  goal,
  funds,
  description,
  backers
}) => (
  <React.Fragment>
    <div className={styles.campaignHeader}>
      <div className={styles.campaignTitle}>{title}</div>
      <div className={styles.campaignCreator}>Created by {creator.name}</div>
    </div>
    <div className={styles.campaignBody}>
      <img
        alt={title}
        className={styles.image}
        src={`http://localhost:4000/images/${image}`}
      />
      <div className={styles.campaignDetails}>
        <FundedBar className={styles.fundBar} funds={funds} goal={goal} />
        <div className={styles.goal}>
          <span className={styles.funds}>{funds < goal && `$${funds}`}</span>
          <span>${funds < goal ? goal : funds}</span>
        </div>
        <p className={styles.campaignDescription}>{description}</p>
        {backers.length > 0 && (
          <div className={styles.backedBy}>
            <div className={styles.backedByText}>Backed by:</div>
            <Backers backers={backers} size={12} />
          </div>
        )}
        <FundForm campaignId={id} />
      </div>
    </div>
  </React.Fragment>
);

Campaign.propTypes = {
  /**
   * The id of the campaign.
   */
  id: PropTypes.string,
  /**
   * The title of the campaign.
   */
  title: PropTypes.string,
  /**
   * The creator of the campaign
   */
  creator: PropTypes.object,
  /**
   * The URL of the image of the campaign.
   */
  image: PropTypes.string,
  /**
   * The goal to reach for the campaign.
   */
  goal: PropTypes.number,
  /**
   * The funds the campaign has raised.
   */
  funds: PropTypes.number,
  /**
   * The description of the campaign.
   */
  description: PropTypes.string,
  /**
   * The users that have backed the campaign.
   */
  backers: PropTypes.array
};

/**
 * Queries for and renders a campaign.
 */
export const CampaignQuery = ({ id }) => {
  const { loading, error, data: { campaign } = {} } = useQuery(
    "CAMPAIGN_VIEW",
    CAMPAIGN_QUERY,
    {
      variables: {
        id
      }
    }
  );

  if (error || loading) return <CampaignPlaceholder />;

  return <Campaign {...campaign} />;
};

CampaignQuery.propTypes = {
  /**
   * The id of the campaign to query and render.
   */
  id: PropTypes.string
};

export default CampaignQuery;
