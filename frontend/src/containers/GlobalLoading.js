import { useState } from "react";
import { createContainer } from "unstated-next";

export const GlobalLoading = () => {
  const [globalLoading, setGlobalLoading] = useState([]);
  return {
    globalLoading,
    setGlobalLoading,
    isGlobalLoading: !!globalLoading.length
  };
};

/**
 * Creates a global state container with the current loading state.
 */
export default createContainer(GlobalLoading);
