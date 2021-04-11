import express from "express";

import projectController from "../../../controllers/projectController";

const router = express.Router();

router.post("/create", projectController.create);

export default router;
