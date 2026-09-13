import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useAppDispatch } from "@/hooks/Redux";
import { set_bg, set_bg_file } from "@/features/prayer/prayer_slice";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toastFunctions } from "../../../quran/components/quran_recitation_components/mp3_compnents/ifFulfied";
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
import { Field, FieldGroup } from "@/components/ui/field";
import { useTranslation } from "react-i18next";

const current_bg: string[] = [
  "https://cdn.mawaqit.net/images/backend/background/16.jpg",
  "https://cdn.mawaqit.net/images/backend/mosque/317e3e56-252f-4214-bcb9-fd8d5d4dd9be/mosque/1f0cf93e-0cbb-6372-9285-0e4ed42df307.jpg",
  "https://images.pexels.com/photos/34632961/pexels-photo-34632961.jpeg?_gl=1*yz77co*_ga*MzE1MzY2NjIuMTc4OTE1MDQ5Nw..*_ga_8JE65Q40S6*czE3ODkxNTA0OTYkbzEkZzEkdDE3ODkxNTEzMzUkajU5JGwwJGgw",
  "https://img.sanishtech.com/u/34b6631c42ad44222383722d2f2652b6.jpg",
  "https://images.pexels.com/photos/20277839/pexels-photo-20277839.jpeg?_gl=1*uk03ws*_ga*MzE1MzY2NjIuMTc4OTE1MDQ5Nw..*_ga_8JE65Q40S6*czE3ODkxNTgwMDQkbzIkZzEkdDE3ODkxNTg5NjQkajUyJGwwJGgw",
  "https://images.pexels.com/photos/5258953/pexels-photo-5258953.jpeg?_gl=1*1pgnbla*_ga*MzE1MzY2NjIuMTc4OTE1MDQ5Nw..*_ga_8JE65Q40S6*czE3ODkxNTgwMDQkbzIkZzEkdDE3ODkxNTkwOTQkajEzJGwwJGgw",
];

export default function Set_mosque_style() {
  localStorage.setItem("lastIndexMP", "set_mosque_style");
  const dispatch = useAppDispatch();
  const [img, setImage] = useState<File | undefined>();
  const [preview, setPreview] = useState("");
  const { t, i18n } = useTranslation();
  return (
    <Card
      dir={i18n.dir()}
      className="flex flex-col  md:flex-row md:justify-between p-2">
      <Card className="md:w-1/2 p-2">
        <Label>
          {t(`dashboard.prayer_page.mosqueSetup.availableBackgrounds`)}
        </Label>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full h-full m-auto max-w-[12rem] sm:max-w-xs md:max-w-sm">
          <CarouselContent className="w-full h-full">
            {current_bg.map((e, i) => (
              <CarouselItem
                key={i}
                onClick={() => {
                  dispatch(set_bg({ type: "0", link: e }));
                }}
                className="">
                <img src={e} alt="" className="rounded-xl cursor-pointer " />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Card>

      <Card className="p-2 flex md:w-1/2 flex-col md:items-center md:justify-between">
        <Label>{t(`dashboard.prayer_page.mosqueSetup.uploadBackground`)}</Label>
        <div className="relative m-auto  size-25 cursor-pointer flex items-center justify-center border-2 border-dashed rounded-lg">
          <Upload className="size-8 " />
          <Input
            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
            name="profile_picture"
            accept="image/*"
            type="file"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              const type = file!.type.match(/image/);
              const sizeInMB = file!.size / (1024 * 1024) <= 5;
              if (sizeInMB && type) {
                setImage(file);
                setPreview(URL.createObjectURL(file));
                const newFormData = new FormData();
                newFormData.append("bg_img", file);
                console.log([...newFormData.entries()]);
                for (const [key, value] of newFormData.entries()) {
                  console.log(key, value);
                }
                dispatch(set_bg_file(newFormData));
              } else {
                toastFunctions("select valid file", "error");
              }
            }}
          />
        </div>

        <Dialog >
          <form >
            <DialogTrigger className="w-full">
              <Button
                className="cursor-pointer"
                type="button"
                variant="outline"
                disabled={!preview}>
                {t(`dashboard.prayer_page.mosqueSetup.showPreviewImage`)}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
              <div className="p-2">
                <img
                  src={preview}
                  className="rounded-xl mt-2 cursor-pointer w-100"
                />
              </div>
            </DialogContent>
          </form>
        </Dialog>
      </Card>
    </Card>
  );
}
