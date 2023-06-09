const express= require("express")
const cors= require("cors")
const app= express()
const  products= [
    {name:"phone",id:1,price:300,qty:1,url:"https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650__340.png"},
    {name:"tablet",id:2,price:700,qty:1,url:"https://cdn.pixabay.com/photo/2013/07/12/13/58/ipad-147691__340.png"},
    {name:"laptop",id:3,price:2000,qty:1,url:"https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901__340.jpg"},
    {name:"camera",id:4,price:600,qty:1,url:"https://cdn.pixabay.com/photo/2015/06/30/08/07/lens-826308__340.jpg"},
    {name:"watch",id:5,price:100,qty:1,url:"https://cdn.pixabay.com/photo/2014/07/31/23/00/wristwatch-407096__340.jpg"},
    {name:"tv",id:6,price:900,qty:1,url:"https://cdn.pixabay.com/photo/2016/03/21/21/37/tv-1271650__340.png"}
]

app.use(cors())
 app.use(express.static("../javasp"))

app.get("/products", (req, res)=>{
    res.status(200).json(products)
})





const port = process.env.PORT || 4000
app.listen(port, ()=>console.log(`app listening on ${port}`))