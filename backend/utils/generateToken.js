import jwt from "jsonwebtoken";

const generateToken = (id) =>{
    //Uses the id to make a JWT
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'2d'
    })
}

export default generateToken
