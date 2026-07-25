import Basmala from "@/assets/icons/basmala.png";
import Aya_Number from "./aya_number";
import SurahSvgBar from "@/other/SurahBarSvg";
import { useAppSelector } from "@/hooks/Redux";

import { Card } from "@/components/ui/card";

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
  tadjwid?: string[];
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
export default function Quran_surah_display({ contentObjects, key }: any) {
  const Data = useAppSelector((state) => state.quran.QDS.font);
  const iSAutoModeEnabled = useAppSelector((state) => state.quran.QDS.readMode);
  const myDiv = document.getElementById('quranCrad');
  const isDark = useAppSelector((state) => state.quran.QDS.theme) === "dark";
  const { name, number, revelation_place, verses_count, verses, tadjwid } =
    contentObjects as IquranText;

  const indexs: {
    firstIndex: number;
    lastIndex: number;
  } = {
    firstIndex: verses[0]!.page,
    lastIndex: verses[verses.length - 1]!.page + 1,
  };
  const numberOfpages: number = indexs.lastIndex - indexs.firstIndex;
  const versesArray = verses?.map((e, i) => {
    return (
      <span key={i} className="cursor-pointer">
        {e.text.ar}
        <Aya_Number ayaIndex={i} />
      </span>
    );
  });
  ///////////////////////

  let pagesNumbers_Array: number[] = [];
  for (let i = indexs.firstIndex; i < indexs.lastIndex; ++i) {
    pagesNumbers_Array.push(i);
  }
  /////////////////
  const versesArrayTadjweed = verses?.map((e, i) => {
    const comp = (
      <span key={e.number} className="inline">
        <span
          
          className={`inline whitespace-normal wrap-break-word`}>
          {tadjwid![i]?.slice(0, tadjwid![i].length - 1) ?? ``}
          <Aya_Number ayaIndex={i} activeDefaultButton>
            <button className="inline-flex align-middle mx-1">
              <span
                
                className={`whitespace-normal wrap-break-word`}>
                {tadjwid?.[i]?.split("")?.[tadjwid[i]?.length - 1] ?? ``}
              </span>
            </button>
          </Aya_Number>
        </span>
        {` `}
      </span>
    );
    return { page: e.page, comp };
  });
console.log(myDiv?.scrollTop,"dd")
  return (
    <div className="flex flex-col " key={key}>
      <SurahSvgBar
        informations={{ name, number, verses_count, revelation_place }}
      />
      <img
        className="scale-75 self-center"
        src={Basmala}
        alt="In the name of Allah, the most gracious, the most merciful/بسم الله الرحمن الرحيم"
      />
      {Data !== "Tajweed" ? (
        <div
          style={{fontFamily:Data}}
          className={`font-['${Data}'] text-[2.2em]   text-justify leading-[1.65em] mb-[1em]`}
          dir="rtl"
          >
          {versesArray}
        </div>
      ) : (
        <div className="flex flex-col" dir="rtl">
          {Array.from({ length: numberOfpages }).map((_, i) => {
            const page = pagesNumbers_Array[i];
            const fontFamilyName = `Tajweed-${page}`;
            
            return (
              <Card key={i} id="quranCrad" className="outline-4 my-4 p-2 overflow-x-scroll ">
                <style>
                  {`@font-face {
              font-family: '${fontFamilyName}';
              src: url("https://static-cdn.tarteel.ai/qul/fonts/quran_fonts/v4-tajweed/ttf/p${page}.ttf")
              format('truetype');
              font-display: swap;}`}
                </style>
                <div
                  style={{ fontFamily: fontFamilyName }}
                  className={`${isDark ? "tajweed-dark-invert" : ``}  rounded-2xl text-[2.2em] text-justify leading-[1.65em] mb-[1em] `}>
                  {versesArrayTadjweed
                    .filter((e) => e.page === page)
                    .map((e, idx) => (
                      <span key={idx} className=" mx-0.5  whitespace-normal wrap-break-word">
                        {e.comp}
                      </span>
                    ))}
                </div>
                <span className="text-center font-bold">Page {page}</span>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
/*

*/
