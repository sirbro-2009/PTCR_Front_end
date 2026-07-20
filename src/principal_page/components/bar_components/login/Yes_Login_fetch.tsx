import { serverHost } from "@/other/data";
export  async function sign_out() {
  const token = localStorage.getItem("token");
try{
const request = await fetch(`${serverHost}user/sign-out`,{
    method: 'DELETE',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`     
    }
})
const res =await  request.json()
if(res.done){
localStorage.removeItem("token")
location.reload()
}
}
catch(e){
    console.log(e)
}
}
/*
export  async function getData(token) {
let res 
try {
if(token){
const request = await fetch(`${theHoster}user/get-infromations`,{
    headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`     
    }
})
res ={...await  request.json() ,fullfied:true}
}
else {
res = {fullfied:false}
}
}
catch  {
res = {fullfied:false}
}
return res
}
*/