import express from "express";
import {
  registerParticipantes, 
  registerEventosParticipantes,
} from "../controllers/participanteController.js";

const router = express.Router();

router.post("/participantes/registrar", registerParticipantes);
router.post("/participantes/inscrever", registerEventosParticipantes);

export default router;
