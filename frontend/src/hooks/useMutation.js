import { useMutation } from "@apollo/react-hooks";
import GlobalLoading from "../containers/GlobalLoading";
import { uniq, concat } from "lodash";
import { useEffect } from "react";
import { toast } from "react-toastify";

/**
 * A wrapper for useMutation that sets the global default loading state for any
 * component using this hook.
 */
export default (namespace, ...args) => {
  const { globalLoading, setGlobalLoading } = GlobalLoading.useContainer();
  const [mutation, { loading, error, data }] = useMutation(...args);

  if (error) {
    toast.error("Something went wrong! :(");
  }

  useEffect(() => {
    if (loading) {
      const newState = uniq(concat(globalLoading, [namespace]));
      setGlobalLoading(() => [...newState]);
    } else {
      setGlobalLoading(() =>
        globalLoading.filter(loadNamespace => loadNamespace !== namespace)
      );
    }
  }, [loading]);

  return [mutation, { loading, error, data }];
};
