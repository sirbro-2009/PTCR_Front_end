import { AlertCircleIcon } from "lucide-react"
//import { Provider } from "@/hooks/Provide";
//import { useContext } from "react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { useTranslation } from "react-i18next";
export function Alert_() {
const {t} = useTranslation();
//const {login,signUp} = useContext(Provider)
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/20 backdrop-blur-sm">
      <Alert variant="destructive" className="max-w-md shadow-lg text-center animate-in fade-in zoom-in-95 duration-200">
        <AlertCircleIcon className="h-4 w-4 text-center" />
        <AlertTitle>{t(`auth.false_title`)}</AlertTitle>
        <AlertDescription>
          {t(`auth.Email-prop`)}
        </AlertDescription>
      </Alert>
    </div>
  )
}