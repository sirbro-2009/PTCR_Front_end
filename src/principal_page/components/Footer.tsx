import { Card } from "@/components/ui/card";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Icon from "./bar_components/Icon.js";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Downloads } from "@/other/data.js";
import { Link } from "react-router";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
export default function Footer() {
  const year = new Date().getFullYear();
  const { t, i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";
  return (
    <div dir={dir}>
      <Card className="w-full rounded-none border-x-0 border-b-0 bg-background text-foreground flex flex-row justify-between p-6 relative z-10">
        <div>
          <h1 className="text-2xl font-bold p-2 px-4">
            {t(`footer.links_title`)}
          </h1>
          <a
            href="https://github.com/sirbro-2009"
            className="hover:text-[#d1d5db] transition-colors duration-1000 flex flex-row-reverse items-center ">
            <FaGithub className="w-7 m-2 h-7"></FaGithub>
            <h1 className="px-1">Git hub</h1>
          </a>
          <a
            href="https://linkedin.com/in/zernikh-mouhamed-8a91a4408"
            className="hover:text-[#d1d5db] duration-1000 transition-colors  flex flex-row-reverse items-center ">
            <FaLinkedin className="w-7 m-2 h-7"></FaLinkedin>
            <h1 className="px-2">Linked In</h1>
          </a>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold p-2">PTCR</h1>
          <h1 className="text-lg text-[#a1a1aa]">{t(`footer.app_subtitle`)}</h1>
          <div className="lg:flex lg:flex-row  lg:items-center lg:justify-between">
            <br />
            <h1 className="text-lg text-Secondary text-center">Ver 3.8.9 </h1>
            <br />
            <br />
            <Icon className={``} />
          </div>
          <h1 className="text-lg text-Secondary text-center">{year} ©</h1>
        </div>
        <div>
          <h1 className="text-2xl ml-8 md:ml-auto font-bold  md:p-2" dir={dir}>
            {t("footer.about_title")}
          </h1>
          <Dialog>
            <form className="text-center">
              <DialogTrigger asChild>
                <Button variant="outline" className={` w-22 md:w-auto`}>
                  {t(`footer.who_ares`)}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-sm">
                <DialogHeader>
                  <DialogTitle className={`m-auto`}>
                    {t(`footer.who_ares`)}
                  </DialogTitle>
                  <DialogDescription className={`m-auto`}>
                    {t("footer.about_desc")
                      .split("\n")
                      .map((e, i) => {
                        return (
                          <span key={i} className="block text-center">
                            {e}
                          </span>
                        );
                      })}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </form>
          </Dialog>
          {/**download */}
          <Dialog>
            <form className="text-center">
              <DialogTrigger asChild>
                <Button variant="outline" className={`my-2 w-22 md:w-auto`}>
                  {t(`footer.donwload`)}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-sm ">
                <DialogHeader>
                  <DialogTitle className={`m-auto`}>
                    {t(`footer.who_ares`)}
                  </DialogTitle>
                  <DialogDescription className={`m-auto w-1/2`}>
                    {Downloads.map((e, i) => {
                      return (
                        <Link to={e.link} key={i} target="_blank">
                          <Card className="w-full items-center  p-2 flex-row flex justify-between">
                            {e.icon}
                            <HoverCard>
                              <HoverCardTrigger >
                                <span className="text-black font-bold">
                                  {e.text}
                                </span>
                              </HoverCardTrigger>
                              {
                                e.available?``:
                            <HoverCardContent className="flex w-64 flex-col gap-0.5">
                                <div className="font-semibold">{`soon`}</div>
                              </HoverCardContent>
                              }

                            </HoverCard>
                          </Card>
                        </Link>
                      );
                    })}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </form>
          </Dialog>
        </div>
      </Card>
    </div>
  );
}
/**

 */
