import {  FaApple, FaAppStoreIos, FaGlobe, FaLinux, FaWindows, FaSmile } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa6";
import { 
  FaSun, FaMoon, FaShirt, FaRestroom, FaBuilding, 
  FaMosque, FaVolumeHigh , FaBed, FaCloudRain, 
  FaUtensils, FaCar, FaPlane, FaHeart, FaShieldHalved, FaUsers,
  FaBookOpen, FaMoneyBillWave, FaRing, FaSkull, FaWind,
  FaKaaba, FaBolt, FaFeather, FaFaceFrown,  FaLocationDot
} from "react-icons/fa6";
import { FaHandsWash } from "react-icons/fa";
import { WiSunrise } from "react-icons/wi";

import { GiRubElHizb } from "react-icons/gi";

export const serverHost =  "https://ptcr-back-end.vercel.app/";
export interface Tafsir {
  id: number;
  name: {
    ar: string;
    en: string;
  };
  author: {
    ar: string;
    en: string;
  };
  language: "ar" | "en" | "nl";
}
export interface Reciter {
  id: number;
  subfolder: string;
  name: {
    ar: string;
    en: string;
  };
  bitrate: string;
}
export const tafsirs: Tafsir[] = [
  { id: 1, name: { ar: "الميسر", en: "al_muyassar" }, author: { ar: "نخبة من العلماء", en: "A group of scholars" }, language: "ar" },
  { id: 2, name: { ar: "الجلالين", en: "al_jalalayn" }, author: { ar: "جلال الدين المحلي و السيوطي", en: "Jalal al-Din al-Mahalli & al-Suyuti" }, language: "ar" },
  { id: 3, name: { ar: "السعدي", en: "al_sadi" }, author: { ar: "عبد الرحمن بن ناصر السعدي", en: "Abd al-Rahman bin Nasir Al-Sa'di" }, language: "ar" },
  { id: 4, name: { ar: "ابن كثير", en: "ibn_kathir" }, author: { ar: "إسماعيل بن كثير القرشي", en: "Isma'il ibn Kathir Al-Qurashi" }, language: "ar" },
  { id: 6, name: { ar: "البغوي", en: "al_baghawi" }, author: { ar: "الحسين بن مسعود البغوي", en: "Al-Husayn ibn Mas'ud Al-Baghawi" }, language: "ar" },
  { id: 7, name: { ar: "القرطبي", en: "al_qurtubi" }, author: { ar: "أبو عبد الله محمد بن أحمد القرطبي", en: "Abu Abdullah Muhammad ibn Ahmad Al-Qurtubi" }, language: "ar" },
  { id: 8, name: { ar: "الطبري", en: "al_tabari" }, author: { ar: "الإمام أبو جعفر الطبري", en: "Imam Abu Ja'far Al-Tabari" }, language: "ar" },
  { id: 9, name: { ar: "أربري", en: "arberry" }, author: { ar: "أ. ج. أربري", en: "A. J. Arberry" }, language: "en" },
  { id: 10, name: { ar: "يوسف علي", en: "yusuf_ali" }, author: { ar: "عبدالله يوسف علي", en: "Abdullah Yusuf Ali" }, language: "en" },
  { id: 11, name: { ar: "كايزر", en: "keyzer" }, author: { ar: "سالومو كايزر", en: "Salomo Keyzer" }, language: "nl" },
  { id: 12, name: { ar: "ليمهاوس", en: "leemhuis" }, author: { ar: "فريد ليمهاوس", en: "Fred Leemhuis" }, language: "nl" },
];


export const reciters: Reciter[] = [
  { id: 1, subfolder: "Abdul_Basit_Murattal_64kbps", name: { ar: "عبد الباسط عبد الصمد (مرتل)", en: "Abdul Basit Murattal" }, bitrate: "64kbps" },
  { id: 2, subfolder: "Abdul_Basit_Murattal_192kbps", name: { ar: "عبد الباسط عبد الصمد (مرتل)", en: "Abdul Basit Murattal" }, bitrate: "192kbps" },
  { id: 3, subfolder: "Abdul_Basit_Mujawwad_128kbps", name: { ar: "عبد الباسط عبد الصمد (مجود)", en: "Abdul Basit Mujawwad" }, bitrate: "128kbps" },
  { id: 4, subfolder: "Abdullah_Basfar_32kbps", name: { ar: "عبد الله بصفر", en: "Abdullah Basfar" }, bitrate: "32kbps" },
  { id: 5, subfolder: "Abdullah_Basfar_64kbps", name: { ar: "عبد الله بصفر", en: "Abdullah Basfar" }, bitrate: "64kbps" },
  { id: 6, subfolder: "Abdullah_Basfar_192kbps", name: { ar: "عبد الله بصفر", en: "Abdullah Basfar" }, bitrate: "192kbps" },
  { id: 7, subfolder: "Abdurrahmaan_As-Sudais_64kbps", name: { ar: "عبد الرحمن السديس", en: "Abdurrahmaan As-Sudais" }, bitrate: "64kbps" },
  { id: 8, subfolder: "Abdurrahmaan_As-Sudais_192kbps", name: { ar: "عبد الرحمن السديس", en: "Abdurrahmaan As-Sudais" }, bitrate: "192kbps" },
  { id: 9, subfolder: "AbdulSamad_64kbps_QuranExplorer.Com", name: { ar: "عبد الباسط عبد الصمد", en: "AbdulSamad QuranExplorer.Com" }, bitrate: "64kbps" },
  { id: 10, subfolder: "Abu_Bakr_Ash-Shaatree_64kbps", name: { ar: "أبو بكر الشاطري", en: "Abu Bakr Ash-Shaatree" }, bitrate: "64kbps" },
  { id: 11, subfolder: "Abu_Bakr_Ash-Shaatree_128kbps", name: { ar: "أبو بكر الشاطري", en: "Abu Bakr Ash-Shaatree" }, bitrate: "128kbps" },
  { id: 12, subfolder: "Ahmed_ibn_Ali_al-Ajamy_64kbps_QuranExplorer.Com", name: { ar: "أحمد بن علي العجمي", en: "Ahmed ibn Ali al-Ajamy QuranExplorer.Com" }, bitrate: "64kbps" },
  { id: 13, subfolder: "Ahmed_ibn_Ali_al-Ajamy_128kbps_ketaballah.net", name: { ar: "أحمد بن علي العجمي", en: "Ahmed ibn Ali al-Ajamy KetabAllah.Net" }, bitrate: "128kbps" },
  { id: 14, subfolder: "Alafasy_64kbps", name: { ar: "مشاري بن راشد العفاسي", en: "Alafasy" }, bitrate: "64kbps" },
  { id: 15, subfolder: "Alafasy_128kbps", name: { ar: "مشاري بن راشد العفاسي", en: "Alafasy" }, bitrate: "128kbps" },
  { id: 16, subfolder: "Ghamadi_40kbps", name: { ar: "سعد الغامدي", en: "Ghamadi" }, bitrate: "40kbps" },
  { id: 17, subfolder: "Hani_Rifai_64kbps", name: { ar: "هاني الرفاعي", en: "Hani Rifai" }, bitrate: "64kbps" },
  { id: 18, subfolder: "Hani_Rifai_192kbps", name: { ar: "هاني الرفاعي", en: "Hani Rifai" }, bitrate: "192kbps" },
  { id: 19, subfolder: "Husary_64kbps", name: { ar: "محمود خليل الحصري", en: "Husary" }, bitrate: "64kbps" },
  { id: 20, subfolder: "Husary_128kbps", name: { ar: "محمود خليل الحصري", en: "Husary" }, bitrate: "128kbps" },
  { id: 21, subfolder: "Husary_Mujawwad_64kbps", name: { ar: "محمود خليل الحصري (مجود)", en: "Husary Mujawwad" }, bitrate: "64kbps" },
  { id: 22, subfolder: "Husary_128kbps_Mujawwad", name: { ar: "محمود خليل الحصري (مجود)", en: "Husary Mujawwad" }, bitrate: "128kbps" },
  { id: 23, subfolder: "Hudhaify_32kbps", name: { ar: "علي بن عبد الرحمن الحذيفي", en: "Hudhaify" }, bitrate: "32kbps" },
  { id: 24, subfolder: "Hudhaify_64kbps", name: { ar: "علي بن عبد الرحمن الحذيفي", en: "Hudhaify" }, bitrate: "64kbps" },
  { id: 25, subfolder: "Hudhaify_128kbps", name: { ar: "علي بن عبد الرحمن الحذيفي", en: "Hudhaify" }, bitrate: "128kbps" },
  { id: 26, subfolder: "Ibrahim_Akhdar_32kbps", name: { ar: "إبراهيم الأخضر", en: "Ibrahim Akhdar" }, bitrate: "32kbps" },
  { id: 27, subfolder: "Ibrahim_Akhdar_64kbps", name: { ar: "إبراهيم الأخضر", en: "Ibrahim Akhdar" }, bitrate: "64kbps" },
  { id: 28, subfolder: "Maher_AlMuaiqly_64kbps", name: { ar: "ماهر المعيقلي", en: "Maher Al Muaiqly" }, bitrate: "64kbps" },
  { id: 29, subfolder: "MaherAlMuaiqly128kbps", name: { ar: "ماهر المعيقلي", en: "Maher Al Muaiqly" }, bitrate: "128kbps" },
  { id: 30, subfolder: "Menshawi_16kbps", name: { ar: "محمد صديق المنشاوي", en: "Menshawi" }, bitrate: "16kbps" },
  { id: 31, subfolder: "Menshawi_32kbps", name: { ar: "محمد صديق المنشاوي", en: "Menshawi" }, bitrate: "32kbps" },
  { id: 32, subfolder: "Minshawy_Mujawwad_64kbps", name: { ar: "محمد صديق المنشاوي (مجود)", en: "Minshawy Mujawwad" }, bitrate: "64kbps" },
  { id: 33, subfolder: "Minshawy_Mujawwad_192kbps", name: { ar: "محمد صديق المنشاوي (مجود)", en: "Minshawy Mujawwad" }, bitrate: "192kbps" },
  { id: 34, subfolder: "Minshawy_Murattal_128kbps", name: { ar: "محمد صديق المنشاوي (مرتل)", en: "Minshawy Murattal" }, bitrate: "128kbps" },
  { id: 35, subfolder: "Mohammad_al_Tablaway_64kbps", name: { ar: "محمد الطبلاوي", en: "Mohammad al Tablaway" }, bitrate: "64kbps" },
  { id: 36, subfolder: "Mohammad_al_Tablaway_128kbps", name: { ar: "محمد الطبلاوي", en: "Mohammad al Tablaway" }, bitrate: "128kbps" },
  { id: 37, subfolder: "Muhammad_Ayyoub_128kbps", name: { ar: "محمد أيوب", en: "Muhammad Ayyoub" }, bitrate: "128kbps" },
  { id: 38, subfolder: "Muhammad_Ayyoub_64kbps", name: { ar: "محمد أيوب", en: "Muhammad Ayyoub" }, bitrate: "64kbps" },
  { id: 39, subfolder: "Muhammad_Ayyoub_32kbps", name: { ar: "محمد أيوب", en: "Muhammad Ayyoub" }, bitrate: "32kbps" },
  { id: 40, subfolder: "Muhammad_Jibreel_64kbps", name: { ar: "محمد جبريل", en: "Muhammad Jibreel" }, bitrate: "64kbps" },
  { id: 41, subfolder: "Muhammad_Jibreel_128kbps", name: { ar: "محمد جبريل", en: "Muhammad Jibreel" }, bitrate: "128kbps" },
  { id: 42, subfolder: "Mustafa_Ismail_48kbps", name: { ar: "مصطفى إسماعيل", en: "Mustafa Ismail" }, bitrate: "48kbps" },
  { id: 43, subfolder: "Saood_ash-Shuraym_64kbps", name: { ar: "سعود بن إبراهيم الشريم", en: "Saood bin Ibraaheem Ash-Shuraym" }, bitrate: "64kbps" },
  { id: 44, subfolder: "Saood_ash-Shuraym_128kbps", name: { ar: "سعود بن إبراهيم الشريم", en: "Saood bin Ibraaheem Ash-Shuraym" }, bitrate: "128kbps" },
  { id: 45, subfolder: "English/Sahih_Intnl_Ibrahim_Walk_192kbps", name: { ar: "ترجمة صحيح إنترناشونال - تلاوة إبراهيم ووك (إنجليزي)", en: "(English) Translated by Sahih International Recited by Ibrahim Walk" }, bitrate: "192kbps" },
  { id: 46, subfolder: "MultiLanguage/Basfar_Walk_192kbps", name: { ar: "عبد الله بصفر - إبراهيم ووك (متعدد اللغات)", en: "MultiLanguage/Basfar Walk" }, bitrate: "192kbps" },
  { id: 47, subfolder: "translations/Makarem_Kabiri_16Kbps", name: { ar: "ترجمة مكارم الشيرازي - تلاوة كبيري (فارسي)", en: "(Persian) Translated by Makarem Recited by Kabiri" }, bitrate: "64Kbps" },
  { id: 48, subfolder: "translations/Fooladvand_Hedayatfar_40Kbps", name: { ar: "ترجمة فولادوند - تلاوة هدايت فر (فارسي)", en: "(Persian) Translated by Fooladvand Recited by Hedayatfar" }, bitrate: "64Kbps" },
  { id: 49, subfolder: "Parhizgar_48kbps", name: { ar: "پرهیزگار", en: "Parhizgar_64Kbps" }, bitrate: "64Kbps" },
  { id: 50, subfolder: "translations/azerbaijani/balayev", name: { ar: "بالايف (أذري)", en: "Balayev" }, bitrate: "64Kbps" },
  { id: 51, subfolder: "Salaah_AbdulRahman_Bukhatir_128kbps", name: { ar: "صلاح عبد الرحمن بو خاطر", en: "Salaah AbdulRahman Bukhatir" }, bitrate: "128kbps" },
  { id: 52, subfolder: "Muhsin_Al_Qasim_192kbps", name: { ar: "محسن القاسم", en: "Muhsin Al Qasim" }, bitrate: "192kbps" },
  { id: 53, subfolder: "Abdullaah_3awwaad_Al-Juhaynee_128kbps", name: { ar: "عبد الله عواد الجهني", en: "Abdullaah 3awwaad Al-Juhaynee" }, bitrate: "128kbps" },
  { id: 54, subfolder: "Salah_Al_Budair_128kbps", name: { ar: "صلاح البدير", en: "Salah Al Budair" }, bitrate: "128kbps" },
  { id: 55, subfolder: "Abdullah_Matroud_128kbps", name: { ar: "عبد الله مطرود", en: "Abdullah Matroud" }, bitrate: "128kbps" },
  { id: 56, subfolder: "Ahmed_Neana_128kbps", name: { ar: "أحمد نعينع", en: "Ahmed Neana" }, bitrate: "128kbps" },
  { id: 57, subfolder: "Muhammad_AbdulKareem_128kbps", name: { ar: "محمد عبد الكريم", en: "Muhammad AbdulKareem" }, bitrate: "128kbps" },
  { id: 58, subfolder: "khalefa_al_tunaiji_64kbps", name: { ar: "خليفة الطنيجي", en: "Khalefa Al-Tunaiji" }, bitrate: "64kbps" },
  { id: 59, subfolder: "mahmoud_ali_al_banna_32kbps", name: { ar: "محمود علي البنا", en: "Mahmoud Ali Al-Banna" }, bitrate: "32kbps" },
  { id: 60, subfolder: "warsh/warsh_ibrahim_aldosary_128kbps", name: { ar: "إبراهيم الدوسري (رواية ورش)", en: "(Warsh) Ibrahim Al-Dosary" }, bitrate: "128kbps" },
  { id: 61, subfolder: "warsh/warsh_yassin_al_jazaery_64kbps", name: { ar: "ياسين الجزائري (رواية ورش)", en: "(Warsh) Yassin Al-Jazaery" }, bitrate: "64kbps" },
  { id: 62, subfolder: "warsh/warsh_Abdul_Basit_128kbps", name: { ar: "عبد الباسط عبد الصمد (رواية ورش)", en: "(Warsh) Abdul Basit" }, bitrate: "128kbps" },
  { id: 63, subfolder: "translations/urdu_shamshad_ali_khan_46kbps", name: { ar: "شمشاد علي خان (أردو)", en: "(Urdu) Shamshad Ali Khan" }, bitrate: "46kbps" },
  { id: 64, subfolder: "Karim_Mansoori_40kbps", name: { ar: "كريم منصوري (إيران)", en: "Karim Mansoori (Iran)" }, bitrate: "40kbps" },
  { id: 65, subfolder: "Husary_Muallim_128kbps", name: { ar: "محمود خليل الحصري (معلم)", en: "Husary (Muallim)" }, bitrate: "128kbps" },
  { id: 66, subfolder: "Khaalid_Abdullaah_al-Qahtaanee_192kbps", name: { ar: "خالد عبد الله القحطاني", en: "Khalid Abdullah al-Qahtanee" }, bitrate: "192kbps" },
  { id: 67, subfolder: "Yasser_Ad-Dussary_128kbps", name: { ar: "ياسر الدوسري", en: "Yasser_Ad-Dussary" }, bitrate: "128kbps" },
  { id: 68, subfolder: "Nasser_Alqatami_128kbps", name: { ar: "ناصر القطامي", en: "Nasser_Alqatami" }, bitrate: "128kbps" },
  { id: 69, subfolder: "Ali_Hajjaj_AlSuesy_128kbps", name: { ar: "علي حجاج السويسي", en: "Ali_Hajjaj_AlSuesy" }, bitrate: "128kbps" },
  { id: 70, subfolder: "Sahl_Yassin_128kbps", name: { ar: "سهل ياسين", en: "Sahl_Yassin" }, bitrate: "128kbps" },
  { id: 71, subfolder: "ahmed_ibn_ali_al_ajamy_128kbps", name: { ar: "أحمد بن علي العجمي", en: "Ahmed Ibn Ali Al Ajamy" }, bitrate: "128kbps" },
  { id: 72, subfolder: "translations/besim_korkut_ajet_po_ajet", name: { ar: "بسيم كوركوت (بوسني)", en: "Besim Korkut (Bosnian)" }, bitrate: "128kbps" },
  { id: 73, subfolder: "aziz_alili_128kbps", name: { ar: "عزيز عليلي", en: "Aziz Alili" }, bitrate: "128kbps" },
  { id: 74, subfolder: "Yaser_Salamah_128kbps", name: { ar: "ياسر سلامة", en: "Yaser Salamah" }, bitrate: "128kbps" },
  { id: 75, subfolder: "Akram_AlAlaqimy_128kbps", name: { ar: "أكرم العلاقمي", en: "Akram Al Alaqimy" }, bitrate: "128kbps" },
  { id: 76, subfolder: "Ali_Jaber_64kbps", name: { ar: "علي جابر", en: "Ali Jaber" }, bitrate: "64kbps" },
  { id: 77, subfolder: "Fares_Abbad_64kbps", name: { ar: "فارس عباد", en: "Fares Abbad" }, bitrate: "64kbps" },
  { id: 78, subfolder: "translations/urdu_farhat_hashmi", name: { ar: "فرحت هاشمي (ترجمة أردو كلمة بكلمة)", en: "Farhat Hashmi (Urdu word for word translation)" }, bitrate: "32kbps" },
  { id: 79, subfolder: "Ayman_Sowaid_64kbps", name: { ar: "أيمن سويد", en: "Ayman Sowaid" }, bitrate: "64kbps" },
];
interface Download{
  text:string,
  link:string,
  icon:any,
  available:boolean
}
export const Downloads:Download[] = [
  {
    text:"Web site",
    link:"https://ptcr-front-end.vercel.app/",
    icon:<FaGlobe size={30}/>,
    available:true
  },
  {
    text:"Andorid",
    link:"https://median.co/share/abzewen#apk",
    icon:<FaAndroid size={30}/>,
    available:true
  },
  {
    text:"ios",
    link:"",
    icon:<FaAppStoreIos size={30}/>,
    available:false
  },
  {
    text:"windows 64 x",
    link:"",
    icon:<FaWindows size={30}/>,
    available:false
  },
  {
    text:"windows 32 x",
    link:"",
    icon:<FaWindows size={30}/>,
    available:false
  },
  {
    text:"macOS",
    link:"",
    icon:<FaApple size={30}/>,
    available:false
  },
  {
    text:"Linux",
    link:"",
    icon:<FaLinux size={30}/>,
    available:false
  },    
]
export interface ILanguage {
  code: string;      
  name: string;      
  nameEn: string;     
  dir: "rtl" | "ltr"; 
}

export const supportedLanguages: ILanguage[] = [
  { code: "ar", name: "العربية", nameEn: "Arabic", dir: "rtl" },
  { code: "en", name: "English", nameEn: "English", dir: "ltr" },
  { code: "ur", name: "اردو", nameEn: "Urdu", dir: "rtl" },
  { code: "id", name: "Bahasa Indonesia", nameEn: "Indonesian", dir: "ltr" },
  { code: "ms", name: "Bahasa Melayu", nameEn: "Malay", dir: "ltr" },
  { code: "tr", name: "Türkçe", nameEn: "Turkish", dir: "ltr" },
  { code: "fr", name: "Français", nameEn: "French", dir: "ltr" },
  { code: "fa", name: "فارسی", nameEn: "Persian", dir: "rtl" },
  { code: "bn", name: "বাংলা", nameEn: "Bengali", dir: "ltr" },
  { code: "ha", name: "Hausa", nameEn: "Hausa", dir: "ltr" },
  { code: "sw", name: "Kiswahili", nameEn: "Swahili", dir: "ltr" },
  { code: "de", name: "Deutsch", nameEn: "German", dir: "ltr" },
]
export const categoriesMetadata:{ category: string, icon: React.ReactNode, color: string }[] = [
    { category: "moarning adkar", icon: <WiSunrise />, color: "#FFDF00" },
  { category: "evening adkar", icon: <FaMoon />, color: "#FFA500" },
  { category: "Waking Up Adhkar", icon: <FaSun />, color: "#F59E0B" },
  { category: "Dua for Wearing Clothes", icon: <FaShirt />, color: "#3B82F6" },
  { category: "Dua for Wearing New Clothes", icon: <FaShirt />, color: "#10B981" },
  { category: "Dua for One Who Wears New Clothes", icon: <FaShirt />, color: "#059669" },
  { category: "What to Say When Taking Off Clothes", icon: <FaShirt />, color: "#6B7280" },
  { category: "Dua for Entering the Toilet", icon: <FaRestroom />, color: "#64748B" },
  { category: "Dua for Leaving the Toilet", icon: <FaRestroom />, color: "#0EA5E9" },
  { category: "Dhikr Before Ablution", icon: <FaHandsWash />, color: "#0284C7" },
  { category: "Dhikr After Ablution", icon: <FaHandsWash />, color: "#0369A1" },
  { category: "Dhikr When Leaving the House", icon: <FaBuilding />, color: "#D97706" },
  { category: "Dhikr When Entering the House", icon: <FaBuilding />, color: "#16A34A" },
  { category: "Dua for Going to the Mosque", icon: <FaMosque />, color: "#0D9488" },
  { category: "Dua for Entering the Mosque", icon: <FaMosque />, color: "#0F766E" },
  { category: "Dua for Leaving the Mosque", icon: <FaMosque />, color: "#115E59" },
  { category: "Adhkar of the Adhan", icon: <FaVolumeHigh />, color: "#8B5CF6" },
  { category: "Opening Dua of Prayer (Istiftah)", icon: <GiRubElHizb  />, color: "#10B981" },
  { category: "Dua of Ruku", icon: <GiRubElHizb  />, color: "#059669" },
  { category: "Dua of Rising from Ruku", icon: <GiRubElHizb  />, color: "#047857" },
  { category: "Dua of Sujood", icon: <GiRubElHizb  />, color: "#065F46" },
  { category: "Dua Between the Two Prostrations", icon: <GiRubElHizb  />, color: "#064E3B" },
  { category: "Dua of Sujood al-Tilawah", icon: <FaBookOpen />, color: "#047857" },
  { category: "Tashahhud", icon: <GiRubElHizb  />, color: "#10B981" },
  { category: "Sending Blessings on the Prophet After Tashahhud", icon: <FaHeart />, color: "#EC4899" },
  { category: "Dua After the Final Tashahhud Before Salam", icon: <GiRubElHizb  />, color: "#059669" },
  { category: "Adhkar After the Salam (Post-Prayer Dhikr)", icon: <GiRubElHizb  />, color: "#047857" },
  { category: "Dua of Istikhara Prayer", icon: <GiRubElHizb  />, color: "#6366F1" },
  { category: "Sleep Adhkar", icon: <FaBed />, color: "#1E1B4B" },
  { category: "Dua When Turning Over at Night", icon: <FaBed />, color: "#312E81" },
  { category: "Dua for Anxiety and Fear During Sleep", icon: <FaBed />, color: "#4338CA" },
  { category: "What to Do Upon Seeing a Dream or Nightmare", icon: <FaBed />, color: "#3730A3" },
  { category: "Dua of Qunoot in Witr", icon: <GiRubElHizb  />, color: "#4F46E5" },
  { category: "Dhikr After the Salam of Witr", icon: <GiRubElHizb  />, color: "#4338CA" },
  { category: "Dua for Anxiety and Sadness", icon: <FaFaceFrown />, color: "#6B7280" },
  { category: "Dua for Distress", icon: <FaFaceFrown />, color: "#4B5563" },
  { category: "Dua When Meeting the Enemy or a Ruler", icon: <FaShieldHalved />, color: "#DC2626" },
  { category: "Dua for One Who Fears the Injustice of a Ruler", icon: <FaShieldHalved />, color: "#B91C1C" },
  { category: "Dua Against the Enemy", icon: <FaShieldHalved />, color: "#991B1B" },
  { category: "What to Say When Fearing a People", icon: <FaShieldHalved />, color: "#7F1D1D" },
  { category: "Dua for One Afflicted with Doubt in Faith", icon: <FaShieldHalved />, color: "#4B5563" },
  { category: "Dua for Settling Debt", icon: <FaMoneyBillWave />, color: "#16A34A" },
  { category: "Dua for Whispers (Waswasa) in Prayer and Recitation", icon: <FaShieldHalved />, color: "#EF4444" },
  { category: "Dua When Something Becomes Difficult", icon: <GiRubElHizb  />, color: "#8B5CF6" },
  { category: "What to Do After Committing a Sin", icon: <GiRubElHizb  />, color: "#6B7280" },
  { category: "How to Repel Satan and His Whispers", icon: <FaShieldHalved />, color: "#DC2626" },
  { category: "Dua When Something Undesired Happens", icon: <GiRubElHizb  />, color: "#9CA3AF" },
  { category: "Congratulating the Parent of a Newborn and Its Reply", icon: <FaSmile />, color: "#F43F5E" },
  { category: "Ruqyah to Protect Children", icon: <FaShieldHalved />, color: "#FB7185" },
  { category: "Dua for a Sick Person During a Visit", icon: <FaHeart />, color: "#E11D48" },
  { category: "Dua for a Dying Patient Who Has Lost Hope", icon: <FaSkull />, color: "#475569" },
  { category: "Talqeen for One on the Verge of Death", icon: <FaSkull />, color: "#334155" },
  { category: "Dua for One Afflicted with a Calamity", icon: <FaFaceFrown />, color: "#64748B" },
  { category: "Dua When Closing the Eyes of the Deceased", icon: <FaSkull />, color: "#1E293B" },
  { category: "Dua for the Deceased in the Funeral Prayer", icon: <FaSkull />, color: "#0F172A" },
  { category: "Dua for a Deceased Child (al-Fart) in the Funeral Prayer", icon: <FaSkull />, color: "#334155" },
  { category: "Dua of Condolence", icon: <FaHeart />, color: "#64748B" },
  { category: "Dua When Placing the Deceased into the Grave", icon: <FaSkull />, color: "#1E293B" },
  { category: "Dua After Burying the Deceased", icon: <FaSkull />, color: "#0F172A" },
  { category: "Dua for Visiting Graves", icon: <FaLocationDot />, color: "#475569" },
  { category: "Dua for the Wind", icon: <FaWind />, color: "#06B6D4" },
  { category: "Dua for Thunder", icon: <FaBolt />, color: "#EAB308" },
  { category: "Duas for Seeking Rain (Istisqa)", icon: <FaCloudRain />, color: "#3B82F6" },
  { category: "Dua When It Rains", icon: <FaCloudRain />, color: "#2563EB" },
  { category: "Dhikr After the Rain", icon: <FaCloudRain />, color: "#1D4ED8" },
  { category: "Duas for Clear Skies", icon: <FaSun />, color: "#F59E0B" },
  { category: "Dua Upon Seeing the New Crescent Moon", icon: <FaMoon />, color: "#8B5CF6" },
  { category: "Dua When Breaking the Fast", icon: <FaUtensils />, color: "#D97706" },
  { category: "Dua Before Eating", icon: <FaUtensils />, color: "#10B981" },
  { category: "Dua After Finishing Eating", icon: <FaUtensils />, color: "#059669" },
  { category: "Guest's Dua for the Host", icon: <FaUtensils />, color: "#047857" },
  { category: "Dua for One Who Gives You Drink", icon: <FaUtensils />, color: "#0EA5E9" },
  { category: "Dua When Breaking Fast at Someone's Home", icon: <FaUtensils />, color: "#D97706" },
  { category: "Dua of a Fasting Person Invited to a Meal", icon: <FaUtensils />, color: "#B45309" },
  { category: "What a Fasting Person Says If Insulted", icon: <FaShieldHalved />, color: "#EF4444" },
  { category: "Dua Upon Seeing the First Fruits", icon: <FaSmile />, color: "#16A34A" },
  { category: "Dua for Sneezing", icon: <FaSmile />, color: "#0284C7" },
  { category: "What to Say to a Non-Muslim Who Sneezes and Praises Allah", icon: <FaSmile />, color: "#0369A1" },
  { category: "Dua for a Newly Married Person", icon: <FaRing />, color: "#EC4899" },
  { category: "Groom's Dua for Himself / Dua When Buying an Animal", icon: <FaRing />, color: "#DB2777" },
  { category: "Dua Before Marital Intimacy", icon: <FaRing />, color: "#BE185D" },
  { category: "Dua for Anger", icon: <FaShieldHalved />, color: "#DC2626" },
  { category: "Dua Upon Seeing Someone Afflicted", icon: <FaHeart />, color: "#0EA5E9" },
  { category: "What to Repeat in a Gathering", icon: <FaUsers />, color: "#8B5CF6" },
  { category: "Expiation of the Gathering (Kaffarat al-Majlis)", icon: <FaUsers />, color: "#7C3AED" },
  { category: "Reply to Someone Who Says 'May Allah Forgive You'", icon: <FaUsers />, color: "#6D28D9" },
  { category: "Dua for One Who Does You a Favor", icon: <FaHeart />, color: "#10B981" },
  { category: "What Protects from the Dajjal", icon: <FaShieldHalved />, color: "#7F1D1D" },
  { category: "Reply to Someone Who Says 'I Love You for Allah's Sake'", icon: <FaHeart />, color: "#F43F5E" },
  { category: "Reply to Someone Who Offers You Their Wealth", icon: <FaMoneyBillWave />, color: "#10B981" },
  { category: "Dua for One Who Lent You Money, When Repaying", icon: <FaMoneyBillWave />, color: "#059669" },
  { category: "Dua for Fear of Shirk", icon: <FaShieldHalved />, color: "#DC2626" },
  { category: "Reply to Someone Who Says 'May Allah Bless You'", icon: <FaSmile />, color: "#10B981" },
  { category: "Dua for Disliking Bad Omens", icon: <FaShieldHalved />, color: "#6B7280" },
  { category: "Dua for Riding a Mount / Vehicle", icon: <FaCar />, color: "#3B82F6" },
  { category: "Travel Dua", icon: <FaPlane />, color: "#2563EB" },
  { category: "Dua for Entering a Town or Village", icon: <FaLocationDot />, color: "#1D4ED8" },
  { category: "Dua for Entering the Marketplace", icon: <FaMoneyBillWave />, color: "#D97706" },
  { category: "Dua If One's Mount Stumbles", icon: <FaCar />, color: "#64748B" },
  { category: "Traveler's Dua for the One Staying Behind", icon: <FaPlane />, color: "#3B82F6" },
  { category: "Dua of the One Staying Behind for the Traveler", icon: <FaPlane />, color: "#2563EB" },
  { category: "Takbeer and Tasbeeh While Traveling", icon: <FaPlane />, color: "#1D4ED8" },
  { category: "Traveler's Dua Before Dawn", icon: <FaSun />, color: "#F59E0B" },
  { category: "Dua When Stopping at a Place, While Traveling or Otherwise", icon: <FaLocationDot />, color: "#10B981" },
  { category: "Dhikr Upon Returning from Travel", icon: <FaPlane />, color: "#059669" },
  { category: "What to Say Upon Good or Bad News", icon: <FaSmile />, color: "#10B981" },
  { category: "How to Reply to a Non-Muslim's Greeting", icon: <FaUsers />, color: "#6B7280" },
  { category: "Dua Upon Hearing a Rooster Crow or a Donkey Bray", icon: <FaSun />, color: "#F59E0B" },
  { category: "Dua Upon Hearing Dogs Bark at Night", icon: <FaMoon />, color: "#1E1B4B" },
  { category: "Dua for One You Have Cursed by Mistake", icon: <FaHeart />, color: "#10B981" },
  { category: "What to Say When Praising a Fellow Muslim", icon: <FaUsers />, color: "#3B82F6" },
  { category: "What to Say When You Are Praised/Complimented", icon: <FaUsers />, color: "#2563EB" },
  { category: "The Talbiyah for One in the State of Ihram", icon: <FaKaaba />, color: "#111827" },
  { category: "Takbeer Upon Reaching the Black Stone", icon: <FaKaaba />, color: "#1F2937" },
  { category: "Dua Between the Yemeni Corner and the Black Stone", icon: <FaKaaba />, color: "#374151" },
  { category: "Dua While Standing on Safa and Marwah", icon: <FaKaaba />, color: "#4B5563" },
  { category: "Dua on the Day of Arafah", icon: <FaKaaba />, color: "#D97706" },
  { category: "Dhikr at al-Mash'ar al-Haram", icon: <FaKaaba />, color: "#1F2937" },
  { category: "Takbeer With Each Pebble When Stoning the Jamarat", icon: <FaKaaba />, color: "#374151" },
  { category: "What to Say When Amazed or Pleased", icon: <FaSmile />, color: "#10B981" },
  { category: "What to Do When Something Pleasing Happens", icon: <GiRubElHizb  />, color: "#059669" },
  { category: "What to Say When Feeling Pain in the Body", icon: <FaHeart />, color: "#EF4444" },
  { category: "Dua Against the Evil Eye", icon: <FaShieldHalved />, color: "#0EA5E9" },
  { category: "What to Say When Startled", icon: <FaShieldHalved />, color: "#F59E0B" },
  { category: "What to Say When Slaughtering", icon: <FaFeather />, color: "#B91C1C" },
  { category: "What to Say to Repel the Schemes of Rebellious Devils", icon: <FaShieldHalved />, color: "#7F1D1D" },

];