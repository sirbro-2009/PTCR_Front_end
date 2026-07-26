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
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
export default function Auto_read(){
const dispatch = useAppDispatch()
const Data = useAppSelector(state=>state.quran.QDS)
const {t} = useTranslation()

const options = [
    {
        text:t(`dashboard.quran_page.reading_settings.enable_auto_scroll`),
        value:"true"
    },
    {
        text:t(`dashboard.quran_page.reading_settings.disable_auto_scroll`),
        value:"false"
    }
]
return (<RadioGroup defaultValue={Data.readMode?'true':'false'} className="max-w-full p-2">
<Label className="p-2 m-auto" >{t(`dashboard.quran_page.reading_settings.title`)}</Label>
      {options.map((e, i) => {
        return (
          <FieldLabel key={i} >
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle className=" m-auto">{e.text}</FieldTitle>
              </FieldContent>
              <RadioGroupItem value={e.value} onClick={async()=>{
                await dispatch(editQDS(['font',e.value === 'true'?true:false]))
                toastFunctions("Done","success")
              }}/>
            </Field>
          </FieldLabel>
        );
      })}
</RadioGroup>)
}