exports.index = function (req, res) {
	res.render('index', {title: '个人站', menu:["Language", "Database", "Service", "Discuss"], content:"正文内容"})
}