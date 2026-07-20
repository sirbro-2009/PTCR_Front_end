import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Dialog_comp from "./Dialog_comp";
import { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Label } from "@/components/ui/label";
import { Provider } from "@/hooks/Provide";
import type { IProvider } from "@/hooks/Provide";

export function Password() {
  const { t } = useTranslation();
  const [password, setPassword] = useState({
    currrentPassword: "",
    newPassword: "",
  });
  const { setReady } = useContext(Provider) as IProvider;
  return (
    <Dialog_comp edit_type="password_label">
      <Field>
        <h1 className=" text-xl">{t(`auth.current_password_label`)}</h1>
        <Input
          name="currentPassword"
          aria-invalid={
            password.currrentPassword.trim()
              ? password.currrentPassword.trim().length < 8
              : false
          }
          type={`password`}
          value={password.currrentPassword}
          onChange={(e) => {
            setPassword({ ...password, currrentPassword: e.target.value });
            setReady(password.currrentPassword.trim().length >= 8);
          }}
        />
        <h1 className=" text-xl">{t(`auth.new_password_label`)}</h1>
        <Input
          name="newPassword"
          aria-invalid={
            password.newPassword.trim()
              ? password.newPassword.trim().length < 8
              : false
          }
          type={`password`}
          value={password.newPassword}
          onChange={(e) => {
            setPassword({ ...password, newPassword: e.target.value });
            setReady(password.newPassword.trim().length >= 8);
          }}
        />
        <div className="flex justify-center">
          <Label>{t(`auth.passwordInput`)}</Label>
        </div>
      </Field>
    </Dialog_comp>
  );
}
