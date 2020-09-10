module.exports =(req,res,next)=>{
    if(!req.user){
        return res.sattus(401).send({error:'You must Login First !'});
    }

    next();
}