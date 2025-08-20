import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import {
  CreateUserSchema,
  SigninSchema,
  CreateRoomSchema,
} from "@repo/common/types";
import { prismaClient } from "@repo/db/client";

const app = express();
const PORT = 3001;

app.use(express.json());

app.post("/signup", async (req, res) => {
  const parsedData = CreateUserSchema.safeParse(req.body);

  if (!parsedData.success) {
    return res.json({
      message: "Incorrect Input",
    });
    return;
  }

  try {
    const user = await prismaClient.user.create({
      data: {
        email: parsedData.data?.username,
        // todo hash the password using the bcrypt library
        password: parsedData.data.password,
        name: parsedData.data.name,
      },
    });

    res.json({
      userId: user.id,
    });
  } catch (e) {
    res.status(411).json({
      message: "user already exists with this username",
    });
  }
});

app.post("/signin", async (req, res) => {
  const parsedData = SigninSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.json({
      message: "Incorrect Inputs",
    });
    return;
  }
  // todo compare the hashed passwords here

  const user = await prismaClient.user.findFirst({
    where: {
      email: parsedData.data.username,
      password: parsedData.data.password,
    },
  });

  if (!user) {
    res.status(403).json({
      message: "not authorised",
    });
    return;
  }

  const token = jwt.sign(
    {
      userId: user?.id,
    },
    JWT_SECRET
  );

  res.json({
    token,
  });
});

app.post("/room", middleware, async (req, res) => {
  const parsedData = CreateRoomSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.json({
      message: "Incorrect Inputs",
    });
    return;
  }

  //@ts-ignore
  const userId = req.userId;

  try {
    const room = await prismaClient.room.create({
      data: {
        slug: parsedData.data.name,
        adminId: userId,
      },
    });

    res.json({
      roomId: room.id,
    });
  } catch (e) {
    res.status(411).json({
      massage: "Room already exists with this name",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
