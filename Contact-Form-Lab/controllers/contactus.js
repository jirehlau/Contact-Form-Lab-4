module.exports = {
    submission,
    preSubmission,
}


function preSubmission(req,res){
    res.render('forms.ejs')
}

function submission(req,res){
    
    res.render('submissions.ejs', {jireh: req.body})
}

