import React, { useEffect, useMemo, useRef } from "react";
import Suspense from "common/Suspense";
import useAuthUser from "hooks/useAuthUser";
import AppPublic from "portals/AppPublic";
import LoadingIndicator from "common/LoadingIndicator";
import LoadingBackdrop from "common/LoadingBackdrop";
import useLoadingModal from "hooks/useLoadingModal";
import useOrganization from "hooks/useOrganization";
import { useLocation } from "react-router-dom";
import { SubdomainEnum } from "constants/RouteConstants";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

function App() {
	const { isLoadingModal, toggleLoadingModal } = useLoadingModal();
	const bottomRef = useRef<any>(null);

	useEffect(() => {
		// Scroll to the bottom of the page when the component mounts
		bottomRef?.current?.scrollIntoView({ behavior: "smooth" });
	}, []);

	return (
		<div className="overflow-x-hidden">
			<ErrorBoundary
				FallbackComponent={ErrorFallback}
				onReset={() => {
					// reset the state of your app here
				}}
				resetKeys={["someKey"]}>
				<LoadingBackdrop open={isLoadingModal} />
				<Suspense
					fallback={
						<div className="flex items-center justify-center w-screen h-screen bg-red-500">
							<LoadingIndicator />
						</div>
					}>
					<AppPublic />
				</Suspense>
			</ErrorBoundary>
		</div>
	);
}

export default App;
function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
	return (
		<div className="flex items-center justify-center flex-1">
			<p>Oops! .. Something went wrong:</p>
			<pre>{error.message}</pre>
			<button onClick={resetErrorBoundary}>Try again</button>
		</div>
	);
}
