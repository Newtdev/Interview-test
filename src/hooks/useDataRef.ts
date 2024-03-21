import React from "react";

/**
 * @template T
 * @param {T} data
 * @returns {React.MutableRefObject<T>}
 */
function useDataRef<T>(data: T): React.MutableRefObject<T> {
  const ref = React.useRef(data);
  ref.current = data;
  return ref;
}

export default useDataRef;
