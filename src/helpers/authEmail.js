export const authEmail = (req, res, next) => {
    const email = req.headers['x-auth-email'];
  
    if (!email) {
      return res.status(400).send('Email não fornecido');
    }
  
    const query = 'SELECT 1 FROM participantes WHERE email = ? LIMIT 1';
    conn.query(query, [email], (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      
      if (results.length > 0) {
        return next();
      } else {
        return res.status(401).send('Acesso não autorizado');
      }
    });
  };