import Bar from "@/principal_page/components/Bar";
import { useTranslation } from "react-i18next";
import { Sign_card } from "./components/Sign_card.js";
import Footer from "@/principal_page/components/Footer";
import { Alert_ } from "../other/Alert_.js";
import { useContext, useEffect } from "react"
import { Provider } from "@/hooks/Provide";
import  type { IProvider } from "@/hooks/Provide";
import Done_Alert from '../other/Done_Alert.js'
import ShowTerms from "@/other/show_terms";
import useAuthActions from "./components/functions/handel-changes.js"
export default function Login_page() {
  const { t } = useTranslation();
  const { signUp, showTerms, setShowTerms } = useContext(Provider) as IProvider
  const { navigateFunction } = useAuthActions()
  useEffect(() => {
    navigateFunction();
  }, [])
  return (
    <>
      <h1 className={`text-Foreground text-center font-bold text-2xl `}>{t(`navbar.greeting`)}</h1>
      <Bar />
      <Sign_card />
      {signUp.show_error ? <Alert_ /> : ``}
      {signUp.show_alert ? <Done_Alert /> : ``}
      {showTerms!.show ? <ShowTerms props={[setShowTerms, showTerms]} /> : ``}
      <Footer />
    </>
  )
}