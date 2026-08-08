const stopApp=function(req,res,next){
    console.log('We are temporilry facing the issue , Visit at 2 PM');    
    next();
}

const myLogger=function(req,res,next){
    console.log('Our services are up!');    
    next();
}

const test=function(req,res,next){
    console.log('Testing the middleware!');    
    next();
}
module.exports={myLogger,stopApp,test}

//where the sigineduser has the priveleges