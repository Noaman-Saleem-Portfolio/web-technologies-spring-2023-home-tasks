const express = require("express")
const app = express()
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const methodOverride = require("method-override");

const port = 5000

// override with POST having ?_method=DELETE/PATCH
app.use(methodOverride("_method"));

// // for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({extended:true}))

//setting folder for static assets
app.use(express.static("public"))
// app.use(express.static(path.join(__dirname,"public")))

//setting ejs
app.set("view engine","ejs")
// app.set("views","views")
// app.set("views",path.join(__dirname,"views"))

// Fake Database
let blogs = [
  {
    id: uuidv4(),
    title: "Organic Food for health",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    image:
      "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: uuidv4(),
    title: "Better to Eat",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    image:
      "https://images.pexels.com/photos/3669640/pexels-photo-3669640.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: uuidv4(),
    title: "Exercise is Best Cure",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    image:
      "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: uuidv4(),
    title: "Laxury Cars",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    image:
      "https://images.pexels.com/photos/6894427/pexels-photo-6894427.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
// https://images.pexels.com/photos/296817/pexels-photo-296817.jpeg?auto=compress&cs=tinysrgb&w=600

// https://images.pexels.com/photos/620335/pexels-photo-620335.jpeg?auto=compress&cs=tinysrgb&w=600

// https://images.pexels.com/photos/620335/pexels-photo-620335.jpeg?auto=compress&cs=tinysrgb&w=600


//home route --> Render home.ejs
app.get("/",(req,res)=>{
    // console.log(uuidv4());
    res.render("home")
})

//display all blogs
app.get("/blogs",(req,res)=>{
    res.render("blogs/index",{blogs})
})

//form to create new blog
app.get("/blogs/new",(req,res)=>{
    res.render("blogs/new")
})

//create new blog  --> POST
app.post("/blogs",(req,res)=>{
    // console.log(`Data Receieved`);
    // console.log(req.body);
    const {title, description, image} = req.body
    const newBlog = {title, description, image, id: uuidv4()}
    blogs.push(newBlog)
    res.redirect('/blogs')
})

//create new blog  --> GET
// app.get("/blogs-create",(req,res)=>{
//     // console.log(`Data Receieved`);
//     console.log(req.query);
// })


//show deatail of specific blog
app.get("/blogs/:id",(req,res) => {
  // console.log(req.params);
  const {id} = req.params
  const foundBlog = blogs.find((blog) =>  blog.id === id)
  // console.log(foundBlog);
  res.render("blogs/show",{foundBlog})
})

//form to edit specific blog
app.get("/blogs/:id/edit",(req,res)=>{
  const {id} = req.params
  const foundBlog = blogs.find((blog) =>  blog.id === id)
  res.render("blogs/edit",{foundBlog})
})

//update spacific blog
app.patch("/blogs/:id",(req,res)=>{
  // console.log(`Update API Hit!`);
  const {id} = req.params
  const {title, description, image} = req.body
  //Quiz Write the code to update array element by youself
  res.redirect("/blogs")
})

//delete spacific blog
app.delete("/blogs/:id",(req,res)=>{
  // console.log(`Update API Hit!`);
  const {id} = req.params
  
  //Quiz Write the code todelete the array element by youself
})

app.listen(port,() => {
    console.log(`Server listening at port ${port}`);
})