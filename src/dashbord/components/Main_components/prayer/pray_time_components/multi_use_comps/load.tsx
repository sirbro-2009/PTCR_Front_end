import { Card } from "@/components/ui/card";
import ICON from '@/assets/icons/icon.png'
import Loader from "@/other/Loader.";
import { Label } from "@/components/ui/label";
export default function App_loader(){
    return (<Card className="flex flex-col w-1/2 md:w-1/7 m-auto">
        <img src={ICON} alt="PTCR icon" className="mx-auto"/>
        <Label className="text-4xl md:text-2xl mx-auto font-bold">PTCR</Label>
        <Loader/>
    </Card>)
}