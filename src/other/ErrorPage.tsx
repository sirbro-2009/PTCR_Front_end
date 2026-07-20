import { Card } from "@/components/ui/card"
import { useTranslation } from "react-i18next";
import Icon from '@/assets/icons/icon.png'
import { Link } from "react-router";
export default function ErrorPage(){
const { t } = useTranslation();

return (
    <Card className={`self-center  items-center  h-screen`}>
        <div className="text-center m-auto">
        <h1 className="text-3xl">Error 404 </h1>
        <h2 className="text-xl">{t(`Error`)}</h2>
        <Link to={`/`} className="text-center">
                <img src={Icon} alt="" title="back to home" className="w-1/10 mt-5 outline-4 rounded-full m-auto" />
        </Link>
        </div>
    </Card>)
}
