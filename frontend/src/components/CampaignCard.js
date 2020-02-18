import React from "react";
import PropTypes from "prop-types";
import FundedBar from "./FundedBar";
import FundButton from "./FundButton";
import Backers from "./Backers";
import { Link } from "react-router-dom";
import styles from "./CampaignCard.styles";

/**
 * Links children to a product
 */
export const LinkToProduct = ({ id, style, children }) => (
  <Link to={"/" + id} style={style}>
    {children}
  </Link>
);

LinkToProduct.propTypes = {
  /**
   * The ID of the product to link to.
   */
  id: PropTypes.string,
  /**
   * The style of the link.
   */
  style: PropTypes.object
};

/**
 * A card rendering a campaign.
 *
 * @param {object} props
 */
const CampaignCard = ({
  size = ["flex-1"],
  hero,
  id,
  title,
  description,
  image,
  goal,
  funds,
  creator,
  backers
}) => (
  <div className={styles.card(size)}>
    <LinkToProduct
      id={id}
      style={{
        backgroundImage: `url("http://localhost:4000/images/${image}")`,
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      <div className={styles.image(hero)} title="name"></div>
    </LinkToProduct>
    <div className={styles.cardContents(hero)}>
      <div className={styles.title}>
        <LinkToProduct id={id}>
          <div className={styles.titleText}>{title}</div>
        </LinkToProduct>
        {creator && (
          <div className={styles.creator(hero)}>Created by {creator.name}</div>
        )}
        <p className={styles.description(hero)}>{description}</p>
      </div>
      <Backers backers={backers} />
      <div className={styles.fund}>
        <FundedBar className="w-3/4" goal={goal} funds={funds} />
        <LinkToProduct id={id}>
          <FundButton className="w-1/4" />
        </LinkToProduct>
      </div>
    </div>
  </div>
);

CampaignCard.propTypes = {
  /**
   * An array of tailwind classes describing the size of the card.
   */
  size: PropTypes.array,
  /**
   * If true, the card is rendered larger as a 'hero' card.
   */
  hero: PropTypes.bool,
  /**
   * The id of the campaign.
   */
  id: PropTypes.string,
  /**
   * The title of the campaign.
   */
  title: PropTypes.string,
  /**
   * The description of the campaign.
   */
  description: PropTypes.string,
  /**
   * The URL to the image for the campaign.
   */
  image: PropTypes.string,
  /**
   * The goal amount of the campaign.
   */
  goal: PropTypes.number,
  /**
   * The amount of funding the campaign has raised.
   */
  funds: PropTypes.number,
  /**
   * The creator of the campaign.
   */
  creator: PropTypes.object,
  /**
   * Backers of the campaign.
   */
  backers: PropTypes.array
};

export default CampaignCard;
