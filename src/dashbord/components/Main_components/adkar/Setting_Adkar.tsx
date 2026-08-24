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
export default function Setting_Adkar() {
  const dispatch = useAppDispatch();
    useEffect(() => {
    dispatch(getData());
  }, []);

  const isNotifcationActivated = useAppSelector((state) => state.adkar.noftications.isActivated);

  return (
    <Tabs defaultValue={localStorage.getItem("lastAindex")??"notifcation"} className="w-full mx-auto mt-10">
      <TabsList className="w-full">
        <TabsTrigger value="notifcation">Notifications</TabsTrigger>
        <TabsTrigger value="setAlarm">set alarm</TabsTrigger>
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
          <CardTitle className="font-bold text-center">Active notification to access to alarm features</CardTitle>
        </Card>:<Loader/>
        }
      
      </TabsContent>
    </Tabs>
  )
}
