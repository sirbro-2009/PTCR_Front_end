import { Card } from "@/components/ui/card";
import ThemesRadioGroups from "./Theme_Components/themesRadioGroups";
import { Label } from "@/components/ui/label";
export   default function Theme() {
localStorage.setItem("lt",'theme')

return ((<Card className="p-2">
    <Label className="p-2">Theme</Label>
    <ThemesRadioGroups/>
    </Card>))
}