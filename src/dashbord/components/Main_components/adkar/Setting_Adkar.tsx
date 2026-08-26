import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Notification } from "./adkar_setting_components/notifications"
import {Adkar_alarm } from "./adkar_setting_components/Alarm"
import { useEffect } from "react";
import { getData } from "@/features/adkar/Adkar_slice";
import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
import Loader from "@/other/Loader.";
import { useTranslation } from "react-i18next";
export default function Setting_Adkar() {
  const dispatch = useAppDispatch();
    useEffect(() => {
    dispatch(getData());
  }, []);

  const isNotifcationActivated = useAppSelector((state) => state.adkar.noftications.isActivated);
    const { t } = useTranslation();

  return (
    <Tabs defaultValue={localStorage.getItem("lastAindex")??"notifcation"} className="w-full mx-auto mt-10">
      <TabsList className="w-full">
        <TabsTrigger value="notifcation">{t(`dashboard.adkar_page.notifications.tabTitle`)}</TabsTrigger>
        <TabsTrigger value="setAlarm">{t(`dashboard.adkar_page.notifications.setAlarmTab`)}</TabsTrigger>
      </TabsList>
      <TabsContent value="notifcation">
        <Card>
          <Notification/>
        </Card>
      </TabsContent>
      <TabsContent value="setAlarm">
        {isNotifcationActivated?<Adkar_alarm/>:
        isNotifcationActivated===false?
        <Card>
          <CardTitle className="font-bold text-center">
            {t(`dashboard.adkar_page.alarm.activationRequired`)}</CardTitle>
        </Card>:<Loader/>
        }
      
      </TabsContent>
    </Tabs>
  )
}
