const http = require('http')
const fs = require('fs')
const url = require('url')
const template = require('art-template')

const getData = require('./data/index.js')
console.log(
  getData.getobjs,
  getData.save,
);

// const {
//   add,
//   del,
//   modify,
//   queryAllData,
//   queryFromId, } = require('./data/sqlite/index.js')

// queryAllData('./Comments.DB', 'Comments').then(function (data) {
//   console.log(data);
// }).catch(function (err) {
//   console.log(err);
// })

http
  .createServer(function (req, res) {
    const parseObj = url.parse(req.url, true)
    const pathname = parseObj.pathname
    if (pathname === '/') {
      fs.readFile('./views/index.html', function (err, data) {
        if (err) {
          return res.end('404 Not Found.')
        }

        getData.getobjs('./data/fileData/db.json', 'comments').then((comments) => {
          const htmlStr = template.render(data.toString(), {
            comments: comments
          })
          res.end(htmlStr)
        }).catch((err) => {
          console.log(err);
          res.end(err)
        })

        // queryAllData('./data/sqlite/Comments.DB', 'Comments').then(function (comments) {
        //   const htmlStr = template.render(data.toString(), {
        //     comments: comments
        //   })
        //   res.end(htmlStr)
        //   console.log(data);
        // }).catch(function (err) {
        //   console.log(err);
        //   res.end(err)
        // })


      })
    }
    else if (pathname === '/post') {
      fs.readFile('./views/post.html', function (err, data) {
        if (err) { return res.end('404 Not Found.') }
        res.end(data)
      })
    }
    else if (pathname.indexOf('/public/') === 0) {
      fs.readFile('.' + pathname, function (err, data) {
        if (err) {
          return res.end('404 Not Found.')
        }
        res.end(data)
      })
    }
    else if (pathname === '/pinglun') {
      const comment = parseObj.query
      comment.dateTime = '2017-11-2 17:11:22'
      getData.save('./data/fileData/db.json', 'comments', comment).then((data) => {
        console.log(data);
      }).catch((err) => {
        console.log(err);
      })
      res.statusCode = 302
      res.setHeader('Location', '/')
      res.end()
    }
    else {
      fs.readFile('./views/404.html', function (err, data) {
        if (err) {
          return res.end('404 Not Found.')
        }
        res.end(data)
      })
    }
  })
  .listen(3000, function (a) {
    console.log('running...')
  })
