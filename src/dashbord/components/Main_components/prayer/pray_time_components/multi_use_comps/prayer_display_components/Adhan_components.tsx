import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { prayers_names } from "@/features/prayer/prayer_slice";
import { useAppSelector } from "@/hooks/Redux";
import { get_mosque_data } from "@/mosque_props_display_page/Display_mosque";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router";
import { editZero } from "../prayer_time_box";
import { FaMosque, FaPhoneSlash } from "react-icons/fa";
import { hadithTranslations } from "@/other/data";
import Adkar_PEM from "./adkar_prayer_display";

export default function Adhan_components() {
  const { id, title, icama } = useParams();
  const theme = useAppSelector((state) => state.quran.QDS.theme);
  const [re_icama, setRe_Icama] = useState<{ mins: number; seconds: number }>({
    mins: 5,
    seconds: 0,
  });
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const [shows, setShows] = useState({
    adhan_screen: true,
    dua_after_adhan: false,
    hadith_show: false,
    icama: false,
    icama_alarm: false,
    no_thinks: false,
    after_prayer_adkar:false,
    morning_adkar: false,
    evening_adkar: false,
  });
  if (
    !Number.isNaN(id) &&
    id?.length === 6 &&
    title &&
    prayers_names.includes(title)
  ) {
    const [MosqueImg, setMI] = useState("");
    useEffect(() => {
      setRe_Icama({ ...re_icama, mins: Number(icama) ?? 5 });
      async function get_img() {
        const { MosqueImg } = await get_mosque_data(id);
        setMI(MosqueImg);
      }
      get_img();
      const interval = setInterval(() => {
        setRe_Icama((prev) => {
          let { mins, seconds } = prev;
          if (seconds === 0) {
            if (mins === 0) {
              clearInterval(interval);
              return prev;
            }
            mins -= 1;
            seconds = 59;
          } else {
            seconds -= 1;
          }
          return { mins, seconds };
        });
      }, 1000);

      return () => clearInterval(interval);
      //////////
    }, []);
    useEffect(() => {
      const icamaMinutes = Number(icama ?? 5) * 60 * 1000;

      const timers = [
        //Adhan screen to Prayer supplication 
        setTimeout(() => {
          setShows((prev) => ({
            ...prev,
            adhan_screen: false,
            dua_after_adhan: true,
          }));
        }, 1.5 * 60000),

        //// Prayer supplication to Hadith screen 
        setTimeout(
          () => {
            setShows((prev) => ({
              ...prev,
              dua_after_adhan: false,
              hadith_show: true,
            }));
          },
          1.5 * 60000 + 10000,
        ),

        // Hadith screen to Iqama countdown 
        setTimeout(
          () => {
            setShows((prev) => ({ ...prev, hadith_show: false, icama: true }));
          },
          1.5 * 60000 + 20000,
        ),

        //Iqama countdown to Iqama alarm 
        setTimeout(() => {
          setShows((prev) => ({ ...prev, icama: false, icama_alarm: true }));
        }, icamaMinutes),

        // Iqama alarm to Blank screen (no_thinks) 
        setTimeout(() => {
          setShows((prev) => ({
            ...prev,
            icama_alarm: false,
            no_thinks: true,
          }));
        }, icamaMinutes + 10000),

        // Blank screen to Post-prayer Adhkar 
        setTimeout(() => {
          setShows((prev) => ({
            ...prev,
            no_thinks: false,
            after_prayer_adkar: true,
          }));
        }, icamaMinutes + 601000),

        // Post-prayer Adhkar to Morning / Evening Adhkar 
        setTimeout(
          () => {
            setShows((prev) => ({
              ...prev,
              after_prayer_adkar: false,
              evening_adkar: title === "Asr",
              morning_adkar: title === "Fajr",
            }));
          },
          icamaMinutes + 601000 + 2 * 60 * 1000,
        ),
      ];

      // Close Morning / Evening Adhkar & navigate 
      if (["Asr", "Fajr"].includes(title)) {
        timers.push(
          setTimeout(
            () => {
              setShows((prev) => ({
                ...prev,
                evening_adkar: false,
                morning_adkar: false,
              }));
              navigate(`/mosque/${i18n.language}/${id}`);
            },
            icamaMinutes + 601000 + 5 * 60 * 1000,
          ),
        );
      }

      return () => timers.forEach(clearTimeout);
    }, [icama, title, navigate, i18n.language, id]);
    return (
      <div style={{ background: `url(${MosqueImg ?? ``})` }}>
        <div
          className={` text-center flex items-center justify-center  h-screen w-screen ${theme ? "bg-black/50" : ``}`}>
          <Card
            className={` ${theme ? "bg-card/60" : `bg-card/30`} h-screen w-full p-2  flex flex-row items-center justify-between`}>
            {shows.adhan_screen ? (
              <>
                {" "}
                <FaMosque size={90} />
                <Label className="text-8xl animate-ping m-auto">
                  {t(`dashboard.prayer_page.prayers.${title}`)}
                </Label>
                <FaMosque size={90} />
              </>
            ) : shows.dua_after_adhan ? (
              <Label className="text-[3.4vw] m-auto">
                عَنْ جَابِرِ بْنِ عَبْدِ اللَّهِ: أَنَّ رَسُولَ اللَّهِ صَلَّى
                اللهُ عَلَيْهِ وَسَلَّمَ قَالَ: مَنْ قَالَ حِينَ يَسْمَعُ
                النِّدَاءَ: اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ،
                وَالصَّلاَةِ القَائِمَةِ، آتِ مُحَمَّدًا الوَسِيلَةَ
                وَالفَضِيلَةَ، وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي
                وَعَدْتَهُ، حَلَّتْ لَهُ شَفَاعَتِي يَوْمَ القِيَامَةِ.
                <br />
                [رواه البخاري]
              </Label>
            ) : shows.hadith_show ? (
              <Label
                className="text-[3.4vw] m-auto text-center"
                dir={i18n.dir()}>
                {
                  hadithTranslations[
                    i18n.language as keyof typeof hadithTranslations
                  ].text
                }
                <br />[
                {
                  hadithTranslations[
                    i18n.language as keyof typeof hadithTranslations
                  ].reference
                }
                ]
              </Label>
            ) : shows.icama ? (
              <Label className="mt-10 mx-auto text-8xl">
                {editZero(`${re_icama.mins}`) +
                  ":" +
                  editZero(`${re_icama.seconds}`)}
                <br />
                {t(`dashboard.prayer_page.adhan_page.icama`)}
              </Label>
            ) : shows.icama_alarm ? (
              <>
                <FaPhoneSlash size={90} />
                <Label className="text-8xl">
                  {t(`dashboard.prayer_page.adhan_page.attention`)}
                </Label>
                <FaPhoneSlash size={90} />
              </>
            ) : shows.no_thinks ? (
              <></>
            ) : shows.after_prayer_adkar ? (
              <Adkar_PEM type="P" />
            ) : shows.morning_adkar ? (
              <Adkar_PEM type="M" />
            ) : shows.evening_adkar ? (
              <Adkar_PEM type="E" />
            ) : (
              ``
            )}
          </Card>
        </div>
      </div>
    );
  }
}
