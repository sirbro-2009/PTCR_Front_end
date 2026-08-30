import { Separator } from "@/components/ui/separator"
import Header_data from "./pray_time_components/header_data"
import Middle_Screen_data from "./pray_time_components/middle_data"
import Five_Prayer_data from "./pray_time_components/5prayes_data"
import Footer_data from "./pray_time_components/footer_data"
import { useAppDispatch, useAppSelector } from "@/hooks/Redux"
import Loader from "@/other/Loader."
import { useTranslation } from "react-i18next"
import { getCityData, getPrayers_and_date_data } from "@/features/prayer/prayer_slice"
import { useEffect } from "react"
import App_loader from "./pray_time_components/multi_use_comps/load"
import { Label } from "@/components/ui/label"
export default function Pray_times(){
  const data = useAppSelector((state) => {
    return state.prayer;
  });
  const { latitude, longitude } = data
  const dispatch = useAppDispatch();
  const { i18n } = useTranslation();
  useEffect(() => {
    dispatch(getCityData(i18n.language));
    
    if(data.All_done.done1 &&  latitude && longitude){
      
      dispatch(getPrayers_and_date_data({ latitude, longitude }))
    }
  }, [data.All_done.done1,latitude, longitude]);
return (<div className="m-auto w-full">
{
    data.All_done.done1 && data.All_done.done2 ?
<>
<Header_data/>
<Separator className="my-4"/>
<Middle_Screen_data/>
<Separator className="my-4"/>
<Five_Prayer_data/>
<Separator className="my-4"/>
<Footer_data/>
</>:
data.All_done.done1===null && data.All_done.done2===null?
<App_loader/>:
data.All_done.done1===false && data.All_done.done2===false?
<Label className=" text-5xl" dir="ltr">Faild to load Data :(</Label>:<App_loader/>
}

</div>)
}