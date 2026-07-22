import "./App.css";
import { useState, useEffect } from "react";
import { Provider } from "./hooks/Provide.js";
import { Route, Routes, useLocation } from "react-router";
import Dashbord from "@/dashbord/Dashbord.tsx";
import mainObjects from "./routes/Main_normal.js";
import route from "./routes/Routes.js";
import { serverHost } from "@/other/data";
import { useTranslation } from "react-i18next";
import { DirectionProvider } from "@/components/ui/direction"
import {
  ContextMenu,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { SpeedInsights } from "@vercel/speed-insights/react"
import ContextMenuContentComp from "./other/contextMenu.js";
if (localStorage.getItem("theme") === undefined) {
  localStorage.setItem("theme", "dark");
}
if (localStorage.getItem("lastDPindex") === undefined) {
  localStorage.setItem("lastDPindex", "0");
}

function App() {
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = "";
    document.body.style.pointerEvents = "";
  }, [location.pathname]);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [theScreen, setScreen] = useState<boolean>(true);
  const {i18n} = useTranslation()
  const [dpIndex, setDpindex] = useState(
    Number(localStorage.getItem("lastDPindex")),
  );
  const [signUp, setSignUp] = useState({
    email: "",
    fullName: "",
    userName: "",
    password: "",
    Gender: "",
    confirmPassword: "",
    userType: null,
    dateOfborn: new Date().toISOString().split(",")[0],
    done: null,
  });
  const [login, setLogin] = useState({
    email: "",
    password: "",
    cause: null,
    done: null,
  });
  const [showTerms, setShowTerms] = useState({
    show: false,
    accept: false,
  });
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      if (!localStorage.getItem("visite")) {
        fetch(`${serverHost}visit`)
          .then((e) => {
            return e.json();
          })
          .then((e) => {
            e.ok ? localStorage.setItem("visite", "true") : ``;
          });
      }
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <Provider.Provider
      value={{
        ready,
        setReady,
        theme,
        setTheme,
        signUp,
        setSignUp,
        login,
        setLogin,
        showTerms,
        setShowTerms,
        dpIndex,
        setDpindex,
        theScreen,
        setScreen,
      }}>
      <DirectionProvider direction={i18n.language === 'ar'?'rtl':'ltr'} dir={i18n.language === 'ar'?'rtl':'ltr'}>
      <ContextMenu>
        <ContextMenuTrigger>
          {" "}
          <div
            className={`min-h-screen   max-w-screen bg-background text-foreground   ${theme} font-['Rubik']`}
            dir="rtl">
            <Routes>
              {route.map((e, i) => {
                return <Route key={i} path={e.path} element={e.element} />;
              })}
              <Route
                path="/dashboard"
                element={<Dashbord>{mainObjects[dpIndex]}</Dashbord>}
              />
            </Routes>
              <SpeedInsights />
          </div>
        </ContextMenuTrigger>
        <ContextMenuContentComp/>
      </ContextMenu>
      </DirectionProvider>

    </Provider.Provider>
  );
}

export default App;
