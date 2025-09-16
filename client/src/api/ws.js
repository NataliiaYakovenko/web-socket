import { io } from "socket.io-client";
import {
  newMessageSuccess,
  newMessageError,
} from "../store/slices/messagesSlice";

const socket = io("ws://localhost:5000");
export const createMessage = (payload) => socket.emit("NEW_MESSAGE", payload);

export const brinfStoreToSocket = (store) => {
  socket.on("NEW_MESSAGE_CREATED", (payload) => {
    store.dispatch(newMessageSuccess(payload));
  });

  socket.on("NEW_MESSAGE_ERROR", (error) => {
    store.dispatch(newMessageError(error));
  });
};
