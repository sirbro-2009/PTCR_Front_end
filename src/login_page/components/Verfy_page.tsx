import Bar from "@/principal_page/components/Bar";
import { useTranslation } from "react-i18next";
import Footer from "@/principal_page/components/Footer";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router"
import * as React from "react"
import { Provider } from "@/hooks/Provide";
import { Card } from "@/components/ui/card";
import Done_Alert from "@/other/Done_Alert";
import { toast } from "sonner"
import useAuthActions from "./functions/handel-changes";
import { serverHost } from "@/other/data";
import  type { IProvider } from "@/hooks/Provide";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Field } from "@/components/ui/field";
import { MailCheck } from "lucide-react";
export default function Verify_page() {
  const navigate = useNavigate()
  const { navigateFunction } = useAuthActions();
  useEffect(()=>{
    navigateFunction();
  },[navigateFunction])
  const { t } = useTranslation();
  const { signUp, setSignUp } = useContext(Provider) as IProvider;
  const [value, setValue] = useState("");
  useEffect(() => {

    async function verfy() {
      if (value.length === 6) {
        const code = parseInt(value);
        const sendReq = await fetch(`${serverHost}auth/sign-up/verify`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: signUp.email,
            code: code,
            lng:localStorage.getItem("i18nextLng")
          }),
        });
        const res = await sendReq.json();
        if (res.done && !res.cause) {
          await setSignUp({ ...signUp, done: true });
          localStorage.setItem("token", res.token);
            setTimeout(()=>{
            navigate("/dashboard")
            },5000)
          
        } else if (res.cause) {
          setSignUp({ ...signUp, done: false });
          toast.error("Eroor", {
            description: res.cause,
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          });
        }
      }
    }
    verfy();
  }, [value,navigate,setSignUp,signUp]);
  return (
    <>
      {signUp.done ? <Done_Alert /> : ``}
      <h1 className={`text-Foreground text-center font-bold text-2xl `}>
        {t(`navbar.greeting`)}
      </h1>
      <Bar />
      <Card className="space-y-4 lg:w-1/2 m-auto my-15   py-8 " dir="ltr">
        <Field>
          <h1 className={`text-3xl font-bold text-center`}>
            {t(`auth.verfyTitle`)}
          </h1>
          <p className="text-center text-xl">{t(`auth.verfyDes`)} </p>
          <MailCheck className="w-20 h-20" />
        </Field>
        <div
          className="flex justify-center"
          onChange={(newValue: React.ChangeEvent<HTMLInputElement>) => {
            setValue(newValue.target.value);
          }}>
          <InputOTP maxLength={6} className={`h-20`}>
            <InputOTPGroup>
              <InputOTPSlot
                index={0}
                aria-invalid={signUp.done === false ? true : false}
              />
              <InputOTPSlot
                index={1}
                aria-invalid={signUp.done === false ? true : false}
              />
              <InputOTPSlot
                index={2}
                aria-invalid={signUp.done === false ? true : false}
              />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot
                index={3}
                aria-invalid={signUp.done === false ? true : false}
              />
              <InputOTPSlot
                index={4}
                aria-invalid={signUp.done === false ? true : false}
              />
              <InputOTPSlot
                index={5}
                aria-invalid={signUp.done === false ? true : false}
              />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </Card>

      <Footer />
    </>
  );
}
