import React from "react";
import PropTypes from "prop-types";
import * as styles from "./FundButton.styles";
import { classnames } from "tailwindcss-classnames";

/**
 * Renders a button to fund a campaign/
 */
const FundButton = ({ classNames, loading, onClick }) => (
  <div
    className={classnames(classNames, styles.button(loading))}
    onClick={() => !loading && onClick()}
  >
    {loading ? "..." : "Fund"}
  </div>
);

FundButton.defaultProps = {
  loading: false,
  onClick: () => {}
};

FundButton.propTypes = {
  /**
   * Whether the button should be inactive and loading.
   */
  loading: PropTypes.bool,
  /**
   * Handler for whent he button is clicked.
   */
  onClick: PropTypes.func
};

export default FundButton;
