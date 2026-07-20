interface SurahInfo {
  name: {
    ar: string;
    en: string;
  };
  number: number;
  verses_count: number;
  revelation_place: {
    ar: string;
    en: string;
  }
}

export default function SurahSvgBar({ informations }: { informations: SurahInfo }) {
  const { name, number, verses_count, revelation_place } = informations;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 800 180"
        className="w-full h-auto drop-shadow-2xl transition-all duration-300"
      >
        <style>{`
          .svg-bg {
            fill: var(--card, var(--background));
            stroke: var(--border);
            stroke-width: 2.5;
          }
          .svg-inner-border {
            fill: none;
            stroke: var(--border);
            stroke-width: 1;
            stroke-dasharray: 4 3;
            opacity: 0.75;
          }
          .svg-text-primary {
            fill: var(--foreground);
            font-family: 'quranFont', var(--font-sans), sans-serif;
            font-weight: 900;
            font-size: 29px;
            text-anchor: middle;
            text-shadow: 0px 1px 2px rgba(0,0,0,0.05);
          }
          .svg-text-english {
            fill: var(--muted-foreground);
            font-family: var(--font-sans), sans-serif;
            font-size: 13px;
            font-weight: 600;
            text-anchor: middle;
            letter-spacing: 0.05em;
          }
          .svg-circle {
            fill: var(--accent);
            stroke: var(--primary);
            stroke-width: 2;
          }
          .svg-circle-accent {
            fill: var(--primary);
            stroke: var(--primary);
            stroke-width: 2;
          }
          .svg-number-text {
            fill: var(--accent-foreground);
            font-family: var(--font-mono), monospace;
            font-size: 18px;
            font-weight: bold;
            text-anchor: middle;
          }
          .svg-number-text-primary {
            fill: var(--primary-foreground);
            font-family: var(--font-mono), monospace;
            font-size: 18px;
            font-weight: bold;
            text-anchor: middle;
          }
          .decorative-line {
            stroke: var(--primary);
            stroke-width: 2.25;
            stroke-linecap: round;
            fill: none;
          }
          .decorative-line-thin {
            stroke: var(--primary);
            stroke-width: 0.75;
            fill: none;
            opacity: 0.6;
          }
          .ornament-star {
            fill: var(--primary);
          }
          .corner-ornament {
            fill: none;
            stroke: var(--primary);
            stroke-width: 1.5;
            opacity: 0.85;
          }
          .mandala-ray {
            stroke: var(--primary);
            stroke-width: 0.75;
            opacity: 0.5;
          }
        `}</style>

        {/* الإطار الأساسي الفاخر */}
        <rect
          x="10"
          y="10"
          width="780"
          height="160"
          rx="18"
          className="svg-bg"
        />

        {/* خط إطار داخلي منقط */}
        <rect
          x="18"
          y="18"
          width="764"
          height="144"
          rx="14"
          className="svg-inner-border"
        />

        {/* خط زخرفي إضافي موازٍ للإطار من الداخل لمظهر مذهب ثري */}
        <rect
          x="23"
          y="23"
          width="754"
          height="134"
          rx="11"
          fill="none"
          stroke="var(--border)"
          strokeWidth="0.5"
          opacity="0.4"
        />

        {/* زركشة زوايا الإطار الأربعة الفاخرة (Arabesque Corner Cut) */}
        <g id="corners">
          {/* أعلى اليسار */}
          <path d="M 18 45 Q 45 45 45 18 M 18 35 Q 35 35 35 18 M 18 52 L 52 18 M 28 28 L 38 38" className="corner-ornament" />
          <circle cx="45" cy="45" r="2" className="ornament-star" />
          {/* أعلى اليمين */}
          <path d="M 782 45 Q 755 45 755 18 M 782 35 Q 765 35 765 18 M 782 52 L 748 18 M 772 28 L 762 38" className="corner-ornament" />
          <circle cx="755" cy="45" r="2" className="ornament-star" />
          {/* أسفل اليسار */}
          <path d="M 18 135 Q 45 135 45 162 M 18 145 Q 35 145 35 162 M 18 128 L 52 162 M 28 152 L 38 142" className="corner-ornament" />
          <circle cx="45" cy="135" r="2" className="ornament-star" />
          {/* أسفل اليمين */}
          <path d="M 782 135 Q 755 135 755 162 M 782 145 Q 765 145 765 162 M 782 128 L 748 162 M 772 152 L 762 142" className="corner-ornament" />
          <circle cx="755" cy="135" r="2" className="ornament-star" />
        </g>

        {/* زركشة السور الشرفية (Cresting) في الهوامش العليا والسفلى */}
        <g id="border-crests">
          <polygon points="400,12 405,17 400,22 395,17" className="ornament-star" />
          <polygon points="370,14 373,17 370,20 367,17" className="ornament-star" />
          <polygon points="430,14 433,17 430,20 427,17" className="ornament-star" />
          
          <polygon points="400,158 405,163 400,168 395,163" className="ornament-star" />
          <polygon points="370,160 373,163 370,166 367,163" className="ornament-star" />
          <polygon points="430,160 433,163 430,166 427,163" className="ornament-star" />
        </g>

        {/* الكتلة المركزية الفاخرة للغاية (The Royal Cartouche) */}
        <g id="center-header">
          {/* الأقواس العلوية المتراكبة مع زخرفة النجوم */}
          <path d="M220 74 Q400 24 580 74" className="decorative-line" />
          <path d="M240 68 Q400 22 560 68" className="decorative-line-thin" />
          <path d="M260 62 Q400 20 540 62" className="decorative-line-thin" style={{ strokeDasharray: '3 2' }} />
          
          {/* صف من النقاط الزخرفية الموازية للقوس العلوي */}
          <circle cx="400" cy="27" r="3" className="ornament-star" />
          <circle cx="370" cy="32" r="2" className="ornament-star" />
          <circle cx="430" cy="32" r="2" className="ornament-star" />
          <circle cx="340" cy="40" r="1.5" className="ornament-star" />
          <circle cx="460" cy="40" r="1.5" className="ornament-star" />

          {/* الأقواس السفلية الحاضنة للنص */}
          <path d="M280 130 Q400 154 520 130" className="decorative-line" strokeWidth="1.5" />
          <path d="M300 136 Q400 158 500 136" className="decorative-line-thin" />
          <path d="M320 142 Q400 162 480 142" className="decorative-line-thin" style={{ strokeDasharray: '2 2' }} />

          {/* نجوم ومعينات مذهبة على نهايات المنحنيات */}
          <polygon points="220,74 225,69 230,74 225,79" className="ornament-star" />
          <polygon points="580,74 575,69 570,74 575,79" className="ornament-star" />
          <polygon points="280,130 284,126 288,130 284,134" className="ornament-star" />
          <polygon points="520,130 516,126 512,130 516,134" className="ornament-star" />

          {/* محراب أو بوابات جانبية متموجة مزخرفة بنقاط */}
          <path d="M205 75 C220 85, 220 115, 205 125" className="decorative-line-thin" strokeWidth="1.5" />
          <path d="M198 80 C211 90, 211 110, 198 120" className="decorative-line-thin" style={{ strokeDasharray: '2 1' }} />
          <circle cx="214" cy="100" r="2.5" className="ornament-star" />
          
          <path d="M595 75 C580 85, 580 115, 595 125" className="decorative-line-thin" strokeWidth="1.5" />
          <path d="M602 80 C589 90, 589 110, 602 120" className="decorative-line-thin" style={{ strokeDasharray: '2 1' }} />
          <circle cx="586" cy="100" r="2.5" className="ornament-star" />

          {/* اسم السورة بخط القرآن الكريم */}
          <text x="400" y="94" className="svg-text-primary font-['quranFont']">
            سورة {name.ar}
          </text>

          {/* مكان النزول ناعم وصغير جداً */}
          <text x="400" y="118" className="svg-text-english text-xs font-['quranFont']">
            {revelation_place.ar}
          </text>
        </g>

        {/* الجانب الأيسر (شمسة هندسية فاخرة تدور حول رقم السورة) */}
        <g transform="translate(120, 90)">
          {/* هالة الأشعة المحيطية بالدائرة */}
          <g>
            <line x1="0" y1="0" x2="0" y2="-45" className="mandala-ray" />
            <line x1="0" y1="0" x2="0" y2="45" className="mandala-ray" />
            <line x1="0" y1="0" x2="-45" y2="0" className="mandala-ray" />
            <line x1="0" y1="0" x2="45" y2="0" className="mandala-ray" />
            <line x1="0" y1="0" x2="-32" y2="-32" className="mandala-ray" />
            <line x1="0" y1="0" x2="32" y2="-32" className="mandala-ray" />
            <line x1="0" y1="0" x2="-32" y2="32" className="mandala-ray" />
            <line x1="0" y1="0" x2="32" y2="32" className="mandala-ray" />
          </g>
          <circle cx="0" cy="0" r="44" fill="none" stroke="var(--primary)" strokeWidth="0.5" opacity="0.4" />
          <circle cx="0" cy="0" r="38" fill="none" stroke="var(--primary)" strokeWidth="1.25" strokeDasharray="4 2" opacity="0.8" />
          <polygon points="0,-45 3,-41 0,-37 -3,-41" className="ornament-star" />
          <polygon points="0,45 3,41 0,37 -3,41" className="ornament-star" />
          <polygon points="-45,0 -41,3 -37,0 -41,-3" className="ornament-star" />
          <polygon points="45,0 41,3 37,0 41,-3" className="ornament-star" />

          {/* الدائرة المركزية مع رقم السورة */}
          <circle cx="0" cy="0" r="30" className="svg-circle" />
          <text cx="0" cy="0" dy="0" dominantBaseline="central" className="svg-number-text">
            {number}
          </text>
        </g>

        {/* الجانب الأيمن (شمسة هندسية فاخرة تدور حول عدد الآيات) */}
        <g transform="translate(680, 90)">
          {/* هالة الأشعة المحيطية بالدائرة */}
          <g>
            <line x1="0" y1="0" x2="0" y2="-45" className="mandala-ray" />
            <line x1="0" y1="0" x2="0" y2="45" className="mandala-ray" />
            <line x1="0" y1="0" x2="-45" y2="0" className="mandala-ray" />
            <line x1="0" y1="0" x2="45" y2="0" className="mandala-ray" />
            <line x1="0" y1="0" x2="-32" y2="-32" className="mandala-ray" />
            <line x1="0" y1="0" x2="32" y2="-32" className="mandala-ray" />
            <line x1="0" y1="0" x2="-32" y2="32" className="mandala-ray" />
            <line x1="0" y1="0" x2="32" y2="32" className="mandala-ray" />
          </g>
          <circle cx="0" cy="0" r="44" fill="none" stroke="var(--primary)" strokeWidth="0.5" opacity="0.4" />
          <circle cx="0" cy="0" r="38" fill="none" stroke="var(--primary)" strokeWidth="1.25" strokeDasharray="4 2" opacity="0.8" />
          <polygon points="0,-45 3,-41 0,-37 -3,-41" className="ornament-star" />
          <polygon points="0,45 3,41 0,37 -3,41" className="ornament-star" />
          <polygon points="-45,0 -41,3 -37,0 -41,-3" className="ornament-star" />
          <polygon points="45,0 41,3 37,0 41,-3" className="ornament-star" />

          {/* الدائرة المركزية مع عدد الآيات */}
          <circle cx="0" cy="0" r="30" className="svg-circle-accent" />
          <text cx="0" cy="0" dy="0" dominantBaseline="central" className="svg-number-text-primary">
            {verses_count}
          </text>
        </g>
      </svg>
    </>
  );
}