const mongodb = require("mongodb")


const MongoClient = mongodb.MongoClient;


const connectionUrl = 'mongodb://127.0.0.1:27017'


const database = 'nodewithdb'


MongoClient.connect(connectionUrl , { } , (error , client)=>{
    if(error){
        return console.log('Something error happen')
    }
//
const db = client.db(database);
db.collection('myUser').insertMany([
    {
Name : 'Ram jonchee',
Address : 'suryabinayek'
    },{
        Name : 'Narayan Shrestha',
        Address : 'Ramechhap'
    }
])

})