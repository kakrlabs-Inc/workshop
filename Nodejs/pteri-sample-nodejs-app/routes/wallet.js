var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('wallet', { title: 'wallet' });
});
// router.get('/create-wallet', function(req, res, next) {
//     res.render('index', { title: 'Express' });
//   });
module.exports = router;
