/**
 * Created by frank on 2016/11/28.
 * mongodb CRUD 返回一个promise对象
 */
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

//向数据库插入数据
const insertDocuments = function (db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a: 1}, {a: 2}, {a: 3}
  ], function (err, result) {
    assert.equal(err, null)
    console.log("Inserted 3 documents into the document collection");
    callback(result)
  });
}
//更新一条数据
const updateDocument = function (db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Update document where a is 2, set b equal to 1
  collection.updateMany({a: 2}
    , {$set: {a: 6}}, function (err, result) {
      console.log(result)
      console.log("Updated the document with the field a equal to 2")
      callback(result)
    })
}
//删除一条数据
const deleteDocument = function (db, callback) {
  // Get the documents collection
  var collection = db.collection('documents')
  // Insert some documents
  collection.deleteOne({a: 3}, function (err, result) {
    assert.equal(err, null)
    console.log("Removed the document with the field a equal to 3")
    callback(result)
  });
}
//查找数据
var findDocuments = function (db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function (err, docs) {
    assert.equal(err, null)
    console.log("Found the following records")
    console.log(docs)
    callback(docs)
  });
}

function operationMongodb() {
  // Connection URL
  const url = 'mongodb://localhost:27017/demo'
// Use connect method to connect to the Server
  MongoClient.connect(url, function (err, db) {
    assert.equal(null, err)
    console.log("Connected correctly to server")

    //insertDocuments(db, function (result) {
    //  db.close()
    //})
    //updateDocument(db, function (result) {
    //  db.close()
    //})
    //deleteDocument(db, function (result) {
    //  db.close()
    //})
    db.collection('documents').find({}).toArray().then(function (r) {
      console.log(r)
      db.close() //不加的话 后台一直挂起
    })
    //db.collection('documents').findOne({}).then(function (r) {
    //  console.log(r)
    //  db.close() //不加的话 后台一直挂起
    //})

    //findDocuments(db, function () {
    //  //console.log(require('mongodb').ObjectID)
    //  db.close()
    //})
  })
}
operationMongodb()
