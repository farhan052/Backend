var mongoose =require('mongoose')
var url = "mongodb://127.0.0.1:27017/urlHash";
mongoose.connect("mongodb://127.0.0.1:27017/ref", function(err, db) {
    if (err) throw err;
   console.log("Database created!");
      
  }).then(() =>{
    console.log('connected')
  }).catch(() => {
    console.log('not connected')
  })