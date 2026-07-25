import { Card } from "@/components/ui/card";
import Auto_read from "./LAR_components/auto_read";
export   default function LAR() {
localStorage.setItem("lt",'LAR')
return <Card>
    <Auto_read/>
</Card>
}