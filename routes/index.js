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
    introduction: 'Englishtown frontend elements library ported to jade templates running on express framework. Original html, layout, design by Lorenzo Buosi.'
  });
};

exports.dev = function(req, res){
  res.render('fei/dev', {
    revision: '0.7',
    last_revision: '2012-02-14',
    last_revision_by: 'Stephan Wallentin',
    title: 'Englishtown frontend elements library | 0.7',
    author: 'Lorenzo Bousi',
    introduction: 'Englishtown frontend elements library ported to jade templates running on express framework. Original html, layout, design by Lorenzo Buosi.'
  });
};



