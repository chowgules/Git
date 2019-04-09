var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json)

var Database ={
    host: 'localhost',
    user:'root',
    password:'root',
    database: 'customer'
}
var con = mysql.createConnection(Database);

con.connect(function(error){
    if(error){
        console.log(error);
    }
    else{
        var sql_query = 'INSERT INTO customers values( "null" , "' + 
        req.body.book_name +
        '","' +
        req.body.book_isbn +
        '","' +
        req.body.book_author +
        '" )';
        
        console.log('connected to Database');
        console.log('Running select query');
        con.query(sql_query,function(error,data,fields){
            if(error){
                console.log(error);
            }
            else{
                console.log(JSON,parse(JSON.stringify(data)));
            }
          
        });
    }
});


app.post('/',function(req,res){
    console.log('someone has requested the server');
    console.log(req.body.name);
})

app.get('/',function(req,res){
    res.writehead(200,{'Content-Type': 'text/plain' });
    res.write('');
    res.end();
})

app.listen(8080,function(){
    console.log('server is online');
});