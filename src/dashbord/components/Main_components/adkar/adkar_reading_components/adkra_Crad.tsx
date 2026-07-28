import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { setShow } from "@/features/adkar/Adkar_slice";
import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
import { Copy, Plus } from "lucide-react";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { CircularProgress } from "@/components/ui/circular-progress";
import { Separator } from "@/components/ui/separator";
import { handleCopyLink } from "../../quran/components/quran_recitation_components/mp3_compnents/ifFulfied";

export default function Adkar_Card() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.adkar);
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);
  const indexPersentage = (100 * index) / data.readArray.length;

  return (
    <Card className=" w-full md:my-4 ">
      <Progress value={indexPersentage} className="w-[60%]  mx-auto" />
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
                              dispatch(setShow([]));
                            },
                            interval ? 500 : 2000,
                          );
                        }
                      }
                    }}
                  />
                </CircularProgress>

                <div  className="flex flex-row-reverse mt-2  h-5 items-center gap-4 text-sm">
                  <Label className="text-xl">{e.count} All</Label>
                  <Separator orientation="vertical" />
                  <Label className="text-xl">{count} completed</Label>
                  <Separator orientation="vertical" />
                  <Copy className="cursor-pointer" onClick={()=>{handleCopyLink(e.text)}}/>
                  <span className="text-xl font-bold">copy</span>
                </div>
              </div>
            </CardContent>
          );
        })[index > data.readArray.length - 1 ? index - 1 : index]
      }
    </Card>
  );
}
