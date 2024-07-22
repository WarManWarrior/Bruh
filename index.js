import express from "express"
import bodyParser from "body-parser"

const port=3000;
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.post("/next",(req,res)=>{
    if(req.body["pass"]==="password")
    {
        res.render("next.ejs");
    }
    else
    {
        res.render("index.ejs");
    }
})

app.post("/next2",(req,res)=>{
    if(req.body["pass"]==="incorrect")
        {
            res.render("next2.ejs")
        }
        else{
            res.render("index.ejs")
        }
})

app.post("/next3",(req,res)=>{
    if(req.body["pass"]==="again")
        {
            res.render("next3.ejs")
        }
        else{
            res.render("index.ejs")
        }
})

app.listen(port,()=>{
    console.log(`Server is live on port ${port}`);
});