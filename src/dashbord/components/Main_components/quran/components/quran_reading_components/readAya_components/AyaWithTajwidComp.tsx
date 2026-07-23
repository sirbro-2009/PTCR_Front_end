import { useAppSelector } from "@/hooks/Redux";
export function AyNUMBER({data}:{data:{pageNumber:number,aya:string}}){
const {pageNumber,aya} = data
const Data = useAppSelector(state=>state.quran.QDS)

const isDark = Data.theme ==='dark'
const lastIndex = aya.length-1
return (<>
      <style>{`@font-face {
              font-family: 'Tajweed';
              src: url('https://static-cdn.tarteel.ai/qul/fonts/quran_fonts/v4-tajweed/ttf/p${pageNumber}.ttf') format('truetype');
              font-display: swap;}`}</style>

    <span className={`font-[Tajweed] ${isDark ?'tajweed-dark-invert':``} mx-2 md:w-2/3 text-center whitespace-normal wrap-break-word overflow-hidden m-auto  text-3xl`}>
        {aya.split("")[lastIndex]}
    </span>
</>)
}
export default function AWTC({data}:{data:{pageNumber:number,aya:string}}){
const {pageNumber,aya} = data
const Data = useAppSelector(state=>state.quran.QDS)

const isDark = Data.theme ==='dark'

return (<>
      <style>{`@font-face {
              font-family: 'Tajweed';
              src: url('https://static-cdn.tarteel.ai/qul/fonts/quran_fonts/v4-tajweed/ttf/p${pageNumber}.ttf') format('truetype');
              font-display: swap;}`}</style>
    <div className={`font-[Tajweed] ${isDark ?'tajweed-dark-invert':``} md:w-2/3 text-center whitespace-normal wrap-break-word overflow-hidden m-auto  text-3xl`}>
        {aya}
    </div>
</>)
}