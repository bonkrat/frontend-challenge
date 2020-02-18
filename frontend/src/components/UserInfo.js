import React from "react";
import PropTypes from "prop-types";
import * as styles from "./UserInfo.styles";
import { USER_INFO_QUERY } from "./UserInfo.graphql";
import useQuery from "../hooks/useQuery";
import CurrentUser from "../containers/CurrentUser";
import ReactTooltip from "react-tooltip";

/**
 * Renders the logged in user's info
 */
export const UserInfo = ({ loading, name = "", avatar, balance }) => (
  <div className={styles.userInfo}>
    {balance && <div className={styles.balance}>${balance}</div>}
    <ReactTooltip effect="solid" place="bottom" />
    <div
      data-tip={name}
      className={styles.avatar(loading)}
      style={{
        backgroundImage: `url("http://localhost:4000/avatars/${avatar}")`,
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    ></div>
  </div>
);

UserInfo.propTypes = {
  /**
   * Renders plcaeholder if loading
   */
  loading: PropTypes.bool,
  /**
   * The user's name
   */
  name: PropTypes.string,
  /**
   * URL to the users avatar
   */
  avatar: PropTypes.string,
  /**
   * The user's balance
   */
  balance: PropTypes.number
};

/**
 * Queries and renders the User's info.
 */
export const UserInfoQuery = () => {
  const { loading, error, data = {} } = useQuery("USER_INFO", USER_INFO_QUERY);
  const { setUser } = CurrentUser.useContainer();

  if (error) return <div></div>;
  setUser(data.loggedInUser);

  return <UserInfo loading={loading} {...data.loggedInUser} />;
};

export default UserInfoQuery;
