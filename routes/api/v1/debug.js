import express from "express";

import debugController from "../../../controllers/debugController";

const router = express.Router();

router.post("/create", debugController.create);

export default router;
