import axios from "axios";
import { io } from "socket.io-client";
import { newMessageSuccess ,newMessageError} from "../store/slices/messagesSlice";


const axiosOptions = {
  baseURL: "http://127.0.0.1:5000/api",
};

const apiInstance = axios.create(axiosOptions);

export const getMessages = (limit) =>
  apiInstance.get(`/messages?limit=${limit}`);

const socket = io("ws://localhost:5000");

export const createMessage = (payload) => socket.emit("NEW_MESSAGE", payload);

export const brinfStoreToSocket = (store) => {
  socket.on("NEW_MESSAGE_CREATED", (payload) => {
    store.dispatch(newMessageSuccess(payload));
  });

  socket.on("NEW_MESSAGE_ERROR", (error) => {
   store.dispatch(newMessageError(error))
  });
};
