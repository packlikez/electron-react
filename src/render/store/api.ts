import {
  ActionCreatorWithPayload,
  createAction,
  ActionCreatorWithOptionalPayload,
} from "@reduxjs/toolkit";

import { AxiosError } from "axios";

interface apiCallBeginProps {
  url: string;
  method: "get" | "post";
  data?: any;
  onStart: ActionCreatorWithOptionalPayload<any>;
  onSuccess: ActionCreatorWithPayload<any>;
  onError: ActionCreatorWithPayload<any>;
}

export const apiCallBegin: ActionCreatorWithPayload<apiCallBeginProps> = createAction(
  "apiMiddleware/CallBegin"
);

export const apiCallFailed: ActionCreatorWithOptionalPayload<
  AxiosError["response"]
> = createAction("apiMiddleware/CallFailed");

export const apiCallSuccess: ActionCreatorWithPayload<any> = createAction(
  "apiMiddleware/CallSuccess"
);
