var express = require('express');
var router = express.Router();
let contactCtrl = require('../controllers/contactus') 


/* GET users listing. */


router.get('/', function(req,res){
    res.render('forms.ejs')
})

router.post('/submit', contactCtrl.submission)


module.exports = router;
