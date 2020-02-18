import React from "react";
import PropTypes from "prop-types";
import * as styles from "./FundedBar.styles";
import LinearProgress from "@material/react-linear-progress";

/**
 * Renders a bar showing how much the project has been funded.
 */
const FundedBar = ({ className: rootStyles, goal, funds }) => (
  <div className={rootStyles}>
    <span className={styles.fundedText}>
      {Math.floor((funds / goal) * 100)}% funded
    </span>

    <LinearProgress
      className={styles.bar}
      buffer={1}
      bufferingDots={false}
      progress={funds / goal}
    />
  </div>
);

FundedBar.propTypes = {
  /**
   * Classname to apply to the root.
   */
  className: PropTypes.string,
  /**
   * The amount needed to reach the goal of the campaign.
   */
  goal: PropTypes.number,
  /**
   * How much is currently funded.
   */
  funds: PropTypes.number
};

export default FundedBar;
