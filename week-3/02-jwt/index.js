const jwt = require('jsonwebtoken');
const zod = require('zod');
const jwtPassword = "secret";

function signJwt(username, password) {
    const schema1 = zod.string().email();
    const schema2 = zod.string().min(6);
    const response1 = schema1.safeParse(username);
    const response2 = schema2.safeParse(password);
    let token;
    if(!(response1.success && response2.success)){
        return null;
    }else{
        token= jwt.sign({username:username, password:password},jwtPassword);
        return token;
    }
     
}

function verifyJwt(token) {
    try {
        const verifiedToken = jwt.verify(token,jwtPassword);
        if(verifiedToken){
            return true;
        }
    } catch (error) {
        
    }
    return false;
   
}

function decodeJwt(token) {
    const decoded =jwt.decode(token);
    if(decoded){
        return true;
    }else{
        return false;
    }
}

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword
}