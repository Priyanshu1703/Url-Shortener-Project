const express=require('express');
const router=require('./routes/url_route');
const {ConnectToMongoDB}=require('./connection');
const Url=require('./models/url_model');

ConnectToMongoDB('mongodb://localhost:27017/short-url_db')
.then(()=>console.log('MongoDb Connected!'));

const port=8000;
const app=express();

//middleware for parsing the body
app.use(express.json());

app.use("/url",router); // localhost:8000/url  ke upar jo bhi hoga woh yeh router dekhega 


app.get("/:id", async (req,res)=>{
    console.log("hello");
    const meri_id=req.params.id;
    const filter={shortId:meri_id}; //filter will search for the "ShortID" value in shortId key from db 
    const update={$push:{visitHistory:{timestamps:Date.now()}}}; //update action

    const data = await Url.findOneAndUpdate(filter,update);
    res.redirect(data.redirectUrl);
});

app.listen(port,()=>console.log("Server Started!")); 