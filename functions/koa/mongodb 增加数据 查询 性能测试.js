// // 单例模式连接数据库模拟：

// class Db {
//     static getInstance() {   /*单例*/
//         if (!Db.instance) {
//             Db.instance = new Db()
//         }
//         return Db.instance
//     }
//     constructor() {
//         console.log('实例化会触发构造函数')
//         this.connect()
//     }
//     connect() {
//         console.log('连接数据库')
//     }
//     find() {
//         console.log('查询数据库')
//     }
// }

// const myDb = Db.getInstance()
// const myDb2 = Db.getInstance()
// const myDb3 = Db.getInstance()
// const myDb4 = Db.getInstance()

// myDb3.find()
// myDb4.find()




// 教程
//http://mongodb.github.io/node-mongodb-native/3.0/quick-start/quick-start/

/*
nodejs操作mongodb数据库

 1.安装mongodb、

    cnpm install mongodb --save

 2.引入mongodb下面的MongoClient
    const MongoClient = require('mongodb').MongoClient

 3.定义数据库连接的地址 以及配置数据库
    koa数据库的名称

    const url = 'mongodb://localhost:27017/'

    const dbName = 'koa'


 4.nodejs连接数据库

 MongoClient.connect(url,function(err,client){

        const db = client.db(dbName)  数据库db对象

 })

5.操作数据库
     db.user.insert
     MongoClient.connect(url,function(err,db){
            db.collection('user').insertOne({"name":"张三"},function(err,result){

                db.close() //关闭连接
            })
     })


*/

const MongoClient = require('mongodb').MongoClient

const dbUrl = 'mongodb://localhost:27017/'

const dbName = 'koa'

// //连接数据库
// console.time('start')
// MongoClient.connect(dbUrl, (err, client) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     const db = client.db(dbName)
//     // console.timeEnd('start')
//     //增加数据
//     db.collection('user').insertOne({ 'username': "wangwu", 'age': 28, 'sex': "男", "status": "2" }, function (err, result) {
//         if (!err) {
//             console.log('增加数据成功')
//             client.close()
//             console.timeEnd('start')
//         }
//     })
// })



console.time('start1')
MongoClient.connect(dbUrl, (err, client) => {
    if (err) {
        console.log(err)
        return
    }
    const db = client.db(dbName)
    //查询数据
    const result = db.collection('user').find({})
    result.toArray((err, docs) => { // toArray方法 是可以异步拿到结果的。
        console.timeEnd('start1')
        // console.log(docs)
        console.log('第一次结束！')
    })
})







console.time('start2')
MongoClient.connect(dbUrl, (err, client) => {
    if (err) {
        return console.log(err)
    }
    const db = client.db(dbName)
    //查询数据
    const result = db.collection('user').find({})
    result.toArray((err, docs) => {
        console.timeEnd('start2')
        // console.log(docs)
        console.log('第二次结束！')
    })
})





