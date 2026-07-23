import { Provider } from "@/hooks/Provide"
import { useContext } from "react"
import type { IProvider } from "@/hooks/Provide"
import { useTranslation } from 'react-i18next';
import { useAppDispatch,useAppSelector } from "@/hooks/Redux";
import { editQDS } from "@/features/quran/quran_slice";

export default function useUiChanges(){
const dispatch = useAppDispatch()
  const {theme,setTheme} = useContext(Provider) as IProvider
    const {  i18n } = useTranslation();
  
{/*theme */}
  const handleTheme = ()=>{
    const finaValue = theme==='dark' ? '' : 'dark'
    setTheme(finaValue)
    localStorage.setItem("theme",finaValue)
    dispatch(editQDS(['theme',finaValue]))
  }
  {/*lang*/}
  const handleLanguageChange = (value:string):void => {
    const selectedLang = value;
    i18n.changeLanguage(selectedLang);
    document.dir = selectedLang === 'en' ? 'ltr' : 'rtl';
  }
  return    {handleTheme,handleLanguageChange,theme,i18n}
}