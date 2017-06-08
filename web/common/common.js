var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '101.200.229.232',
    user: 'lidh2',
    password: 'lydhh2o',
    database:'persionsite'
});

exports.menu = function(callbck)
{
	connection.connect();
	//查询
	connection.query('SELECT * from category where is_menu=1 and `status` = 1 order by `order`', function(err, rows, fields) {
	    callbck(err, rows, connection);
	});
//关闭连接

};

exports.indexlist = function(callbck)
{
	connection.connect();
	//查询
	connection.query('SELECT * from article where  `status` = 1 order by articleid desc limit 5', function(err, rows, fields) {
	    callbck(err, rows, connection);
	});
};

exports.indextaglist = function(callbck)
{
	connection.connect();
	//查询
	connection.query('SELECT * from tags where order by num desc limit 10', function(err, rows, fields) {
	    callbck(err, rows, connection);
	});
};



exports.indexgoodlist = function(callbck)
{
	connection.connect();
	//查询
	connection.query('SELECT * from article where `status` = 1 order by good desc limit 10', function(err, rows, fields) {
	    callbck(err, rows, connection);
	});
};


exports.indexbadlist = function(callbck)
{
	connection.connect();
	//查询
	connection.query('SELECT * from article where `status` = 1 order by bad desc limit '+skip+',10', function(err, rows, fields) {
	    callbck(err, rows, connection);
	});
};

exports.articlelistbycategoryid = function(categoryid, skip, take callbck)
{
	connection.connect();
	//查询
	connection.query('SELECT * from article where `status` = 1 and categoryid='+categoryid+' order by bad desc limit 10', function(err, rows, fields) {
	    callbck(err, rows, connection);
	});
}

exports.article = function(articleid, callbck)
{
	connection.connect();
	//查询
	connection.query('SELECT * from article where `status` = 1 and articleid='+articleid+'', function(err, rows, fields) {
	    callbck(err, rows, connection);
	});
}

exports.articlelistbytagid = function(tagsid, skip, take callbck)
{
	connection.connect();
	//查询
	connection.query('SELECT * from article where `status` = 1 and articleid in (SELECT articleid from article__tags where tagsid = '+tagsid+') limit '+skip+',10', function(err, rows, fields) {
	    callbck(err, rows, connection);
	});
}

exports.tagslist = function(callbck)
{
	connection.connect();
	//查询
	connection.query('SELECT * from tags where order by num desc limit 100', function(err, rows, fields) {
	    callbck(err, rows, connection);
	});
}