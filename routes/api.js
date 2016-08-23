var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Pirates(){
	return knex('pirates');
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pirates', function(req, res, next){
	Pirates().then(function(pirates){
		res.json({pirates_response: pirates});
	})
})
module.exports = router;
