const prompt = require("prompt-sync")();
const name = prompt("Enter your name : ");
const age = prompt("Enter your age : ")
console.log("My name is " + name+" & am "+age+" year old");
const http = require("http");
const server = http.createServer((req,res)=>{
    res.write("hello word i am node js");
    res.end();
})

server.listen(3000,()=>{
    console.log("server running at http://localhost:3000" );
})