import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAppSelector, useAppDispatch } from "@/hooks/Redux";
import { BellCheck, BellOff } from "lucide-react";
import { useEffect } from "react";
import { getData, setActiver } from "@/features/adkar/Adkar_slice";
import { toastFunctions } from "../../quran/components/quran_recitation_components/mp3_compnents/ifFulfied";
import { useTranslation } from "react-i18next";
function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = atob(base64);
  return Uint8Array.from([...rawData].map((c) => c.charCodeAt(0)));
}
export interface subscription {
  endpoint: string;
  expirationTime: number | null;
  keys?: {
    p256dh: string;
    auth: string;
  };
  timezone?:string
}
export function Notification() {
  localStorage.setItem("lastAindex", "notifcation");
      const { t ,i18n} = useTranslation();

  const Public_Key = (
    import.meta as ImportMeta & {
      env: { VITE_VAPID_PUBLIC_KEY: string };
    }
  ).env.VITE_VAPID_PUBLIC_KEY;
  useEffect(() => {
    dispatch(getData());
  }, []);
  const dispatch = useAppDispatch();
  const notification = useAppSelector((state) => state.adkar.noftications);

  const requestNotificationPermission = async () => {
    let finalBoolean: boolean = false;
    let subscription: PushSubscription | undefined;
    try {
      if (typeof window === "undefined" || !("Notification" in window)) {
        finalBoolean = false;
      }
      await window.Notification.requestPermission()
        .then(async (permission: NotificationPermission) => {
          if (permission === "granted") {
            finalBoolean = true;
            const registration =
              await navigator.serviceWorker.ready;

            subscription = await registration.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: urlBase64ToUint8Array(
                Public_Key,
              ),
            });
            new window.Notification("enabled", {
              tag: "Done!",
              body: "now you can add adkar alarm!",
            });
            toastFunctions(t(`auth.done`), "success");
          }
          if (permission === "denied") {
            toastFunctions("notifications are blocked", "error");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
    return { finalBoolean, subscription };
  };
  const option = [
    {
      title: t(`dashboard.adkar_page.notifications.active.title`),
      des: t(`dashboard.adkar_page.notifications.active.description`),
      value: "true",
      function: async () => {
        const { finalBoolean, subscription } =
          await requestNotificationPermission();
        const subscriptionData = subscription?.toJSON();
        console.log(subscriptionData)
        dispatch(
          setActiver({
            active: finalBoolean,
            subscription: {
              ...(subscriptionData ?? {}),
              timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
              lang: i18n.language,
            },
          }),
        );
      },
      icon: <BellCheck />,
    },
    {
      title: t(`dashboard.adkar_page.notifications.deactive.title`),
      des: t(`dashboard.adkar_page.notifications.deactive.description`),
      value: "false",
      function: async () => {
        
        await dispatch(setActiver({ active: false }));
        if (notification.done1) {
          toastFunctions(t(`auth.done`), "success");
        }
        if (notification.done1 === false) {
          toastFunctions(t(`auth.some`), "error");
        }
        if (notification.done1 === null) {
          toastFunctions("wait", "loading");
        }
      },
      icon: <BellOff />,
    },
  ];
  return (
    <RadioGroup
      value={notification.isActivated === true ? "true" : "false"}
      className="w-full p-2"

      dir={i18n.dir()}
      >
      {option.map((e, i) => {
        return (
          <FieldLabel key={i} onClick={e.function}>
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>
                  {e.icon}
                  {e.title}
                </FieldTitle>
                <FieldDescription className="text-start">{e.des}</FieldDescription>
              </FieldContent>
              <RadioGroupItem value={e.value} />
            </Field>
          </FieldLabel>
        );
      })}
    </RadioGroup>
  );
}
