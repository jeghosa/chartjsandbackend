
//  const  products= [
//     {name:"phone",id:1,price:300,qty:1,url:"https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650__340.png"},
//     {name:"tablet",id:2,price:700,qty:1,url:"https://cdn.pixabay.com/photo/2013/07/12/13/58/ipad-147691__340.png"},
//     {name:"laptop",id:3,price:2000,qty:1,url:"https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901__340.jpg"},
//     {name:"camera",id:4,price:600,qty:1,url:"https://cdn.pixabay.com/photo/2015/06/30/08/07/lens-826308__340.jpg"},
//     {name:"watch",id:5,price:100,qty:1,url:"https://cdn.pixabay.com/photo/2014/07/31/23/00/wristwatch-407096__340.jpg"},
//     {name:"tv",id:6,price:900,qty:1,url:"https://cdn.pixabay.com/photo/2016/03/21/21/37/tv-1271650__340.png"}
// ]

 const vcont= document.querySelector(".cont")

async function getdata(){
    const {data}= await axios.get("http://localhost:4000/products")
console.log(data)
   const prodv=  data?.map((product)=>{
        const{name,id,price,qty,url}= product
        return `<article>
        <img src=${url} alt=${name}>
        <h3>${name}</h3>
        <div class="qcont"> <h3>${qty}</h3> 
        <span>$${price}</span> </div>

    </article>`
    
    })
    vcont.innerHTML= prodv  
}


window.addEventListener("DOMContentLoaded",getdata )




// const image= document.querySelector("#aimg")
// const pricev =  document.querySelector("#pid")
// const quant = document.querySelector("#qid")
// const namev = document.querySelector("#nid")
// const contro= document.querySelector("button")


    //  products.map((item)=>{
    //      const {url, name,qty,price, id} = item
    //     pricev.textContent= price
    //     quant.textContent= qty
    //     namev.textContent= name
    //     image.src= url
    //     // return {url, name,qty,price}
    // })

    // for (let i = 0; i < products.length; i++) {
    //     const {url, name,qty,price, id} = products[i]
    //     pricev.textContent= products[i].price
    //     quant.textContent= products[i].qty
    //     namev.textContent= products[i].name
    //     image.src= products[i].url
        
        
    // }
    
    
 