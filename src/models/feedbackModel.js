import conn from "../config/conn.js";

const tableFeedback = /*sql*/ `
    CREATE TABLE IF NOT EXISTS feedback (
        feedback_id VARCHAR(60) PRIMARY KEY,
        participante_id VARCHAR(60) NOT NULL,
        evento_id VARCHAR(60) NOT NULL, 
        nota VARCHAR(5) NOT NULL,
        comentario VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

        FOREIGN KEY (participante_id) REFERENCES participantes(participante_id)
    )
`;

conn.query(tableFeedback, (err) => {
if (err) {
    console.error(err);
    return;
}
console.log("Tabela de [feedback] criada com sucesso");
});


//"participanteId": 2, "eventoId": 1, "nota": 5, "comentario": "Excelente evento!