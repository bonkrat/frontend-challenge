import React from "react";
import PropTypes from "prop-types";
import * as styles from "./CampaignsList.styles";
import { CAMPAIGNS_QUERY } from "./CampaignsList.graphql";
import CampaignCard from "./CampaignCard";
import { chunk } from "lodash";
import useQuery from "../hooks/useQuery";
import CampaignListPlaceholder from "./CampaignsListPlaceholder";

/**
 * Renders a list of campaigns to fund.
 */
export const CampaignsList = ({ data }) => {
  const chunks = chunk(data.campaigns, 3);
  return (
    <React.Fragment>
      {chunks.map((campaigns, index) => (
        <React.Fragment key={index}>
          <div className={styles.heroCampaign}>
            <CampaignCard hero {...campaigns[0]} size={["w-full"]} />
          </div>
          <div className={styles.campaign}>
            {campaigns.map((campaign, index) => {
              return (
                index > 0 && (
                  <CampaignCard
                    {...campaign}
                    key={campaign.id}
                    size={["2xl:w-1/6", "lg:w-1/2"]}
                  />
                )
              );
            })}
          </div>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

CampaignsList.propTypes = {
  /**
   * The campaigns to render
   */
  data: PropTypes.shape({
    campaigns: PropTypes.array
  })
};

/**
 * Queries for campaigns to fund.
 */
export const CampaignsListQuery = () => {
  const { loading, error, data } = useQuery("CAMPAIGNS_LIST", CAMPAIGNS_QUERY);

  return error || loading ? (
    <CampaignListPlaceholder />
  ) : (
    <CampaignsList data={data} />
  );
};

export default CampaignsListQuery;
