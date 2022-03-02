import { createServer }from "http";
import { Server }from "socket.io";
import { io } from "socket.io-client";
import { httpServer } from '../app';

describe("my awesome project", () => {
  let io: any, serverSocket: any, clientSocket: any;

  beforeAll((done) => {
    // const httpServer = createServer();
    io = new Server(httpServer);
    if(httpServer) {
        httpServer.listen(() => {
            const port = '6000';
            clientSocket = io('http://localhost:3000/ratingWidget');
            io.on("connection", (socket: any) => {
              serverSocket = socket;
            });
            clientSocket.on("connect", done);
          });
    }
  });

  afterAll(() => {
    io.close();
    clientSocket.close();
  });

  test("should work", (done) => {
    clientSocket.on("hello", (arg: any) => {
      expect(arg).toBe("world");
      done();
    });
    serverSocket.emit("hello", "world");
  });

  test("should work (with ack)", (done) => {
    serverSocket.on("hi", (cb: any) => {
      cb("hola");
    });
    clientSocket.emit("hi", (arg: any) => {
      expect(arg).toBe("hola");
      done();
    });
  });
});