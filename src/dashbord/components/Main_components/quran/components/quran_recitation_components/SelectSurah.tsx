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

export function QuranSurahSelect({values}:any) {
  const {surahSelect,reading} = values ||{}
  const dispatch = useAppDispatch();

  const allSurahs = Object.keys(quranSurahs).map((key: string, i: number) => {
    const theKey = key as keyof typeof quranSurahs;
    const e = quranSurahs[theKey];
    return (
      <SelectGroup key={i}>
        <SelectLabel className="text-lg text-center " >
          {key.replaceAll("_", " ")}
        </SelectLabel>
        <SelectSeparator/>
        {e.map((ele:{ar:string,id:number}, index: number) => {
          return (
            <SelectItem
              value={ele.id.toString()}
              key={index}
              dir="rtl"
              className=" cursor-pointer  w-1/2 m-auto my-2  bg-background">
              {/**  <p className="font-['Rubik'] ">Surah {ele.en}</p>*/}
              <p className="font-['Rubik'] "> سورة {ele.ar}</p>
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
        <SelectValue placeholder="Select a surah" />
      </SelectTrigger>
      <SelectContent>{allSurahs}</SelectContent>
    </Select>
  );
}
