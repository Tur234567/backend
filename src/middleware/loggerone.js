const loggerone = (request,response,next)=>{
    console.log('Log 1');
    next();    
}
module.exports = loggerone;
