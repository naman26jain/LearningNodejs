let express = require('express');
let app = express();

app.get("/", function(req,res){
    res.send("hi there");
});

app.get("/speak/:animal", function(req, res){
 let sounds={
     pig:"oink",
     cow: "moo",
     dog: "woof",
     cat: "meow"
 }
    let animal = req.params.animal.toLowerCase();
let sound = sounds[animal];

    res.send("the "+animal+"sounds "+sound);
});
app.get("/repeat/:message/:times", function(req, res){
    let message = req.params.message;
    let times = Number(req.params.times);
    let result= " ";
    for(let i=0;i<times;i++){
        result +=message+" ";
    }
    res.send(result);
});
app.get("*", function(req, res){
    res.send("hey what are you doing with your life!");
});
app.listen(8000,function(){
    console.log("now server is on");
});

