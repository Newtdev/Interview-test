import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { toggleDrawer } from "store/StoreSlice";

const useTogggleDrawer = () => {
	const dispatch = useAppDispatch();
	const showDrawer = useAppSelector((store) => store.global.showDrawer);
	// console.log(showDrawer);

	const updateDrawerState = useCallback(
		(payload: { [x: string]: boolean | string }) => {
			dispatch(toggleDrawer(payload));
		},
		[dispatch]
	);

	return { updateDrawerState, showDrawer };
};

export default useTogggleDrawer;
