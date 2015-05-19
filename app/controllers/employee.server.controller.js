exports.render = function(req, res) {
  res.render('employee', {
    title: 'Employee Time Sheet',
    user: req.user ? req.user.username : ''
  });

};
