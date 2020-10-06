let express = require('express');
let app = express();


// "/ => hi there"

app.get("/", function(req, res){
    res.send("Hi there!");
});

// "/bye ==> goodbye"
app.get("/bye", function(req, res){
    res.send("Goodbye");
});
// "/dog => meow"
app.get("/dog", function(req, res){
    res.send("Meow");
});
//listen
app.listen(3000, function(){
    console.log("server is up and running");
});