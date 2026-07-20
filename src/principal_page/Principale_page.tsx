import Bar from "./components/Bar.js"
import ImgCarsool from "./components/ImgCarsool.js"
import { DataShow } from "./components/DataShow.js"
import Footer from "./components/Footer.js"
import { useTranslation } from 'react-i18next';

export default function Principale_page(){
  const {t} = useTranslation();

    return(<div className="">
    <h1 className={`text-Foreground text-center mb-8 font-bold text-2xl `}>
    {t(`navbar.greeting`)}
    </h1>
    <Bar></Bar>
    <div className="mt-20">
        <h1 className={`text-Foreground text-center font-light text-xl `}>
            {t(`hero.badge`)}
        </h1>
        <h1 className={`text-Foreground text-center font-bold text-4xl lg:text-7xl `}>
            {t(`hero.title`)}
        </h1>
    </div>
    <ImgCarsool></ImgCarsool>
        <h1 className={`text-Foreground text-center font-bold text-4xl lg:text-6xl `}>
            {t(`stats.section_title`)}</h1>
        
    <DataShow/>
    <Footer/>
    </div>)
}