import { useState } from "react";
import { createContainer } from "unstated-next";

export const CurrentUser = () => {
  const [user, setUser] = useState({});
  return { user, setUser };
};

/**
 * Creates a global state container with the current logged in user.
 */
export default createContainer(CurrentUser);
