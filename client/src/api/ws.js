import { io } from "socket.io-client";
import {
  newMessageSuccess,
  newMessageError,
} from "../store/slices/messagesSlice";
import CONSTANTS from "../constants";

const {
  SOCKET_EVENTS: { NEW_MESSAGE, NEW_MESSAGE_CREATED, NEW_MESSAGE_ERROR },
} = CONSTANTS;

const socket = io("ws://localhost:5000");
export const createMessage = (payload) => socket.emit(NEW_MESSAGE, payload);

export const brinfStoreToSocket = (store) => {
  socket.on(NEW_MESSAGE_CREATED, (payload) => {
    store.dispatch(newMessageSuccess(payload));
  });

  socket.on(NEW_MESSAGE_ERROR, (error) => {
    store.dispatch(newMessageError(error));
  });
};
