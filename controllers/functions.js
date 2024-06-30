const shortid=require('shortid');
const Url=require('../models/url_model');

async function handleGetShortid(req,res){
    const body=req.body;
    if(!body.url) res.status(400).end("url is required!");

    const short_ID=shortid(); 
    await Url.create({
        shortId:short_ID,
        redirectUrl:body.url,
        visitHistory:[],
    });

    res.json({id:short_ID});
}

async function handleGetAnalytics(req,res){
    const id=req.params.ek_Id;
    const data=await Url.findOne({shortId:id});
    return res.json({"ShortId":data.shortId,"clicks":data.visitHistory.length});
}
module.exports={handleGetShortid,handleGetAnalytics};