var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//增加返回json数据
router.get('/storage', function (req, res) {
    var data = {
        name: 'B',
        age: 18,
        tags: [
            'geek1',
            'nerd1',
            'otaku1'
        ]
    };
    res.send(data);
});

module.exports = router;
