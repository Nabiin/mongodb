//importing mango in our node app
const mongodb = require("mongodb");

//importing mango clint
const MongoClient = mongodb.MongoClient;

//connection url to database
const connectionUrl = "mongodb://127.0.0.1:27017";

//this is the database name either new or previous 
const database = "nodewithdb";

//connect mongoclint to database //connection to database
MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connetct the user , the error is ", error);
    }
    //create database
    const db = client.db(database);

    //creating collection and creating  document  and adding two filds Name and address
    db.collection('myUser').insertOne({
     Name : 'Bibhu kiju',
     Address : 'Suryabinayek'
    })
  }
);
