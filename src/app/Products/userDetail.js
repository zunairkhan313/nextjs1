export default async function getUserDetail(id) {
  
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }