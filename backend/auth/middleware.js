import dotenv from 'dotenv';
dotenv.config();

import jwt from "jsonwebtoken"


function authenticateToken(req, res, next) {
    // Get the token from the request headers
    const authHeader = req.headers['authorization'];
    console.log(authHeader);
    const token = authHeader && authHeader.split(' ')[1]; 
  
    if (token == null) return res.sendStatus(401); // Unauthorized
  
    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403); // Forbidden
  
      // Set the user object in the request
      req.user = user;
      next();
    });
}

export {authenticateToken};