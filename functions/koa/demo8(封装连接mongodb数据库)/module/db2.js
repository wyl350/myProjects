const MongoClient = require('mongodb').MongoClient
const Config = require('./config.js')

class Db {
	static getInstance() {   /*1、单例  多次实例化实例不共享的问题*/
		if (!Db.instance) { Db.instance = new Db() }
		return Db.instance
	}
	constructor() {
		this.dbClient = '' /*属性 放db对象*/
		this.connect()   /*实例化的时候就连接数据库*/
	}
	connect() {  /*连接数据库*/
		let _that = this
		return new Promise((resolve, reject) => {
			if (!_that.dbClient) {         /*1、解决数据库多次连接的问题*/
				MongoClient.connect(Config.dbUrl, (err, client) => {
					if (err) { return reject(err) } else {
						_that.dbClient = client.db(Config.dbName)
						resolve(_that.dbClient)
					}
				})
			} else {
				resolve(_that.dbClient)
			}
		})
	}
	async find(collectionName, json) {
		return new Promise((resolve, reject) => {
			this.connect().then((db) => {
				const result = db.collection(collectionName).find(json)
				result.toArray(function (err, docs) {
					if (err) {
						reject(err)
						return
					}
					resolve(docs)
				})
			})
		})
	}
	update() {
	}
	insert() {
	}
}

module.exports = Db.getInstance()


// 需要继续做的工作
// 试着把这个模块的that给去掉
// 试着把这个模块改成await的形式。
// 试着把toArray方法放进去