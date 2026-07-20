import Bar from "@/principal_page/components/Bar";
import { useTranslation } from "react-i18next";
import Footer from "@/principal_page/components/Footer";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import * as React from 'react'
import { Provider } from "@/hooks/Provide";
import { Card } from "@/components/ui/card";
import Done_Alert from "@/other/Done_Alert";
import { toast } from "sonner";
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
import { Input } from "@/components/ui/input";

export default function Verify_page_login() {
  const { t } = useTranslation();
  const { login, setLogin } = useContext(Provider) as IProvider
  const [value, setValue] = useState("");
  const [email,setEmail] = useState({
    showInput:true,
    value:""
  })
  const navigate = useNavigate();
  const { navigateFunction,emailRegex } = useAuthActions();

  const [showInput, setShowInput] = useState({
    show: false,
    new_password: "",
    boolen:false
  });
  /////////////////////

    async function sendEmailForCode() {
      if(emailRegex.test(email.value)){
      const sendReq = await fetch(
        `${serverHost}auth/login/verfiy/create-code`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.value,
            lng: localStorage.getItem("i18nextLng"),
          }),
        },
      );
      const res = await sendReq.json();
      if (!res.done) {
        alert(t(`auth.some`));
      }
      setEmail({...email,showInput:false})
      }
    }

  ////////////////////
  const hadleclick = async () => {
    if (showInput.new_password.length >= 8) {
      const sendReq = await fetch(
        `${serverHost}auth/login/verify/new-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email:  email.value,
            password: showInput.new_password,
          }),
        },
      );
      const res = await sendReq.json();
      if (res.done && !res.cause) {
        localStorage.setItem("token", res.token);
        setTimeout(() => {
          navigate("/dashboard");
        }, 5000);
      } else if (res.cause) {
        setLogin({ ...login, done: false });
        toast.error("Eroor", {
          description: res.cause,
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        });
      }
    }
  };
  /////////////////////////////
  useEffect(() => {
    navigateFunction();
  }, [navigateFunction]);
  useEffect(() => {
    if (value.length === 6) {
      verfy();
    async function verfy() {
      const code = parseInt(value);
      const sendReq = await fetch(`${serverHost}auth/login/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email:  email.value,
          code: code,
          lng: localStorage.getItem("i18nextLng"),
        }),
      });
      const res = await sendReq.json();
      if (res.done && !res.cause) {
        setLogin({ ...login, show: true });
        setShowInput({...showInput,show:true})
        console.log(res)
      } else if (res.cause) {
        setLogin({ ...login, done: false });
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

  }, [value,email,showInput,login,setLogin,setShowInput]);
///////////////////////////////
  return (
    <>

      {login.done ? <Done_Alert /> : ``}
      <h1 className={`text-Foreground text-center font-bold text-2xl `}>
        {t(`navbar.greeting`)}
      </h1>
      <Bar />
      <Card
        className="space-y-4 lg:w-1/2 m-auto my-15 flex flex-col  py-8 "
        dir="ltr">
        <h1 className={`text-3xl font-bold text-center`}>
          {t(`auth.verfyTitle`)}
        </h1>
        {email.showInput ? (
          <>
            <Input
              className={`w-1/2 self-center`}
              aria-invalid={!emailRegex.test(email.value)}
              onChange={(e) => {
                setEmail({ ...email, value: e.target.value });
              }}
              value={email.value}
              placeholder={t(`auth.placeHolder`)}
            />
            <Button
              className={`w-1/2 self-center  text-2xl`}
              onClick={sendEmailForCode}>
              {t(`auth.sent`)}
            </Button>
          </>
        ) : (
          ``
        )}
        {!email.showInput ?
        <>
        <Field>
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
                aria-invalid={login.done === false ? false : true}
              />
              <InputOTPSlot
                index={1}
                aria-invalid={login.done === false ? false : true}
              />
              <InputOTPSlot
                index={2}
                aria-invalid={login.done === false ? false : true}
              />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot
                index={3}
                aria-invalid={login.done === false ? false : true}
              />
              <InputOTPSlot
                index={4}
                aria-invalid={login.done === false ? false : true}
              />
              <InputOTPSlot
                index={5}
                aria-invalid={login.done === false ? false : true}
              />
            </InputOTPGroup>
          </InputOTP>
        </div>
        </>:``
        }

        {showInput.show?  
          <>
            <Input
              className={`w-1/2 self-center`}
              aria-invalid={showInput.boolen}
              onChange={(e) => {
                const boolen = e.target.value.length>=8?false:true
                setShowInput({ ...showInput, new_password: e.target.value,boolen:boolen });

              }}
              value={showInput.new_password}
              placeholder={t(`auth.placeHolder2`)}
              type="password"
            />
            <Button
              className={`w-1/2 self-center  text-2xl`}
              onClick={hadleclick}>
              {t(`auth.sent`)}
            </Button>
          </>
         : 
          ``
        }
      </Card>

      <Footer />
    </>
  );
}
