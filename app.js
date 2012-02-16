
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  // sets location of views
  app.set('views', __dirname + '/views');
  // sets which view engine to use, options: Haml, Jade, EJS, CofeeKup, jQuery Templates
  // visit http://expressjs.com/guide.html#template-engines for more information
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/contact', routes.contact);
app.get('/fei', routes.fei);
app.get('/dev', routes.dev);


app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
