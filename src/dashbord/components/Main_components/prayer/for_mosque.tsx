import { useAppSelector } from "@/hooks/Redux"
import Set_mosque_props from "./for_mosque/set_mosque_props"
import Search_for_mosque from "./for_mosque/search_for_mosque"
import { toastFunctions } from "../quran/components/quran_recitation_components/mp3_compnents/ifFulfied"
import App_loader from "./pray_time_components/multi_use_comps/load"

export default function For_mosque(){
const type = useAppSelector(state=>state.user.data)
const returned_components = type.userType === 'mosque'?<Set_mosque_props/>:<Search_for_mosque/>
return (<>{
    type.done?
    returned_components:
    type.done === false?
    toastFunctions("faild to get user data","error"):
    <App_loader/>
}</>)
}