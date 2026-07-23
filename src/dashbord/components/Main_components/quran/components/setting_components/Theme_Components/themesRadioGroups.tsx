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
export default function ThemesRadioGroups() {
const Data = useAppSelector(state=>state.quran.QDS)
const isDark = Data.theme ==='dark'
const dispatch = useAppDispatch()
  const ayaForTest = {
    asWords: "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ",
    asGlyphCode: "ﱆﱇﱈﱉ",
  };
  const Fonts = [
    {
      text: "Normal  font",
      desc: "The normal font that was made by Outhman taha",
      value: "quranFont",
      aya: ayaForTest.asWords,
    },
    {
      text: "Indopak ",
      desc: "Indonesian script",
      value: "Indopak",
      aya: ayaForTest.asWords,
    },
    {
      text: "Tajweed ",
      desc: "Calligraphy in the colors of Tajweed",
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
                <FieldTitle>{e.text}</FieldTitle>
                <FieldDescription>
                    {e.desc}
                </FieldDescription>
                <div className={`font-[${e.value}] ${isDark && e.value ==='Tajweed'?'tajweed-dark-invert':``} md:w-2/3 text-center whitespace-normal wrap-break-word overflow-hidden m-auto  text-3xl`}>
                    {e.aya}
                </div>
              </FieldContent>
              <RadioGroupItem value={e.value} onClick={async()=>{
                await dispatch(editQDS(['font',e.value]))
                toastFunctions("Done","success")
              }}/>
            </Field>
          </FieldLabel>
        );
      })}
    </RadioGroup>
  );
}
