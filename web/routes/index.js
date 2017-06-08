exports.index = function (req, res) {
	var common = require('../common/common');
	var async = require(async);
	var menus = [];
	var lists = [];
	var tags = [];
	var comments = [];
	var goods = [];
	var bads = [];

	async.waterfull([function(callbck)
	{
		common.menu(function(err, rows, connection){
			connection.end();
			callbck(err);
		});
	}, function(callbck){
		common.indexlist(function(err, rows, connection){

		});
	}], function(err, msg){
		if(err)
			res.render('500', {title: 500, err: err});
		else res.render('index', {title: '个人站', menus:rows, content:"正文内容"})
	});

}