import { useAppSelector } from "./reduxHooks";

const useUserList = () => {
	return useAppSelector((store) => store.global.usersList);
};

export default useUserList;
