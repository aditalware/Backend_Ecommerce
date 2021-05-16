const express=require('express');
const router=express.Router();
const signUpTemplate= require('../modles/SignUpModels')

router.post('/signup',async(req,res)=>

              
               {
              console.log(req.body)
               const newUser= new signUpTemplate({
                   fullname:req.body.fullname,
                   username:req.body.username,
                   password:req.body.password,
                   email:req.body.email
               })
                console.log(newUser);
               await newUser.save()
               .then((data)=>{console.log(data);res.json(data)})
               .catch((err)=>{res.json(err)})
            
            })


            router.post('/login',(req,res)=>
            {
                 
                signUpTemplate.find({username:req.body.username})
                .then((data)=>{
                    if(data.password===req.body.password){
                        res.json({login:true})
                    }
                    res.json({login:false})
                })
                .catch((err)=>res.json(err))
         })



        //jwt verification function
     
module.exports=router