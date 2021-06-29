import express from "express";
import {
  deleteUser,
  getUser,
  getUserWithID,
  receiveUserData,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUser);

router.get("/:id", getUserWithID);

router.post("/", receiveUserData);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
