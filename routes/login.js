var express = require('express');
var router = express.Router();
/* GET home page. */

router.get('/',function (req,res,next) {
   //跳转模板app里找路由
   res.render('login',{ });
});
router.post('/',function (req,res) {
          return  res.redirect('/');//跳界面
});

module.exports = router;
