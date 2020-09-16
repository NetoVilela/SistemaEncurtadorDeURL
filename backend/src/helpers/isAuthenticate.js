module.exports = {

    isAuth: function(req,res,next){
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect(process.env.BASE_URL_FRONT+'/login');
    }

    

}