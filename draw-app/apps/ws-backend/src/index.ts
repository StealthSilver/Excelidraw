import { WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";

const wss = new WebSocketServer({ port: 8080 });

function checkUser(token: string): boolean {
  const decoded = jwt.verify(token, JWT_SECRET);

  // the decoded can be a string or an object, early returning if its a string
  if (typeof decoded == "string") {
    return false;
  }

  if (!decoded || !decoded.userId) {
    return false;
  }

  return true;
}

wss.on("connection", function connection(ws, request) {
  const url = request.url; // ws:localhost:3000?token=123123

  if (!url) {
    return;
  }

  const queryParams = new URLSearchParams(url.split("?")[1]);
  const token = queryParams.get("token") || "";
  const decoded = jwt.verify(token, JWT_SECRET);

  ws.on("message", function message(data) {
    ws.send("pong");
  });
});
