import React from "react";
import ReactTooltip from "react-tooltip";
import * as styles from "./Backers.styles";
import PropTypes from "prop-types";

/**
 * Renders a list of backers.
 */
const Backers = ({ backers, size }) => (
  <div className={styles.backers}>
    {backers.map(({ id, name, avatar }) => (
      <React.Fragment key={id}>
        <ReactTooltip effect="solid" />
        <div
          data-tip={name}
          className={styles.backer(size)}
          style={{
            backgroundImage: `url("http://localhost:4000/avatars/${avatar}")`,
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        ></div>
      </React.Fragment>
    ))}
  </div>
);

Backers.defaultProps = {
  backers: [],
  size: 6
};

Backers.propTypes = {
  /**
   * An array of backers to render.
   */
  backers: PropTypes.array,
  /**
   * The size of the avatars (1, 2, 4, 6, 8, 16...)
   */
  size: PropTypes.number
};

export default Backers;
