import { useAppSelector } from "@/hooks/Redux";
export function AyNUMBER({data,className}:{data:{pageNumber:number,aya:string},className?:string}){
const {pageNumber,aya} = data
const Data = useAppSelector(state=>state.quran.QDS)

const isDark = Data.theme ==='dark'
const lastIndex = aya.length-1
return (<>
      <style>{`@font-face {
              font-family: 'Tajweed';
              src: url('https://static-cdn.tarteel.ai/qul/fonts/quran_fonts/v4-tajweed/ttf/p${pageNumber}.ttf') format('truetype');
              font-display: swap;}`}</style>

    <span className={`font-[Tajweed] ${isDark ?'tajweed-dark-invert':``}  text-center ${className?'':`mx-2 md:w-2/3 m-auto`} whitespace-normal wrap-break-word   text-3xl`}>
        {aya.split("")[lastIndex]}
    </span>
</>)
}
export default function AWTC({data,className}:{data:{pageNumber:number,aya:string},className?:string}){
const {pageNumber,aya} = data
const Data = useAppSelector(state=>state.quran.QDS)

const isDark = Data.theme ==='dark'

return (<>
      <style>{`@font-face {
              font-family: 'Tajweed';
              src: url('https://static-cdn.tarteel.ai/qul/fonts/quran_fonts/v4-tajweed/ttf/p${pageNumber}.ttf') format('truetype');
              font-display: swap;}`}</style>
    <div className={`font-[Tajweed] ${isDark ?'tajweed-dark-invert' :``} p-2 whitespace-normal wrap-break-word ${className?'text-4xl w-fit my-2':` w-175  m-auto text-center text-4xl`} text-4xl `}>
        {aya}
    </div>
</>)
}