var mysql = require('mysql');
var faker =require('faker');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',  //your username
  database : 'test'         //the name of your db
});

// var q='SELECT * FROM users';
// connection.query(q, function(error, results, fields) {
//    if (error) throw error;
//    console.log( results);
// });

// INSERT DATA take 2
// var person ={email: 'Jenny@gmail.com',
// 			 created_at:faker.date.past()};
// var insertCmd = 'INSERT INTO users SET ?';
// connection.query(insertCmd, person,function(error,result){
// 	if(error) throw error;
//     console.log(result);
// 	});

// connection.end();

//INSERT 500 person
var data=[];
for(var i=0;i<500;i++){
data.push([
	faker.internet.email(),
	faker.date.past()
]);
}
var insertCmd = 'INSERT INTO users (email,created_at) VALUES ?';
connection.query(insertCmd, [data],function(error,result){
	if(error) throw error;
    console.log(result);
	});

connection.end();