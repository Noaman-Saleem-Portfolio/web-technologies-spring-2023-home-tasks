const express = require("express")
const app = express()
const port = 3000


//home page
app.get("/",(req,res)=>{
    // console.log(res);
    res.send("<h1>Home Page</h1>")
})

//contact us page
app.get("/contact",(req,res)=>{
    res.send("<h1>Contact Us Page</h1>")
})

//products
app.get("/products",(req,res)=>{
    res.send("<h1>All Products Page</h1>")
})


app.listen(port,()=>{
    console.log(`Listening at port ${port}`);
})