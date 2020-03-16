const jwt =  require('jsonwebtoken');


module.exports = (req,res,next) => {
  try{
    const token = req.headers.authorisation.split(' ')[1];
    const decodeToken = jwt.verify(token, process.env.TOKEN_SECRET);
    req.userData = {userEmail: decodeToken.email, userId: decodeToken.userId};
    next();
  }catch{
    res.status(401).json({
      message:"Failed Authentification"
    });
  }
}
