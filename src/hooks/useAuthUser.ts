import { useAppSelector } from "./reduxHooks";

const useAuthUser = () => {
	return useAppSelector((store) => store.global.authUser);
};

export default useAuthUser;
