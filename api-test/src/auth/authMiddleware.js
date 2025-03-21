import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'jwt';

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
  
    if (!token) {
      res.status(401).json({ ok:false, message: 'Token de autenticación requerido' });
      return
    }
  
    jwt.verify(token, JWT_SECRET, (err, data) => {
      if (err) {
        res.status(403).json({ ok: false, message: 'Token inválido' });
        return
      }
  
      req.id = data?.id
      next();
    });
};

export const authenticateByUserRoleAmin = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
  
    if (!token) {
      res.status(401).json({ ok:false, message: 'Token de autenticación requerido' });
      return
    }
  
    jwt.verify(token, JWT_SECRET, (err, data) => {
      if (err) {
        res.status(403).json({ ok: false, message: 'Token inválido' });
        return
      }

      console.log(data)
  
      const role = data.role
      if(role !== "admin") return res.status(401).json({ ok:false, message: "acceso denegado" })
        next();
    });
};