// if anyone has jwt he can hit the api from anywhere
// servers use jwt to verify that it is actually you who is trying to hit the api
// jwts are like these cheques . They are issued by the backend when you sign in .
// Anyone can create something very similar but the backend would reject

// 1. generating a jwt
// 2. decoding a jwt
// 3. verifying a jwt

const jwt = require("jsonwebtoken");


//decode verify generate


const value = {
    name : "Ritik",
    accountNumber : 123123123
}


// generating a jwt

const token = jwt.sign(value, "secret");  // secret is password to encode 
//this token has been generated using secret and can be verified by backend server only
// sign means generating token
console.log(token);

// output : encoding
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUml0aWsiLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMxMjMsImlhdCI6MTcwOTk2MDgxMn0.Uv7XBh7cqWW6oNYdO81r3_TELEZaVBkd1WjxcjQ8rT0
// we can decoded this using by going to jwt.io


// if someone try to replicate he wont know "secret" is being used to generate the token

// intruder

const contents = {
    name : "Ritik",
    accountNumber : 123123123
}

const newToken = jwt.sign(contents, "abcdd"); // secret is not known by the intruder


//veification

const verifiedValue = 
jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUml0aWsiLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMxMjMsImlhdCI6MTcwOTk2MDgxMn0.Uv7XBh7cqWW6oNYdO81r3_TELEZaVBkd1WjxcjQ8rT0", "secret");

console.log(verifiedValue);