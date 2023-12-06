// import Btn from "./btn";

import Link from "next/link";





async function Product(){
    let data = await fetch("https://dummyjson.com/products")
    data = await data.json()
   
    return data.products
}
export default async function page(){
    const product = await Product()
    console.log(product);
    return(
        <div>

        <h1 className="text-3xl font-bold text-center">Product List</h1>

        {
            product.map((item)=>(
                <div style={{display :"inline-grid",justifyContent : "space-evenly" }}>

                <div style={{width : "200px"}} className="m-3 py-3 p-5 bg-gray-400">
<center>

                <h1 className="text-1xl font-bold">{item.title}</h1>
             <br/>
             <Link href={`/Products/${item.id}`} className="bg-gray-700 text-white p-1 px-3 rounded m-3"> 
             Detail
             </Link>
</center>
            
                </div>
                </div>
            ))
        }
        </div>
    )
}