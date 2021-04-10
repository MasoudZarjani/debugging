import express from "express";

const router = express.Router();

router.get("/create", (req, res, next) => {
  res.json({ message: "from index api" });
});

export default router;
