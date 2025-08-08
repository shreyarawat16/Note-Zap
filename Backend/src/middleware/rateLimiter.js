import  ratelimit from '../config/upstash.js'

 const rateLimiter = async (req,res,next)=>{
   try{
    const {success}= await ratelimit.limit("my-limit-key"); //if there was authentication, they instead of limit key, there would be userid
    
    if(!success){
        return res.status(429).json({message: "Too many requests"});
    }
    next();
   }

   catch(err){
      console.log("Rate limiter error", err);
      next(err);
   }
}
export default rateLimiter;