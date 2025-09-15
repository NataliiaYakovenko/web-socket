import axios from "axios";
import { io } from "socket.io-client";


const axiosOptions = {
  baseURL: "http://127.0.0.1:5000/api",
};

const apiInstance = axios.create(axiosOptions);

export const getMessages = (limit) =>
  apiInstance.get(`/messages?limit=${limit}`);

const socket = io("ws://localhost:5000");


export const createMessage =payload=>{
  console.log(payload);
  socket.emit('NEW_MESSAGE', payload)}



  socket.emit("TO_SERVER", "Some message");
