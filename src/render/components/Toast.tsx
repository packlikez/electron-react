import React, { FC } from "react";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

export type ToastType = "success" | "error";

export interface ToastState {
  type: ToastType;
  isOpen: boolean;
  message: string;
}

interface ToastProps extends ToastState {
  onClose: () => void;
}

const Toast: FC<ToastProps> = (props) => {
  const handleClose = () => {
    props.onClose();
  };

  return (
    <Snackbar
      open={props.isOpen}
      anchorOrigin={{ vertical: "bottom",horizontal:"left" }}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <CustomAlert onClose={handleClose} severity={props.type || "success"}>
        {props.message}
      </CustomAlert>
    </Snackbar>
  );
};

function CustomAlert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default Toast;
