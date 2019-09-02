var express = require('express');
var mysql = require('mysql');
var app = express();
var bodyParser =require('body-parser');

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extend:true}));
app.use(express.static(__dirname));

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',  //your username
  database : 'test'         //the name of your db
});


app.get("/",function(req,res){
    var q ='SELECT COUNT(*) AS count FROM users';
    connection.query(q,function(err,result){
		if(err) throw err;
		var count = result[0].count;
		//res.send("Users count:"+count);
		//ejs file named home
		res.render("home",{data:count});
	});
		
});

app.post("/register",function(req,res){
	var email = req.body.email;
	var person={
		email:req.body.email
	};
	connection.query('INSERT INTO users SET ?', person, function(err, result){
		if(err) throw err;
		 res.redirect("/");
	});
});
app.get("/joke",function(req,res){
		res.send("this is joke!");
	});

app.listen(3000,function(){
	console.log("server running on 3000");
	
});