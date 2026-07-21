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
location.href = 'https://ptcr-front-end.vercel.app/'
}
}
catch(e){
    console.log(e)
}
}
