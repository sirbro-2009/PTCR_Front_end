import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { FieldDescription } from "@/components/ui/field";
import Sign_Up from "./functions/Sign_up";
import DatePicker from "./Date";
import { Link } from "react-router";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { Provider } from "@/hooks/Provide";
import useAuthActions from "./functions/handel-changes";
import type { IProvider } from "@/hooks/Provide";
export function Sign_card() {
  const {
    email,
    fullName,
    userName,
    password,
    confirmPassword,
    userType,
    Gender,
    showTermsF,
    showTermsFuntion,
  } = useAuthActions();
  const { SignUp_f } = Sign_Up();
  const { signUp } = useContext(Provider) as IProvider;
  const { i18n, t } = useTranslation();
  const dir = (i18n.language || "ar") === "ar" ? "rtl" : "ltr";
  const isValidEmail = signUp.isValid_email;
  const isValidPassword = signUp.isValid_password;
  const isValidUserName = signUp.isValidUserName;
  const isValidName = signUp.isValidName;
  const isValid_confirm = signUp.isValid_confirm;
  const isValidDate = signUp.isValidDate;
  return (
    <div className=" mb-10 mt-5 justify-center flex">
      <Card className="w-full max-w-sm " dir={dir}>
        <CardHeader>
          <CardTitle className={`text-center text-xl font-bold`}>
            {t(`auth.register_title`)}
          </CardTitle>
          <CardDescription className={`text-center`}>
            {t(`auth.register_subtitle`)}
          </CardDescription>
          <CardAction></CardAction>
        </CardHeader>
        <CardContent>
          <form>
            {/*EMAIL */}
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">{t(`auth.email_label`)}</Label>
                <Input
                  value={signUp.email}
                  type="email"
                  onChange={email}
                  placeholder="m@example.com"
                  required
                  aria-invalid={isValidEmail}
                />
                <FieldDescription>
                  {isValidEmail ? t(`auth.email-input`) : `ㅤ`}
                </FieldDescription>
              </div>

              <div className="flex ">
                {/*Full-Name */}
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="">{t(`auth.fullname_label`)}</Label>
                  </div>
                  <Input
                    type="text"
                    className={`w-11/12 `}
                    value={signUp.fullName}
                    aria-invalid={isValidName}
                    onChange={fullName}
                    required
                    placeholder={t(`auth.fullname_placeholder`)}
                  />
                  <FieldDescription>
                    {isValidName ? t(`auth.fullName`) : `ㅤㅤ`}
                  </FieldDescription>
                </div>
                {/*User-name*/}
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="">{t(`auth.username_label`)}</Label>
                  </div>
                  <Input
                    aria-invalid={isValidUserName}
                    type="text"
                    className={`w-11/12`}
                    required
                    placeholder="name_123"
                    value={signUp.userName}
                    onChange={userName}
                  />
                  <FieldDescription>
                    {isValidUserName ? t(`auth.userName`) : `ㅤㅤ`}
                  </FieldDescription>
                </div>
              </div>
              {/**Password */}
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">{t(`auth.password_label`)}</Label>
                </div>
                <Input
                  type="password"
                  required
                  value={signUp.password}
                  placeholder={t(`auth.passwordInput`)}
                  onChange={password}
                  aria-invalid={isValidPassword}
                />
                <FieldDescription>
                  {isValidPassword ? t(`auth.password-input`) : `ㅤㅤ`}
                </FieldDescription>
              </div>
              {/**Confirm password */}
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">
                    {t(`auth.confirm_password_label`)}
                  </Label>
                </div>
                <Input
                  type="password"
                  aria-invalid={isValid_confirm}
                  required
                  value={signUp.confirmPassword}
                  onChange={confirmPassword}
                />
                <FieldDescription>
                  {isValid_confirm ? t(`auth.confirm`) : `ㅤㅤ`}
                </FieldDescription>
              </div>
              {/**User type */}
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">{t(`auth.user_type`)}</Label>
                </div>
                {/*Select //////////////////////////*/}
                <Select value={signUp.userTypeّّّّ} onValueChange={userType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t(`auth.user_type`)} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="mosque">{t(`auth.mosque`)}</SelectItem>
                      <SelectItem value="normal">{t(`auth.normal`)}</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              {/**Gender */}
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">{t(`auth.gender`)}</Label>
                </div>
                {/*Select //////////////////////////*/}
                <Select value={signUp.Gender} onValueChange={Gender}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t(`auth.gender`)} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="male">{t(`auth.male`)}</SelectItem>
                      <SelectItem value="fammle">{t(`auth.fammle`)}</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              {/*///////////////////////////////// */}
              {/*Date */}
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">{t(`auth.date`)}</Label>
                </div>
                {/*Date pick */}
                <DatePicker />
                <FieldDescription>
                  {isValidDate ? t(`auth.Age-prop`) : `ㅤ`}
                </FieldDescription>
              </div>
              {/*Terms */}
              <div className="flex gap-2 items-center">
                <Checkbox
                  id="terms"
                  onCheckedChange={(e: boolean) => {
                    showTermsF(e);
                  }}
                />
                <a>
                  <Label htmlFor="terms">{t(`auth.terms`)}</Label>
                </a>
                <Button onClick={showTermsFuntion} type="button">
                  {t(`auth.read`)}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            className="w-full"
            onClick={() => {
              SignUp_f();
            }}>
            {t(`auth.register_btn`)}
          </Button>
          <Link
            to={`/login`}
            className="ml-auto inline-block cursor-pointer text-sm underline-offset-4 hover:underline">
            {t(`auth.have_account`)}
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
