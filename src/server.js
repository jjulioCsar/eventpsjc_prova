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

// Importação das rotas
import palestranteRouter from "../src/routes/palestranteRouter.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Utilizar as rotas
app.use("/eventos", palestranteRouter);

app.get("", (req, res) => {
  res.send("Servidor está funcional e rodando!");
});

app.use((req, res) => {
  res.status(404).json({ msg: "Recurso não encontrado" });
});

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
