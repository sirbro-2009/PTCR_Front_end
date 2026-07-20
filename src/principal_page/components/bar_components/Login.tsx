import No_Login from "./login/no_login.js";
import Yes_Login from "./login/yes_login.js";
const thToken = localStorage.getItem('token')
export default function Login(){

        return (
                <>
                {thToken?<Yes_Login/>:<No_Login/>}
                </>
)
}