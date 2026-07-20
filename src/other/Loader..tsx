import { Loader2 } from "lucide-react"
export default function Loader(long:any){
return (<div className={`flex${long?``:`h-40 w-full`}  items-center justify-center`}>
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>)
}