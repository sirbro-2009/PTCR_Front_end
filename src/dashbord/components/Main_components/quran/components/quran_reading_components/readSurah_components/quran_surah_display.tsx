import Basmala from "@/assets/icons/basmala.png";
import Aya_Number from "./aya_number";
import SurahSvgBar from "@/other/SurahBarSvg";
export interface IquranText {
  name: {
    ar: string;
    en: string;
    transliteration: string;
  };
  number: number;
  revelation_place: {
    ar: "مكية" | "مدنية";
    en: "meccan" | "medinan";
  };
  verses_count: number;
  verses: {
    number: number;
    text: {
      ar: string;
      en: string;
    };
    juz: number;
    page: number;
    sajda: boolean;
  }[];
}
//////////////////////////////
export default function Quran_surah_display({ contentObjects }: any) {
  const { name, number, revelation_place, verses_count, verses } =
    contentObjects as IquranText;
  
  const versesArray = verses?.map((e, i) => {
    return (
      <span key={i} className="cursor-pointer" >
        {e.text.ar}
        <Aya_Number ayaIndex={i}/>
      </span>
    );
  });
  return (
    <div className="flex flex-col">
      <SurahSvgBar informations={{name,number,verses_count,revelation_place}}/>
      <img
        className="scale-75 self-center"
        src={Basmala}
        alt="In the name of Allah, the most gracious, the most merciful/بسم الله الرحمن الرحيم"
      />

      <div
        className="font-[quranFont] text-[2.2em] text-justify leading-[1.65em] mb-[1em]"
        dir="rtl">
        {versesArray}
      </div>
    </div>
  );
}
