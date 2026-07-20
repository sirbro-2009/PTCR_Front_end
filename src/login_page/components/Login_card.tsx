import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  FieldDescription,
} from "@/components/ui/field"
import { Link } from "react-router";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useTranslation } from "react-i18next";
import useAuthActions from './functions/handel-changes'
import { useContext } from "react";
import { Provider } from "@/hooks/Provide";
import type { IProvider } from "@/hooks/Provide";
import LoginFunction from "./functions/Login";
export function Login_card() {
const {emailL,passwordL,navigateFunction} = useAuthActions()
navigateFunction()
const {Login} = LoginFunction()
const {login} = useContext(Provider) as IProvider
const { i18n,t } = useTranslation();
const dir = (i18n.language || "ar") === "ar" ? "rtl" : "ltr";
const isValidEmail=login.isValid_email
const isValidPassword = login.isValid_password
return (
<div className=" my-5 justify-center flex">
        <Card className="w-full max-w-sm " dir={dir}>
      <CardHeader>
        <CardTitle className={`text-xl font-bold text-center`}>{t(`auth.login_title`)}</CardTitle>
        <CardDescription className={`text-center`}>
          {t(`auth.login_subtitle`)}
        </CardDescription>
        <CardAction>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">{t(`auth.email_label`)}</Label>
              <Input
                type="email"
                placeholder="m@example.com"
                value={login.email}
                onChange={(e)=>{emailL(e)}}
                required
                aria-invalid={isValidEmail}
              />
                <FieldDescription>
                {isValidEmail?t(`auth.email-input`):`ㅤ`}
                </FieldDescription>      
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password" >{t(`auth.password_label`)}</Label>
              </div>
              <Input type="password"
              value={login.password}
              onChange={(e)=>{passwordL(e)}}
              required 
              aria-invalid={isValidPassword}
              />
                <FieldDescription>
                {isValidPassword?t(`auth.password-input`):`ㅤ`}
                </FieldDescription> 
            </div>
                <Link 
                  to="/login_in/Verify_page"
                  className=" inline-block text-sm underline-offset-4 hover:underline"
                >
                  {t(`auth.forgot_password`)}
                </Link>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full cursor-pointer" onClick={Login}>
          {t(`auth.login_btn`)}
        </Button>
          <Link to={`/sing-up`} className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                  {t(`auth.dont_have_account`)}
          </Link>
      </CardFooter>
    </Card>
</div>
  )
}
