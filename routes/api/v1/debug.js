import express from "express";

import debugController from "../../../controllers/debugController";

const router = express.Router();

router.post("/create", debugController.create);
router.get("/list", debugController.list);

export default router;
