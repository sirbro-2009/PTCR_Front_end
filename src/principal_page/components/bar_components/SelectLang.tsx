import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useUiChanges from "./login/useUIchanges";
if (
  !localStorage.getItem("i18nextLng") ||
  localStorage.getItem("i18nextLng") === "en-US"
) {
  localStorage.setItem("i18nextLng", "en");
}
const select_style = `  w-full lg:p-4  max-w-48 text-xl duration-750 cursor-pointer transition-all`;
import { supportedLanguages } from "@/other/data";
import { useTranslation } from "react-i18next";
export default function SelectLang() {
  const { handleLanguageChange } = useUiChanges();
  const {i18n,t} = useTranslation()
  return (
    <div>
      <Select
        defaultValue="en"
        value={supportedLanguages.map(e=>e.code).includes(i18n.language)?i18n.language:'en'}
        onValueChange={handleLanguageChange}>
        <SelectTrigger
          className={select_style}
          onChange={() => {
            handleLanguageChange;
          }}>
          <SelectValue placeholder="Select a langage" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {supportedLanguages.map((e, i) => {
              return (
                <SelectItem
                  value={e.code}
                  onClick={() => {
                    document.dir = e.dir;
                  }}
                  key={i}
                  dir={e.dir}>
                  {e.name}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
