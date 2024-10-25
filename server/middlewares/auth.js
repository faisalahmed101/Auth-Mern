import jwt from 'jsonwebtoken'

export const isAuthenticate = (req, res, next)=>{

    const token = req.headers['authorization']

    if(!token){
        res.status(403).json({message: "Unauthorized, JWT token required"})
    }

    try {
       const decode = jwt.verify(token, process.env.JWT_SECRET)
       req.user = decode
       next()
        
    } catch (error) {
        res.status(403).json({message: "Unauthorized, JWT token wrong or expired"})
    }
}