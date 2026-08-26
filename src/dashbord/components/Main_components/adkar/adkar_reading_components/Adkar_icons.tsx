import adkar_object from "@/assets/JSON/adkarObject.json";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { categoriesMetadata } from "@/other/data";
import { TiDocumentText } from "react-icons/ti";
import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
import { CircleX } from "lucide-react";
import { setShow } from "@/features/adkar/Adkar_slice";
import { useTranslation } from "react-i18next";
export default function Adkar_icons() {
  const data = useAppSelector((state) => state.adkar);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  if (data.searchStatue !== null) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 self p-4    w-full">
        {data.searchArrayRes.map((e, i) => {
          const keyValue = adkar_object[e as keyof typeof adkar_object];
          const metadata = categoriesMetadata[i];

          return (
            <Card key={i} className="flex flex-col  m-2" dir={document.dir}>
              {/**icon and adkars length */}
              <div className="flex justify-between  flex-row-reverse items-center">
                <div
                  className="flex  p-2  text-2xl"
                  style={{ color: metadata?.color }}>
                  {metadata?.icon}
                </div>
                <div
                  style={{ color: metadata?.color }}
                  className="flex  flex-row-reverse m-2 bg-popover-foreground/10 rounded-lg p-1 text-2xl items-center">
                  <span className="text-xl">
                    {keyValue.length >= 10
                      ? keyValue.length
                      : "0" + keyValue.length}
                  </span>

                  <TiDocumentText />
                </div>
              </div>
              {/**adkar type */}
              <Label className=" text-center m-auto">
                {t(`dashboard.adkar_page.adhkarNames.${e}`)}
              </Label>
              <Button
                className="w-1/2 rounded m-auto cursor-pointer"
                variant="secondary"
                onClick={() => {
                  dispatch(setShow(keyValue));
                }}>
                {t(`dashboard.adkar_page.home.readButton`)}
              </Button>
            </Card>
          );
        })}
      </div>
    );
  } else {
    return (
      <Card className="m-auto w-full md:w-fit p-2">
        <Label className="m-auto text-2xl">
          {t(`dashboard.adkar_page.home.noResults`)}
        </Label>
        <CircleX className="m-auto" color="red" size={40} />
      </Card>
    );
  }
}
