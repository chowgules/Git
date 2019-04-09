var mysql = require("mysql");

var con_obj = {
  user: "root",
  host: "localhost",
  password: "",
  database: "customer"
};

var con = mysql.createConnection(con_obj);

con.connect(function(error) {
  if (error) throw error;
  console.log("Connected to database");
  console.log("running query");
  sql_query = "insert into student (name, ph_no) values ?";
  var values = [
    ["John", "Highway 71", "1123455"],
    ["Peter", "Lowstreet 4", "4759874539"],
    ["Amy", "Apple st 652", "858943959834"],
    ["Hannah", "Mountain 21", "59834759834"],
    ["Michael", "Valley 345", "8593459"],
    ["Sandy", "Ocean blvd 2", "98789958"],
    ["Betty", "Green Grass 1", "8509350843"],
    ["Richard", "Sky st 331", "58475995"],
    ["Susan", "One way 98", "49759758"],
    ["Vicky", "Yellow Garden 2", "5475949"],
    ["Ben", "Park Lane 38", "759843759"],
    ["William", "Central st 954", "57835904"],
    ["Chuck", "Main Road 989", "584039850"],
    ["Viola", "Sideway 1633", "574975943"]
  ];
  con.query(sql_query, [values], function(error, result) {
    if (error) throw error;
    console.log("inserted records successfully!!!");
    console.log("Number of records inserted : " + result.affectedRows);
  });
});
