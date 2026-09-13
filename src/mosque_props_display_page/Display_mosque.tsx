import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import App_loader from "@/dashbord/components/Main_components/prayer/pray_time_components/multi_use_comps/load";
import { serverHost, supportedLanguages } from "@/other/data";
import {
  hijriMonths,
  returnPrayerTime,
  titles,
} from "@/features/prayer/prayer_slice";
import Display_Pryaer_time from "@/dashbord/components/Main_components/prayer/pray_time_components/multi_use_comps/prayer_diplay";
import { editZero } from "@/dashbord/components/Main_components/prayer/pray_time_components/multi_use_comps/prayer_time_box";

const hijriMonthsAr = [
  "محرم",
  "صفر",
  "ربيع الأول",
  "ربيع الآخر",
  "جمادى الأولى",
  "جمادى الآخرة",
  "رجب",
  "شعبان",
  "رمضان",
  "شوال",
  "ذو القعدة",
  "ذو الحجة",
];
export interface Prayer_Object {
  title: string;
  time: string;
  icama?: string;
  isCurrent: boolean;
}
export interface WeatherAndPrayerState {
  latitude: number | null;
  longitude: number | null;
  temperature: number | null;
  weathercode: number | null;
  is_day: number | null;
  full_location_data: {
    regionName?: string;
    cityName?: string;
    countryName?: string;
  };
  mosqueProps?: {
    MosqueName: string;
    MosqueImg?: string;
    MosqueId: number;
    MosqueIcama?: {
      Fajr: string;
      Dhuhr: string;
      asr: string;
      Maghrib: string;
      Isha: string;
    };
  };
  hijrid_date: string | null;
  prayers: Prayer_Object[];
  sunrise_midnight: {
    title: string;
    time: string;
  }[];
  prayer_prefrence_data: {
    school: string;
    tune: string[];
    method: string;
    is_12: boolean;
  };
}
interface Resuqest1 {
  City: string;
  Country: string;
  MosqueName: string;
  MosqueImg: string;
  Lat: number;
  Lon: number;
  tune: string[];
  Region: string;
  MosqueId: number;
  MosqueIcama: {
    Fajr: string;
    Dhuhr: string;
    asr: string;
    Maghrib: string;
    Isha: string;
  };
  method: string;
  school: string;
  is_12: boolean;
}
interface Request2 {
  is_day: number;
  weathercode: number;
  temperature: number;
}
interface Request4 {
  data: {
    timings: {
      Fajr: string;
      Sunrise: string;
      Dhuhr: string;
      Asr: string;
      Maghrib: string;
      Isha: string;
      Midnight: string;
    };
    date: {
      hijri: {
        date: string;
      };
    };
  };
}
export async function get_mosque_data(id: string | undefined) {
  const request = await fetch(
    serverHost + `mosque/get_mosque_data_by_id?id=${id}`,
  );
  return (await request.json()) as Resuqest1;
}
export default function Display_mosque() {
  const [data, setData] = useState<WeatherAndPrayerState>({
    latitude: null,
    longitude: null,
    temperature: null,
    weathercode: null,
    is_day: null,
    full_location_data: {},
    hijrid_date: null,
    prayers: [],

    sunrise_midnight: [],
    prayer_prefrence_data: {
      school: "",
      tune: [],
      method: "",
      is_12: false,
    },
  });
  const { t, i18n } = useTranslation();
  const [done, setDone] = useState<null | boolean>(null);
  const { id, lng } = useParams();

  useEffect(() => {
    async function Get_data() {
      try {
        if (lng && supportedLanguages.map((e) => e.code).includes(lng)) {
          i18n.changeLanguage(lng);
        }
        const {
          City,
          Country,
          MosqueName,
          MosqueImg,
          Lat,
          Lon,
          tune,
          Region,
          MosqueId,
          MosqueIcama,
          method,
          school,
          is_12,
        } = await get_mosque_data(id);

        const request2 = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${Lat}&longitude=${Lon}&current_weather=true&timezone=auto`,
        );
        const { is_day, weathercode, temperature } = (await request2.json())
          .current_weather as Request2;
        const request3 = await fetch(
          `https://us1.locationiq.com/v1/reverse.php?key=pk.c1726c6a2a12b42ad99a440efb52627d&lat=${Lat}&lon=${Lon}&format=json`,
        );
        const { country_code } = (await request3.json()).address;
        const theDate = new Date()
        
        const request4 = await fetch(
          `https://api.aladhan.com/v1/timings/${editZero(theDate.getDate().toString())}-${editZero((theDate.getMonth()+1).toString())}-${theDate.getFullYear()}?latitude=${Lat}&longitude=${Lon}&method=${method}&school=${school}&tune=${tune ? tune.map((e) => (e === "NaN" ? "0" : e)).join(",") : `0,0,0,0,0,${country_code === "dz" ? "3" : "0"},0,0,0`}`,
        );
        const response4 = (await request4.json()) as Request4;
        const { Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha, Midnight } =
          response4.data.timings;
        let { date } = response4.data.date.hijri;
        let hijrid_date_splited = date.split("-");
        let hijrid_date =
          date.split(`-`)[0]?.length === 0
            ? hijrid_date_splited[0] +
              "-" +
              t(
                `dashboard.prayer_page.hijriMonths.${hijriMonths[Number(hijrid_date_splited[0])]}`,
              ) +
              "-" +
              hijrid_date_splited[3]
            : date;
        if (country_code === "dz") {
          const request5 = await fetch(
            serverHost + `prayer/get_hidjri_date_algeria`,
          );
          const response5 = (await request5.json()) as {
            result: { formatted: string };
          };
          let splited: string[] = response5.result.formatted
            .split("الموافق")[0]!
            .split(" ");
          ///day week
          splited[0] = ``;
          if (splited.length === 6) {
            const hedjri_month = `${splited[2]} ${splited[3]}`;
            splited[2] = t(
              `dashboard.prayer_page.hijriMonths.${hijriMonths[hijriMonthsAr.indexOf(hedjri_month ?? "")]}`,
            );
            splited[3] = "";
          }
          if (splited.length === 5) {
            const hedjri_month = `${splited[2]} `;
            splited[2] = t(
              `dashboard.prayer_page.hijriMonths.${hijriMonths[hijriMonthsAr.indexOf(hedjri_month ?? "")]}`,
            );
          }
          const splitedLastIndex = splited[splited.length - 2]?.split("");
          splited[splited.length - 2] = splitedLastIndex
            ?.map((e) => (Number.isNaN(Number(e)) ? "" : e))
            .join("") as string;
          hijrid_date = splited.join(" ");
        }
        setData({
          latitude: Lat,
          longitude: Lon,
          temperature,
          weathercode,
          is_day,
          full_location_data: {
            regionName: Region,
            cityName: City,
            countryName: Country,
          },
          mosqueProps: {
            MosqueName,
            MosqueImg,
            MosqueId,
            MosqueIcama,
          },
          hijrid_date,
          prayers: [Fajr, Dhuhr, Asr, Maghrib, Isha].map((e, i) => {
            return returnPrayerTime(e, i, [Fajr, Dhuhr, Asr, Maghrib, Isha]);
          }),
          sunrise_midnight: [Sunrise, Midnight].map((e, i) => {
            return { title: titles[i] || "", time: e };
          }),
          prayer_prefrence_data: {
            school,
            tune,
            method,
            is_12,
          },
        });
        setDone(true);
      } catch (e) {
        console.log(e);
        setDone(false);
      }
    }
    Get_data();
  }, []);
  const condetions = {
    fullfied: done === true,
    rejected: done === false,
    pending: done === null,
  };
  return (
    <div className="m-auto w-full scrollbar-hide">
      {condetions.fullfied ? (
        <Display_Pryaer_time data={data} />
      ) : condetions.pending ? (
        <App_loader />
      ) : condetions.rejected ? (
        <div className=" text-5xl m-auto text-center" dir="ltr">
          Faild to load Data :(
        </div>
      ) : (
        <App_loader />
      )}
    </div>
  );
}
