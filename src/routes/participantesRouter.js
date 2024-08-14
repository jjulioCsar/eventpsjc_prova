import express from "express";
import {
  registerParticipantes,
} from "../controllers/participanteController.js";

const router = express.Router();

router.post("/registerParticipantes", registerParticipantes);

export default router;
