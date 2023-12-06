
import getUserDetail from "../userDetail"


export default async function BlogDetail({params}){


    const userInfo = await getUserDetail(params.id)
  

    const [user] = await Promise.all([userInfo])

  
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
                 <h1 className="text-3xl font-bold text-center">Products</h1>
         
         <div style={{border : "1px solid black",width : "300px"}}>
            <img src={user.thumbnail} width={300} height={100}/>
             <div className="p-2">

            <h3 style={{fontFamily : "cursive",fontSize : "26px",color : "red"}} className="font-semibold">{user.title}</h3>
            <h3 style={{color : "darkslategray"}} className="font-semibold">{user.description}</h3>
            <h3 className="font-semibold">Price : {user.price}</h3>
             </div>
            
           
            
         </div>
 
        </main>
    )
}