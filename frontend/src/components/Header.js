import React from "react";
import * as styles from "./Header.styles";
import UserInfo from "./UserInfo";
import GlobalLoading from "../containers/GlobalLoading";
import { Link } from "react-router-dom";
import LinearProgress from "@material/react-linear-progress";

/**
 * Renders a sticky header at the top of the page.
 */
export default () => {
  const { isGlobalLoading } = GlobalLoading.useContainer();

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Link to="/">
          <div className={styles.headerText}>Not Kickstarter</div>
        </Link>
        <UserInfo />
      </div>
      <LinearProgress
        indeterminate
        className={styles.loading(isGlobalLoading)}
      />
    </div>
  );
};
