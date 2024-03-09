// //how to create an http server
// const express = require("express")

// function calsum(n){
//     let x =0;
//     for(let i= 1; i<=n; i++){
//         x= x+i;
//     }
//     return x;
// }

// const app = express();   //creating an instance of express

// // app.get("/", function(req, res){
// //     res.send("Hi there");
// // })

// app.get("/", function(req, res){
//     const n = req.query.n;
//     const ans = calsum(n);
//     res.send("hi your answer is "+ ans);
// })

// app.listen(3000);

// how to request   localhost:3000/?n=30

const express = require("express");
const app = express();

var users = [
  {
    name: "John",
    kidneys: [{ healthy: false }],
  },
];

console.log(users[0]);

app.use(express.json());

app.get("/", function (req, res) {
  const johnkidneys = users[0].kidneys;
  const noofkidneys = johnkidneys.length;

  let noofhealthykidneys = 0;
  for (let i = 0; i < noofkidneys; i++) {
    if (johnkidneys[i].healthy) {
      noofhealthykidneys = noofhealthykidneys + 1;
    }
  }
  const noofunhealthykidneys = noofkidneys - noofhealthykidneys;

  res.json({
    noofkidneys,
    noofhealthykidneys,
    noofunhealthykidneys,
  });
});

// post req will add data suppose i want to add a new kidney

// input is taken from user whether he wants good kidney or unhealthy kidney

//middlewares
app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});

// how to send post request : we can do using postman

// replace data : here make all unhealthy kidneys to healthy kidneys
app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i] = true;
  }
  res.json();
});

//remove the unhealthy kidneys
app.delete("/", function (req, res) {
  let alpha = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      alpha = true;
      break;
    }
  }

  if (alpha) {
    const newkid = [];

    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newkid.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newkid;
    res.json({
      msg: "successfull",
    });
  } else {
     res.sendStatus(411).json({
      msg : "You don't have any bad kidneys"
     })
  }
});

app.listen(3000);
