
const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.static('sf'));
const db={
	port:'8081',
	user: 'root',
	password:'cdac',
	host :'localhost',
	database:'web'
};



const mysql = require('mysql12');
const con=mysql.createconnection(db);
app.get('/register',(req,res)=>{
	let x=req.query.bookid;
	let y=req.query.bookname;
	let z=req.query.price;
	let input={status:false}
	con.query('insert into book(bookid,bookname,price) values(?,?,?)',[x,y,z],(err,res)=>{
		if(err){
			console.log(err);
		}else{
			input.status=true;
			console.log("data is inserted");
		}
		res.send(input);
	});
})







/*app.use(express.static('abc'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//whether you want nested objects support  or not



var result;

app.post('/poc1', function (req, res) {
	
		console.log("reading input " + req.body.v1 +  "  second " + req.body.v2)
		
    	var xyz ={ v1:37, v2:35};
        res.send(xyz);
    });


app.get('/poc2', function (req, res) {
    
	
        console.log("reading input " + req.query.xyz);
		
    	var xyz ={ v1:37, v2:35};

		res.send(xyz);

		});*/




app.listen(8081, function () {
    console.log("server listening at port 8081...");
});