import Adkar_object from '@/assets/JSON/adkarObject.json'
import { Label } from '@/components/ui/label';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
export default function Adkar_PEM({ type }: { type: "P" | "E" | "M"}) {
const dhikr_key:keyof typeof Adkar_object = type === 'P'?
                    'Adhkar_After_the_Salam_(Post-Prayer_Dhikr)'
                      :type === 'E'?
                        'evening_adhkar'
                          :"morning_adhkar"
const {t,i18n} = useTranslation()
const [index,setIndex] = useState(0)
const adkar_array = Adkar_object[dhikr_key]

useEffect(()=>{
const interval = setInterval(() => {
if(!(index  <= adkar_array.length-1) ){
  clearInterval(interval)
}
  setIndex(index=>index< adkar_array.length-1 ? index +1 : adkar_array.length-1)
}, 10000);
},[])
return (
    <div className=' flex flex-col w-full'>
        <Label className={`font-[quranfont] text-[3.4vw] p-2 text-center m-auto`} dir="ltr">
          {adkar_array[index]?.text}
          <br />
          {'X'+adkar_array[index]?.count}
        </Label>
    </div>
  );
}
