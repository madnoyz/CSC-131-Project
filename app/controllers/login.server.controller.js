exports.render = function(req, res) {
  res.render('login', {
    title: 'Mother Lode Holdings, Inc Time Sheet',
    user: req.user ? req.user.username : ''
  });

};
