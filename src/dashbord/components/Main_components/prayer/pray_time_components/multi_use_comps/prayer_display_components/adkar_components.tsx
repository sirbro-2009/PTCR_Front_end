import { Label } from "@/components/ui/label";
import { useAppSelector } from "@/hooks/Redux";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import App_loader from "../load";
import { useNavigate, useParams } from "react-router";
import { get_mosque_data } from "@/mosque_props_display_page/Display_mosque";
const languageCodes = {
  ar: "ara",
  bn: "ben",
  de: "eng",
  en: "eng",
  fa: "ara",
  fr: "fra",
  ha: "eng",
  id: "eng",
  ms: "eng",
  sw: "eng",
  tr: "tur",
  ur: "ara",
};
interface useState {
  hadith: string;
  done: null | boolean;
}
export default function Adkar_components() {
  const theme = useAppSelector((state) => state.quran.QDS.theme);
  const { t, i18n } = useTranslation();
  const {id} = useParams()
  const [MosqueImg,setMosqueImg] = useState('')
  const [hadith, setHadith] = useState<useState>({
    hadith: "",
    done: null,
  });
  const [randomHadith,setRH] = useState(Math.floor(Math.random() * 42) + 1)
  const navigate = useNavigate();
    setTimeout(() => {
  navigate(`/mosque/${i18n.language}/${id}`)
  }, 10000);
  useEffect(() => {
    
    async function requestHadith() {
      try {
        const {MosqueImg} = await get_mosque_data(id)
        setMosqueImg(MosqueImg)
        const reuqest = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/${languageCodes[i18n.language as keyof typeof languageCodes]}-nawawi/${randomHadith}.json`,
        );
        const respond = await reuqest.json();
        setHadith({
          hadith: respond.hadiths[0].text,
          done: true,
        });
      } catch {
        setHadith({
          hadith: "",
          done: false,
        });
      }
    }
    requestHadith();
  }, []);
  return (
    <div  style={{ background: `url(${MosqueImg ?? ``})` }}>
    <div
      className={` text-center flex items-center justify-center  h-screen w-screen dark:bg-black/50 `}>
      {hadith.done ? (
        <Label className={`  ${[2,24,29].includes(randomHadith)?`text-[2vw] p-3`:`text-[3.4vw] p-2`}`} dir="ltr">
          {hadith.hadith.replaceAll("<br>","\n")}
        </Label>
      ) : hadith.done === false ? (
        <div className=" text-5xl m-auto text-center" dir="ltr">
          Faild to load Data :(
        </div>
      ) : (
        <App_loader />
      )}
    </div>      
    </div>

  );
}
