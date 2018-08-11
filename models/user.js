var mongodb = require('./db');
var result = require('./result');

function User(user) {
    this._id = user._id;
    this.name = user.name;
    this.email = user.email;
    this.mobile = user.mobile
    this.password = user.password;
    this.user_id = user.user_id;
}

module.exports = User;

User.register = function (user, callback) {
    mongodb.open(function (err, db) {
        if(err) return callback(result({
            err: err,
            isSuccess: 0
        }));
        db.collection('user',function (err, collection) {
            if(err){
                mongodb.close();
                return callback(result({
                    err:err,
                    isSuccess: 0
                }));
            }
            collection.findOne({
                user_id: user.user_id
            },function (err, userResult) {
                if(userResult != null){
                    mongodb.close();
                    return callback(result({
                        error: "注册用户已经存在",
                        isSuccess: 0
                    }))
                }
                collection.insertOne({
                    name: user.name,
                    email: user.email,
                    mobile: user.mobile,
                    user_id: user.user_id,
                    password: user.password
                },function (err, info) {
                    mongodb.close();
                    return callback(result({
                        err: err,
                        info: info,
                        isSuccess: err == null && info.insertedCount == 1 ? 1 : 0
                    }));
                });
            });
        })
    })
}