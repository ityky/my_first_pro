var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('登录错误，再试一遍吧');
});

module.exports = router;
