import { Backdrop, Modal } from "@mui/material";
import Spinner from "./Spinner";

interface LoadingProps {
  open: boolean;
}
function LoadingBackdrop({ open }: LoadingProps) {
  return (
    <Modal
      open={open}
      aria-labelledby="progress-modal"
      aria-describedby="making request"
    >
      <Spinner />
    </Modal>
  );
}

export default LoadingBackdrop;
