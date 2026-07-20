import Bar from "@/principal_page/components/Bar";
import { useTranslation } from "react-i18next";
import { Login_card } from "./components/Login_card.js";
import Footer from "@/principal_page/components/Footer";
import { Alert_ } from "../other/Alert_.js";
import { useContext ,useEffect} from "react"
import { Provider } from "@/hooks/Provide";
import Done_Alert from '../other/Done_Alert.js'
import useAuthActions from "./components/functions/handel-changes.js"
import  type { IProvider } from "@/hooks/Provide";

export default function Login_page(){
const {t} = useTranslation();
const {login} = useContext(Provider) as IProvider
const {navigateFunction} = useAuthActions()
  useEffect(()=>{
    navigateFunction();
  },[])
return(
        <>
            <h1 className={`text-Foreground text-center font-bold text-2xl `}>{t(`navbar.greeting`)}</h1>
            <Bar/>
            <Login_card/>
            {login.show_error?<Alert_/>:``}
            {login.show_alert?<Done_Alert/>:``}

            <Footer/>
        </>
        )
}