

//http://mongodb.github.io/node-mongodb-native/3.0/quick-start/quick-start/

/*
nodejs操作mongodb数据库

 1.安装mongodb、

    cnpm install mongodb --save

 2.引入mongodb下面的MongoClient
    var MongoClient = require('mongodb').MongoClient;

 3.定义数据库连接的地址 以及配置数据库
    koa数据库的名称

    var url = 'mongodb://localhost:27017/';

    var dbName = 'koa'


 4.nodejs连接数据库

 MongoClient.connect(url,function(err,client){

        const db = client.db(dbName);  数据库db对象

 })

5.操作数据库
     db.user.insert
     MongoClient.connect(url,function(err,db){
            db.collection('user').insertOne({"name":"张三"},function(err,result){

                db.close() //关闭连接
            })
     })


*/

var MongoClient = require('mongodb').MongoClient;

var dbUrl = 'mongodb://localhost:27017/';

var dbName = 'koa'

//连接数据库
//console.time('start');
//MongoClient.connect(dbUrl,(err,client)=>{
//    if(err){
//
//        console.log(err);
//        return;
//    }
//
//    var db=client.db(dbName);
//    console.timeEnd('start');
//    //增加数据
//
//    db.collection('user').insertOne({'username':"wangwu",'age':26,'sex':"男","status":"1"},function(err,result){
//
//        if(!err){
//            //console.log('增加数据成功');
//            client.close();
//
//        }
//    })
//
//})



console.time('start1');
MongoClient.connect(dbUrl, (err, client) => {
    if (err) {

        console.log(err);
        return;
    }

    var db = client.db(dbName);
    //查询数据
    var result = db.collection('user').find({});
    result.toArray((err, docs) => {
        console.timeEnd('start1');
        console.log(docs);

    })
})







console.time('start2');
MongoClient.connect(dbUrl, (err, client) => {
    if (err) {

        console.log(err);
        return;
    }

    var db = client.db(dbName);
    //查询数据

    var result = db.collection('user').find({});

    result.toArray((err, docs) => {
        console.timeEnd('start2');
        console.log(docs);

    })
})





