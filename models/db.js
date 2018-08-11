var settings = require('../settings');
var Db = require('mongodb').Db;//获得DB对象
var Server = require('mongodb').Server;
module.exports = new Db(settings.db, new Server(settings.host, "27017", {}))//连接数据库