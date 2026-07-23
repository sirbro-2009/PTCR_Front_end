
import { Slider } from "@/components/ui/slider";
import { useRef, useState } from "react";
import Audio_Bar from "./audio_bar";
export default function Aya_play({ props }: any) {
  const { ayaIndex, number } = props as { ayaIndex: number; number: number };
  const [value, setValue] = useState("Maher_AlMuaiqly_64kbps");

  const returnAyaName = () => {
    const finalNumber =
      (number >= 10 && number <= 99) ? `0${number}` : number < 10 ? `00${number}` : number;
    const finalayaIndex =
      (ayaIndex + 1 >= 10 && ayaIndex+1 <= 99)
        ? `0${ayaIndex + 1}`
        : ayaIndex + 1 < 10
          ? `00${ayaIndex + 1}`
          : ayaIndex + 1;
    return `${finalNumber}${finalayaIndex}`;
  };
  const handleSelectChange = (value: string) => {
    setValue(value);
  };
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState([0]);
  return (
    <div className="flex-col flex items-center justify-between w-full">
      {/**select */}

      {/**play */}
      <div className="w-full">
        <audio
          ref={audioRef}
          autoPlay
          src={`https://everyayah.com/data/${value}/${returnAyaName()}.mp3`}
          className="hidden"
          onTimeUpdate={() => {
            setProgress([audioRef.current!.currentTime]);
          }}
          controls></audio>
        <Slider
          value={progress}
          className="mt-2"
          onValueChange={(e) => {
            setProgress([e[0] as number]);
            audioRef.current!.currentTime = e[0] as number;
            audioRef.current?.play();
          }}
          max={audioRef.current?.duration as number}
          step={1}
        />
        <div>
          <Audio_Bar
            props={{
              audioProps: {
                durration: audioRef.current?.duration,
                current: audioRef.current?.currentTime,
              },
              audioRef,
              audio:{link:audioRef.current?.src},
              handleSelectChange:handleSelectChange
            }}
          />
        </div>
      </div>
    </div>
  );
}
