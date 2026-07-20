import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Dialog_comp from "./Dialog_comp"
import { useState ,useContext} from "react"
import { useTranslation } from "react-i18next"
import { Provider } from "@/hooks/Provide"
import { BadgeCheck  } from 'lucide-react';
import type { IProvider } from "@/hooks/Provide"
import * as React from "react";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const theToken = localStorage.getItem("token")
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { serverHost } from "@/other/data"
export function Email() {
const [email,setEmail] = useState("")
const [value,setValue] = useState("")
const {t} = useTranslation()
const [isReady,setIsready] = useState({
  email:false,
  sentVerfy:false,
  clickSent:false
})
const {setReady} = useContext(Provider) as IProvider
const sent = <>
                    <h1>{t(`auth.changeEmail`)}</h1>
                    <span className={`m-auto font-bold`}>{t(`auth.click`)}</span>
                    <BadgeCheck size={50} className="cursor-pointer transition-all duration-500 hover:scale-110"
                    onClick={async()=>{
                    const requeset = await fetch(serverHost+"auth/login/verfiy/create-code",{
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      'Authorization': `Bearer ${theToken}`  
                    },
                    body: JSON.stringify({
                      lng: localStorage.getItem("i18nextLng"),
                    }),
                    }) 
                    const res = await requeset.json()
                    if (!res.done) {
                              alert(t(`auth.some`));
                    }
                    if (res.done) {
                    setIsready({...isReady,clickSent:true,sentVerfy:true})
                    }
                    
                    }}/></>
const inputOtp = <div
          className="flex justify-center"
          onChange={async(newValue: React.ChangeEvent<HTMLInputElement>) => {
            setValue(newValue.target.value);
            if(newValue.target.value.length === 6){
              const req = await fetch(serverHost+"auth/login/verify",{
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      'Authorization': `Bearer ${theToken}`  
                    },
                    body: JSON.stringify({
                      code: parseInt(newValue.target.value),
                      lng: localStorage.getItem("i18nextLng"),
                    }),
              }) 
              const res = await req.json()
              if(res.done){
                setIsready({...isReady,email:true,sentVerfy:false})
              }
              else if(!res.done){
                alert(res.cause)
              }
            }
          }}>
          <InputOTP maxLength={6} className={`h-20`}>
            <InputOTPGroup>
              <InputOTPSlot
                index={0}
              />
              <InputOTPSlot
                index={1}
              />
              <InputOTPSlot
                index={2}
              />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot
                index={3}
              />
              <InputOTPSlot
                index={4}
              />
              <InputOTPSlot
                index={5}
              />
            </InputOTPGroup>
          </InputOTP>
        </div>
const emailHtml = <>
              <h1 className=" text-xl" >{t(`auth.email_label`)}</h1>
              <Input name="email"  value={email} aria-invalid={email?!emailRegex.test(email):false}  onChange={e=>{
                setEmail(e.target.value)
                setReady(emailRegex.test(e.target.value))
                
              }}/>
                </>
  return (
    <Dialog_comp edit_type="email_label">
            <Field >
            {!isReady.clickSent?sent:``}
            {isReady.sentVerfy?inputOtp:``}
            {isReady.email?emailHtml:``}
            </Field>
    </Dialog_comp>
  )
}
/**

 */