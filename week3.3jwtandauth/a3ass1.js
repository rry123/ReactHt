/*
Write a function that takes in a username and password and returns  JWT token with the 
username endoded. Should return null if the username is not a valid email or if the password 
is less than 6 characters . Try using zod library


 */


const jwt = require("jsonwebtoken");

const zod = require("zod");

const jwtPassword = "secret";

const emailSchema = zod.string().email();
const passSchema = zod.string().min(6);


function signJwt(username, password){

    const usernameResponse = emailSchema.safeParse(username);
    const passResponse = passSchema.safeParse(password);

    if(!usernameResponse.success || !passResponse.success){
        return null;
    }
    const signature = jwt.sign({username}, jwtPassword );
    return signature;
}

//console.log(signJwt("ritik@gmail", "ritikraj"));



// Write a function that takes a jwt as input and return true if the jwt can be decoded 
// not vefied . Return false other wise

function decodeJwt(token){
    const decoded = jwt.decode(token);
    if(decoded){
        return true;
    }
    return false;
}

//console.log(decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpdGlrQGdtYWlsLmNvbSIsImlhdCI6MTcwOTk2MzExOX0.y30vde04mK7Ai8IblTvqFmXjFPENeS3rz91XGk_8n-I"));

//Write a function that takes a jwt as input and returns true if the jwt can be verified

function verifyJwt(token){
    try{
    const verified = jwt.verify(token, jwtPassword);
         if(verified){
            return true;
         }
    } catch(e){
            return false;
     }
}

console.log(verifyJwt("abcdfadfca"));