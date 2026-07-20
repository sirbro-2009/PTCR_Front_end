import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import theIcon from '@/assets/icons/icon.png'

const isRtl = true
export default function ImgCarsool() {
return (
<div className="w-[90%] md:w md:mx-auto mx-6 px-4 my-20">
    <Carousel 
        opts={{
        align: "start",
        direction: isRtl ? "rtl" : "ltr",
        }}
        dir={isRtl ? "rtl" : "ltr"}
        className=" "
    >
        <CarouselContent className="w-full">
        {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/2  lg:basis-1/4 overflow-hidden">
            <div className="p-1">
                <Card>
                    <CardContent className="flex aspect-square flex-col items-center justify-center p-6">
                        <img src={theIcon} alt="" />
                        <span className="text-2xl font-semibold">{index + 1}</span>
                    </CardContent>
                </Card>
            </div>
            </CarouselItem>
        ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
</div>
)
}
