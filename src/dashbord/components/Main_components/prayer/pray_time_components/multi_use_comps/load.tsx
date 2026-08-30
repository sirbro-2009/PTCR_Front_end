import { Card } from "@/components/ui/card";
import ICON from '@/assets/icons/icon.png'
import Loader from "@/other/Loader.";
import { Label } from "@/components/ui/label";
export default function App_loader(){
    return (<Card className="flex flex-col w-1/7 m-auto">
        <img src={ICON} alt="PTCR icon" className="m-auto"/>
        <Label className="text-2xl m-auto font-bold">PTCR</Label>
        <Loader/>
    </Card>)
}