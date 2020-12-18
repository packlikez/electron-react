import React, { FC } from "react";
import { Button } from "@material-ui/core";

const electron = window.require("electron");

interface NewWindowButtonProps {
  url: string;
}

const NewWindowButton: FC<NewWindowButtonProps> = (props) => {
  const onClick = () =>
    electron.ipcRenderer.invoke("newWindow", {
      url: props.url,
    });

  return (
    <Button variant="contained" onClick={onClick}>
      {props.children}
    </Button>
  );
};

export default NewWindowButton;
