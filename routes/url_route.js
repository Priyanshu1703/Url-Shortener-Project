const express=require('express');
const {handleGetShortid,handleGetAnalytics}=require('../controllers/functions');
const router=express.Router();

//setting paths and methods
router.post("/",handleGetShortid);
router.get("/analytics/:ek_Id",handleGetAnalytics);
module.exports=router;