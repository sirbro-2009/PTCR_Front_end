{/*First page */}
import FirstPage from "@/dashbord/components/Main_components/First_page/first_page"
{/**USER */}
import General from "@/dashbord/components/Main_components/user/General"
import ProfileEdit from "@/dashbord/components/Main_components/user/ProfileEdit"
import Sensitive_settings from "@/dashbord/components/Main_components/user/Sensitive_settings"
{/**Quran */}
import Quran_recitations from "@/dashbord/components/Main_components/quran/Quran_recitations"
import Quran_Reading from "@/dashbord/components/Main_components/quran/Quran_Reading"
import Setting from "@/dashbord/components/Main_components/quran/Setting"
{/**Adkar */}
import Adkar_Reading from "@/dashbord/components/Main_components/adkar/Adkar_Reading"
import Setting_Adkar from "@/dashbord/components/Main_components/adkar/Setting_Adkar"
{/*Prayer */}
import Pray_times from "@/dashbord/components/Main_components/prayer/Pray_times"
import Searching_for_mosques from "@/dashbord/components/Main_components/prayer/Searching_for_mosques"
import Setting_mosque from "@/dashbord/components/Main_components/prayer/Setting_mosque"
const mainObjects = [
    <FirstPage/>,
    <General/>,
    <ProfileEdit/>,
    <Sensitive_settings/>,
    <Quran_recitations/>,
    <Quran_Reading/>,
    <Setting/>,
    <Adkar_Reading/>,
    <Setting_Adkar/>,
    <Pray_times/>,
    <Searching_for_mosques/>,
    <Setting_mosque/>,
]

export default mainObjects