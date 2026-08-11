import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { setShow } from "@/features/adkar/Adkar_slice";
import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
import { ArrowBigLeftDash, ArrowBigRightDash, CircleX, Copy, Plus } from "lucide-react";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { CircularProgress } from "@/components/ui/circular-progress";
import { Separator } from "@/components/ui/separator";
import { handleCopyLink } from "../../quran/components/quran_recitation_components/mp3_compnents/ifFulfied";
import { useTranslation } from "react-i18next";
import DWC from "./dialog_whene_close";
export default function Adkar_Card() {
  const dispatch = useAppDispatch();
  const {t} = useTranslation()
  const data = useAppSelector((state) => state.adkar);
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);
  const indexPersentage = (100 * index) / data.readArray.length;
  const [show,setDShow] = useState(false)
  return (
    <Card className=" w-full md:my-4 mt-2">
      <Progress value={indexPersentage} className="w-[60%]  mx-auto" />
      <div className=" flex  flex-row-reverse w-[60%] md:w-1/8 md:m-auto md:justify-between gap-x-4">
        <ArrowBigLeftDash size={40} onClick={()=>{
          setIndex(index-1!==-1?index-1:0)
          setCount(0)
          setDShow(false)
        }}/>
        <ArrowBigRightDash size={40} onClick={()=>{
          setIndex(index + 1 <= data.readArray.length?index+1:0 )
          setCount(0)
          setDShow(false)
        }}/>
      </div>
      {
        data.readArray.map((e, i) => {
          const text =
            e.text.split(":").length > 1
              ? e.text.split(":")
              : e.text.split(".");
          const countPersetage = (100 * count) / e.count;
          return (
            <CardContent key={i}>
              <Label className="m-auto w-full overflow-y-scroll scroll-hide scrollbar-hide  md:w-3/5 h-auto text-center flex flex-col p-2">
                <div className="md:text-3xl text-2xl">{text[0]}</div>
                <div className="font-[quranfont] font-bold text-3xl">
                  {text[1]}
                </div>
              </Label>

              <div className="mx-auto flex flex-col items-center w-1/2 justify-between">
                <CircularProgress value={countPersetage}>
                  <Plus
                    size={100}
                    className="cursor-pointer"
                    onClick={() => {
                      setDShow(false)
                      const newCount = count + 1;
                      if (count + 1 < e.count) {
                        setCount(newCount);
                      }
                      if (count + 1 === e.count) {
                        setCount(newCount);
                        const interval = i + 1 <= data.readArray.length - 1;

                        if (i + 1 <= data.readArray.length - 1) {
                          setTimeout(() => {
                            setCount(0);
                            setIndex(i + 1);
                            
                          }, 500);
                        } else {
                          setIndex(i + 1);
                          setTimeout(
                            () => {
                              interval?``:setDShow(true);
                              document.getElementById('button')?.click()
                            },
                            interval ? 500 : 2000,
                          );
                        }
                      }
                    }}
                  />
                </CircularProgress>

                <div  className="flex   flex-row-reverse mt-8 md:mt-2  items-center gap-1">
                  <div className=" w-10 md:w-15 lg:w-auto text-xl flex flex-row">{e.count} All</div>
                  <Separator orientation="vertical" />
                  <div className=" w-30 md:w-35 lg:w-auto text-xl flex flex-row">{count} completed</div>
                  <Separator orientation="vertical" />
                  <div className="items-center   text-xl flex flex-row">
                    <Copy className="cursor-pointer mx-2" onClick={()=>{handleCopyLink(e.text)}}/>
                    {t(`dashboard.quran_page.copy`)}                  
                  </div>
                  <Separator orientation="vertical" />
                  <div className="items-center   text-xl flex flex-row">
                    <CircleX color="red" className="cursor-pointer mx-2" onClick={()=>{dispatch(setShow([]));}}/>
                    Quit                 
                  </div>
                </div>
              </div>
            </CardContent>
          );
        })[index > data.readArray.length - 1 ? index - 1 : index]
      }
      {show?<DWC value={show}/>:``}
    </Card>
  );
}
