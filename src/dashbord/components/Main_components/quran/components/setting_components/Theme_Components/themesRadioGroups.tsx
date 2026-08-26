import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAppDispatch,useAppSelector } from "@/hooks/Redux";
import { toastFunctions } from "../../quran_recitation_components/mp3_compnents/ifFulfied";
import { editQDS } from "@/features/quran/quran_slice";
import { useTranslation } from "react-i18next";
export default function ThemesRadioGroups() {
const Data = useAppSelector(state=>state.quran.QDS)
const isDark = Data.theme ==='dark'
const dispatch = useAppDispatch()
  const ayaForTest = {
    asWords: "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ",
    asGlyphCode: "ﱆﱇﱈﱉ",
  };
const {t} = useTranslation()

  const Fonts = [
    {
      text: t(`dashboard.quran_page.theme.normal_font_title`),
      desc: t(`dashboard.quran_page.theme.normal_font_desc`),
      value: "quranFont",
      aya: ayaForTest.asWords,
    },
    {
      text: t(`dashboard.quran_page.theme.indopak_title`),
      desc: t(`dashboard.quran_page.theme.indopak_desc`),
      value: "Indopak",
      aya: ayaForTest.asWords,
    },
  {
      text: t(`dashboard.quran_page.theme.tajweed_title`),
      desc: t(`dashboard.quran_page.theme.tajweed_desc`),
      value: "Tajweed",
      aya: ayaForTest.asGlyphCode,
    },
  ];
  return (
    <RadioGroup defaultValue={Data.font} className="max-w-full ">
      <style>{`@font-face {
  font-family: 'Tajweed';
  src: url('https://static-cdn.tarteel.ai/qul/fonts/quran_fonts/v4-tajweed/ttf/p1.ttf') format('truetype');
  font-display: swap;
 
}`}</style>
      {Fonts.map((e, i) => {
        return (
          <FieldLabel key={i} >
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle className="text-center m-auto my-2">{e.text}</FieldTitle>
                <FieldDescription className="text-center my-2">
                    {e.desc}
                </FieldDescription>
                <div style={{fontFamily:e.value}} className={`font-[${e.value}] ${isDark && e.value ==='Tajweed'?'tajweed-dark-invert':``} md:w-2/3 text-center whitespace-normal wrap-break-word overflow-hidden m-auto  text-3xl`}>
                    {e.aya}
                </div>
              </FieldContent>
              <RadioGroupItem value={e.value} onClick={async()=>{
                await dispatch(editQDS(['font',e.value]))
                toastFunctions(t(`auth.done`),"success")
              }}/>
            </Field>
          </FieldLabel>
        );
      })}
    </RadioGroup>
  );
}
/**     */