var express = require('express');
var fs = require('fs');
var router = express.Router();

router.get('/:cik', function(req, res, next) {
	
  const cik = fs.readFileSync(process.cwd() + '/static/companyfacts/' + req.params.cik + '.json',
            {encoding:'utf8', flag:'r'});	
	
  res.json(JSON.parse(cik));
});

router.get('/:cik/netincomes', function(req, res, next) {
	
  const cik = fs.readFileSync(process.cwd() + '/static/companyfacts/' + req.params.cik + '.json',
            {encoding:'utf8', flag:'r'});	
			
  const cikJson = JSON.parse(cik);
  const netIncome = cikJson.facts['us-gaap'].NetIncomeLoss
  
	
  res.json(netIncome);
});

router.get('/:cik/sharesoutstandings', function(req, res, next) {
	
  const cik = fs.readFileSync(process.cwd() + '/static/companyfacts/' + req.params.cik + '.json',
            {encoding:'utf8', flag:'r'});	
			
  const cikJson = JSON.parse(cik);
  const sharesOutstandings = cikJson.facts.dei.EntityCommonStockSharesOutstanding
  
	
  res.json(sharesOutstandings);
});

module.exports = router;
