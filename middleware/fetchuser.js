var jwt = require('jsonwebtoken');

const JWT = process.env.JWT_SECRET
const fetchuser = (req,res,next)=>{
    //Get the user from jwt token and add it to req object
    const token = req.header('auth-token');
    //console.log(token);
    if(!token){
        res.status(401).send({error:"Please authenticate a valid token"})
    }
    try {
        const data = jwt.verify(token,JWT);
        console.log(data);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({error:"Please send a valid token"});
       // console.log(error);
    }

}
module.exports = fetchuser