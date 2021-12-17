module.exports = (req,res,next ) => {
    if(req.session.usuario != undefined){
        return res.redirect("/lojinha/create")
    }
    next();
}