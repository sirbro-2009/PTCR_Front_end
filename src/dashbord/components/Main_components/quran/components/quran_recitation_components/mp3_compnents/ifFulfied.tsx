import NameCard from "@/assets/icons/for_name.gif";
import type { QuranAudio } from "../Mp3Playe";
import { Slider } from "@/components/ui/slider";
import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaBackward, FaForward, FaPause } from "react-icons/fa6";
import { getAudioSaved } from "@/features/quran/quran_slice";
import {
  Volume2,
  Bookmark,
  Volume1,
  VolumeOff,
  Download,
  Share2,
  BookmarkCheck,
  Repeat,
} from "lucide-react";
{
  /**edit time */
}
const editTime = (time: number) => {
  return time >= 10 ? time.toString() : `0${time}`;
};
{  /**return time */}
const returnFullTime = (theCurrentTime: number) => {
  return theCurrentTime < 60
    ? `${editTime(Math.floor(theCurrentTime))} : 00`
    : theCurrentTime < 3600
      ? `${editTime(Math.floor(theCurrentTime % 60))} : ${editTime(Math.floor(theCurrentTime / 60))} `
      : theCurrentTime > 3600
        ? `
            ${editTime(Math.round((((theCurrentTime / 60) % 60) * 60) % 60))} :
            ${editTime(Math.floor((theCurrentTime / 60) % 60))} :
              ${editTime(Math.floor(theCurrentTime / 60 / 60))}`
        : ``;
};
{
  /**current time */
}
export const currentTime = (audioProps: any) => {
  const theCurrentTime = Math.round(audioProps.current);
  const currentTime = returnFullTime(theCurrentTime);
  const TimeRemaining = returnFullTime(
    audioProps.durration - audioProps.current,
  );
  return { currentTime, TimeRemaining };
};
import { toast } from "sonner";
import NameCardNotMoved from "@/assets/icons/for_name.png";
import { addToSaved, deletAudio } from "@/features/quran/quran_slice";
import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
export const toastFunctions = (
  text: string,
  type: "success" | "error" | "loading" | "info",
) => {
  toast[type](text, {
    position: "bottom-right",
  });
};
{
  /**copy finctions */
}
export const handleCopyLink = async (linkToCopy: string) => {
  try {
    if (!navigator.clipboard) {
      throw new Error("Clipboard API not available");
    }
    await navigator.clipboard.writeText(linkToCopy);
    toastFunctions("copied", "success");
  } catch (err) {
    toast.error("error", {
      position: "bottom-right",
    });
    console.log(err);
  }
};
export default function IfFulfied({ object }: any) {
  const disptch = useAppDispatch();
  const audioSaved = useAppSelector((state) => state.quran);

  const { audio, revelation_place, name, number } = object as QuranAudio;
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isSaved, setIsSaved] = useState(
    audioSaved.audioData?.isSaved ?? false,
  );
  const [isPlayed, setIsPlayed] = useState(!audioRef.current?.paused);
  const [audioProps, setAudiProps] = useState({
    current: 0,
    durration: 0,
  });
  const deleteAudio = async () => {
    await disptch(
      deletAudio({ surah: number, reader: audio?.id } as {
        surah: number;
        reader: number;
      }),
    );
    await disptch(getAudioSaved());
    if (audioSaved.done3) {
      setIsSaved(false);
      toastFunctions("un saved", "success");
    } else if (audioSaved.done3 === false) {
      toastFunctions("faild to un save", "error");
    }
  };

  {
    /**back and front audio */
  }
  const handlClick = (value: boolean) => {
    if (value) {
      if (audioProps.durration - audioProps.current > 10) {
        audioRef.current!.currentTime = audioProps.current + 10;
      } else {
        audioRef.current!.currentTime = audioProps.durration;
      }
    }
    if (!value) {
      if (audioProps.current > 10) {
        audioRef.current!.currentTime = audioProps.current - 10;
      } else {
        audioRef.current!.currentTime = 0;
      }
    }
  };
  {
    /**edit sound */
  }
  const handlClickAudio = (value: boolean) => {
    if (value) {
      audioRef.current!.volume = 0;
    }
    if (!value) {
      audioRef.current!.volume = 1;
    }
  };
  {
    /**name card */
  }
  const nameCrad = (
    <div
      className="w-80 h-80 rounded-full 
        bg-cover bg-center flex flex-col 
        justify-center items-center text-center 
        p-6 text-white "
      style={{
        backgroundImage: `url(${isPlayed ? NameCard : NameCardNotMoved})`,
        backgroundSize: "cover",
      }}>
      <h1 className="text-xl font-bold mb-4" style={{ fontFamily: "Thuluth" }}>
        سورة {name?.ar}
      </h1>
      <p className="text-sm mb-2" style={{ fontFamily: "Thuluth" }}>
        {revelation_place?.ar}
        {revelation_place?.ar === "مكية" ? `🕋` : `🕌`}
      </p>
      <h1 className="text-[13px]" style={{ fontFamily: "Thuluth" }}>
        تلاوة الشيخ {audio?.reciter.ar}
      </h1>
    </div>
  );
  const audioPlayer = (
    <div className="oultine-8 h-full flex-col flex w-full md:w-2/5 justify-center self-center">
      <audio
        src={audio?.link}
        autoPlay
        ref={audioRef}
        onTimeUpdate={(e) => {
          setAudiProps({
            ...audioProps,
            current: e.currentTarget.currentTime,
            durration: e.currentTarget.duration,
          });
        }}
      />
      {/**audio slider */}
      <Slider
        value={[audioProps.current]}
        max={audioProps.durration}
        step={1}
        className="w-4/5 md:w-70 self-center   m-auto  mt-10 "
        onValueChange={(e) => {
          audioRef.current!.currentTime = e[0] as number;
          audioRef.current?.play();
        }}
      />
      {/**show details */}
      <div className="m-auto w-4/5 md:w-70 flex-row-reverse flex justify-between">
        <p>{currentTime(audioProps).currentTime}</p>
        <p>{currentTime(audioProps).TimeRemaining}-</p>
      </div>
      {/**pause back and front */}
      <div className="m-auto items-center w-4/5 md:w-50 flex-row flex justify-between mt-10">
        <FaForward
          size={25}
          className="cursor-pointer"
          onClick={() => {
            handlClick(true);
          }}
        />
        {isPlayed ? (
          <FaPause
            size={40}
            onClick={() => {
              audioRef.current?.pause();
              setIsPlayed(!audioRef.current?.paused);
            }}
            className="cursor-pointer"
          />
        ) : (
          <FaPlay
            size={40}
            onClick={() => {
              audioRef.current?.play();
              setIsPlayed(!audioRef.current?.paused);
            }}
            className="cursor-pointer"
          />
        )}
        <FaBackward
          size={25}
          className="cursor-pointer"
          onClick={() => {
            handlClick(false);
          }}
        />
      </div>
      {/**sound */}
      <div className="m-auto items-center w-4/5 md:w-70 overflow-hidden flex-row-reverse mt-3 flex justify-between">
        {audioRef.current?.volume === 1 ? (
          <Volume2
            size={30}
            className="hover:cursor-pointer w-10"
            onClick={() => {
              handlClickAudio(true);
            }}
          />
        ) : audioRef.current?.volume === 0 ? (
          <VolumeOff
            size={30}
            className="hover:cursor-pointer w-10"
            onClick={() => {
              handlClickAudio(false);
            }}
          />
        ) : (
          <Volume1
            size={30}
            className="hover:cursor-pointer w-10"
            onClick={() => {
              handlClickAudio(true);
            }}
          />
        )}
        <Slider
          value={[audioRef.current ? audioRef.current!.volume : 1]}
          max={1}
          step={0.00001}
          className="w-60 "
          onValueChange={(e) => {
            audioRef.current!.volume = e[0] as number;
          }}
        />
      </div>
      {/**more bar */}
      <div className="m-auto items-center justify-between w-4/5 md:w-68 flex flex-row-reverse mt-5">
        <a href={audio?.link} download={true} target="_blank">
          <Download size={30} className="cursor-pointer" />
        </a>
        {isSaved ? (
          <BookmarkCheck
            size={30}
            className="cursor-pointer"
            onClick={deleteAudio}
          />
        ) : (
          <Bookmark
            size={30}
            className="cursor-pointer"
            onClick={async () => {
              await disptch(
                addToSaved({ surah: number, reader: audio?.id } as {
                  surah: number;
                  reader: number;
                }),
              );
              await disptch(getAudioSaved());
              const done = audioSaved.audioData;
              if (done) {
                toastFunctions("saved", "success");
                setIsSaved(true);
              } else if (done === false) {
                toastFunctions("faild to  save", "error");
              }
            }}
          />
        )}
        <Repeat
          className="cursor-pointer"
          size={30}
          onClick={() => {
            audioRef.current!.currentTime = 0;
            audioRef.current?.play();
            setIsPlayed(true);
          }}
        />
        <Share2
          size={30}
          className="cursor-pointer"
          onClick={() => {
            handleCopyLink(audio?.link as string);
          }}
        />
      </div>
    </div>
  );
  return (
    <div className="md:w-300 w-full  flex flex-col  md:flex-row-reverse md:justify-center ">
      {nameCrad}
      {audioPlayer}
    </div>
  );
}
