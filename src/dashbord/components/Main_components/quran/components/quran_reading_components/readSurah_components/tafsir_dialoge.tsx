import type { ReactNode } from "react";
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
import { Book, Globe, Pencil } from "lucide-react";

import { tafsirs } from "@/other/data";
import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
import Loader from "@/other/Loader.";
import { toastFunctions } from "../../quran_recitation_components/mp3_compnents/ifFulfied";
import { getTafsir } from "@/features/quran/quran_slice";

export function TafsirDialoge({
  quran,
  children,
}: {
  children: ReactNode;
  quran: any;
}) {
  const dispatch = useAppDispatch();
  const { ayaProps, number } = quran;
  const informations = useAppSelector((state) => state.quran);
  const isDone = informations.done5;
  const object = informations.tafsir_objects;
  return (
    <Dialog>
      <form>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[99%] bg-foreground text-background max-h-[85vh] overflow-y-auto sm:max-h-none sm:overflow-visible">
          <DialogHeader className="mx-2">
            <DialogTitle className="font-bold text-xl">
              Quran tafsirs
            </DialogTitle>
            <DialogDescription className="text-lg">
              select a tafsir
            </DialogDescription>
          </DialogHeader>

          <div className="w-full">
            <div className="grid grid-cols-2 lg:grid-cols-11 gap-2 p-1">
              {tafsirs.map((e) => (
                <button
                  key={e.id}
                  onClick={() => {
                    dispatch(
                      getTafsir({
                        id: e.id,
                        surahIndex: number,
                        aya: ayaProps.number,
                      }),
                    );
                  }}
                  className="cursor-pointer bg-primary rounded-2xl p-2 text-white overflow-hidden">
                  <div className="flex my-1 flex-row justify-between">
                    <Book />
                    <h1 className="font-['Rubik']">{e.name.ar}</h1>
                  </div>
                  <div className="flex my-1 flex-row justify-between">
                    <Globe />
                    <h1 className="font-['Rubik']">
                      {e.language === "ar"
                        ? `العربية`
                        : e.language === "en"
                          ? `انجليزية`
                          : `هولندية`}
                    </h1>
                  </div>
                  <div className="flex my-1 flex-row justify-between">
                    <Pencil />
                    <h1 className="font-['Rubik'] lg:text-[10px] lg:w-1/2">
                      {e.author.ar}
                    </h1>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div
            dir="rtl"
            className={`w-full ${
              (object?.text.length as number) >= 2000 ? `h-100` : `h-auto`
            } overflow-y-scroll`}>
            {isDone === true ? (
              <>
                <div></div>
                <div className="text-center text-2xl font-bold font-['Traditional_Arabic']">
                  {object?.text}
                </div>
              </>
            ) : isDone === undefined ? (
              <Loader />
            ) : isDone === false ? (
              <>{toastFunctions("error", "error")}</>
            ) : (
              ``
            )}
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}
