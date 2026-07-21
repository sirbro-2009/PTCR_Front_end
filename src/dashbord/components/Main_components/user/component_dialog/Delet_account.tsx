import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"
import { deletAccount } from "@/features/crud_account_setting/crud_slice"
import {useAppDispatch,useAppSelector} from '@/hooks/Redux'
export function Delet_account() {
const {t} = useTranslation()
const dispatch = useAppDispatch()
const userInformations = useAppSelector(state=>state.user)
if(userInformations.done && !userInformations.data ){
      localStorage.removeItem("token")
      location.href = 'https://ptcr-front-end.vercel.app/'
}

const henddleClick = ()=>{
            dispatch(deletAccount())  
}
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className={`bg-red-400 rounded-xl md:mx-3`}>{t(`dashboard.delete`)}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className={`font-[Rubik]`}>
        <AlertDialogHeader>
          <AlertDialogTitle className={`m-auto`}>{t(`dashboard.absoulutely`)}</AlertDialogTitle>
          <AlertDialogDescription className={`text-center`}>
            {t(`dashboard.delete_description`)}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter >
          <AlertDialogCancel className={`m-auto rounded-xl w-20`}>{t(`dashboard.cancel`)}</AlertDialogCancel>
          <AlertDialogAction className={`m-auto rounded-xl w-20`} onClick={()=>{
          henddleClick()
          }}>{t(`dashboard.Continue`)}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>

    </AlertDialog>
  )
}
