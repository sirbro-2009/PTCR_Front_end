import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
import { useTranslation } from "react-i18next";
import {
  get_user_prayer_prefrence_data,
  getCityData,
  getMosque_data,
  getPrayers_and_date_data,
  getWeather_Data,
} from "@/features/prayer/prayer_slice";
import { useEffect, useState } from "react";
import App_loader from "./pray_time_components/multi_use_comps/load";
import { Label } from "@/components/ui/label";
import Display_Pryaer_time from "./pray_time_components/multi_use_comps/prayer_diplay";
export default function Pray_times() {
  const data = useAppSelector((state) => {
    return state.prayer;
  });
  const userData = useAppSelector((state) => state.user);
  const { latitude, longitude } = data;
  const dispatch = useAppDispatch();
  const { i18n } = useTranslation();
  const [done5,setDone] = useState(false)

  useEffect(() => {
    if (userData.data.userType !== "mosque" && userData.done) {
      dispatch(getCityData(i18n.language));
      dispatch(get_user_prayer_prefrence_data());
      if (data.All_done.done1 && latitude && longitude) {
        dispatch(getPrayers_and_date_data({ latitude, longitude }));
      }
    }
  }, [data.All_done.done1, latitude, longitude,userData]);

  useEffect(() => {
    if (userData.data.userType === "mosque" && userData.done) {
      dispatch(getMosque_data());
      const { latitude, longitude } = data;
      if(latitude && longitude){
       dispatch(getPrayers_and_date_data({ latitude, longitude }));
       dispatch(getWeather_Data({ latitude, longitude }))
      }
      if(data.sunrise_midnight.length !== 0 && typeof data.is_day === 'number'){
        setDone(true)
      }
    }
  }, [userData,latitude, longitude,data.sunrise_midnight.length,data.is_day]);
  const condetions = {
    fullfied:userData.data.userType === "normal"?data.All_done.done1===true && data.All_done.done2===true :data.All_done.done4===true && done5 === true,
    rejected:userData.data.userType === "normal"?data.All_done.done1===false && data.All_done.done2===false :data.All_done.done4 === false,
    pending:userData.data.userType === "normal"?data.All_done.done1===null && data.All_done.done2===null :data.All_done.done4 === null,
  }
  return (
    <div className="m-auto w-full">
      {(condetions.fullfied )? (
          <Display_Pryaer_time/>
      ) : condetions.pending ? (
        <App_loader />
      ) : condetions.rejected ? (
        <Label className=" text-5xl" dir="ltr">
          Faild to load Data :(
        </Label>
      ) : (
        <App_loader />
      )}
    </div>
  );
}
