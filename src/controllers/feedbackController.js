import conn from "../config/conn.js";
import { v4 as uuidv4 } from "uuid";

// Enviar feedback
export const registerFeedback = (req, res) => {
    const { participante_id, evento_id, nota, comentario} = req.body;
    
    if (!participante_id || !evento_id || !nota || !comentario ) {
        return res.status(400).json({ error: 'Dados incompletos' });
    }

    const feedback_id = uuidv4();

    const query = 'INSERT INTO feedback (feedback_id, participante_id, evento_id, nota, comentario) VALUES (?, ?, ?, ?, ?)';
  
    conn.query(query, [feedback_id, participante_id, evento_id, nota, comentario], (err, results) => {
        if (err) {
            console.error('Erro ao enviar feedback:', err);
            return res.status(500).json({ error: 'Erro ao enviar feedback' });
        }

        res.status(200).json({ message: 'Feedback enviado com sucesso' });
    });
};
