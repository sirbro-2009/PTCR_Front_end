import { Card } from "@/components/ui/card";
import PTB from "./multi_use_comps/prayer_time_box";
import CBD from "./multi_use_comps/Center_Box_data";
import { useAppSelector } from "@/hooks/Redux";
export default function Middle_Screen_data(){

  const data = useAppSelector((state) => {
    return state.prayer.sunrise_midnight;
  });
  
    return (<Card className="flex md:flex-row flex-col p-4 bg-card/50 mx-auto justify-between" >
        <PTB title={data[0]?.title ?? ""} time={data[0]?.time ?? ""}  is12={true} />
        <CBD/>
        <PTB title={data[1]?.title ?? ""} time={data[1]?.time ?? ""}   is12={true} />
    </Card>)
}