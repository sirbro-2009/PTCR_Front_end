import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslation } from "react-i18next";
import img0 from "@/assets/imgs/0.png";
import img1 from "@/assets/imgs/1.png";
import img2 from "@/assets/imgs/2.gif";
import img3 from "@/assets/imgs/3.png";
import img4 from "@/assets/imgs/4.gif";
import img5 from "@/assets/imgs/5.gif";
import img6 from "@/assets/imgs/6.png";
import img7 from "@/assets/imgs/7.gif";
import img8 from "@/assets/imgs/8.gif";
import img9 from "@/assets/imgs/9.png";
import img10 from "@/assets/imgs/10.gif";
import img11 from "@/assets/imgs/11.gif";
import img12 from "@/assets/imgs/12.gif";
import img13 from "@/assets/imgs/13.png";
import img14 from "@/assets/imgs/14.png";
import img15 from "@/assets/imgs/15.png";
import img16 from "@/assets/imgs/16.png";
//  { img: img15, alt: "Prayer times screen with nature background" },
//  { img: img16, alt: "Prayer times screen with light background" },
const images = [
  { img: img0, alt: "App logo" },
  { img: img1, alt: "Language selection screen" },
  { img: img2, alt: "Home screen" },
  { img: img3, alt: "Adkar logo" },
  { img: img4, alt: "Adkar section screen" },
  { img: img5, alt: "Blank screen" },
  { img: img6, alt: "Adkar logo" },
  { img: img7, alt: "Active notifications screen" },
  { img: img8, alt: "Notification settings screen" },
  { img: img9, alt: "Prayer times logo" },
  { img: img10, alt: "Blank screen" },
  { img: img11, alt: "Search screen" },
  { img: img12, alt: "Blank screen" },
  { img: img13, alt: "Dhikr counter screen" },
  { img: img14, alt: "Dhikr counter screen with dark background" },

];

export default function ImgCarsool() {

  const { i18n } = useTranslation();
  return (
    <div className="w-[90%] md:w md:mx-auto mx-6 px-4 my-5">
      <Carousel
        opts={{
          align: "end",
          direction: i18n.dir(),
        }}
        dir={i18n.dir()}
        className=" ">
        <CarouselContent className="w-full">
          {images.map((e, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 m-auto    rounded-2xl   lg:basis-1/4 overflow-hidden">

                <div className="  rounded-lg bg-muted cursor-pointer hover:rotate-2 duration-1000">
                  <img src={e.img} alt={e.alt} className=" m-auto " />
                </div>

            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
