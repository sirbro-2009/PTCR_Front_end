import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Aya_play from "./Aya_play";
import { Languages, ClipboardCopy, BookOpenText } from "lucide-react";
import { handleCopyLink } from "../../quran_recitation_components/mp3_compnents/ifFulfied";
import { Separator } from "@/components/ui/separator";
import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
import { TafsirDialoge } from "./tafsir_dialoge";
import type { IquranText } from "./quran_surah_display";
import type { ReactElement } from "react";
export default function Aya_Number({ ayaIndex,activeDefaultButton,children }: { ayaIndex: number,activeDefaultButton?:boolean,children?:ReactElement }) {
  const infromations = useAppSelector((state) => state.quran);
  const done = infromations.done4;
  const { name, number, revelation_place, verses_count, verses } =
    infromations.quran_text as IquranText;
  const ayaProps = verses[ayaIndex];
  const arabicNumber = ayaProps?.number.toLocaleString("ar-EG");
  const footerObjects = [
    {
      comp: (
        <ClipboardCopy
          className="cursor-pointer"
          onClick={() => {
            handleCopyLink(`${ayaProps?.text.ar} ${arabicNumber}` as string);
          }}
        />
      ),
      text: "copy aya",
      separator: true,
    },
    {
      comp: (
        <Languages
          className="cursor-pointer"
          onClick={() => {
            handleCopyLink(ayaProps?.text.en as string);
          }}
        />
      ),
      text: "copy translate",
      separator: true,
    },
    {
      comp: (
        <TafsirDialoge quran={{ ayaProps, number }}>
          <BookOpenText className="cursor-pointer" />
        </TafsirDialoge>
      ),
      text: "read tafsir",
      separator: false,
    },
  ];

  const aya_number = (
    <div className="cursor-pointer relative inline-flex items-center justify-center w-[1.5em] h-[1.5em] mx-1">
      <span className="absolute inset-0 flex  items-center justify-center text-[1em] font-['conv_original-hafs']">
        &#x06DD;
      </span>
      <span className="relative text-[0.7em]  font-sans font-bold -top-px [font-variant-numeric:traditional]">
        {arabicNumber}
      </span>
    </div>
  );
  return (
    <Dialog >
      <DialogTrigger asChild>
        {
          activeDefaultButton?children:
        <Button
          variant="outline"
          className="cursor-pointer relative inline-flex items-center justify-center w-[2.5em] h-[2.5em] mx-1">
          <span className="absolute inset-0 flex items-center justify-center text-[2.3em] font-['conv_original-hafs']">
            &#x06DD;
          </span>
          <span className="relative text-[1.5em]  font-sans font-bold -top-px [font-variant-numeric:traditional]">
            {arabicNumber}
          </span>
        </Button>
        }

      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="bg-foreground text-background">
        <DialogHeader>
          <Separator />
          <DialogTitle dir="rtl">
            {/*aya_number*/}
            {/*ayaProps?.text.ar*/}
            <img className="dark:invert-0 brightness-110 invert-100 "  src={`https://everyayah.com/data/images_png/${number}_${ayaIndex+1}.png`} alt="" />
          </DialogTitle>
<DialogDescription asChild className="font-bold flex flex-col items-center ">
  <div className="font-bold flex flex-col items-center">
    <div className="flex items-center">
      <Languages color="green" size={40} />
      {ayaProps?.text.en}
    </div>

    <Aya_play props={{ ayaIndex, number }} />
  </div>
</DialogDescription>
          <DialogFooter className="flex justify-between flex-row m-auto">
            {footerObjects.map((e, i) => {
              return (
                <div key={i} className="flex  items-center">
                  {e.comp}
                  <p className="mx-2">{e.text}</p>

                  {e.separator ? <Separator orientation="vertical" /> : ``}
                </div>
              );
            })}
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
