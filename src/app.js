const path = require('path');
const serve = require('koa-static');
const views = require('koa-views');
const Koa = require('koa');
const redis = require('./db/redis');
const appPort = require('../config/app');

const app = module.exports = new Koa();

// setup views, appending .ejs
// when no extname is given to render()

app.use(serve(__dirname + '/public'));
app.use(views(path.join(__dirname, '/views'), { extension: 'ejs' }));

// dummy data

const user = {
  name: {
    first: 'Tobi',
    last: 'Holowaychuk'
  },
  species: 'ferret',
  age: 3
};

// render

app.use(async function(ctx) {
  
  if (ctx.url === '/redis') {
    const data = await redis.ping();
    return ctx.render('redis', { redisData: data });
  }
  return ctx.render('user', { user });
});

if (!module.parent) app.listen(appPort);
