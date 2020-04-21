import socketIo from 'socket.io';
import { Server } from 'http';

let io!: socketIo.Server;

export function initializeSocketIo(server: Server) {
  io = socketIo(server);
}

export default () => io;