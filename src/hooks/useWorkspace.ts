import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { updateWorkspaceAction } from "store/StoreSlice";

const useWorkspace = () => {
	const dispatch = useAppDispatch();
	const workspace = useAppSelector((store) => store.global.workspace);
	const workspaces = useAppSelector((store) => store.global.workspace_list);

	const updateDefaultWorkspace = useCallback(
		(payload: any) => {
			// console.log("ishdfopihsod", payload);

			dispatch(updateWorkspaceAction(payload));
		},
		[dispatch]
	);

	return { workspace, workspaces, updateDefaultWorkspace };
};

export default useWorkspace;
