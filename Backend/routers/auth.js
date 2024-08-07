const express=require('express');
const { body, validationResult } = require('express-validator');
const User=require('../user');
const router=express.Router();
const jwt=require('jsonwebtoken');
const bcrypt = require('bcrypt');
const fetchuser=require('../fetch');
const jwt_s="surya";

// user register
router.post('/user',[
    body('username').isLength({min:3}),
    body('email').isLength({min:2}).isEmail(),
    body('password').isLength({min:3})
],async (req,res)=>{
     const {username, email, password}=req.body;
     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send("please try to login with error box...");
    }
    try{
    //check the user email is vaildate or not 
    const user=await User.findOne({email:email});
    if(user){
      return res.status(400).send("please try to login user error...");
    }

    const salt=await bcrypt.genSalt(10);
    const secPass=await bcrypt.hash(password,salt);
   
    // const user=User(req.body);    //this two lines are used to simply check the application with backend
    // user.save();
     user=await User.create({
      username,
      email,
      password: secPass,
    });
    const data={
      user:{
        id:user.id
      }
     }
     const jwtData=jwt.sign(data,jwt_s);
     res.json({jwtData,username,email});
    }
    catch(error){
         console.log(error.message);
    }
   // res.json(user);
});

//for login
router.post('/login',[
  body('email','Enter a Correct Email').isEmail(),
  body('password','Password cnt blank').exists(),
],async (req,res)=>{
  let sucess=false;
  //check for possible errors 
   const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {email,password}=req.body;
  try{
    console.log(email + password);
  const user=await User.findOne({email});
  if(!user){
    return res.status(400).send("please try to login with correct credentials...");
  }
  const passwordComp= await bcrypt.compare(password,user.password); //compare the given password with the found password in the database
  if(!passwordComp){
    sucess=false;
    return res.status(400).send("please try to login with correct credentials");
  }
  else{
    const data={
      user:{
        id:user.id
      }
     }
  
     const jwtData=jwt.sign(data,jwt_s);
     sucess=true;
     res.json({sucess,jwtData,email,username,user});
  }
   
   

}
catch(error){
  res.status(500).send("some error occured");
}
});

router.get('/getuser', fetchuser,  async (req, res) => {
  try {
    const userId = req.user.id;
    console.log(userId);
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});


module.exports=router;

