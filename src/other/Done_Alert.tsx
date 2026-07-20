import { CheckCircle2Icon } from "lucide-react"
import { useTranslation } from "react-i18next";

import {
  Alert,
  AlertTitle,
} from "@/components/ui/alert"

export default function Done_Alert() {
const {t} = useTranslation();

    return (
    <div className="fixed inset-0 z-50 flex items-center  justify-center p-4 bg-background/20 backdrop-blur-sm">
      <Alert className={`text-center self-center md:w-1/5 text-3xl`}>
        <CheckCircle2Icon />
        <AlertTitle>{t(`auth.done`)}</AlertTitle>
      </Alert>
    </div>
  )
}
