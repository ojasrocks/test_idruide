const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const csvjson = require('csvjson');

const mongo_url = 'mongodb://127.0.0.1:27017';

const db_name = 'education';
const collection_name = 'institutions';


var opt = {
  delimiter : ';', // optional
  quote     : '"' // optional
};

const client = new MongoClient(mongo_url);

const csv_origin = {
  value : fs.readFileSync('./src/institutions/seeding/csv_to_json/fr-en-annuaire-education.csv', 'utf8')
}

const json_obj = csvjson.toObject(csv_origin.value, opt);

const geo_json_obj = json_obj.map(item => {
  let buff = item;
  if (item.position){
    buff.position = {
      type : "Point",
      coordinates : item.position.split(',').map(coord => parseFloat(coord))
   }
  } else {
    buff.position = {
      type : "Point",
      coordinates : [0.0000000,0.0000000]
    }
  }
  return buff;
})

client.connect(async (err)=>{
  if (!err){
    console.log("Connected successfully to database server");
    const collection = client.db(db_name).collection(collection_name);
    await collection.insertMany(geo_json_obj)
    await collection.createIndex({ position : '2dsphere' })
    console.log('Database initialized');
    process.exit();
  }else{console.log(err);}
})

