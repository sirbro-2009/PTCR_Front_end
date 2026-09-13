import Login_page from '@/login_page/Login_page'
import Sign_up from '@/login_page/Sign_up'
import ErrorPage from '@/other/ErrorPage'
import Verify_page from '@/login_page/components/Verfy_page'
import Verify_page_login from '@/login_page/components/verfy_page_login'
import Principale_page from '@/principal_page/Principale_page'
import Display_mosque from '@/mosque_props_display_page/Display_mosque'
import Adhan_components from '@/dashbord/components/Main_components/prayer/pray_time_components/multi_use_comps/prayer_display_components/Adhan_components'
import Adkar_components from '@/dashbord/components/Main_components/prayer/pray_time_components/multi_use_comps/prayer_display_components/adkar_components'

const route = [
  { path: "/", element: <Principale_page /> },
  { path: "/login", element: <Login_page/> },
  { path: "/sing-up", element: <Sign_up /> },
  { path: "*", element: <ErrorPage /> },
  { path: "/sing-up/Verify_page", element: <Verify_page /> },
  { path: "/login_in/Verify_page", element: <Verify_page_login  /> },
  { path:"/mosque/:lng/:id",element:<Display_mosque/>},
  { path:"/adkar/:id",element:<Adkar_components/>},
  { path:"/adhan/:title/:icama/:id",element:<Adhan_components/>},
]
export default route