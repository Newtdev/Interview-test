import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { toggleLoadingModalAction } from "store/StoreSlice";

function useLoadingModal() {
  const dispatch = useAppDispatch();
  const isLoadingModal = useAppSelector((store) => store.global.isLoadingModal);

  const toggleLoadingModal = useCallback(
    (payload: boolean) => {
      dispatch(toggleLoadingModalAction(payload));
    },
    [dispatch]
  );

  return { isLoadingModal, toggleLoadingModal };
}

export default useLoadingModal;
