import { Card } from "@/components/ui/card";
import ThemesRadioGroups from "./Theme_Components/themesRadioGroups";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
export   default function Theme() {
localStorage.setItem("lt",'theme')
const {t} = useTranslation()

return ((<Card className="p-2">
    <Label className="p-2 text-2xl m-auto" >{t(`dashboard.quran_page.theme.title`)}</Label>
    <ThemesRadioGroups/>
    </Card>))
}