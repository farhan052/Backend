const express = require('express');
const dotenv =require('dotenv');
const app = express();
const cors =require('cors')
// const middleware =(req, res, next)=>{
//     console.log('hello middleware')
//    next();
// }
dotenv.config({path :'./config.env'});
// var url = process.env.DATABASE;
 var port = process.env.PORT;

require('./DB/mdb')
const User = require('./model/userSchema')

//link router
// app.use(require('./router/auth'),()=>{
//     if(err){
//         console.log('erroe')
//     }else{
//         console.log('succ')
//     }
// });

app.use(function (req, res, next) {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
   res.setHeader('Access-Control-Allow-Credentials', true);
  
   next();
   });
   app.use(cors())
app.use(express.json())

 app.post('/',(req, res) =>{
    const {refer,  username, password, remember} =req.body;
   //  User.findOne({username:username })
   //  .then((userExist) =>{
   //    //   return res.status(422).json({error: 'email already exist'})
   //  }).catch((err) =>{console.log(err)})
    const user= new User({refer, username, password, remember});
    user.save()
    .then(() =>{
       res.status(201).json({message: `registration succesful${res}`},)
    })
    .catch((err) =>{ res.status(500).json({error: "failed"})})
    console.log(req.body);
    
   //   res.json({message : req.body})
 })
app.get('/login',(req,res) =>{
    const {username, password} =req.body
   //  console.log(username)
    res.send({
      token: `${req.body}`
    })
   //  User.findOne({username:username })
   //  .then((userExist) =>{
   //      return res.status(422).json({massage: "weelcome"})
   //  }).catch((err) =>{console.log(err)})
   //  res.send('hello home page');
   
})

 app.listen(port, ()=>{
    console.log(`server started at ${port}`)
 })