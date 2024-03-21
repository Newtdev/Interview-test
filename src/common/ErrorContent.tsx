import React from "react";
type ErrorContentType = {
  onRetry: () => void;
};
function ErrorContent({ onRetry }: ErrorContentType) {
  return <div>Error Loading List</div>;
}

export default ErrorContent;
