module.exports = {
    submission,
    index,
}


function index(req,res){
    res.render('forms.ejs')
}

function submission(req,res){
    res.render('submissions.ejs', {data: req.body})
}
