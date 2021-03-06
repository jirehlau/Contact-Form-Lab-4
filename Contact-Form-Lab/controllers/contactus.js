module.exports = {
    submission,
}


function submission(req,res){
    console.log(req.body)
    res.send("<h1>Thank you for submitting your form</h1>")
}