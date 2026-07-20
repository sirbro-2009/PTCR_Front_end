import { useAppSelector } from "@/hooks/Redux";
import Loader from "@/other/Loader.";
import IfFulfied from "./mp3_compnents/ifFulfied";
import Gif from "@/assets/icons/gif.gif";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
export interface QuranAudio {
  isSaved?:boolean,
  number?: number;
  name?: {
    ar: string;
    en: string;
    transliteration: string;
  };
  revelation_place?: {
    ar: "مكية" | "مدنية";
    en: "meccan" | "medinan";
  };
  audio?: {
    reciter: {
      ar: string;
      en: string;
      dsc?:{
        ar:string,
        en:string
      }
    };
    rewaya: {
      ar: string;
      en: string;
    };
    _id: string;
    id: number;
    server: string;
    link: string;
  };
}
export default function Mp3Playe() {
  const data = useAppSelector((state) => {
    return state.quran;
  });
  const isReady: boolean | undefined | null = data.done2;
  const QuranAudio: QuranAudio = data.audioData;
  const { audio, revelation_place, name, number } = QuranAudio;
  const ifNothing = (
    <Card className="w-full p-2">
      <Label className="m-auto text-3xl">Select audio like this</Label>
      <img
        src={Gif}
        alt="how to use gif"
        className="rounded-xl cursor-pointer"
      />
    </Card>
  );
  const ifPending = <Loader />;
  const ifFulfied = (
    <>
      <IfFulfied object={{ name, revelation_place, audio ,number}} />
    </>
  );
  const ifRejected = <h1 className="text-center">something wronge</h1>;
  const filanElement =
    isReady === true
      ? ifFulfied
      : isReady === false
        ? ifRejected
        : isReady === null
          ? ifPending
          : ifNothing;
  return filanElement;
}
