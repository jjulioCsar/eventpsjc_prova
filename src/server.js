import "dotenv/config";
import express from "express";

// Configuração da porta
const PORT = process.env.PORT || 3030;

// Importar conexão com o banco de dados
import conn from "./config/conn.js";

// Importação dos models
import "../src/models/eventoModel.js";
import "../src/models/PalestranteModel.js";
import "../src/models/ParticipanteModel.js";
import "../src/models/feedbackModel.js";

// Importação das rotas
import palestranteRouter from "../src/routes/palestranteRouter.js";
import eventosRouter from "../src/routes/eventosRouter.js";
import participanteRouter from "../src/routes/participantesRouter.js"
import feedbackRouter  from "../src/routes/feedbackRouter.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Utilizar as rotas
app.use("/eventos", palestranteRouter, eventosRouter, participanteRouter, feedbackRouter);

app.get("", (req, res) => {
  res.send("Servidor está funcional e rodando!");
});

app.use((req, res) => {
  res.status(404).json({ msg: "Recurso não encontrado" });
});

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
