exports.render = function(req, res) {
  res.render('index', {
    title: 'Mother Lode Holdings, Inc Time Sheet',
    user: req.user ? req.user.username : ''
  });

};
