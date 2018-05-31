var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/v1/payments/payouts', function(req, res, next) {
    console.log('BODY ', req.body);
    var index = req.body.sender_batch_header.sender_batch_id;
    var response = {};
    var arr = index.split('-');

    //Uncomment this for batch transaction to failed some
   if (arr[2] == 0 || arr[2] == 3){
        response = {name: 'INSUFFICIENT_FUNDS',debug_id: 'b740133c272c9',code: 422};
        res.status(500).send(response);
    } else {
        response = {batch_header:{payout_batch_id:Math.random(), batch_status:'completed'}};
        res.status(200).send(response);
    }

    //Uncomment this for successful transaction
    /*response = {batch_header:{payout_batch_id:Math.random(), batch_status:'completed'}};
    res.status(200).send(response);*/
});

router.post('/nvp', function(req, res, next) {
    console.log('BODY ', req.body);
    var index = req.body.sender_batch_header.sender_batch_id;
    var response = {};
    var arr = index.split('-');
    console.log('arr ', arr);

    // uncomment this if you want to return failed request
    /*response = {batch_header:{payout_batch_id:Math.random(), batch_status:'completed'}};
    res.status(200).send(response);*/

    //// uncomment this if you want to return success request
    response = {name: 'INSUFFICIENT_FUNDS',debug_id: 'b740133c272c9',code: 422};
    res.status(500).send(response);


});
module.exports = router;
