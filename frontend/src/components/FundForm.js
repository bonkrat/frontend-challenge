import React, { useState } from "react";
import PropTypes from "prop-types";
import FundButton from "./FundButton";
import * as styles from "./FundForm.styles";
import { FUND_CAMPAIGN } from "./FundForm.graphql";
import useMutation from "../hooks/useMutation";
import CurrentUser from "../containers/CurrentUser";
import { CAMPAIGN_QUERY } from "./Campaign.graphql";
import { USER_INFO_QUERY } from "./UserInfo.graphql";
import { toast } from "react-toastify";

export const contributionOptions = [1, 5, 10, 25, 50, 100];

/**
 * Renders a form of contribution amounts and a button to contribute to a campaign.
 */
export const FundForm = ({
  fundCampaign,
  campaignId,
  userId,
  loading,
  selectedAmount,
  setAmount
}) => {
  return (
    <div className={styles.form}>
      <div className={styles.amounts}>
        {contributionOptions.map(amount => (
          <div
            id={`${amount}-button`}
            key={amount}
            className={styles.contributionAmountStyles(
              amount === selectedAmount
            )}
            onClick={() => {
              setAmount(amount);
            }}
          >
            {amount}
          </div>
        ))}
      </div>
      <FundButton
        onClick={() =>
          fundCampaign({
            variables: { campaignId, userId, amount: selectedAmount }
          })
        }
        loading={loading}
      />
    </div>
  );
};

FundForm.propTypes = {
  /**
   * Handler for funding a campaign.
   */
  fundCampaign: PropTypes.func,
  /**
   * The id of the campaign to fund.
   */
  campaignId: PropTypes.string,
  /**
   * The userId providing the funds.
   */
  userId: PropTypes.string,
  /**
   * True if loading.
   */
  loading: PropTypes.bool,
  /**
   * The current amount to fund that is selected.
   */
  selectedAmount: PropTypes.number,
  /**
   * Handler for setting the amount to fund.
   */
  setAmount: PropTypes.func
};

/**
 * Updates the cache after the mutation is completed.
 *
 * @param {string} campaignId  The ID of the campaign to fund.
 * @param {number} amount The amount of currency to fund the campaign with.
 */
export const updateCache = (campaignId, amount) => (cache, { data }) => {
  const { campaign } = cache.readQuery({
    query: CAMPAIGN_QUERY,
    variables: { id: campaignId }
  });

  const { loggedInUser } = cache.readQuery({
    query: USER_INFO_QUERY
  });

  cache.writeQuery({
    query: CAMPAIGN_QUERY,
    variables: { id: campaignId },
    data: {
      campaign: {
        ...campaign,
        ...data.fundCampaign
      }
    }
  });

  cache.writeQuery({
    query: USER_INFO_QUERY,
    data: {
      loggedInUser: {
        ...loggedInUser,
        balance: loggedInUser.balance - amount
      }
    }
  });
};

/**
 * Provides a mutation to fund a campaign.
 */
export const FundFormMutation = ({ campaignId }) => {
  const [selectedAmount, setAmount] = useState(1);
  const [fundCampaign, { loading }] = useMutation("FUND_FORM", FUND_CAMPAIGN, {
    update: updateCache(campaignId, selectedAmount),
    onCompleted: () => {
      toast.success("You successfully funded this campaign!", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  });
  const { user } = CurrentUser.useContainer();

  return (
    <FundForm
      campaignId={campaignId}
      userId={user && user.id}
      fundCampaign={fundCampaign}
      loading={loading}
      selectedAmount={selectedAmount}
      setAmount={setAmount}
    />
  );
};

FundFormMutation.propTypes = {
  /**
   * The id of the campaign to fund.
   */
  campaignId: PropTypes.string
};

export default FundFormMutation;
