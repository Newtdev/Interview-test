import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { updateOrganizationAction } from "store/StoreSlice";
const useOrganization = () => {
	const dispatch = useAppDispatch();
	const organization = useAppSelector((store) => store.global.organization);
	const organization_list = useAppSelector(
		(store) => store.global.organization_list
	);
	const updateDefaultOrganization = useCallback(
		(payload: any) => {
			dispatch(updateOrganizationAction(payload));
		},
		[dispatch]
	);

	return { organization, organization_list, updateDefaultOrganization };
};

export default useOrganization;
