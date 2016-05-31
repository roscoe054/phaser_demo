var render = require('./lib/render')
var logger = require('koa-logger')
var route = require('koa-route')
var serve = require('koa-static')
var path = require('path')
var koa = require('koa')
var app = koa()

// middleware
app.use(logger())
app.use(serve(path.join(__dirname, 'public')))

// route middleware
app.use(route.get('/', index));

function *index() {
  this.body = yield render('index');
}

app.listen(2333)
console.log('listening on port 2333')
