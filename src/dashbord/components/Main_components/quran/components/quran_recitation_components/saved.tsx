import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CiNoWaitingSign } from "react-icons/ci";
import { Label } from "@/components/ui/label";
import type { QuranAudio } from "./Mp3Playe";
import { useEffect, useState } from "react";
import { BookmarkMinus, Play } from "lucide-react";
import { addToSaved, deletAudio,getAudioSaved, playSaved} from "@/features/quran/quran_slice";

export default function Saved() {
  const audioSaved = useAppSelector((state) => state.quran);
  const array = audioSaved.quranAudioAfterFetch;
  const [reader, setReader] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAudioSaved());
  }, []);
  const allReader = array.payload?.map((e: QuranAudio, index: number) => {
    return (
      <CarouselItem
        key={index}
        className=" m-1  cursor-pointer">
        <Card dir="rtl" className="p-2 flex flex-row justify-between">
          <CardContent className="w-3/4">
            <p> سورة {e.name?.ar} </p>
            <p>
              
              بصوت {e.audio?.reciter.ar} {e.audio?.reciter.dsc?.ar}
            </p>
            <p> رواية {e.audio?.rewaya.ar}</p>
          </CardContent>
          <CardContent className="w-1/3 items-center flex flex-row-reverse justify-between">
            <BookmarkMinus color="red" onClick={async()=>{
                  await dispatch(deletAudio({ surah: e.number, reader: e.audio?.id } as { surah: number; reader: number }))
                  await dispatch(getAudioSaved())
            }}/>
            <Play onClick={()=>{
          dispatch(playSaved(e));

            }}/>
          </CardContent>
        </Card>
      </CarouselItem>
    );
  });
  const final_components = array.payload.length?
      <div className="flex flex-col md:flex-row md:justify-between w-full">
      {/*quran play list */}
      <Carousel
        opts={{
          align: "start",
        }}
        orientation="vertical"
        className="w-full my-5 ">
        <CarouselContent className=" grid grid-cols-1 md:grid-cols-3 w-full ">
          {allReader}
        </CarouselContent>
      </Carousel>
    </div>:<div className="m-auto text-center items-center flex flex-col justify-center">
              <CiNoWaitingSign size={90} className="font-bold" color="red"/>
              <Label className="text-xl">You dont have any saved Quran reactiations</Label>
              </div>
  return final_components
}
