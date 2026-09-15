import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Card } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { serverHost } from "@/other/data";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { MapPinHouse } from "lucide-react";
import { Mosque } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
import {
  get_user_prayer_prefrence_data,
  getCityData,
} from "@/features/prayer/prayer_slice";
interface MosqueProps {
  City: string;
  Country: string;
  MosqueName: string;
  Lat: Number;
  Lon: Number;
  Region: string;
  MosqueId: Number;
  MosqueImg: string;
  Distance?: number;
}
const editDistance = (distance: number): string => {
  if (distance < 1) {
    return Math.round(distance * 1000) + "m";
  }
  if (distance > 1) {
    return distance.toFixed(2) + "Km";
  }
  return "";
};
export default function Search_for_mosque() {
  const data = useAppSelector((state) => {
    return state.prayer;
  });
  const userData = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const [search, setSearch] = useState<{
    res: MosqueProps[];
    res_boolean: boolean | null;
    nearby?: boolean;
  }>({
    res: [],
    res_boolean: null,
  });
  const { i18n, t } = useTranslation();
  useEffect(() => {
    if (userData.data.userType !== "mosque" && userData.done) {
      dispatch(getCityData(i18n.language));
      dispatch(get_user_prayer_prefrence_data());
    }
  }, [data.All_done.done1, userData]);
  const navigate = useNavigate();
  const handelChoice = (id: string) => {
    navigate(`/mosque/${i18n.language}/${id}`);
  };
  const handeNearbyMosque = async () => {
    try {
      const request = await fetch(
        `${serverHost}mosque/mosques_search?Lan=${data.latitude}&Log=${data.longitude}`,
      );
      setSearch({
        res: await request.json(),
        res_boolean: true,
        nearby: true,
      });
    } catch {
      setSearch({ res: [], res_boolean: false });
    }
  };
  const handelClick = async (value: string) => {
    if (value.trim()) {
      try {
        const request = await fetch(
          `${serverHost}mosque/mosques_search?name=${value}`,
        );
        setSearch({
          res: await request.json(),
          res_boolean: true,
          nearby: false,
        });
      } catch {
        setSearch({ res: [], res_boolean: false });
      }
    } else {
      setSearch({ res: [], res_boolean: null });
    }
  };
  return (
    <div className="md:m-auto mt-10 md:w-1/2 p-2 w-full" dir={i18n.dir()}>
      <Field>
        <FieldLabel className="text-3xl">
          {t(`dashboard.prayer_page.search.title`)}
        </FieldLabel>
        <ButtonGroup dir="ltr">
          <Input
            placeholder={t(`dashboard.adkar_page.home.searchPlaceholder`)
              .split(" ")
              .shift()}
            dir={i18n.dir()}
            onInput={async (e) => {
              const target = e.target as HTMLInputElement;
              await handelClick(target.value.trim());
            }}
          />
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={handeNearbyMosque}>
            <MapPinHouse /> {t(`dashboard.prayer_page.search.frontMe`)}
          </Button>
        </ButtonGroup>
      </Field>
      <Card className="mt-5">
        <Label className="m-auto">
          {!!search.nearby
            ? ``
            : t(`dashboard.prayer_page.search.allMosquesNear`)}
        </Label>
        {search.res_boolean && search.res.length !== 0 ? (
          search?.res?.map((e, i) => (
            <HoverCard key={i}>
              <HoverCardTrigger>
                <Button
                  className="w-[98%] h-auto p-2 m-auto cursor-pointer grid grid-cols-2 md:flex  md:flex-row  justify-between "
                  dir="rtl"
                  onClick={() => {
                    handelChoice(e.MosqueId.toString());
                  }}>
                  <Label>{e.MosqueName}</Label>
                  <Label>
                    {e.City} {e.Region} {e.Country}
                  </Label>
                  <Label
                    className="w-full md:w-1/4 justify-between flex "
                    dir="ltr">
                    <Mosque className="w-20 h-20" />
                    {e.Distance ? editDistance(e.Distance) : ``}
                    <Avatar>
                      <AvatarImage src={e.MosqueImg} alt={e.MosqueName} />
                      <AvatarFallback>{e.MosqueName[0]}</AvatarFallback>
                      <AvatarBadge
                        className={
                          e.Distance &&
                          e.Distance >= (1.3 / 3) * 2 &&
                          e.Distance >= 1.3 / 3
                            ? "bg-red-600 dark:bg-red-800"
                            : e.Distance &&
                                e.Distance < (1.3 / 3) * 2 &&
                                e.Distance >= 1.3 / 3
                              ? "bg-yellow-600 dark:bg-yellow-800"
                              : "bg-green-600 dark:bg-green-800"
                        }
                      />
                    </Avatar>
                  </Label>
                </Button>
              </HoverCardTrigger>
              <HoverCardContent side="top" className="bg-transparent ">
                <img
                  src={e.MosqueImg}
                  alt={e.MosqueName}
                  className="w-full h-1/2 rounded-t-lg"
                />
              </HoverCardContent>
            </HoverCard>
          ))
        ) : search.res_boolean === null ? (
          <Label className="text-xl m-auto">
            {t(`dashboard.adkar_page.home.searchHint`)} !
          </Label>
        ) : (
          <Label className="text-xl m-auto">Faild to Load Data :(</Label>
        )}
      </Card>
    </div>
  );
}
