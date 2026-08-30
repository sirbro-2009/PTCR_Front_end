import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { setShow } from "@/features/adkar/Adkar_slice";
import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function DWC(value:any) {
  const data = useAppSelector((state) => state.adkar);
  const dispatch = useAppDispatch()
  const { t,i18n } = useTranslation();
  const [open, setOpen] = useState(false)
const handleCheckCondition = () => {

      setOpen(true)
    
  }
  return (
    <Dialog open={!!value} onOpenChange={setOpen}>
      <DialogTrigger asChild >
        <Button variant="outline" onClick={handleCheckCondition} className="opacity-0">ddd</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md m-auto" dir={i18n.dir()}  showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>
            {t(`dashboard.adkar_page.reading.completeTitle`)}
            </DialogTitle>
          <DialogDescription>
            {t(`dashboard.adkar_page.reading.completeMessage`)}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" onClick={()=>{dispatch(setShow([]))}}>{t(`dashboard.adkar_page.reading.closeButton`)}</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
