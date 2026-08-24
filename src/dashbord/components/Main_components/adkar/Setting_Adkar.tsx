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
import { Label } from "@/components/ui/label";
import { Pickaxe } from "lucide-react";
export default function Setting_Adkar() {
  const dispatch = useAppDispatch();
    useEffect(() => {
    dispatch(getData());
  }, []);

  const isNotifcationActivated = useAppSelector((state) => state.adkar.noftications.isActivated);

  return (
<Label className="m-auto" dir="ltr">Soon
  <Pickaxe/>
</Label>
  )
}
