import { getShoppingCart } from "../utilites/fakedb"

const customloader=async()=>{
const loaderproducts=await fetch("product.json")
const product=await loaderproducts.json()
let saverCart=[]

const stored=getShoppingCart()
if(stored){
    for(const id in stored){
        const existingProduct=product.find(p=>p.id==id)
        if(existingProduct){
            const quan=stored[id]
            existingProduct.quantity=quan
        }
        saverCart.push(existingProduct)
    }
}
// console.log(saverCart)
return saverCart
}

export {customloader}