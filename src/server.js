var mysql = require('mysql');
var express = require('express')
var router = express.Router();
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:'registers'
});

// var getdbConction = async () =>{
//     return await mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"root",
//     multipleStatements: true,
//     database:'register'
//     })
// }
var getdbConction = connection.connect(function(err){
    if(err) throw err;
    console.log("connected!")
})

// connection.connect(function(err){
//     if(err) throw err;
//     console.log("connected!")
//     connection.query("create database registers", function (err,result){
//         if(err) throw err;
//         console.log("Database Created");
//     }) 
// });

// connection.connect(function(err){
//     if(err) throw err;
//     console.log("connected")

// var query = "create table register(first_name varchar(50), last_name varchar(20),age varchar(3),adhar_no varchar(12))";
// connection.query(query, function(err,result){
//     if(err) throw err;
//     console.log("Table Created")
// })
// });

// connection.connect(function(err){
//     if(err) throw err;
// var query = "insert into register (first_name,last_name,age,adhar_no) values('Ganesh','Guna','26','400012348765')"
// connection.query(query,function(err,result){
//     if(err) throw err;
//     console.log("data Inserted")
// })
// });

router.post("/save/register", async(request,response)=>{
    console.log(request.body)    
    try{
        let query = `insert into register (first_name,last_name,age,gender,adhar_no) values(
            "${request.body.firstName}","${request.body.lastName}",${request.body.age},"${request.body.gender}",${request.body.adharNo})`
             var result = await getdbConction.query(query)
    }catch(err){
        console.log(err)
    }
    finally{
        response.send(JSON.stringify(result))
        if(connection && connection.end) end()
    }
});

