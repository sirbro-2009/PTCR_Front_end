import { handleCopyLink } from "../../quran_recitation_components/mp3_compnents/ifFulfied";
import { currentTime } from "../../quran_recitation_components/mp3_compnents/ifFulfied";
import { Slider } from "@/components/ui/slider";
import { FaPlay } from "react-icons/fa";
import { FaBackward, FaForward, FaPause } from "react-icons/fa6";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Volume2,
  Volume1,
  VolumeOff,
  Download,
  Share2,
  Repeat,
  Ellipsis,
  User,
} from "lucide-react";
import { useAppDispatch } from "@/hooks/Redux";
import { useState } from "react";
import { reciters } from "@/other/data";

export default function Audio_Bar({ props }: any) {
  const disptch = useAppDispatch();
  const { audioProps, audioRef, audio, handleSelectChange } = props;
  const [isPlayed, setIsPlayed] = useState(!audioRef.current?.paused);

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
  return (
    <>
      {/**show details */}
      <div
        dir="rtl"
        className="m-auto w-full flex-row-reverse flex justify-between">
        <p>{currentTime(audioProps).currentTime}</p>
        <p>{currentTime(audioProps).TimeRemaining}-</p>
      </div>

      <div className="m-auto items-center w-4/5  flex-row-reverse flex justify-between ">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-transparent hover:bg-transparent cursor-pointer">
              <Ellipsis />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              {/**more bar */}
              {[
                {
                  obj: (
                    <a href={audio?.link} download={true} target="_blank" className="flex-row flex w-full items-center">
                      <Download size={30} className="cursor-pointer mr-2" />
                      Download
                    </a>
                  ),
                },
                {
                  obj: (
                    <Repeat
                      className="cursor-pointer"
                      size={30}
                    />
                  ),
                  handelFunctions:() => {
                        audioRef.current!.currentTime = 0;
                        audioRef.current?.play();
                        setIsPlayed(true);
                      },
                  text: "Repeat",
                },
                {
                  obj: (
                    <Share2
                      size={30}
                      className="cursor-pointer"
                    />
                  ),
                  handelFunctions:() => {
                        handleCopyLink(audio?.link as string);
                      },
                  text: "Share",
                },
              ].map((e, i) => {
                return (
                  <DropdownMenuItem key={i} onClick={()=>{
                    e.handelFunctions?.()
                  }}>
                    {e.obj}
                    {e.text}{" "}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <User />
                  reader
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent className="overflow-y-auto max-h-(--radix-dropdown-menu-content-available-height)">
                    {reciters.map((e, i) => {
                      return (
                        <DropdownMenuItem
                          dir="rtl"
                          onClick={() => {
                            handleSelectChange(e.subfolder);
                            setIsPlayed(true)
                          }}
                          className="w-full m-auto  font-['Rubik'] text-black">
                          {e.name.ar} - {e.bitrate}
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        {/**pause back and front */}
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
        {/**sound */}
        <Popover>
          <PopoverTrigger>
            <button className=" py-1 ">
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
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverDescription>
                <Slider
                  value={[audioRef.current ? audioRef.current!.volume : 1]}
                  max={1}
                  step={0.00001}
                  className=" "
                  onValueChange={(e) => {
                    audioRef.current!.volume = e[0] as number;
                  }}
                />
              </PopoverDescription>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
