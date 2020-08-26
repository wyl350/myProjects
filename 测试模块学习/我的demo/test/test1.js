const fetch = require('node-fetch')
const promify = require('util').promisify
const fs = require('fs')

exports.readFile = readFile = fs.readFile
exports.readFilePromise = readFilePromise = promify(fs.readFile)
