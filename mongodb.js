const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const databaseName = 'task-manager'
const ObjectId = mongodb.ObjectId

MongoClient.connect(process.env.MONGODB_URL,{useNewUrlParser: true}, (error,client) => {
    if (error) {
        return console.log("can't connect to database!")
    }
    const db = client.db(databaseName)
    
    db.collection('users').deleteOne({name:'parveen',age: 27}).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})