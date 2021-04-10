import express from "express";
import debugs from "./debugs";

const router = express.Router();

router.use("/debug", debugs);

export default router;
