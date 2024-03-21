import { Suspense as ReactSuspense, SuspenseProps } from "react";
import LoadingIndicator from "./LoadingIndicator";

function Suspense(props: SuspenseProps) {
  return <ReactSuspense {...props} />;
}

Suspense.defaultProps = {
  fallback: (
    <div className="flex items-center justify-center h-full p-8">
      <LoadingIndicator />
    </div>
  ),
};

export default Suspense;
