var express = require('express');
var router = express.Router();
var user = require('../models/user');
var pro = require('../models/pro');

/* GET home page. */

router.get('/',function (req,res) {
    res.render("register");
});

router.post('/',function (req, res) {
    if(req.body != null){
        user.register({
            name: req.body.name,
            email: req.body.isMobileOrEmail == "email" ? req.body.user : "",
            mobile: req.body.isMobileOrEmail == "mobile" ? req.body.user : "",
            user_id: req.body.user,
            password: req.body.password
        },function (result) {
            if(result != null && result != undefined){
                if(result.isSuccess == 1){
                    pro.find(function (info) {
                        var integralArr = new Array();
                        var hotArr = new Array();
                        for(var o of info.info){
                            if(o.type == "积分菜品"){
                                integralArr.push(o);
                            }
                            if(o.type == "热销菜品"){
                                hotArr.push(o);
                            }
                        }
                        res.render('index', {
                            integralArr: integralArr,
                            integralName: integralArr[0].type,
                            hotArr: hotArr,
                            hotName: hotArr[0].type
                        });
                    });
                }else{
                    if(result.error != null ){
                        req.flash("error",result.error);
                    }else {
                        req.flash("error","注册用户失败，稍后请重试");
                    }
                    res.redirect('/register');
                }
            }else {
                req.flash("用户注册失败，稍后请重试!");
                res.redirect('/register');
            }
        })
    }
});


    module.exports = router;
