import { Button } from "@/components/ui/button"
import { User } from "lucide-react"
import { useTranslation } from 'react-i18next';
const button_style = ` duration-750  p-0.5 lg:p-2   lg:text-xl cursor-pointer transition-all hover:bg-[#059669]`
import { Link } from "react-router";
export default function No_Login(){
const {t } = useTranslation();

        return (
                <Link to={`/login`}>                  
                        <Button className={button_style}>     
                                {t(`navbar.login`)}
                                <User className="scale-120 font-bold"/>
                        </Button>
                </Link>                
)
}