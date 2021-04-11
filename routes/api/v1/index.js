import express from "express";
import debug from "./debug";
import project from "./project";

const router = express.Router();

router.use("/debug", debug);
router.use("/project", project);

export default router;
