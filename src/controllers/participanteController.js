export const registerParticipantes = (req, res) => {
    const { nome, email } = req.body;
  
    if (!nome || !email) {
      return res
        .status(400)
        .json({ msg: "Preencha todos os campos obrigatórios." });
    }
  
    const id = uuidv4();
  
    const sql =
      "INSERT INTO palestrantes ( nome, email) VALUES ( ?, ?)";
  
    conn.query(sql, [id, nome, expertise], (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ msg: "Erro ao criar o participante." });
      }
      res.status(201).json({ msg: "Participante criado com sucesso!", id });
    });
  };