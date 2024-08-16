import express from "express";
import {
  registerFeedback
} from "../controllers/feedbackController.js";

const router = express.Router();

router.post("/participantes/feedback", registerFeedback);

export default router;