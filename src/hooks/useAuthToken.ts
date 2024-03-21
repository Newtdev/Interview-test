import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { updateAuthTokenAction } from "store/StoreSlice";

const useAuthToken = () => {
	// return useAppSelector((store) => store.global.token);
	const dispatch = useAppDispatch();
	const authToken = useAppSelector((store) => store.global.token);

	const updateAuthToken = useCallback(
		(payload: string) => {
			dispatch(updateAuthTokenAction(payload));
		},
		[dispatch]
	);

	return { updateAuthToken, authToken };
};

export default useAuthToken;
