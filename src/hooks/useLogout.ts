import { useCallback } from "react";
import { logoutAction } from "../store/StoreActions";
import { useAppDispatch, useAppSelector } from "./reduxHooks";

function useLogout() {
  const dispatch = useAppDispatch();
  const logout = useCallback(() => dispatch(logoutAction()), [dispatch]);
  return { logout };
}

export default useLogout;
