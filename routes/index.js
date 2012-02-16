var fs = require('fs');
var options = null;

function _getOptions(){
  if(options === null){
    var path = '/Users/stephanwallentin/development/etown/etown-foundation/content/fei.json';
    options = JSON.parse(fs.readFileSync(path));    
  }
  return options;
}


/*
 * GET home page.
 */

exports.index = function(req, res) {
  res.render('index', { 
    title: 'Home' 
  });
};

/*
 * GET about page.
 */

exports.about = function(req, res) {
  res.render('about', {
    title: 'About'
  });
};

/*
 * GET Frontend Elements Library page.
 */

exports.fei = function(req, res){
  res.render('fei/index', {
  revision: '0.7',
  last_revision: '2012-02-14',
  last_revision_by: 'Stephan Wallentin',
  title: 'Englishtown frontend elements library | 0.7',
  author: 'Lorenzo Bousi',
  introduction: 'Englishtown frontend elements library ported to jade templates running on express framework. Original html, layout, design by Lorenzo Buosi.',
  page: _getOptions()
  });
};