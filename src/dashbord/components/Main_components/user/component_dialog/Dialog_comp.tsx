import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FieldGroup } from "@/components/ui/field";
import { useTranslation } from "react-i18next";
import { updateData } from "@/features/crud_account_setting/crud_slice";
import {useAppDispatch,useAppSelector} from '@/hooks/Redux'
import { useContext } from "react";
import { Provider } from "@/hooks/Provide";
import { toast } from "sonner";
import { reset_value } from "@/features/crud_account_setting/crud_slice";
import type { IProvider } from "@/hooks/Provide";

export default function Dialog_comp({ edit_type, children }: any) {
  const { t } = useTranslation();
  const { ready, setReady } = useContext(Provider) as IProvider;
  const dispatch = useAppDispatch();
  const userInformations = useAppSelector((state) => state.user);
  if (userInformations.change === true) {
    toast.success(t(`auth.done`));
    setTimeout(() => {
      dispatch(reset_value());
    }, 3000);
  }
  if (userInformations.done === false) {
    toast.error("error");
  }
  if (userInformations.change === null) {
          toast.promise<{ name: string }>(
            () =>
              new Promise((resolve) =>
                setTimeout(() => resolve({ name: "Event" }), 2000)
              ),
            {
              loading: "Loading...",
            }
          )

  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const [entrieType, entrie] = [...formData.entries()][0] as [String,FormDataEntryValue]
    if (ready) {
      const theEntrieType =
        entrieType === "gender"
          ? "Gender"
          : entrieType === "Date"
            ? "dateOfborn"
            : entrieType === "profile_picture"
              ? "profilePicture"
              : entrieType;
      if (theEntrieType !== "profilePicture") {
        dispatch(
          updateData({
            entrieType: theEntrieType,
            entrie,
            lng: localStorage.getItem("i18nextLng"),
          }),
        );
      }
      if (
        theEntrieType === "currentPassword" ||
        theEntrieType === "newPassword"
      ) {
        const currentPassword = formData.get("currentPassword");
        const newPassword = formData.get("newPassword");
        dispatch(
          updateData({
            entrieType: "password",
            entrie: { currentPassword, newPassword },
            lng: localStorage.getItem("i18nextLng"),
          }),
        );
      } else {
        const newFomrmData = new FormData();
        newFomrmData.append("profile_img", entrie);
        dispatch(updateData(newFomrmData));
      }
      setReady(false);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className={`rounded-xl md:text-lg mx-2 `}>
          {t(`dashboard.DialogTitle`)}{" "}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm font-[Rubik]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 text-center">
          <DialogHeader>
            <DialogTitle>
              {t(`dashboard.DialogTitle`)} {t(`auth.${edit_type}`)}
            </DialogTitle>
            <DialogDescription>
              {t(`dashboard.DialogDescription`).split("&")[0] +
                t(`auth.${edit_type}`) +
                t(`dashboard.DialogDescription`).split("&")[1]}
            </DialogDescription>
          </DialogHeader>
          <FieldGroup className={"flex flex-col gap-3 py-2 justify-center"}>
            {children}
          </FieldGroup>
          <DialogFooter className="flex  justify-center  flex-row">
            <DialogClose asChild>
              <Button variant="outline" className={`rounded-xl w-20`}>
                {t(`dashboard.cancel`)}
              </Button>
            </DialogClose>
            <Button type="submit" className={`rounded-xl w-20`}>
              {t(`dashboard.save`)}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
