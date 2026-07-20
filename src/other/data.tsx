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
  { id: 1, name: { ar: "الميسر", en: "Al-Tafsir Al-Muyassar" }, author: { ar: "نخبة من العلماء", en: "A group of scholars" }, language: "ar" },
  { id: 2, name: { ar: "الجلالين", en: "Tafsir Al-Jalalayn" }, author: { ar: "جلال الدين المحلي و السيوطي", en: "Jalal al-Din al-Mahalli & al-Suyuti" }, language: "ar" },
  { id: 3, name: { ar: "السعدي", en: "Tafsir Al-Sa'di" }, author: { ar: "عبد الرحمن بن ناصر السعدي", en: "Abd al-Rahman bin Nasir Al-Sa'di" }, language: "ar" },
  { id: 4, name: { ar: "ابن كثير", en: "Tafsir Ibn Kathir" }, author: { ar: "إسماعيل بن كثير القرشي", en: "Isma'il ibn Kathir Al-Qurashi" }, language: "ar" },
  { id: 6, name: { ar: "البغوي", en: "Tafsir Al-Baghawi" }, author: { ar: "الحسين بن مسعود البغوي", en: "Al-Husayn ibn Mas'ud Al-Baghawi" }, language: "ar" },
  { id: 7, name: { ar: "القرطبي", en: "Tafsir Al-Qurtubi" }, author: { ar: "أبو عبد الله محمد بن أحمد القرطبي", en: "Abu Abdullah Muhammad ibn Ahmad Al-Qurtubi" }, language: "ar" },
  { id: 8, name: { ar: "الطبري", en: "Tafsir Al-Tabari" }, author: { ar: "الإمام أبو جعفر الطبري", en: "Imam Abu Ja'far Al-Tabari" }, language: "ar" },
  { id: 9, name: { ar: "أربري", en: "Arberry" }, author: { ar: "أ. ج. أربري", en: "A. J. Arberry" }, language: "en" },
  { id: 10, name: { ar: "يوسف علي", en: "Yusuf Ali" }, author: { ar: "عبدالله يوسف علي", en: "Abdullah Yusuf Ali" }, language: "en" },
  { id: 11, name: { ar: "كايزر", en: "Keyzer" }, author: { ar: "سالومو كايزر", en: "Salomo Keyzer" }, language: "nl" },
  { id: 12, name: { ar: "ليمهاوس", en: "Leemhuis" }, author: { ar: "فريد ليمهاوس", en: "Fred Leemhuis" }, language: "nl" },
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