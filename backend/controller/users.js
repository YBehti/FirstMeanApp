const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.signup = (req,res,next)=>{
  bcrypt.hash(req.body.password,10).then(hash=>{
    const user = new User({
      email:req.body.email,
      password:hash
    });
    user.save()
    .then(result=>{
      res.status(201).json({
        message:"User saved successfuly",
        result:result
      });
    })
    .catch(error=>{
      res.status(500).json({
        message:"Unauthorised credentials"
      });

    });
  });
}

exports.login = (req,res,next)=>{
  let fetchedUser;

  User.findOne({email:req.body.email}).then(user=>{

    fetchedUser = user;
    if(!user){
      res.status(401).json({
        message:"Unauthorised credentials"
      });
    }
    return bcrypt.compare(req.body.password,user.password);
  })
  .then(result=>{


    if(!result){
      res.status(401).json({
        message:"Unauthorised credentials"
      });
    }
    const token = jwt.sign(
      {email:fetchedUser.email,userId:fetchedUser._id},
      process.env.TOKEN_SECRET,
      {expiresIn:"1h"}
      );



    res.status(200).json({
      token:token,
      expiresIn:3600,
      userId: fetchedUser._id
    });


  })
  .catch(error=>{
    res.status(500).json({
      message:"Unauthorised credentials".toUpperCase()
    });
  });
}
