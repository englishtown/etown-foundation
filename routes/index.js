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
    title: 'Englishtown frontend elements library | 0.7',
    author: 'Lorenzo Bousi'
  });
};
