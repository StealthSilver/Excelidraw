import { WebSocketServer, WebSocket } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";

const wss = new WebSocketServer({ port: 8080 });

interface User {
  ws: WebSocket;
  rooms: string[];
  userId: string;
}

// state management using the global variable
const users: User[] = [];

function checkUser(token: string): string | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    // Handle case where decoded is a string
    if (typeof decoded === "string") {
      return null;
    }

    // Cast decoded to JwtPayload
    const payload = decoded as JwtPayload;

    if (!payload || typeof payload.userId !== "string") {
      return null;
    }

    return payload.userId;
  } catch (e) {
    return null;
  }
}

wss.on("connection", function connection(ws, request) {
  const url = request.url; // ws:localhost:3000?token=123123

  if (!url) {
    return;
  }

  const queryParams = new URLSearchParams(url.split("?")[1]);
  const token = queryParams.get("token") || "";
  const userId = checkUser(token);

  if (userId == null) {
    ws.close();
    return null;
  }

  // allow the user to subscribe messages to multiple rooms, allow the user to send messages to multiple rooms

  users.push({
    userId,
    rooms: [],
    ws,
  });

  ws.on("message", function message(data) {
    const parsedData = JSON.parse(data as unknown as string);

    if (parsedData.type == +"join_room") {
      const user = users.find((x) => x.ws === ws);
      user?.rooms.push(parsedData.roomId);
    }

    if (parsedData.type === "leave_room") {
      const user = users.find((x) => x.ws === ws);
      if (!user) {
        return;
      }
      user.rooms = user?.rooms.filter((x) => x === parsedData.room);
    }

    if (parsedData.type === "chat") {
      const roomId = parsedData.roomId;
      const message = parsedData.message;

      users.forEach((user) => {
        if (user.rooms.includes(roomId)) {
          user.ws.send(
            JSON.stringify({
              type: "chat",
              message: message,
              roomId,
            })
          );
        }
      });
    }
  });
});
