
/// <reference lib="webworker" />
export {};

declare const self: ServiceWorkerGlobalScope;

interface PushPayload {
  title: string;
  body: string;
  icon?: string;
  url?: string;
  tag?: string;
}
export const adhkarData = {
  morning_adhkar: {
    ar: "أذكار الصباح",
    en: "Morning Adhkar",
    bn: "সকালের জিকির",
    de: "Morgendliche Bittgebete",
    fa: "اذکار صبحگاه",
    fr: "Invocations du matin",
    ha: "Azkar na safe",
    id: "Dzikir Pagi",
    ms: "Zikir Pagi",
    sw: "Adhkar za Asubuhi",
    tr: "Sabah Zikirleri",
    ur: "صبح کے اذکار"
  },
  evening_adhkar: {
    ar: "أذكار المساء",
    en: "Evening Adhkar",
    bn: "সন্ধ্যার জিকির",
    de: "Abendliche Bittgebete",
    fa: "اذکار شامگاه",
    fr: "Invocations du soir",
    ha: "Azkar na yamma",
    id: "Dzikir Petang",
    ms: "Zikir Petang",
    sw: "Adhkar za Jioni",
    tr: "Akşam Zikirleri",
    ur: "شام کے اذکار"
  },
  Waking_Up_Adhkar: {
    ar: "أذكار الاستيقاظ",
    en: "Waking Up Adhkar",
    bn: "ঘুম থেকে ওঠার জিকির",
    de: "Bittgebete beim Aufwachen",
    fa: "اذکار بیدار شدن از خواب",
    fr: "Invocations du réveil",
    ha: "Azkar lokacin tashi daga barci",
    id: "Dzikir Bangun Tidur",
    ms: "Zikir Bangun Tidur",
    sw: "Adhkar za Kuamka",
    tr: "Uyanma Zikirleri",
    ur: "بیدار ہونے کے اذکار"
  },
  Dua_for_Wearing_Clothes: {
    ar: "دعاء لبس الثوب",
    en: "Dua for Wearing Clothes",
    bn: "পোশাক পরিধানের দোয়া",
    de: "Bittgebet beim Anziehen",
    fa: "دعای لباس پوشیدن",
    fr: "Invocation pour s'habiller",
    ha: "Addu'ar sanya tufafi",
    id: "Doa Memakai Pakaian",
    ms: "Doa Memakai Pakaian",
    sw: "Dua ya Kuvaa Nguo",
    tr: "Elbise Giyerken Okunacak Dua",
    ur: "لباس پہننے کی دعا"
  },
  Dua_for_Wearing_New_Clothes: {
    ar: "دعاء لبس الثوب الجديد",
    en: "Dua for Wearing New Clothes",
    bn: "নতুন পোশাক পরিধানের দোয়া",
    de: "Bittgebet beim Anziehen neuer Kleidung",
    fa: "دعای پوشیدن لباس نو",
    fr: "Invocation pour porter un vêtement neuf",
    ha: "Addu'ar sanya sabon tufafi",
    id: "Doa Memakai Pakaian Baru",
    ms: "Doa Memakai Pakaian Baru",
    sw: "Dua ya Kuvaa Nguo Mpya",
    tr: "Yeni Elbise Giyerken Okunacak Dua",
    ur: "نیا لباس پہننے کی دعا"
  },
  Dua_for_One_Who_Wears_New_Clothes: {
    ar: "ما يقال لمن لبس ثوباً جديداً",
    en: "Dua for One Who Wears New Clothes",
    bn: "নতুন পোশাক পরিধানকারীকে দো'আ",
    de: "Bittgebet für jemanden, der neue Kleidung trägt",
    fa: "دعا برای کسی که لباس نو پوشیده",
    fr: "Invocation pour celui qui porte un vêtement neuf",
    ha: "Addu'a ga wanda ya sanya sabon tufafi",
    id: "Doa untuk Orang yang Memakai Pakaian Baru",
    ms: "Doa Kepada Orang yang Memakai Pakaian Baru",
    sw: "Dua Mtu Anapovaa Nguo Mpya",
    tr: "Yeni Elbise Giyene Edilecek Dua",
    ur: "نیا لباس پہننے والے کے لیے دعا"
  },
  What_to_Say_When_Taking_Off_Clothes: {
    ar: "دعاء خلع الثوب",
    en: "What to Say When Taking Off Clothes",
    bn: "পোশাক খোলার সময় দো'আ",
    de: "Bittgebet beim Ausziehen der Kleidung",
    fa: "دعای درآوردن لباس",
    fr: "Invocation en retirant ses vêtements",
    ha: "Cewa lokacin cire tufafi",
    id: "Doa Melepas Pakaian",
    ms: "Doa Menanggalkan Pakaian",
    sw: "Dua ya Kuvua Nguo",
    tr: "Elbise Çıkarırken Okunacak Dua",
    ur: "لباس اتارتے وقت کی دعا"
  },
  Dua_for_Entering_the_Toilet: {
    ar: "دعاء دخول الخلاء",
    en: "Dua for Entering the Toilet",
    bn: "টয়লেটে প্রবেশের দোয়া",
    de: "Bittgebet beim Betreten der Toilette",
    fa: "دعای ورود به دستشویی",
    fr: "Invocation en entrant aux toilettes",
    ha: "Addu'ar shiga kewaye",
    id: "Doa Masuk WC",
    ms: "Doa Masuk Tandas",
    sw: "Dua ya Kuingia Chooni",
    tr: "Tuvalete Girerken Okunacak Dua",
    ur: "بیت الخلا میں داخل ہونے کی دعا"
  },
  Dua_for_Leaving_the_Toilet: {
    ar: "دعاء الخروج من الخلاء",
    en: "Dua for Leaving the Toilet",
    bn: "টয়লেট থেকে বের হওয়ার দোয়া",
    de: "Bittgebet beim Verlassen der Toilette",
    fa: "دعای خروج از دستشویی",
    fr: "Invocation en sortant des toilettes",
    ha: "Addu'ar fita daga kewaye",
    id: "Doa Keluar WC",
    ms: "Doa Keluar Tandas",
    sw: "Dua ya Kutoka Chooni",
    tr: "Tuvaletten Çıkarken Okunacak Dua",
    ur: "بیت الخلا سے نکلنے کی دعا"
  },
  Dhikr_Before_Ablution: {
    ar: "الذكر قبل الوضوء",
    en: "Dhikr Before Ablution",
    bn: "ওযুর পূর্বের জিকির",
    de: "Gedenken vor der Wudu",
    fa: "ذکر قبل از وضو",
    fr: "Invocation avant les ablutions",
    ha: "Azkari kafin alwala",
    id: "Dzikir Sebelum Wudhu",
    ms: "Zikir Sebelum Wuduk",
    sw: "Dhikri Kabla ya Udhu",
    tr: "Abdestten Önceki Zikir",
    ur: "وضو سے پہلے کے اذکار"
  },
  Dhikr_After_Ablution: {
    ar: "الذكر بعد الوضوء",
    en: "Dhikr After Ablution",
    bn: "ওযুর পরের জিকির",
    de: "Gedenken nach der Wudu",
    fa: "ذکر بعد از وضو",
    fr: "Invocation après les ablutions",
    ha: "Azkari bayan alwala",
    id: "Dzikir Setelah Wudhu",
    ms: "Zikir Selepas Wuduk",
    sw: "Dhikri Baada ya Udhu",
    tr: "Abdestten Sonraki Zikir",
    ur: "وضو کے بعد کے اذکار"
  },
  Dhikr_When_Leaving_the_House: {
    ar: "دعاء الخروج من المنزل",
    en: "Dhikr When Leaving the House",
    bn: "ঘর থেকে বের হওয়ার দোয়া",
    de: "Bittgebet beim Verlassen des Hauses",
    fa: "دعای خروج از خانه",
    fr: "Invocation en sortant de la maison",
    ha: "Addu'ar fita daga gida",
    id: "Doa Keluar Rumah",
    ms: "Doa Keluar Rumah",
    sw: "Dua ya Kutoka Nyumbani",
    tr: "Evden Çıkarken Okunacak Dua",
    ur: "گھر سے نکلنے کی دعا"
  },
  Dhikr_When_Entering_the_House: {
    ar: "دعاء دخول المنزل",
    en: "Dhikr When Entering the House",
    bn: "ঘরে প্রবেশের দোয়া",
    de: "Bittgebet beim Betreten des Hauses",
    fa: "دعای ورود به خانه",
    fr: "Invocation en entrant à la maison",
    ha: "Addu'ar shiga gida",
    id: "Doa Masuk Rumah",
    ms: "Doa Masuk Rumah",
    sw: "Dua ya Kuingia Nyumbani",
    tr: "Eve Girerken Okunacak Dua",
    ur: "گھر میں داخل ہونے کی دعا"
  },
  Dua_for_Going_to_the_Mosque: {
    ar: "دعاء الذهاب إلى المسجد",
    en: "Dua for Going to the Mosque",
    bn: "মসজিদে যাওয়ার দোয়া",
    de: "Bittgebet auf dem Weg zur Moschee",
    fa: "دعای رفتن به مسجد",
    fr: "Invocation en se rendant à la mosquée",
    ha: "Addu'ar tafiya masallaci",
    id: "Doa Pergi ke Masjid",
    ms: "Doa Pergi ke Masjid",
    sw: "Dua ya Kwenda Msikitini",
    tr: "Camiye Giderken Okunacak Dua",
    ur: "مسجد جانے کی دعا"
  },
  Dua_for_Entering_the_Mosque: {
    ar: "دعاء دخول المسجد",
    en: "Dua for Entering the Mosque",
    bn: "মসজিদে প্রবেশের দোয়া",
    de: "Bittgebet beim Betreten der Moschee",
    fa: "دعای ورود به مسجد",
    fr: "Invocation en entrant à la mosquée",
    ha: "Addu'ar shiga masallaci",
    id: "Doa Masuk Masjid",
    ms: "Doa Masuk Masjid",
    sw: "Dua ya Kuingia Msikitini",
    tr: "Camiye Girerken Okunacak Dua",
    ur: "مسجد میں داخل ہونے کی دعا"
  },
  Dua_for_Leaving_the_Mosque: {
    ar: "دعاء الخروج من المسجد",
    en: "Dua for Leaving the Mosque",
    bn: "মসজিদ থেকে বের হওয়ার দোয়া",
    de: "Bittgebet beim Verlassen der Moschee",
    fa: "دعای خروج از مسجد",
    fr: "Invocation en sortant de la mosquée",
    ha: "Addu'ar fita daga masallaci",
    id: "Doa Keluar Masjid",
    ms: "Doa Keluar Masjid",
    sw: "Dua ya Kutoka Msikitini",
    tr: "Camiden Çıkarken Okunacak Dua",
    ur: "مسجد سے نکلنے کی دعا"
  },
  Adhkar_of_the_Adhan: {
    ar: "أذكار الأذان",
    en: "Adhkar of the Adhan",
    bn: "আযানের জিকির",
    de: "Bittgebete zum Adhan",
    fa: "اذکار اذان",
    fr: "Invocations liées à l'appel à la prière",
    ha: "Azkar na kirran salla",
    id: "Dzikir Adzan",
    ms: "Zikir Azan",
    sw: "Adhkar za Adhana",
    tr: "Ezan Zikirleri",
    ur: "اذان کے اذکار"
  },
  "Opening_Dua_of_Prayer_(Istiftah)": {
    ar: "دعاء الاستفتاح",
    en: "Opening Dua of Prayer (Istiftah)",
    bn: "নামাজের শুরুর দোয়া (ইস্তিফতাহ)",
    de: "Eröffnungsgebet des Gebets (Istiftah)",
    fa: "دعای استفتاح (آغاز نماز)",
    fr: "Invocation d'ouverture de la prière",
    ha: "Addu'ar tashi salla (Istiftah)",
    id: "Doa Istiftah",
    ms: "Doa Istiftah",
    sw: "Dua ya Kufungulia Swala",
    tr: "Namaz Başlangıç Duası (İstiftah)",
    ur: "دعائے استفتاح (نماز شروع کرنے کی دعا)"
  },
  Dua_of_Ruku: {
    ar: "دعاء الركوع",
    en: "Dua of Ruku",
    bn: "রুকুর দোয়া",
    de: "Bittgebet beim Ruku",
    fa: "دعای رکوع",
    fr: "Invocation durant l'inclinaison",
    ha: "Addu'ar rukui",
    id: "Doa Ruku",
    ms: "Doa Ruku'",
    sw: "Dua ya Kurukuu",
    tr: "Rükû Duası",
    ur: "رکوع کی دعا"
  },
  Dua_of_Rising_from_Ruku: {
    ar: "دعاء الرفع من الركوع",
    en: "Dua of Rising from Ruku",
    bn: "রুকু থেকে ওঠার দোয়া",
    de: "Bittgebet beim Aufrichten aus dem Ruku",
    fa: "دعای بلند شدن از رکوع",
    fr: "Invocation en se redressant de l'inclinaison",
    ha: "Addu'ar dagowa daga rukui",
    id: "Doa Bangkit dari Ruku",
    ms: "Doa Bangkit Dari Ruku'",
    sw: "Dua ya Kuinuka Kutoka Kurukuu",
    tr: "Rükûdan Kalkarken Okunacak Dua",
    ur: "رکوع سے اٹھنے کی دعا"
  },
  Dua_of_Sujood: {
    ar: "دعاء السجود",
    en: "Dua of Sujood",
    bn: "সিজদার দোয়া",
    de: "Bittgebet bei der Niederwerfung",
    fa: "دعای سجده",
    fr: "Invocation durant la prosternation",
    ha: "Addu'ar sujuda",
    id: "Doa Sujud",
    ms: "Doa Sujud",
    sw: "Dua ya Kusujudu",
    tr: "Secde Duası",
    ur: "سجدے کی دعا"
  },
  Dua_Between_the_Two_Prostrations: {
    ar: "الدعاء بين السجدتين",
    en: "Dua Between the Two Prostrations",
    bn: "দুই সিজদার মধ্যবর্তী দোয়া",
    de: "Bittgebet zwischen den beiden Niederwerfungen",
    fa: "دعای بین دو سجده",
    fr: "Invocation entre les deux prosternations",
    ha: "Addu'a tsakanin sujudai biyu",
    id: "Doa di Antara Dua Sujud",
    ms: "Doa Antara Dua Sujud",
    sw: "Dua Baina ya Sejda Mbili",
    tr: "İki Secde Arasındaki Dua",
    ur: "دو سجدوں کے درمیان کی دعا"
  },
  "Dua_of_Sujood_al-Tilawah": {
    ar: "دعاء سجود التلاوة",
    en: "Dua of Sujood al-Tilawah",
    bn: "তিলাওয়াতের সিজদার দোয়া",
    de: "Bittgebet bei der Niederwerfung der Rezitation",
    fa: "دعای سجده تلاوت",
    fr: "Invocation de la prosternation de récitation",
    ha: "Addu'ar sujudar karatu",
    id: "Doa Sujud Tilawah",
    ms: "Doa Sujud Tilawah",
    sw: "Dua ya Kusujudu Kisomo",
    tr: "Tilavet Secdesi Duası",
    ur: "سجدہ تلاوت کی دعا"
  },
  Tashahhud: {
    ar: "التشهد",
    en: "Tashahhud",
    bn: "তাশাহহুদ",
    de: "Tashahhud",
    fa: "تشهد",
    fr: "Le Tashahhud",
    ha: "Tahiya",
    id: "Tasyahud",
    ms: "Tasyahhud",
    sw: "Tashahhud",
    tr: "Teşehhüt",
    ur: "تشہد"
  },
  Sending_Blessings_on_the_Prophet_After_Tashahhud: {
    ar: "الصلاة على النبي بعد التشهد",
    en: "Sending Blessings on the Prophet After Tashahhud",
    bn: "তাশাহহুদের পর দরূদ পাঠ",
    de: "Segenswünsche für den Propheten nach dem Tashahhud",
    fa: "صلوات بر پیامبر بعد از تشهد",
    fr: "Prières sur le Prophète après le Tashahhud",
    ha: "Salatin Annabi bayan tahiya",
    id: "Sholawat Nabi Setelah Tasyahud",
    ms: "Selawat Ke Atas Nabi Selepas Tasyahhud",
    sw: "Kumswalia Mtume Baada ya Tashahhud",
    tr: "Teşehhütten Sonra Peygambere Salavat",
    ur: "تشہد کے بعد درود شریف"
  },
  Dua_After_the_Final_Tashahhud_Before_Salam: {
    ar: "الدعاء بعد التشهد الأخير قبل السلام",
    en: "Dua After the Final Tashahhud Before Salam",
    bn: "শেষ তাশাহহুদের পর সালামের আগের দোয়া",
    de: "Bittgebet nach dem letzten Tashahhud vor dem Salam",
    fa: "دعای بعد از تشهد آخر قبل از سلام",
    fr: "Invocation après le dernier Tashahhud avant le Salam",
    ha: "Addu'a bayan tahiyar karshe kafin sallama",
    id: "Doa Setelah Tasyahud Akhir Sebelum Salam",
    ms: "Doa Selepas Tasyahhud Akhir Sebelum Salam",
    sw: "Dua Baada ya Tashahhud ya Mwisho Kabla ya Salamu",
    tr: "Son Teşehhütten Sonra Selamdan Önceki Dua",
    ur: "آخری تشہد کے بعد سلام سے پہلے کی دعا"
  },
  "Adhkar_After_the_Salam_(Post-Prayer_Dhikr)": {
    ar: "أذكار بعد السلام من الصلاة",
    en: "Adhkar After the Salam (Post-Prayer Dhikr)",
    bn: "সালামের পর নামাজের শেষের জিকির",
    de: "Bittgebete nach dem Salam (Gebetsabschluss)",
    fa: "اذکار بعد از سلام نماز",
    fr: "Invocations après le Salam",
    ha: "Azkar bayan sallamawa salla",
    id: "Dzikir Setelah Salam",
    ms: "Zikir Selepas Salam",
    sw: "Adhkar Baada ya Salamu",
    tr: "Namazdan Sonraki Zikirler",
    ur: "سلام کے بعد کے اذکار"
  },
  Dua_of_Istikhara_Prayer: {
    ar: "دعاء صلاة الاستخارة",
    en: "Dua of Istikhara Prayer",
    bn: "ইস্তিখারা নামাজের দোয়া",
    de: "Bittgebet des Istikhara-Gebets",
    fa: "دعای نماز استخاره",
    fr: "Invocation de la prière de consultation (Istikhara)",
    ha: "Addu'ar sallalar Istihara",
    id: "Doa Salat Istikharah",
    ms: "Doa Solat Istikharah",
    sw: "Dua ya Swala ya Istikhara",
    tr: "İstihare Namazı Duası",
    ur: "نماز استخارہ کی دعا"
  },
  Sleep_Adhkar: {
    ar: "أذكار النوم",
    en: "Sleep Adhkar",
    bn: "ঘুমানোর জিকির",
    de: "Bittgebete vor dem Schlafen",
    fa: "اذکار خواب",
    fr: "Invocations avant de dormir",
    ha: "Azkar na barci",
    id: "Dzikir Sebelum Tidur",
    ms: "Zikir Sebelum Tidur",
    sw: "Adhkar za Kulala",
    tr: "Uyku Zikirleri",
    ur: "سوتے وقت کے اذکار"
  },
  Dua_When_Turning_Over_at_Night: {
    ar: "دعاء التقلب أثناء الليل",
    en: "Dua When Turning Over at Night",
    bn: "রাতে পাশ ফেরার সময় দোয়া",
    de: "Bittgebet beim Umdrehen in der Nacht",
    fa: "دعای غلت زدن در شب",
    fr: "Invocation lorsque l'on se retourne la nuit",
    ha: "Addu'ar juye-juye cikin daddare",
    id: "Doa Saat Terbangun/Berbalik di Malam Hari",
    ms: "Doa Apabila Mengiringi Badan di Malam Hari",
    sw: "Dua Unapoguka Usiku",
    tr: "Gece Yatakta Dönünce Okunacak Dua",
    ur: "رات کو کروٹ لیتے وقت کی دعا"
  },
  Dua_for_Anxiety_and_Fear_During_Sleep: {
    ar: "دعاء الفزع والخوف أثناء النوم",
    en: "Dua for Anxiety and Fear During Sleep",
    bn: "ঘুমে ভয় পেলে দোয়া",
    de: "Bittgebet bei Angst und Schrecken im Schlaf",
    fa: "دعای ترس و اضطراب در خواب",
    fr: "Invocation en cas d'anxiété et de peur pendant le sommeil",
    ha: "Addu'ar firgita da tsoro lokacin barci",
    id: "Doa Saat Gelisah dan Takut Saat Tidur",
    ms: "Doa Apabila Terkejut dan Takut Ketika Tidur",
    sw: "Dua ya Hofu Wakati wa Kulala",
    tr: "Uykuda Korku ve Endişe Anında Okunacak Dua",
    ur: "نینڈ میں گھبراہٹ اور ڈر کی دعا"
  },
  What_to_Do_Upon_Seeing_a_Dream_or_Nightmare: {
    ar: "ما يُفعل عند رؤية حلم أو كابوس",
    en: "What to Do Upon Seeing a Dream or Nightmare",
    bn: "ভাল বা খারাপ স্বপ্ন দেখলে করণীয়",
    de: "Was zu tun ist, wenn man einen guten oder schlechten Traum sieht",
    fa: "اقدام هنگام دیدن خواب یا کابوس",
    fr: "Que faire en cas de bon ou mauvais rêve",
    ha: "Abin da za a yi idan aka ga mafarki mai kyau ko mummuna",
    id: "Yang Dilakukan Saat Bermimpi Baik atau Buruk",
    ms: "Apa Perlu Dibuat Apabila Bermimpi Baik atau Buruk",
    sw: "La Kufanya Unapoona Ndoto Nzuri au Mbaya",
    tr: "Rüya veya Kâbus Görünce Yapılacaklar",
    ur: "اچھا یا برا خواب دیکھنے پر کیا کریں"
  },
  Dua_of_Qunoot_in_Witr: {
    ar: "دعاء القنوت في الوتر",
    en: "Dua of Qunoot in Witr",
    bn: "বিতর নামাজের কুনুতের দোয়া",
    de: "Qunut-Bittgebet im Witr-Gebet",
    fa: "دعای قنوت وتر",
    fr: "Invocation du Qounout dans le Witr",
    ha: "Addu'ar Qunuti a Wutiri",
    id: "Doa Qunut Salat Witir",
    ms: "Doa Qunut Solat Witir",
    sw: "Dua ya Qunut katika Witr",
    tr: "Vitir Namazında Kunut Duası",
    ur: "وتر میں دعائے قنوت"
  },
  Dhikr_After_the_Salam_of_Witr: {
    ar: "الذكر بعد السلام من الوتر",
    en: "Dhikr After the Salam of Witr",
    bn: "বিতরের সালামের পরের জিকির",
    de: "Gedenken nach dem Salam des Witr-Gebets",
    fa: "ذکر بعد از سلام وتر",
    fr: "Invocation après le Salam de la prière du Witr",
    ha: "Azkari bayan sallamawa wutiri",
    id: "Dzikir Setelah Salam Salat Witir",
    ms: "Zikir Selepas Salam Solat Witir",
    sw: "Dhikri Baada ya Salamu ya Witr",
    tr: "Vitir Namazından Sonraki Zikir",
    ur: "وتر کے سلام کے بعد کا ذکر"
  },
  Dua_for_Anxiety_and_Sadness: {
    ar: "دعاء الهم والحزن",
    en: "Dua for Anxiety and Sadness",
    bn: "চিন্তা ও দুঃখের দোয়া",
    de: "Bittgebet bei Sorgen und Traurigkeit",
    fa: "دعای اندوه و غم",
    fr: "Invocation contre l'anxiété et la tristesse",
    ha: "Addu'ar damuwa da bakin ciki",
    id: "Doa Hilangkan Gelisah dan Sedih",
    ms: "Doa Menghilangkan Duka dan Sedih",
    sw: "Dua ya Wasiwasi na Huzuni",
    tr: "Keder ve Hüzün Anında Okunacak Dua",
    ur: "فکر اور غم کی دعا"
  },
  Dua_for_Distress: {
    ar: "دعاء الكرب",
    en: "Dua for Distress",
    bn: "কষ্ট ও বিপদের দোয়া",
    de: "Bittgebet in schwere Not",
    fa: "دعای گرفتاری و سخت‌یی",
    fr: "Invocation en cas de détresse",
    ha: "Addu'ar tsanani da halin kaka-ni-kayi",
    id: "Doa Dalam Kesulitan Berat",
    ms: "Doa Apabila Dalam Kesusahan",
    sw: "Dua ya Dhiki",
    tr: "Sıkıntı Anında Okunacak Dua",
    ur: "مصیبت اور پریشانی کی دعا"
  },
  Dua_When_Meeting_the_Enemy_or_a_Ruler: {
    ar: "دعاء لقاء العدو أو ذي السلطان",
    en: "Dua When Meeting the Enemy or a Ruler",
    bn: "শত্রু বা শাসকের মুখোমুখি হওয়ার দোয়া",
    de: "Bittgebet bei der Begegnung mit dem Feind oder einem Herrscher",
    fa: "دعای مواجهه با دشمن یا حاكم",
    fr: "Invocation lors de la rencontre de l'ennemi ou d'un dirigeant",
    ha: "Addu'ar saduwa da makiya ko mai iko",
    id: "Doa Berhadapan Dengan Musuh Atau Penguasa",
    ms: "Doa Menghadapi Musuh Atau Pemerintah",
    sw: "Dua Unapokutana na Adui au Mtawala",
    tr: "Düşmanla veya Hükümdarla Karşılaşınca Okunacak Dua",
    ur: "دشمن یا حاکم سے ملتے وقت کی دعا"
  },
  Dua_for_One_Who_Fears_the_Injustice_of_a_Ruler: {
    ar: "دعاء من يخاف ظلم الحاكم",
    en: "Dua for One Who Fears the Injustice of a Ruler",
    bn: "শাসকের অত্যাচারের ভয়ে দোয়া",
    de: "Bittgebet für jemanden, der Ungerechtigkeit eines Herrschers fürchtet",
    fa: "دعای کسی که از ستم حاکم می‌ترسد",
    fr: "Invocation pour celui qui craint l'injustice d'un dirigeant",
    ha: "Addu me tsoron zaluncin shugaba",
    id: "Doa Bagi Orang yang Takut Kezaliman Penguasa",
    ms: "Doa Orang Yang Takut Zalim Pemerintah",
    sw: "Dua ya Mwenye Kuogopa Dhuluma ya Mtawala",
    tr: "Zalim Hükümdarın Gazabından Korkanın Duası",
    ur: "حاکم کے ظلم سے ڈرنے والے کی دعا"
  },
  Dua_Against_the_Enemy: {
    ar: "الدعاء على العدو",
    en: "Dua Against the Enemy",
    bn: "শত্রুর বিরুদ্ধে দোয়া",
    de: "Bittgebet gegen den Feind",
    fa: "دعا علیه دشمن",
    fr: "Invocation contre l'ennemi",
    ha: "Addu'a a kan makiya",
    id: "Doa Memohon Kehancuran Musuh",
    ms: "Doa Ke Atas Musuh",
    sw: "Dua Dhidi ya Adui",
    tr: "Düşmana Karşı Yapılacak Dua",
    ur: "دشمن کے خلاف دعا"
  },
  What_to_Say_When_Fearing_a_People: {
    ar: "ما يقال عند الخوف من قوم",
    en: "What to Say When Fearing a People",
    bn: "কোন সম্প্রদায়ের ভয়ে যা বলতে হয়",
    de: "Was man sagt, wenn man ein Volk fürchtet",
    fa: "آنچه هنگام ترس از گروهی گفته می‌شود",
    fr: "Que dire lorsque l'on craint un groupe de personnes",
    ha: "Abin da za a ce lokacin tsoron wani mutane",
    id: "Ucapan Saat Takut Terhadap Suatu Kaum",
    ms: "Apa Yang Dibaca Apabila Takutkan Suatu Kaum",
    sw: "La Kusema Unapoogopa Kundi la Watu",
    tr: "Bir Topluluktan Korkulduğunda Okunacak Dua",
    ur: "کسی قوم سے ڈر محسوس ہونے پر کیا کہیں"
  },
  Dua_for_One_Afflicted_with_Doubt_in_Faith: {
    ar: "دعاء من ابتُلي بالشك في الإيمان",
    en: "Dua for One Afflicted with Doubt in Faith",
    bn: "ঈমানে সংশয়ে পতিত ব্যক্তির দোয়া",
    de: "Bittgebet für jemanden, der mit Zweifel im Glauben geprüft wird",
    fa: "دعای کسی که دچار شک در ایمان شده",
    fr: "Invocation pour celui qui éprouve des doutes dans la foi",
    ha: "Addu'ar wanda aka jarraba da shakka a imani",
    id: "Doa Bagi Orang yang Ragu dalam Iman",
    ms: "Doa Orang Yang Diuji Keraguan Dalam Iman",
    sw: "Dua ya Mwenye Kutiwa Shaka katika Iman",
    tr: "İmanda Şüpheye Düşenin Duası",
    ur: "ایمان میں شک کا شکار ہونے والے کی دعا"
  },
  Dua_for_Settling_Debt: {
    ar: "دعاء قضاء الدين",
    en: "Dua for Settling Debt",
    bn: "ঋণ পরিশোধের দোয়া",
    de: "Bittgebet zur Schuldentilgung",
    fa: "دعای اداء دین و قرض",
    fr: "Invocation pour le remboursement des dettes",
    ha: "Addu'ar biyan bashi",
    id: "Doa Pelunas Utang",
    ms: "Doa Membayar Hutang",
    sw: "Dua ya Kulipa Deni",
    tr: "Borç Ödeme Duası",
    ur: "قرض کی ادائیگی کی دعا"
  },
  "Dua_for_Whispers_(Waswasa)_in_Prayer_and_Recitation": {
    ar: "دعاء الوسوسة في الصلاة والقراءة",
    en: "Dua for Whispers (Waswasa) in Prayer and Recitation",
    bn: "নামাজ ও তিলাওয়াতে ওয়াসওয়াসা দূর করার দোয়া",
    de: "Bittgebet bei Einflüsterungen (Waswasa) im Gebet und bei der Rezitation",
    fa: "دعای وسوسه در نماز و قرائت",
    fr: "Invocation contre les insinuations pendant la prière et la récitation",
    ha: "Addu'ar waswasi a salla da karatu",
    id: "Doa Menghilangkan Waswas Saat Salat dan Membaca Al-Qur'an",
    ms: "Doa Gangguan Waswas Dalam Solat Dan Bacaan",
    sw: "Dua ya Wasiwasi katika Swala na Kisomo",
    tr: "Namazda ve Okumada Vesveseden Korunma Duası",
    ur: "نماز اور تلاوت میں وسوسے کی دعا"
  },
  Dua_When_Something_Becomes_Difficult: {
    ar: "دعاء إذا استصعب عليه أمر",
    en: "Dua When Something Becomes Difficult",
    bn: "কোন কাজ কঠিন মনে হলে দোয়া",
    de: "Bittgebet, wenn etwas schwierig wird",
    fa: "دعای هنگام دشوار شدن کار",
    fr: "Invocation lorsque quelque chose devient difficile",
    ha: "Addu'a idan al'amari ya tsananta",
    id: "Doa Saat Mengalami Kesulitan Dalam Urusan",
    ms: "Doa Apabila Menghadapi Kesukaran",
    sw: "Dua Jambo Linapokuwa Vigumu",
    tr: "Bir İş Zorlaştığında Okunacak Dua",
    ur: "جب کوئی کام مشکل ہو جائے تو دعا"
  },
  What_to_Do_After_Committing_a_Sin: {
    ar: "ما يُفعل بعد ارتكاب الذنب",
    en: "What to Do After Committing a Sin",
    bn: "গুনাহ বা পাপ করার পর করণীয়",
    de: "Was zu tun ist, nachdem man eine Sünde begangen hat",
    fa: "اقدام بعد از انجام گناه",
    fr: "Que faire après avoir commis un péché",
    ha: "Abin da za a yi bayan tafka sabo",
    id: "Yang Dilakukan Setelah Berbuat Dosa",
    ms: "Apa Perlu Dibuat Selepas Melakukan Dosa",
    sw: "La Kufanya Baada ya Kufanya Dambi",
    tr: "Günah İşledikten Sonra Yapılacak Şeyler",
    ur: "گناہ ہو جانے کے بعد کیا کریں"
  },
  How_to_Repel_Satan_and_His_Whispers: {
    ar: "كيفية طرد الشيطان ووساوسه",
    en: "How to Repel Satan and His Whispers",
    bn: "শয়তান ও তার ওয়াসওয়াসা দূর করার উপায়",
    de: "Wie man den Satan und seine Einflüsterungen vertreibt",
    fa: "چگونگی دفع شیطان و وسوسه‌هایش",
    fr: "Comment repousser Satan et ses insinuations",
    ha: "Yadda ake korar Shaidan da waswasinsa",
    id: "Cara Mengusir Setan dan Bisikannya",
    ms: "Cara Menolak Syaitan Dan Bisikannya",
    sw: "Jinsi ya Kumfukuza Shetani na Wasiwasi Wake",
    tr: "Şeytanı ve Vesveselerini Defetme Yolu",
    ur: "شیطان اور اس کے وسوسوں کو دور کرنے کا طریقہ"
  },
  Dua_When_Something_Undesired_Happens: {
    ar: "دعاء عند حدوث ما لا يُرضي",
    en: "Dua When Something Undesired Happens",
    bn: "অপছন্দনীয় কিছু ঘটলে দোয়া",
    de: "Bittgebet, wenn etwas Unerwünschtes geschieht",
    fa: "دعای هنگام وقوع ناخوشایند",
    fr: "Invocation lorsque survient une chose indésirable",
    ha: "Addu'a idan wani abu maras kyau ya faru",
    id: "Doa Saat Terjadi Hal yang Tidak Disukai",
    ms: "Doa Apabila Berlaku Perkara Yang Tidak Disukai",
    sw: "Dua Jambo Lisilopendeza Linapotokea",
    tr: "Hoşa Gitmeyen Bir Şey Olduğunda Okunacak Dua",
    ur: "ناگوار بات پیش آنے پر دعا"
  },
  Congratulating_the_Parent_of_a_Newborn_and_Its_Reply: {
    ar: "تهنئة صاحب المولود والرد عليه",
    en: "Congratulating the Parent of a Newborn and Its Reply",
    bn: "নবজাতকের অভিভাবককে অভিনন্দন ও তার উত্তর",
    de: "Glückwunsch an die Eltern eines Neugeborenen und die Antwort darauf",
    fa: "تبریک تولد نوزاد و پاسخ آن",
    fr: "Félicitations aux parents d'un nouveau-né et la réponse",
    ha: "Taya murna wa mai jariri da amsa mata",
    id: "Ucapan Selamat Atas Kelahiran Bayi dan Jawabannya",
    ms: "Tahniah Kepada Ibu Bapa Yang Mendapat Anak Dan Jawapannya",
    sw: "Hongera za Kupata Mtoto na Majibu Yake",
    tr: "Yeni Doğan Çocuk İçin Tebrik ve Cevabı",
    ur: "مبارکباد برائے نومولود اور اس کا جواب"
  },
  Ruqyah_to_Protect_Children: {
    ar: "رقية حفظ الأطفال",
    en: "Ruqyah to Protect Children",
    bn: "সন্তানদের সুরক্ষার ঝাড়ফুঁক/রুকইয়াহ",
    de: "Ruqyah zum Schutz von Kindern",
    fa: "رقیه برای حفاظت از کودکان",
    fr: "Exorcisme légiféré (Ruqyah) pour protéger les enfants",
    ha: "Rukiyyar kare yara",
    id: "Ruqyah Memohon Perlindungan Untuk Anak",
    ms: "Ruqyah Perlindungan Kanak-Kanak",
    sw: "Ruqyah ya Kulinda Watoto",
    tr: "Çocukları Korumak İçin Ruqye",
    ur: "बच्चों ਦੀ حفاظت کی رقیہ"
  },
  Dua_for_a_Sick_Person_During_a_Visit: {
    ar: "دعاء عيادة المريض",
    en: "Dua for a Sick Person During a Visit",
    bn: "রুগী দেখতে গিয়ে দোয়া",
    de: "Bittgebet beim Krankenbesuch",
    fa: "دعای عیادت بیمار",
    fr: "Invocation en rendant visite à un malade",
    ha: "Addu'ar gaida mara lafiya",
    id: "Doa Saat Menjenguk Orang Sakit",
    ms: "Doa Menziarahi Orang Sakit",
    sw: "Dua ya Kumtembelea Mgonjwa",
    tr: "Hasta Ziyaretinde Okunacak Dua",
    ur: "بیمار پرسی کے وقت کی دعا"
  },
  Dua_for_a_Dying_Patient_Who_Has_Lost_Hope: {
    ar: "دعاء المحتضر الذي يئس من الحياة",
    en: "Dua for a Dying Patient Who Has Lost Hope",
    bn: "জীবনের আশা ছেড়ে দেওয়া মুমূর্ষু রোগীর দোয়া",
    de: "Bittgebet für einen Sterbenden, der die Hoffnung aufgegeben hat",
    fa: "دعای محتضری که از زندگی ناامید شده",
    fr: "Invocation pour le malade en fin de vie ayant perdu espoir",
    ha: "Addu'ar mai jinyar da ya cire rai da rai",
    id: "Doa Orang Sakit Parah yang Pasrah/Putus Asa",
    ms: "Doa Pesakit Yang Putus Asa Dari Hidup",
    sw: "Dua ya Mgonjwa Aliyekata Tamaa ya Kuishi",
    tr: "Yaşamdan Ümidini Kesmiş Hastanın Duası",
    ur: "زندگی سے مایوس مریض کی دعا"
  },
  Talqeen_for_One_on_the_Verge_of_Death: {
    ar: "تلقين المحتضر",
    en: "Talqeen for One on the Verge of Death",
    bn: "মুমূর্ষু ব্যক্তিকে তালকীন (শাহাদাহ স্মরণ করানো)",
    de: "Talqeen für jemanden kurz vor dem Tod",
    fa: "تلقین به شخص در حال احتضار",
    fr: "Inculquer la profession de foi au mourant (Talqeen)",
    ha: "Maitar da kalma ga wanda ke gab da mutuwa (Talqeen)",
    id: "Menuntun Kalimat Syahadat Pada Orang Mau Meninggal (Talqin)",
    ms: "Talqin Kepada Orang Yang Hampir Meninggal",
    sw: "Kumtamkisha Shahada Mwenye Kuelekea Kufa",
    tr: "Ölmek Üzere Olan Kişiye Kelime-i Tevhidi Telkin Etmek",
    ur: "موت کے قریب شخص کو تلقین کرنا"
  },
  Dua_for_One_Afflicted_with_a_Calamity: {
    ar: "دعاء من أصابته مصيبة",
    en: "Dua for One Afflicted with a Calamity",
    bn: "বিপদে আক্রান্ত ব্যক্তির দোয়া",
    de: "Bittgebet bei einem Unglück",
    fa: "دعای مصیبت‌زده",
    fr: "Invocation pour celui qui est frappé par un malheur",
    ha: "Addu'ar wanda wata masiba ta samesa",
    id: "Doa Orang yang Tertimpa Musibah",
    ms: "Doa Orang Yang Ditimpa Musibah",
    sw: "Dua ya Mwenye Kupatwa na Msiba",
    tr: "Musibete Uğrayanın Duası",
    ur: "مصیبت میں مبتلا شخص کی دعا"
  },
  Dua_When_Closing_the_Eyes_of_the_Deceased: {
    ar: "الدعاء عند إغماض عيني الميت",
    en: "Dua When Closing the Eyes of the Deceased",
    bn: "মৃতের চোখ বন্ধ করার সময় দোয়া",
    de: "Bittgebet beim Schließen der Augen des Verstorbenen",
    fa: "دعای هنگام بستن چشمان میت",
    fr: "Invocation en fermant les yeux du défunt",
    ha: "Addu'a lokacin rufe idanun mamaci",
    id: "Doa Memejamkan Mata Mayit",
    ms: "Doa Ketika Memejamkan Mata Mayat",
    sw: "Dua Wakati wa Kufumba Macho ya Maiti",
    tr: "Ölünün Gözleri Kapatılırken Okunacak Dua",
    ur: "میت کی آنکھیں بند کرتے وقت کی دعا"
  },
  Dua_for_the_Deceased_in_the_Funeral_Prayer: {
    ar: "الدعاء للميت في صلاة الجنازة",
    en: "Dua for the Deceased in the Funeral Prayer",
    bn: "জানাযার নামাজে মৃতের জন্য দোয়া",
    de: "Bittgebet für den Verstorbenen im Totengebet",
    fa: "دعای میت در نماز جنازه",
    fr: "Invocation pour le défunt lors de la prière funéraire",
    ha: "Addu'a ga mamaci a sallamar jana'iza",
    id: "Doa Untuk Mayit Dalam Salat Jenazah",
    ms: "Doa Untuk Mayat Dalam Solat Jenazah",
    sw: "Dua ya Maiti katika Swala ya Jeneza",
    tr: "Cenaze Namazında Ölü İçin Okunacak Dua",
    ur: "نماز جنازہ میں میت کے لیے دعا"
  },
  "Dua_for_a_Deceased_Child_(al-Fart)_in_the_Funeral_Prayer": {
    ar: "الدعاء للطفل المتوفى (الفرط) في صلاة الجنازة",
    en: "Dua for a Deceased Child (al-Fart) in the Funeral Prayer",
    bn: "জানাযার নামাজে নাবালক শিশুর জন্য দোয়া",
    de: "Bittgebet für ein verstorbenes Kind im Totengebet",
    fa: "دعای کودک فوت شده در نماز جنازه",
    fr: "Invocation pour un enfant défunt lors de la prière funéraire",
    ha: "Addu'a ga yaro da ya mutu a sallamar jana'iza",
    id: "Doa Untuk Jenazah Anak Kecil",
    ms: "Doa Untuk Jenazah Kanak-Kanak",
    sw: "Dua ya Mtoto Aliyeaga Dunia katika Swala ya Jeneza",
    tr: "Sübyan Cenaze Namazında Okunacak Dua",
    ur: "نابالغ بچے کی نماز جنازہ میں دعا"
  },
  Dua_of_Condolence: {
    ar: "دعاء التعزية",
    en: "Dua of Condolence",
    bn: "সমবেদনা জানানোর দোয়া",
    de: "Bittgebet beim Beileid",
    fa: "دعای تسلیت",
    fr: "Invocation de condoléances",
    ha: "Addu'ar ta'aziyya",
    id: "Doa Takziah/Belasungkawa",
    ms: "Doa Takziah",
    sw: "Dua ya Rambirambi",
    tr: "Taziye Duası",
    ur: "تعزیت کی دعا"
  },
  Dua_When_Placing_the_Deceased_into_the_Grave: {
    ar: "الدعاء عند وضع الميت في القبر",
    en: "Dua When Placing the Deceased into the Grave",
    bn: "মৃতদেহ কবরে রাখার সময় দোয়া",
    de: "Bittgebet beim Beisetzen des Verstorbenen ins Grab",
    fa: "دعای هنگام نهادن میت در قبر",
    fr: "Invocation en déposant le défunt dans la tombe",
    ha: "Addu'a lokacin saka mamaci a kabari",
    id: "Doa Memasukkan Mayit ke Liang Lahat",
    ms: "Doa Memasukkan Mayat Ke Dalam Kubur",
    sw: "Dua Wakati wa Kumweka Maiti Kabrini",
    tr: "Cenazeyi Kabre Koyarken Okunacak Dua",
    ur: "میت کو قبر میں رکھتے وقت کی دعا"
  },
  Dua_After_Burying_the_Deceased: {
    ar: "الدعاء بعد دفن الميت",
    en: "Dua After Burying the Deceased",
    bn: "মৃতদেহ দাফনের পরের দোয়া",
    de: "Bittgebet nach der Beerdigung des Verstorbenen",
    fa: "دعای بعد از دفن میت",
    fr: "Invocation après l'enterrement du défunt",
    ha: "Addu'a bayan birne mamaci",
    id: "Doa Setelah Memakamkan Mayit",
    ms: "Doa Selepas Mengebumikan Mayat",
    sw: "Dua Baada ya Kumzika Maiti",
    tr: "Cenaze Gömüldükten Sonra Okunacak Dua",
    ur: "میت کو دفن کرنے کے بعد کی دعا"
  }
};
const translationObject = {
  ar: "حان وقت قراءة الذكر",
  en: "It is time to read the Adhkar",
  bn: "এখন জিকির পাঠ করার সময়",
  de: "Es ist Zeit, die Adhkar zu lesen",
  fa: "زمان خواندن اذکار فرا رسیده است",
  fr: "Il est temps de lire les invocations",
  ha: "Lokacin karanta azkar ya yi",
  id: "Saatnya membaca dzikir",
  ms: "Masa untuk membaca zikir",
  sw: "Ni wakati wa kusoma Adhkar",
  tr: "Zikir okuma zamanı geldi",
  ur: "اذکار پڑھنے کا وقت ہو گیا ہے"
};
self.addEventListener("push", (event: PushEvent) => {
  let data: PushPayload = { title: "Come !", body: "" };

  try {
    if (event.data) {
      data = event.data.json();
    }
  } catch {
    data = { title: "Come !", body: event.data?.text() || "" };
  }
  const dhikrKey = data.body as keyof typeof adhkarData;
  const dhikr_object = adhkarData[dhikrKey];
  const languageKey = data.title as keyof typeof dhikr_object;
  const options: NotificationOptions = {
    body: dhikr_object[languageKey],
    icon: data.icon || "/icon-192.png",
    badge: "/badge-72.png",
    tag: data.tag || "default",
    data: { url: data.url || "/" },
  };

  event.waitUntil(self.registration.showNotification(translationObject[languageKey], options));
});

self.addEventListener("notificationclick", (event: NotificationEvent) => {
  event.notification.close();
  const targetUrl = (event.notification.data?.url as string) || "/";

  event.waitUntil(
    self.clients
      .matchAll({ type: "window", includeUncontrolled: true })
      .then((clientList) => {
        for (const client of clientList) {
          if (client.url.includes(self.location.origin) && "focus" in client) {
            return (client as WindowClient).focus();
          }
        }
        return self.clients.openWindow(targetUrl);
      }),
  );
});

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event: ExtendableEvent) => {
  event.waitUntil(self.clients.claim());
});
