import express from "express";
import {
  registerEventos,
  getEventos,
  getEventosCheios,
  getPalestranteAtivo,
  editarEvento,
  cancelarEventoEspecifico,
  listarEventosParticipante,

} from "../controllers/eventoController.js";

const router = express.Router();

router.post("/registerEventos", registerEventos);
router.get("/agenda", getEventos);
router.get("/mais-popular", getEventosCheios);
router.get("/palestrante-mais-ativo", getPalestranteAtivo);
router.get("/eventos-participante/:id", listarEventosParticipante);
router.put("/editar-evento/:id", editarEvento);
router.delete("/cancelar-evento/:id", cancelarEventoEspecifico);

export default router;
