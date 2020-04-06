let
  repalceJson = {
    文章标题: '00000',
    本文关键词: [1, 2,],
    作者: 'wyl350',
    日期: new Date().toLocaleString()
  }

let { fileName, writeFromPrototype } = require('./conduct_File')
let { inputPath, outputPath, } = fileName('md', 'index', __dirname+'md','000000000')

writeFromPrototype(outputPath, repalceJson, inputPath)


// 1. D:\我的项目\myStudy\docs
// 1. D:\我的项目\myStudy\docs\时事新闻报道