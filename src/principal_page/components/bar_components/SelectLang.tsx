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
export default function SelectLang() {
  const { handleLanguageChange, i18n } = useUiChanges();
  return (
    <div>
      <Select
        defaultValue="en"
        value={i18n.language}
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
