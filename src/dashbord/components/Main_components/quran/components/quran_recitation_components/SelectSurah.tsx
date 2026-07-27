import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { quranSurahs } from "@/dashbord/components/Main_components/quran/components/quran_recitation_components/objects";
import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
import { quranReading } from "@/features/quran/quran_slice";
import { useTranslation } from "react-i18next"

export function QuranSurahSelect({values}:any) {
  const {surahSelect,reading} = values ||{}
  const dispatch = useAppDispatch();
const { t ,i18n} = useTranslation();
const isLatine: 'en' | 'ar' = ['ar', 'fa', 'ur'].includes(i18n.language) ? 'ar' : 'en';  
const allSurahs = Object.keys(quranSurahs).map((key: string, i: number) => {
    const theKey = key as keyof typeof quranSurahs;
    const e = quranSurahs[theKey];
    return (
      <SelectGroup key={i}>
        <SelectLabel className="text-lg text-center " >
          {t(`dashboard.quran_page.quarter`)} {i+1}

        </SelectLabel>
        <SelectSeparator/>
        {e.map((ele:{ar:string,id:number,en?:string}, index: number) => {
          return (
            <SelectItem
              value={ele.id.toString()}
              key={index}
              dir="rtl"
              className=" cursor-pointer  w-1/2 m-auto my-2  bg-background">
              {/**  <p className="font-['Rubik'] ">Surah {ele.en}</p>*/}
              <p className="font-['Rubik'] ">  {ele[isLatine] || ele.ar}</p>
            </SelectItem>
            
          );
        })}
        <SelectSeparator/>
      </SelectGroup>
    );
  });
  return (
    <Select onValueChange={(value)=>{
      surahSelect(value)
      if(reading === true){
      dispatch(quranReading({ surahIndex:value }));
      }
    }}>
      <SelectTrigger className="w-full md:w-48 my-5 lg:mx-2" >
        <SelectValue placeholder={t(`dashboard.quran_page.select_surah`)} />
      </SelectTrigger>
      <SelectContent>{allSurahs}</SelectContent>
    </Select>
  );
}
