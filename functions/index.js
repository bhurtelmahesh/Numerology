const MASTER_NUMBERS = new Set([11, 22, 33]);
const VOWELS = new Set(['A', 'E', 'I', 'O', 'U']);
const PYTHAGOREAN = {
  A: 1, J: 1, S: 1,
  B: 2, K: 2, T: 2,
  C: 3, L: 3, U: 3,
  D: 4, M: 4, V: 4,
  E: 5, N: 5, W: 5,
  F: 6, O: 6, X: 6,
  G: 7, P: 7, Y: 7,
  H: 8, Q: 8, Z: 8,
  I: 9, R: 9
};
const CHALDEAN = {
  A: 1, I: 1, J: 1, Q: 1, Y: 1,
  B: 2, K: 2, R: 2,
  C: 3, G: 3, L: 3, S: 3,
  D: 4, M: 4, T: 4,
  E: 5, H: 5, N: 5, X: 5,
  U: 6, V: 6, W: 6,
  O: 7, Z: 7,
  F: 8, P: 8
};

const PAGE_LANG = document.documentElement.lang || 'en';
const UI_TEXT = {
  es: {
    'Life Path': 'Camino de Vida',
    'Birthday': 'Cumpleaños',
    'Name Number / Expression': 'Número del Nombre / Expresión',
    'Soul Urge / Heart': 'Impulso del Alma / Corazón',
    'Personality': 'Personalidad',
    'Maturity': 'Madurez',
    'Balance': 'Equilibrio',
    'Rational Thought': 'Pensamiento Racional',
    'What it is:': 'Qué es:',
    'What it means to you:': 'Qué significa para ti:',
    'Strength:': 'Fortaleza:',
    'Friction:': 'Fricción:',
    'Use it like this:': 'Úsalo así:',
    'Practical guidance:': 'Guía práctica:',
    'Personal Year': 'Año Personal',
    'Personal Month': 'Mes Personal',
    'Personal Day': 'Día Personal',
    'Universal Year': 'Año Universal',
    'Triad': 'Tríada',
    'Overtone': 'Sobretono',
    'Karmic lessons': 'Lecciones Kármicas',
    'Hidden passion / Intensification': 'Pasión Oculta / Intensificación',
    'Subconscious response': 'Respuesta Subconsciente',
    'Point of security': 'Punto de Seguridad',
    'First vowel': 'Primera Vocal',
    'Cornerstone': 'Piedra Angular',
    'Capstone': 'Letra Final',
    'Inclusion table': 'Tabla de Inclusión',
    'Pinnacle:': 'Pináculo:',
    'Challenge:': 'Desafío:',
    'Foundation': 'Fundamentos',
    'Name numbers': 'Números del Nombre',
    'Chosen numbers': 'Números Elegidos',
    'Birth numbers': 'Números de Nacimiento',
    'Life periods': 'Períodos de Vida',
    'Calendar cycles': 'Ciclos del Calendario',
    'Important years': 'Años Importantes',
    'Advanced timing': 'Temporalidad Avanzada',
    'Other numbers': 'Otros Números',
    'Combination synthesis': 'Síntesis de Combinación',
    'Current age': 'Edad Actual',
    'Next milestone year': 'Próximo Año Hito',
    'Highlight year': 'Año Destacado',
    'Red-letter year': 'Año Señalado',
    'Maturity number': 'Número de Madurez',
    'Overtone number': 'Número de Sobretono',
    'Triad numbers': 'Números de Tríada',
    'Progressed letters': 'Letras Progresadas',
    'Essence number': 'Número de Esencia',
    'Hidden essence': 'Esencia Oculta',
    'Hidden cross': 'Cruz Oculta',
    'Type and traits': 'Tipo y Rasgos',
    'Malefic / karmic-debt flags': 'Señales Maléficas / Deuda Kármica',
    'Chosen item': 'Elemento Elegido',
    'Chosen raw total': 'Total Bruto Elegido',
    'Chosen reduced number': 'Número Reducido Elegido',
    'Use case note': 'Nota de Uso',
    'No chosen item entered': 'No se ingresó elemento elegido',
    'Baby naming / business naming': 'Nombres de bebé / negocio',
    'House / office / P.O. box': 'Casa / oficina / apartado postal',
    'Pets and vanity plates': 'Mascotas y placas personalizadas',
    'Reading report': 'Informe de lectura',
    'summaryIntro': 'Tu carta se centra en Camino de Vida {lifePath}, el patrón {path}. Esto significa que tu crecimiento más fuerte viene de esta lección práctica: {guidance} Tu Corazón {soulUrge} ({inner}) muestra lo que te alimenta emocionalmente: {innerStrength} Tu Personalidad {personality} ({outer}) muestra el estilo que otros pueden notar primero.',
    'Your useful strength:': 'Tu fortaleza útil:',
    'Your likely friction:': 'Tu fricción probable:',
    'This year:': 'Este año:',
    'Growth direction:': 'Dirección de crecimiento:',
    'Watch point:': 'Punto de atención:',
    'Chosen number:': 'Número elegido:',
    'How to read it:': 'Cómo leerlo:',
    'Open reference': 'Abrir referencia',
    'You': 'Tú',
    'See worksheet guide': 'Ver guía de hoja',
    'Try asking about a chart term': 'Prueba preguntando por un término del chart',
    'askFallback': 'Puedo explicar Camino de Vida, Número del Corazón, Personalidad, Pináculos, Desafíos, Año Personal, Esencia, Tabla de Inclusión, Lecciones Kármicas, Cruz Oculta, números elegidos y límites de evidencia.',
    'askWelcome': 'Pregunta cosas como “¿Qué es Camino de Vida?”, “¿Cómo leo Lecciones Kármicas?” o “¿Qué es Esencia?”'
  },
  hi: {
    'Life Path': 'जीवन पथ',
    'Birthday': 'जन्मदिन',
    'Name Number / Expression': 'नाम नंबर / अभिव्यक्ति',
    'Soul Urge / Heart': 'आत्म आग्रह / हृदय',
    'Personality': 'व्यक्तित्व',
    'Maturity': 'परिपक्वता',
    'Balance': 'संतुलन',
    'Rational Thought': 'तार्किक विचार',
    'What it is:': 'यह क्या है:',
    'What it means to you:': 'आपके लिए अर्थ:',
    'Strength:': 'ताकत:',
    'Friction:': 'घर्षण:',
    'Use it like this:': 'इसे ऐसे उपयोग करें:',
    'Practical guidance:': 'व्यावहारिक मार्गदर्शन:',
    'Personal Year': 'व्यक्तिगत वर्ष',
    'Personal Month': 'व्यक्तिगत महीना',
    'Personal Day': 'व्यक्तिगत दिन',
    'Universal Year': 'सार्वभौमिक वर्ष',
    'Triad': 'त्रय',
    'Overtone': 'ओवरटोन',
    'Karmic lessons': 'कर्मिक पाठ',
    'Hidden passion / Intensification': 'छिपा जुनून / तीव्रता',
    'Subconscious response': 'अवचेतन प्रतिक्रिया',
    'Point of security': 'सुरक्षा बिंदु',
    'First vowel': 'पहला स्वर',
    'Cornerstone': 'आरंभ अक्षर',
    'Capstone': 'अंतिम अक्षर',
    'Inclusion table': 'समावेशन तालिका',
    'Pinnacle:': 'शिखर:',
    'Challenge:': 'चुनौती:',
    'Foundation': 'आधार',
    'Name numbers': 'नाम नंबर',
    'Chosen numbers': 'चुने गए नंबर',
    'Birth numbers': 'जन्म नंबर',
    'Life periods': 'जीवन काल',
    'Calendar cycles': 'कैलेंडर चक्र',
    'Important years': 'महत्वपूर्ण वर्ष',
    'Advanced timing': 'उन्नत समय',
    'Other numbers': 'अन्य नंबर',
    'Combination synthesis': 'संयोजन सार',
    'Current age': 'वर्तमान आयु',
    'Next milestone year': 'अगला मील का पत्थर वर्ष',
    'Highlight year': 'प्रमुख वर्ष',
    'Red-letter year': 'विशेष वर्ष',
    'Maturity number': 'परिपक्वता नंबर',
    'Overtone number': 'ओवरटोन नंबर',
    'Triad numbers': 'त्रय नंबर',
    'Progressed letters': 'प्रगत अक्षर',
    'Essence number': 'सार नंबर',
    'Hidden essence': 'छिपा सार',
    'Hidden cross': 'छिपा क्रॉस',
    'Type and traits': 'प्रकार और गुण',
    'Malefic / karmic-debt flags': 'मालेफ़िक / कर्मिक ऋण संकेत',
    'Chosen item': 'चुना गया आइटम',
    'Chosen raw total': 'चुना गया कच्चा योग',
    'Chosen reduced number': 'चुना गया घटाया नंबर',
    'Use case note': 'उपयोग नोट',
    'No chosen item entered': 'कोई चुना आइटम दर्ज नहीं',
    'Baby naming / business naming': 'बच्चे / व्यवसाय का नाम',
    'House / office / P.O. box': 'घर / कार्यालय / पी.ओ. बॉक्स',
    'Pets and vanity plates': 'पालतू और विशेष प्लेट',
    'Reading report': 'रीडिंग रिपोर्ट',
    'summaryIntro': 'आपका चार्ट जीवन पथ {lifePath}, {path} पैटर्न पर केंद्रित है। इसका अर्थ है कि आपकी सबसे मजबूत वृद्धि इस व्यावहारिक पाठ से आती है: {guidance} आपका हृदय {soulUrge} ({inner}) दिखाता है कि आपको भावनात्मक रूप से क्या पोषण देता है: {innerStrength} आपका व्यक्तित्व {personality} ({outer}) वह शैली दिखाता है जिसे लोग पहले देख सकते हैं।',
    'Your useful strength:': 'आपकी उपयोगी ताकत:',
    'Your likely friction:': 'आपका संभावित घर्षण:',
    'This year:': 'इस वर्ष:',
    'Growth direction:': 'विकास दिशा:',
    'Watch point:': 'ध्यान बिंदु:',
    'Chosen number:': 'चुना गया नंबर:',
    'How to read it:': 'कैसे पढ़ें:',
    'Open reference': 'संदर्भ खोलें',
    'You': 'आप',
    'See worksheet guide': 'वर्कशीट गाइड देखें',
    'Try asking about a chart term': 'किसी चार्ट शब्द के बारे में पूछें',
    'askFallback': 'मैं जीवन पथ, हृदय नंबर, व्यक्तित्व, शिखर, चुनौतियां, व्यक्तिगत वर्ष, सार, समावेशन तालिका, कर्मिक पाठ, छिपा क्रॉस, चुने गए नंबर और प्रमाण सीमाएं समझा सकता हूँ।',
    'askWelcome': 'ऐसे पूछें: “जीवन पथ क्या है?”, “कर्मिक पाठ कैसे पढ़ें?” या “सार क्या है?”'
  },
  ja: {
    'Life Path': 'ライフパス',
    'Birthday': '誕生日',
    'Name Number / Expression': '名前数 / 表現',
    'Soul Urge / Heart': 'ソウルアージ / ハート',
    'Personality': '人格',
    'Maturity': '成熟',
    'Balance': 'バランス',
    'Rational Thought': '合理的思考',
    'What it is:': 'これは何か:',
    'What it means to you:': 'あなたへの意味:',
    'Strength:': '強み:',
    'Friction:': '摩擦:',
    'Use it like this:': '使い方:',
    'Practical guidance:': '実用的な指針:',
    'Personal Year': '個人年',
    'Personal Month': '個人月',
    'Personal Day': '個人日',
    'Universal Year': 'ユニバーサル年',
    'Triad': 'トライアド',
    'Overtone': 'オーバートーン',
    'Karmic lessons': 'カルマレッスン',
    'Hidden passion / Intensification': '隠れた情熱 / 強調',
    'Subconscious response': '潜在意識の反応',
    'Point of security': '安心ポイント',
    'First vowel': '最初の母音',
    'Cornerstone': 'コーナーストーン',
    'Capstone': 'キャップストーン',
    'Inclusion table': 'インクルージョン表',
    'Pinnacle:': 'ピナクル:',
    'Challenge:': 'チャレンジ:',
    'Foundation': '基礎',
    'Name numbers': '名前の数字',
    'Chosen numbers': '選んだ数字',
    'Birth numbers': '出生の数字',
    'Life periods': '人生期間',
    'Calendar cycles': 'カレンダー周期',
    'Important years': '重要な年',
    'Advanced timing': '高度なタイミング',
    'Other numbers': 'その他の数字',
    'Combination synthesis': '組み合わせの要約',
    'Current age': '現在の年齢',
    'Next milestone year': '次の節目年',
    'Highlight year': 'ハイライト年',
    'Red-letter year': '特別年',
    'Maturity number': '成熟数',
    'Overtone number': 'オーバートーン数',
    'Triad numbers': 'トライアド数',
    'Progressed letters': '進行文字',
    'Essence number': 'エッセンス数',
    'Hidden essence': '隠れたエッセンス',
    'Hidden cross': '隠れたクロス',
    'Type and traits': 'タイプと特性',
    'Malefic / karmic-debt flags': '凶数 / カルマ債務フラグ',
    'Chosen item': '選択項目',
    'Chosen raw total': '選択項目の合計',
    'Chosen reduced number': '選択項目の還元数',
    'Use case note': '使い方メモ',
    'No chosen item entered': '選択項目なし',
    'Baby naming / business naming': '赤ちゃん名 / ビジネス名',
    'House / office / P.O. box': '家 / オフィス / 私書箱',
    'Pets and vanity plates': 'ペットとカスタムプレート',
    'Reading report': 'リーディングレポート',
    'summaryIntro': 'あなたのチャートはライフパス{lifePath}、{path}のパターンを中心にしています。つまり、最も強い成長はこの実践的な課題から生まれます: {guidance} ハート{soulUrge}（{inner}）は、感情的に満たされるものを示します: {innerStrength} 人格{personality}（{outer}）は、周囲が最初に気づきやすいスタイルを示します。',
    'Your useful strength:': '役立つ強み:',
    'Your likely friction:': '起こりやすい摩擦:',
    'This year:': '今年:',
    'Growth direction:': '成長の方向:',
    'Watch point:': '注意点:',
    'Chosen number:': '選択番号:',
    'How to read it:': '読み方:',
    'Open reference': '参考を開く',
    'You': 'あなた',
    'See worksheet guide': 'ワークシートガイドを見る',
    'Try asking about a chart term': 'チャート用語について質問してみてください',
    'askFallback': 'ライフパス、ハート数、人格、ピナクル、チャレンジ、個人年、エッセンス、インクルージョン表、カルマレッスン、隠れたクロス、選んだ数字、根拠の限界を説明できます。',
    'askWelcome': '「ライフパスとは？」「カルマレッスンはどう読む？」「エッセンスとは？」のように質問できます。'
  },
  ne: {
    'Life Path': 'जीवन पथ',
    'Birthday': 'जन्मदिन',
    'Name Number / Expression': 'नाम नम्बर / अभिव्यक्ति',
    'Soul Urge / Heart': 'आत्म आग्रह / हृदय',
    'Personality': 'व्यक्तित्व',
    'Maturity': 'परिपक्वता',
    'Balance': 'सन्तुलन',
    'Rational Thought': 'तार्किक विचार',
    'What it is:': 'यो के हो:',
    'What it means to you:': 'तपाईंका लागि अर्थ:',
    'Strength:': 'बल:',
    'Friction:': 'घर्षण:',
    'Use it like this:': 'यसरी प्रयोग गर्नुहोस्:',
    'Practical guidance:': 'व्यावहारिक मार्गदर्शन:',
    'Personal Year': 'व्यक्तिगत वर्ष',
    'Personal Month': 'व्यक्तिगत महिना',
    'Personal Day': 'व्यक्तिगत दिन',
    'Universal Year': 'विश्वव्यापी वर्ष',
    'Triad': 'त्रय',
    'Overtone': 'ओभरटोन',
    'Karmic lessons': 'कर्मिक पाठ',
    'Hidden passion / Intensification': 'लुकेको चाहना / तीव्रता',
    'Subconscious response': 'अवचेतन प्रतिक्रिया',
    'Point of security': 'सुरक्षा बिन्दु',
    'First vowel': 'पहिलो स्वर',
    'Cornerstone': 'आरम्भ अक्षर',
    'Capstone': 'अन्तिम अक्षर',
    'Inclusion table': 'समावेश तालिका',
    'Pinnacle:': 'पिनाकल:',
    'Challenge:': 'चुनौती:',
    'Foundation': 'आधार',
    'Name numbers': 'नाम नम्बर',
    'Chosen numbers': 'छानिएका नम्बर',
    'Birth numbers': 'जन्म नम्बर',
    'Life periods': 'जीवन अवधि',
    'Calendar cycles': 'क्यालेन्डर चक्र',
    'Important years': 'महत्त्वपूर्ण वर्ष',
    'Advanced timing': 'उन्नत समय',
    'Other numbers': 'अन्य नम्बर',
    'Combination synthesis': 'संयोजन सार',
    'Current age': 'हालको उमेर',
    'Next milestone year': 'अर्को माइलस्टोन वर्ष',
    'Highlight year': 'हाइलाइट वर्ष',
    'Red-letter year': 'विशेष वर्ष',
    'Maturity number': 'परिपक्वता नम्बर',
    'Overtone number': 'ओभरटोन नम्बर',
    'Triad numbers': 'त्रय नम्बर',
    'Progressed letters': 'प्रगत अक्षर',
    'Essence number': 'सार नम्बर',
    'Hidden essence': 'लुकेको सार',
    'Hidden cross': 'लुकेको क्रस',
    'Type and traits': 'प्रकार र गुण',
    'Malefic / karmic-debt flags': 'मालेफिक / कर्मिक ऋण संकेत',
    'Chosen item': 'छानिएको वस्तु',
    'Chosen raw total': 'छानिएको कच्चा योग',
    'Chosen reduced number': 'छानिएको घटाइएको नम्बर',
    'Use case note': 'प्रयोग नोट',
    'No chosen item entered': 'छानिएको वस्तु छैन',
    'Baby naming / business naming': 'बच्चा / व्यवसाय नाम',
    'House / office / P.O. box': 'घर / कार्यालय / पी.ओ. बक्स',
    'Pets and vanity plates': 'पाल्तु र विशेष प्लेट',
    'Reading report': 'रीडिङ रिपोर्ट',
    'summaryIntro': 'तपाईंको चार्ट जीवन पथ {lifePath}, {path} ढाँचामा केन्द्रित छ। यसको अर्थ तपाईंको बलियो वृद्धि यस व्यावहारिक पाठबाट आउँछ: {guidance} तपाईंको हृदय {soulUrge} ({inner}) ले तपाईंलाई भावनात्मक रूपमा के पोषण गर्छ देखाउँछ: {innerStrength} तपाईंको व्यक्तित्व {personality} ({outer}) ले अरूले पहिले देख्न सक्ने शैली देखाउँछ।',
    'Your useful strength:': 'तपाईंको उपयोगी बल:',
    'Your likely friction:': 'सम्भावित घर्षण:',
    'This year:': 'यो वर्ष:',
    'Growth direction:': 'विकास दिशा:',
    'Watch point:': 'ध्यान दिनुपर्ने बिन्दु:',
    'Chosen number:': 'छानिएको नम्बर:',
    'How to read it:': 'कसरी पढ्ने:',
    'Open reference': 'सन्दर्भ खोल्नुहोस्',
    'You': 'तपाईं',
    'See worksheet guide': 'वर्कसिट गाइड हेर्नुहोस्',
    'Try asking about a chart term': 'चार्ट शब्दबारे सोधेर हेर्नुहोस्',
    'askFallback': 'म जीवन पथ, हृदय नम्बर, व्यक्तित्व, पिनाकल, चुनौती, व्यक्तिगत वर्ष, सार, समावेश तालिका, कर्मिक पाठ, लुकेको क्रस, छानिएका नम्बर र प्रमाण सीमाहरू बुझाउन सक्छु।',
    'askWelcome': '“जीवन पथ के हो?”, “कर्मिक पाठ कसरी पढ्ने?” वा “सार के हो?” जस्ता कुरा सोध्नुहोस्।'
  }
};

function ui(text) {
  return UI_TEXT[PAGE_LANG]?.[text] || text;
}

function uiTemplate(key, values) {
  return ui(key).replace(/\{(\w+)\}/g, (_, name) => values[name] ?? '');
}

const GENERATED_FALLBACK_TEXT = {
  es: 'Contenido localizado: usa este punto como guía simbólica dentro del perfil.',
  hi: 'स्थानीय सामग्री: इस बिंदु को प्रोफ़ाइल के भीतर प्रतीकात्मक मार्गदर्शन की तरह पढ़ें।',
  ja: 'ローカライズ済み内容: この項目はプロフィール内の象徴的なガイドとして読んでください。',
  ne: 'स्थानीय सामग्री: यो बिन्दुलाई प्रोफाइलभित्र प्रतीकात्मक मार्गदर्शनका रूपमा पढ्नुहोस्।'
};

const LOCAL_GENERATED_TEXT = {
  es: new Map([
    ['Life Path', 'Camino de Vida'],
    ['Personal Year', 'Año Personal'],
    ['Personal Month', 'Mes Personal'],
    ['Personal Day', 'Día Personal'],
    ['Universal Year', 'Año Universal'],
    ['Heart', 'Corazón'],
    ['Personality', 'Personalidad'],
    ['Maturity', 'Madurez'],
    ['Historical use', 'Uso histórico'],
    ['This app', 'Esta aplicación'],
    ['method', 'método'],
    ['culture', 'cultura'],
    ['evidence', 'evidencia'],
    ['Pythagorean / modern Western numerology', 'Numerología pitagórica / occidental moderna'],
    ['Chaldean-inspired name values', 'Valores de nombre inspirados en caldeo'],
    ['Gematria, isopsephy, and abjad', 'Gematría, isopsefía y abjad'],
    ['Pythagorean number symbolism', 'Simbolismo numérico pitagórico'],
    ['Chinese auspicious and inauspicious numbers', 'Números auspiciosos e inauspiciosos chinos'],
    ['Japanese avoidance numbers', 'Números evitados en Japón'],
    ['Indian and planetary correspondences', 'Correspondencias indias y planetarias'],
    ['Religious and mythic number patterns', 'Patrones numéricos religiosos y míticos'],
    ['The Forer / Barnum effect', 'El efecto Forer / Barnum'],
    ['What counts as proof?', '¿Qué cuenta como prueba?'],
    ['Advanced chart vocabulary', 'Vocabulario avanzado del chart'],
    ['Important year numbers', 'Números de años importantes'],
    ['Progressed letters and essence', 'Letras progresadas y esencia'],
    ['Inclusion, hidden cross, and other name-pattern numbers', 'Inclusión, cruz oculta y otros patrones del nombre'],
    ['Reflective use case', 'Uso reflexivo'],
    ['None', 'Ninguno'],
    ['Yes', 'Sí'],
    ['No', 'No'],
    ['Optional', 'Opcional'],
    ['Supported', 'Compatible']
  ]),
  hi: new Map([
    ['Life Path', 'जीवन पथ'],
    ['Personal Year', 'व्यक्तिगत वर्ष'],
    ['Personal Month', 'व्यक्तिगत महीना'],
    ['Personal Day', 'व्यक्तिगत दिन'],
    ['Universal Year', 'सार्वभौमिक वर्ष'],
    ['Heart', 'हृदय'],
    ['Personality', 'व्यक्तित्व'],
    ['Maturity', 'परिपक्वता'],
    ['Historical use', 'ऐतिहासिक उपयोग'],
    ['This app', 'यह ऐप'],
    ['method', 'विधि'],
    ['culture', 'संस्कृति'],
    ['evidence', 'प्रमाण'],
    ['Pythagorean / modern Western numerology', 'पायथागोरियन / आधुनिक पश्चिमी अंक-ज्योतिष'],
    ['Chaldean-inspired name values', 'कैल्डियन-प्रेरित नाम मान'],
    ['Gematria, isopsephy, and abjad', 'जेमात्रिया, इसोप्सेफी और अब्जद'],
    ['Pythagorean number symbolism', 'पायथागोरियन संख्या प्रतीकवाद'],
    ['Chinese auspicious and inauspicious numbers', 'चीनी शुभ और अशुभ नंबर'],
    ['Japanese avoidance numbers', 'जापानी परहेज़ नंबर'],
    ['Indian and planetary correspondences', 'भारतीय और ग्रह संबंध'],
    ['Religious and mythic number patterns', 'धार्मिक और मिथकीय संख्या पैटर्न'],
    ['The Forer / Barnum effect', 'फोरर / बार्नम प्रभाव'],
    ['What counts as proof?', 'प्रमाण क्या माना जाए?'],
    ['Advanced chart vocabulary', 'उन्नत चार्ट शब्दावली'],
    ['Important year numbers', 'महत्वपूर्ण वर्ष नंबर'],
    ['Progressed letters and essence', 'प्रगत अक्षर और सार'],
    ['Inclusion, hidden cross, and other name-pattern numbers', 'समावेशन, छिपा क्रॉस और अन्य नाम-पैटर्न नंबर'],
    ['Reflective use case', 'चिंतनात्मक उपयोग'],
    ['None', 'कोई नहीं'],
    ['Yes', 'हाँ'],
    ['No', 'नहीं'],
    ['Optional', 'वैकल्पिक'],
    ['Supported', 'समर्थित']
  ]),
  ja: new Map([
    ['Personal Year', '個人年'],
    ['Personal Month', '個人月'],
    ['Personal Day', '個人日'],
    ['Universal Year', 'ユニバーサル年'],
    ['Life Path', 'ライフパス'],
    ['Heart', 'ハート'],
    ['Personality', '人格'],
    ['Maturity', '成熟'],
    ['Karmic Lessons', 'カルマレッスン'],
    ['Karmic lessons', 'カルマレッスン'],
    ['Hidden Passion', '隠れた情熱'],
    ['Hidden passion', '隠れた情熱'],
    ['Chosen Numbers', '選んだ数字'],
    ['Chosen numbers', '選んだ数字'],
    ['Progressed Letters', '進行文字'],
    ['Progressed letters', '進行文字'],
    ['Essence', 'エッセンス'],
    ['Hidden Essence', '隠れたエッセンス'],
    ['Inclusion Table', 'インクルージョン表'],
    ['Inclusion table', 'インクルージョン表'],
    ['Pinnacle', 'ピナクル'],
    ['Challenge', 'チャレンジ'],
    ['Use this', 'これは'],
    ['How to read it:', '読み方:'],
    ['The main theme of this calendar year for you.', 'あなたにとって今年の主なテーマです。'],
    ['The current month’s focus inside the year theme.', '年のテーマの中にある今月の焦点です。'],
    ['The immediate daily tone.', '今日の直接的なトーンです。'],
    ['The collective calendar tone.', '集合的な暦のトーンです。'],
    ['Year, month, and day together.', '年・月・日を合わせた読みです。'],
    ['Personal Year plus Universal Year.', '個人年とユニバーサル年を合わせたものです。'],
    ['The main symbolic tone of the chosen item.', '選んだ項目の主な象徴的トーンです。'],
    ['This section evaluates numbers you can choose.', 'このセクションでは自分で選べる数字を評価します。'],
    ['Names can be compared before choosing them.', '名前は選ぶ前に比較できます。'],
    ['Addresses and boxes often contain digits and letters.', '住所や私書箱には数字や文字が含まれることがあります。'],
    ['Labels can carry playful or personal symbolism.', 'ラベルには遊び心や個人的な象徴性が宿ることがあります。'],
    ['Open reference', '参考を開く'],
    ['Historical use', '歴史的使用'],
    ['This app', 'このアプリ'],
    ['Use it', '使います'],
    ['Use flags as caution themes, not fear-based predictions.', 'フラグは恐怖ベースの予測ではなく、注意テーマとして使います。'],
    ['A higher count suggests a broader automatic response range.', '数が多いほど、自動的な反応の幅が広いことを示します。'],
    ['Treat them as skills to practice consciously, not as a punishment.', '罰ではなく、意識的に練習するスキルとして読みます。'],
    ['This is the loudest habit in the name: useful as a strength, risky if overused.', '名前の中で最も強い癖です。強みとして役立ちますが、使いすぎると偏りになります。'],
    ['A wider count suggests a broader automatic response range.', '数が多いほど、自動反応の幅が広いことを示します。'],
    ['Use it as a stabilizing behavior when pressure rises.', 'プレッシャーが高まった時の安定行動として使います。'],
    ['The first vowel is read as instinctive emotional tone.', '最初の母音は本能的な感情トーンとして読みます。'],
    ['The first letter of the name.', '名前の最初の文字です。'],
    ['The final letter of the name.', '名前の最後の文字です。'],
    ['Letter counts by number.', '数字ごとの文字数です。'],
    ['Repeated numbers show emphasis; missing numbers show development areas.', '多い数字は強調、欠けた数字は成長領域を示します。'],
    ['None', 'なし'],
    ['Yes', 'はい'],
    ['No', 'いいえ'],
    ['Optional', '任意'],
    ['Supported', '対応']
  ]),
  ne: new Map([
    ['Life Path', 'जीवन पथ'],
    ['Personal Year', 'व्यक्तिगत वर्ष'],
    ['Personal Month', 'व्यक्तिगत महिना'],
    ['Personal Day', 'व्यक्तिगत दिन'],
    ['Universal Year', 'विश्वव्यापी वर्ष'],
    ['Heart', 'हृदय'],
    ['Personality', 'व्यक्तित्व'],
    ['Maturity', 'परिपक्वता'],
    ['Historical use', 'ऐतिहासिक प्रयोग'],
    ['This app', 'यो एप'],
    ['method', 'विधि'],
    ['culture', 'संस्कृति'],
    ['evidence', 'प्रमाण'],
    ['Pythagorean / modern Western numerology', 'पाइथागोरियन / आधुनिक पश्चिमी अंक ज्योतिष'],
    ['Chaldean-inspired name values', 'क्याल्डियन-प्रेरित नाम मान'],
    ['Gematria, isopsephy, and abjad', 'जेमाट्रिया, इसोप्सेफी र अब्जद'],
    ['Pythagorean number symbolism', 'पाइथागोरियन संख्या प्रतीकवाद'],
    ['Chinese auspicious and inauspicious numbers', 'चिनियाँ शुभ र अशुभ नम्बर'],
    ['Japanese avoidance numbers', 'जापानी परहेज नम्बर'],
    ['Indian and planetary correspondences', 'भारतीय र ग्रह सम्बन्ध'],
    ['Religious and mythic number patterns', 'धार्मिक र मिथकीय संख्या प्याटर्न'],
    ['The Forer / Barnum effect', 'फोरर / बार्नम प्रभाव'],
    ['What counts as proof?', 'प्रमाण केलाई मान्ने?'],
    ['Advanced chart vocabulary', 'उन्नत चार्ट शब्दावली'],
    ['Important year numbers', 'महत्त्वपूर्ण वर्ष नम्बर'],
    ['Progressed letters and essence', 'प्रगत अक्षर र सार'],
    ['Inclusion, hidden cross, and other name-pattern numbers', 'समावेश, लुकेको क्रस र अन्य नाम-प्याटर्न नम्बर'],
    ['Reflective use case', 'चिन्तनात्मक प्रयोग'],
    ['None', 'छैन'],
    ['Yes', 'हो'],
    ['No', 'होइन'],
    ['Optional', 'वैकल्पिक'],
    ['Supported', 'समर्थित']
  ])
};

function localText(text) {
  let output = String(text);
  const replacements = LOCAL_GENERATED_TEXT[PAGE_LANG];
  if (!replacements) return output;
  for (const [from, to] of replacements.entries()) {
    output = output.split(from).join(to);
  }
  if (PAGE_LANG !== 'en' && output === String(text) && /[A-Za-z]{4}/.test(output) && output.length > 32) {
    return GENERATED_FALLBACK_TEXT[PAGE_LANG] || output;
  }
  return output;
}

const MEANINGS = {
  1: { title: 'Originator', keywords: 'initiative, identity, leadership', strength: 'You are at your best when you choose a direction, take ownership, and start before everyone agrees.', friction: 'The trap is impatience, pride, or feeling you must do everything alone.', guidance: 'Pick one clear goal, make the first move, and practice leading without dismissing other people.' },
  2: { title: 'Diplomat', keywords: 'cooperation, tact, sensitivity', strength: 'You notice tone, timing, and other people’s needs, which makes you good at partnership and mediation.', friction: 'The trap is avoiding conflict until resentment builds, or shrinking yourself to keep peace.', guidance: 'Say what you need early, choose balanced relationships, and use your sensitivity as information rather than fear.' },
  3: { title: 'Messenger', keywords: 'expression, joy, imagination', strength: 'You bring ideas to life through words, humor, creativity, and emotional color.', friction: 'The trap is scattering energy, talking about the idea more than finishing it, or hiding behind charm.', guidance: 'Choose one creative outlet, finish small pieces often, and say the true thing simply.' },
  4: { title: 'Builder', keywords: 'structure, work, reliability', strength: 'You can turn vague ideas into real systems through discipline, patience, and practical effort.', friction: 'The trap is rigidity, fear of change, or measuring your worth only by productivity.', guidance: 'Build routines that support you, leave room for flexibility, and let slow progress count.' },
  5: { title: 'Explorer', keywords: 'change, freedom, versatility', strength: 'You adapt quickly, learn through experience, and bring life into stale situations.', friction: 'The trap is restlessness, overpromising, or escaping when commitment becomes boring.', guidance: 'Give yourself variety, but set a few non-negotiable anchors so freedom does not turn into chaos.' },
  6: { title: 'Guardian', keywords: 'care, beauty, responsibility', strength: 'You naturally protect, repair, teach, and improve the environment around you.', friction: 'The trap is carrying everyone, judging what is imperfect, or confusing love with control.', guidance: 'Help where help is welcome, keep your standards kind, and make your own peace part of the duty list.' },
  7: { title: 'Seeker', keywords: 'analysis, solitude, wisdom', strength: 'You are strong at research, pattern recognition, inner work, and seeing beneath surface explanations.', friction: 'The trap is isolation, suspicion, overthinking, or waiting for perfect certainty.', guidance: 'Protect quiet study time, then share what you learn in plain language and test ideas in real life.' },
  8: { title: 'Executor', keywords: 'power, finance, authority', strength: 'You can handle responsibility, resources, pressure, and large practical goals.', friction: 'The trap is control, burnout, status anxiety, or treating life like a scoreboard.', guidance: 'Define success ethically, delegate earlier, and use power to create stability rather than tension.' },
  9: { title: 'Humanitarian', keywords: 'completion, compassion, breadth', strength: 'You see the bigger picture and can care about people beyond your immediate circle.', friction: 'The trap is rescuing, disappointment, unfinished endings, or giving until you feel empty.', guidance: 'Choose causes carefully, finish old emotional chapters, and serve without losing your boundaries.' },
  11: { title: 'Illuminator', keywords: 'intuition, vision, inspiration', strength: 'You sense subtle patterns and can inspire people through insight, art, teaching, or example.', friction: 'The trap is nervous overload, self-doubt, or living in ideals without grounding them.', guidance: 'Write down your insights, keep your body/routine steady, and turn inspiration into one practical action.' },
  22: { title: 'Master builder', keywords: 'scale, strategy, manifestation', strength: 'You can think big and still care about structure, making you suited to serious long-range building.', friction: 'The trap is pressure, perfectionism, or abandoning the plan because it feels too large.', guidance: 'Break the vision into phases, build with trustworthy people, and measure progress by foundations laid.' },
  33: { title: 'Master teacher', keywords: 'compassion, healing, devotion', strength: 'You can guide, heal, teach, and hold people with unusual warmth when you are balanced.', friction: 'The trap is martyrdom, emotional exhaustion, or trying to save people from lessons they must learn.', guidance: 'Serve through clear boundaries, teach by example, and let care include yourself.' }
};

const LOCAL_MEANINGS = {
  ja: {
    1: { title: '創始者', keywords: '主導性、自己、リーダーシップ', strength: '方向を選び、責任を持ち、周囲の同意を待ちすぎずに始める力があります。', friction: '焦り、誇り、何でも一人で抱え込むことが課題です。', guidance: '明確な目標を一つ選び、最初の一歩を踏み出し、人を否定せずに導きましょう。' },
    2: { title: '調停者', keywords: '協力、配慮、感受性', strength: '空気、タイミング、人の必要に気づけるため、協力や仲介に向いています。', friction: '対立を避けすぎて不満をためたり、平和のために自分を小さくすることが課題です。', guidance: '必要なことを早めに伝え、対等な関係を選び、感受性を恐れではなく情報として使いましょう。' },
    3: { title: 'メッセンジャー', keywords: '表現、喜び、想像力', strength: '言葉、ユーモア、創造性、感情の色でアイデアに命を吹き込めます。', friction: 'エネルギーが散る、完成より話すことに寄る、魅力で本音を隠すことが課題です。', guidance: '創造的な場を一つ選び、小さく頻繁に完成させ、真実をシンプルに伝えましょう。' },
    4: { title: '建設者', keywords: '構造、努力、信頼性', strength: '曖昧な考えを、規律、忍耐、実務力で現実の仕組みにできます。', friction: '硬直、変化への恐れ、生産性だけで自分の価値を測ることが課題です。', guidance: '自分を支える習慣を作り、柔軟さを残し、ゆっくりした進歩も認めましょう。' },
    5: { title: '探検者', keywords: '変化、自由、多才さ', strength: '素早く適応し、経験から学び、停滞した状況に活気をもたらします。', friction: '落ち着きのなさ、約束しすぎ、退屈になると逃げることが課題です。', guidance: '変化の余地を持ちながら、自由が混乱にならないよう数個の軸を決めましょう。' },
    6: { title: '守護者', keywords: 'ケア、美、責任', strength: '守る、整える、教える、環境を良くする力があります。', friction: '何でも背負う、完璧でないものを裁く、愛と支配を混同することが課題です。', guidance: '歓迎される助けを差し出し、基準を優しく保ち、自分の平和も責任に含めましょう。' },
    7: { title: '探求者', keywords: '分析、孤独、知恵', strength: '調査、パターン認識、内面作業、表面下を見る力に優れています。', friction: '孤立、疑い、考えすぎ、完全な確信を待つことが課題です。', guidance: '静かな学びの時間を守り、学んだことを平易に共有し、現実で試しましょう。' },
    8: { title: '実行者', keywords: '力、資源、権威', strength: '責任、資源、圧力、大きな実務目標を扱えます。', friction: '支配、燃え尽き、地位への不安、人生を点数表のように扱うことが課題です。', guidance: '成功を倫理的に定義し、早めに任せ、力を緊張ではなく安定づくりに使いましょう。' },
    9: { title: '人道主義者', keywords: '完了、思いやり、広がり', strength: '大きな視点を持ち、身近な範囲を超えて人を思いやれます。', friction: '救いすぎ、失望、終わらない締めくくり、与えすぎることが課題です。', guidance: '関わるテーマを慎重に選び、古い感情の章を閉じ、境界を失わずに仕えましょう。' },
    11: { title: '照らす人', keywords: '直感、ビジョン、ひらめき', strength: '微細なパターンを感じ取り、洞察、芸術、教え、模範で人を励ませます。', friction: '神経の過負荷、自己不信、理想を現実に落とさないことが課題です。', guidance: '洞察を書き留め、体と習慣を安定させ、ひらめきを一つの行動に変えましょう。' },
    22: { title: 'マスタービルダー', keywords: '規模、戦略、実現', strength: '大きく考えつつ構造を大切にでき、長期的な構築に向いています。', friction: '重圧、完璧主義、大きすぎて計画を捨てることが課題です。', guidance: 'ビジョンを段階に分け、信頼できる人と作り、土台で進歩を測りましょう。' },
    33: { title: 'マスターティーチャー', keywords: '慈愛、癒し、献身', strength: 'バランスが取れている時、人を導き、癒し、温かく支えられます。', friction: '自己犠牲、感情的消耗、人が学ぶべき課題まで救おうとすることが課題です。', guidance: '明確な境界で仕え、模範で教え、ケアの中に自分自身も含めましょう。' }
  },
  es: {
    1: { title: 'Originador', keywords: 'iniciativa, identidad, liderazgo' },
    2: { title: 'Diplomático', keywords: 'cooperación, tacto, sensibilidad' },
    3: { title: 'Mensajero', keywords: 'expresión, alegría, imaginación' },
    4: { title: 'Constructor', keywords: 'estructura, trabajo, confiabilidad' },
    5: { title: 'Explorador', keywords: 'cambio, libertad, versatilidad' },
    6: { title: 'Guardián', keywords: 'cuidado, belleza, responsabilidad' },
    7: { title: 'Buscador', keywords: 'análisis, soledad, sabiduría' },
    8: { title: 'Ejecutor', keywords: 'poder, recursos, autoridad' },
    9: { title: 'Humanitario', keywords: 'cierre, compasión, amplitud' },
    11: { title: 'Iluminador', keywords: 'intuición, visión, inspiración' },
    22: { title: 'Maestro constructor', keywords: 'escala, estrategia, manifestación' },
    33: { title: 'Maestro guía', keywords: 'compasión, sanación, devoción' }
  },
  hi: {
    1: { title: 'आरंभकर्ता', keywords: 'पहल, पहचान, नेतृत्व' },
    2: { title: 'कूटनीतिज्ञ', keywords: 'सहयोग, समझदारी, संवेदनशीलता' },
    3: { title: 'संदेशवाहक', keywords: 'अभिव्यक्ति, आनंद, कल्पना' },
    4: { title: 'निर्माता', keywords: 'संरचना, काम, भरोसा' },
    5: { title: 'अन्वेषक', keywords: 'बदलाव, स्वतंत्रता, बहुमुखीपन' },
    6: { title: 'संरक्षक', keywords: 'देखभाल, सुंदरता, जिम्मेदारी' },
    7: { title: 'खोजी', keywords: 'विश्लेषण, एकांत, बुद्धि' },
    8: { title: 'कार्यान्वयनकर्ता', keywords: 'शक्ति, संसाधन, अधिकार' },
    9: { title: 'मानवतावादी', keywords: 'समापन, करुणा, व्यापकता' },
    11: { title: 'प्रकाशक', keywords: 'अंतर्ज्ञान, दृष्टि, प्रेरणा' },
    22: { title: 'मास्टर निर्माता', keywords: 'पैमाना, रणनीति, साकार करना' },
    33: { title: 'मास्टर शिक्षक', keywords: 'करुणा, उपचार, समर्पण' }
  },
  ne: {
    1: { title: 'आरम्भकर्ता', keywords: 'पहल, पहिचान, नेतृत्व' },
    2: { title: 'कूटनीतिज्ञ', keywords: 'सहकार्य, समझदारी, संवेदनशीलता' },
    3: { title: 'सन्देशवाहक', keywords: 'अभिव्यक्ति, आनन्द, कल्पना' },
    4: { title: 'निर्माता', keywords: 'संरचना, काम, भरोसा' },
    5: { title: 'अन्वेषक', keywords: 'बदलाव, स्वतन्त्रता, बहुमुखीपन' },
    6: { title: 'संरक्षक', keywords: 'हेरचाह, सौन्दर्य, जिम्मेवारी' },
    7: { title: 'खोजकर्ता', keywords: 'विश्लेषण, एकान्त, बुद्धि' },
    8: { title: 'कार्यान्वयनकर्ता', keywords: 'शक्ति, स्रोत, अधिकार' },
    9: { title: 'मानवतावादी', keywords: 'समापन, करुणा, व्यापकता' },
    11: { title: 'प्रकाशक', keywords: 'अन्तर्ज्ञान, दृष्टि, प्रेरणा' },
    22: { title: 'मास्टर निर्माता', keywords: 'पैमाना, रणनीति, साकार' },
    33: { title: 'मास्टर शिक्षक', keywords: 'करुणा, उपचार, समर्पण' }
  }
};

const LIBRARY = [
  { type: 'method', title: 'Pythagorean / modern Western numerology', text: 'Uses a repeating 1-9 alphabet table and reduces most totals to a single digit, while preserving 11, 22, and sometimes 33 as master numbers. This app uses it as the default because it is common in contemporary English-language manuals.', link: 'https://www.britannica.com/topic/numerology' },
  { type: 'method', title: 'Chaldean-inspired name values', text: 'A second alphabet table often presented as older and sound-based. It usually assigns letters to 1-8 rather than 1-9. This app offers it for comparison, while keeping interpretations conservative.', link: 'https://www.britannica.com/topic/numerology' },
  { type: 'method', title: 'Gematria, isopsephy, and abjad', text: 'Hebrew, Greek, and Arabic-letter systems have long linked letters and numbers. They are historically important, but they belong to their own languages and religious-literary settings.', link: 'https://www.britannica.com/topic/number-symbolism' },
  { type: 'culture', title: 'Pythagorean number symbolism', text: 'Classical number philosophy connected number, harmony, proportion, music, and cosmos. Modern numerology borrows the aura of this tradition, although today’s personality readings are later developments.', link: 'https://www.britannica.com/topic/number-symbolism' },
  { type: 'culture', title: 'Chinese auspicious and inauspicious numbers', text: 'Number meanings often arise from sound, custom, and social practice. Eight is widely treated as auspicious in Chinese contexts, while four can be avoided because it sounds like death in several East Asian languages.', link: 'https://www.britannica.com/topic/number-symbolism' },
  { type: 'culture', title: 'Japanese avoidance numbers', text: 'Four and nine can be avoided in hospitals, gifts, rooms, or ceremonies because of unlucky sound associations. This is cultural symbolism, not a mathematical rule.', link: 'https://www.britannica.com/topic/number-symbolism' },
  { type: 'culture', title: 'Indian and planetary correspondences', text: 'Indian numerology commonly maps 1-9 to planetary or devotional associations. Systems differ by teacher, so this app records the category without claiming one universal table.', link: 'https://www.britannica.com/topic/number-symbolism' },
  { type: 'culture', title: 'Religious and mythic number patterns', text: 'Seven, twelve, forty, three, and nine appear repeatedly in religious, mythic, ritual, and literary traditions. Their recurrence shows symbolic power, not automatic prediction.', link: 'https://www.britannica.com/topic/number-symbolism' },
  { type: 'evidence', title: 'The Forer / Barnum effect', text: 'A 1949 psychology study showed that people often rate broad personality descriptions as highly accurate. This matters when reading any personality system, including numerology.', link: 'https://pubmed.ncbi.nlm.nih.gov/18110193/' },
  { type: 'evidence', title: 'What counts as proof?', text: 'Historical use proves cultural significance. It does not prove that birth dates or names cause personality or predict events. The app separates calculation, symbolism, and evidence level.' },
  { type: 'method', title: 'Advanced chart vocabulary', text: 'Beginner and advanced manuals commonly add personal cycles, triads, maturity, progressed letters, essence, inclusion tables, karmic lessons, hidden passion, and challenge numbers.' },
  { type: 'method', title: 'Important year numbers', text: 'Calendar readings often distinguish Personal Year, Universal Year, milestone years, highlight years, red-letter years, and overtone numbers. This app groups them together so the timing layer is visible.' },
  { type: 'method', title: 'Progressed letters and essence', text: 'Advanced name work treats letters as moving through time. The implementation here uses a transparent working convention: active letters are selected by age and letter values, then reduced into Essence and Hidden Essence numbers.' },
  { type: 'method', title: 'Inclusion, hidden cross, and other name-pattern numbers', text: 'The inclusion table counts how many times each 1-9 value appears in a name. Related readings include intensification, karmic lessons, subconscious response, point of security, type traits, hidden cross, and malefic watch numbers.' },
  { type: 'evidence', title: 'Reflective use case', text: 'A numerology chart can still be useful as a reflective prompt: it asks what you are building, avoiding, repeating, completing, or ready to choose.' }
];

const ASK_KNOWLEDGE = [
  { terms: ['life path', 'lifepath'], title: 'Life Path', answer: 'Life Path is the first number to read. It tells you the main kind of lesson or situation life keeps bringing back. Use it to decide what behavior makes you stronger, and what pattern you should stop repeating.' },
  { terms: ['birthday', 'birth day'], title: 'Birthday Number', answer: 'Birthday Number is your easy natural gift. It answers: “What do I already know how to do without trying too hard?” Use it when you need a quick strength to lean on.' },
  { terms: ['name number', 'expression', 'destiny'], title: 'Name Number / Expression', answer: 'Expression shows your practical toolkit. Use it for work, public life, and skill development. It answers: “What am I meant to build, express, or become good at?”' },
  { terms: ['heart', 'soul urge', 'vowel'], title: 'Heart / Soul Urge', answer: 'Heart Number shows private happiness. It answers: “What do I actually need inside?” If life looks successful but feels empty, check this number.' },
  { terms: ['personality', 'consonant'], title: 'Personality Number', answer: 'Personality Number shows first impression. It answers: “How do people read me before they know me?” Use it to understand your public mask and social style.' },
  { terms: ['maturity'], title: 'Maturity Number', answer: 'Maturity Number is the later-life target. It answers: “What do I grow into when I finally integrate my lessons and abilities?”' },
  { terms: ['pinnacle', 'pinnacles'], title: 'Pinnacles', answer: 'Pinnacles show the main opportunity of a life period. Read each one as the kind of environment life is pushing you to grow through during that age range.' },
  { terms: ['challenge', 'challenges'], title: 'Challenges', answer: 'Challenges show the friction inside each life period. They answer: “What skill do I need to build so this period does not keep hurting me?”' },
  { terms: ['personal year'], title: 'Personal Year', answer: 'Personal Year is the main theme of the current year for you. Use it for planning the season: beginnings, patience, expression, discipline, change, care, study, power, or completion.' },
  { terms: ['personal month'], title: 'Personal Month', answer: 'Personal Month is the current monthly chapter inside the Personal Year. It is useful for short-term focus.' },
  { terms: ['personal day'], title: 'Personal Day', answer: 'Personal Day is the immediate daily tone. Treat it as a mood/action prompt, not a prediction.' },
  { terms: ['triad'], title: 'Triad Numbers', answer: 'Triad means Personal Year / Personal Month / Personal Day together. Read left to right: background season, current chapter, today’s trigger.' },
  { terms: ['milestone'], title: 'Milestone Years', answer: 'Milestone years are checkpoint ages in a nine-year rhythm. Use them for review, adjustment, and noticing repeating life themes.' },
  { terms: ['highlight'], title: 'Highlight Year', answer: 'Highlight Year blends Life Path with Personal Year. It shows which core lesson is being emphasized in the current year.' },
  { terms: ['red-letter', 'red letter'], title: 'Red-letter Year', answer: 'A Red-letter Year appears when the Personal Year repeats an important core number. It suggests the year may feel more personal or noticeable.' },
  { terms: ['overtone'], title: 'Overtone Number', answer: 'Overtone blends Personal Year and Universal Year. Use it as the atmosphere around the year: personal timing plus collective timing.' },
  { terms: ['universal year'], title: 'Universal Year', answer: 'Universal Year is the reduced calendar year. It is the collective tone, useful for comparing your personal rhythm with the wider year.' },
  { terms: ['progressed letter', 'progressed letters', 'progression'], title: 'Progressed Letters', answer: 'Progressed Letters are active name letters by age. Read them as qualities temporarily emphasized in the current life stage.' },
  { terms: ['essence', 'hidden essence'], title: 'Essence / Hidden Essence', answer: 'Essence reduces the active progressed letters. Hidden Essence blends that with Personal Year. Read them as current atmosphere and quieter undercurrent.' },
  { terms: ['hidden cross'], title: 'Hidden Cross', answer: 'Hidden Cross summarizes the inclusion-table cross values 2, 4, 5, 6, and 8. It gives a compact view of support, structure, change, care, and power patterns.' },
  { terms: ['inclusion', 'inclusion table'], title: 'Inclusion Table', answer: 'Inclusion Table counts how often each 1-9 value appears in the name. Repeated numbers are emphasized habits; missing numbers are qualities to practice consciously.' },
  { terms: ['intensification', 'hidden passion'], title: 'Hidden Passion / Intensification', answer: 'Hidden Passion or Intensification is the most repeated value in the name. It is the loudest habit: a strength when used well, a distortion when overused.' },
  { terms: ['karma', 'karmic', 'karmic lessons'], title: 'Karmic Lessons', answer: 'Karmic Lessons are missing values in the name table. Read them as growth skills, not as punishment or doom.' },
  { terms: ['subconscious'], title: 'Subconscious Response', answer: 'Subconscious Response counts how many different number types appear in the name. A higher count suggests a broader automatic response range.' },
  { terms: ['point of security', 'security'], title: 'Point of Security', answer: 'Point of Security reduces the Subconscious Response. Read it as a stabilizing behavior when stress rises.' },
  { terms: ['type', 'traits', 'type and traits'], title: 'Type and Traits', answer: 'Type and Traits groups the name values into practical, mental, emotional, and intuitive planes. Strongest group shows default mode; weakest group shows a development area.' },
  { terms: ['malefic', 'debt', 'karmic debt'], title: 'Malefic / Karmic-debt Watch Numbers', answer: 'These are raw totals such as 13, 14, 16, and 19. Use them as caution themes around discipline, humility, freedom, effort, and independence, not fear-based predictions.' },
  { terms: ['chosen', 'phone', 'email', 'house', 'address', 'business', 'pet', 'plate'], title: 'Chosen Numbers', answer: 'Chosen Numbers evaluate labels you can choose, such as phone, email, house, business, pet, or plate. Compare the reduced tone with the item’s purpose.' },
  { terms: ['proof', 'science', 'evidence'], title: 'Evidence note', answer: 'Historical sources support that number symbolism is widespread. Scientific proof for prediction is limited, and broad readings can feel personal because of the Forer/Barnum effect. Use the chart as reflection, not certainty.' }
];

const CORE_DESCRIPTIONS = {
  lifePath: 'The major birth-date theme: lessons, direction, and recurring life terrain.',
  birthday: 'The day-of-month talent: an obvious gift or style that tends to show early.',
  expression: 'The full-name pattern: capacities, tools, and the way a name organizes energy.',
  soulUrge: 'The vowel pattern: motivation, longing, private values, and emotional appetite.',
  personality: 'The consonant pattern: first impression, style, and social presentation.',
  maturity: 'Life Path plus Expression: a later-life integration point.',
  balance: 'Initials reduced: a balancing response under stress.',
  rationalThought: 'First name plus birth day: the decision-making and practical thinking style.'
};

const CORE_PERSONAL_PROMPTS = {
  lifePath: 'Use this first. It tells you the main kind of problem life keeps asking you to solve and the kind of behavior that makes you feel aligned.',
  birthday: 'Use this as your quick natural gift. If you are stuck, this number shows the style that usually comes easiest to you.',
  expression: 'Use this for career, public work, and long-term ability. It shows what tools your name suggests you are here to develop and use.',
  soulUrge: 'Use this for private happiness. It shows what you need emotionally, even if your public personality acts differently.',
  personality: 'Use this for first impressions. It tells you how you may look from outside before people understand your deeper motives.',
  maturity: 'Use this as your later-life target. It shows what your chart becomes stronger at when experience starts integrating your lessons.',
  balance: 'Use this when stressed. It suggests the quickest behavior that can bring you back to center.',
  rationalThought: 'Use this for decisions. It shows the style your mind often uses when solving practical problems.'
};

const LOCAL_CORE_DESCRIPTIONS = {
  ja: {
    lifePath: '生年月日の主要テーマ: 課題、方向性、繰り返し現れる人生の地形。',
    birthday: '生まれ日の才能: 早くから表れやすい自然なギフトやスタイル。',
    expression: 'フルネームのパターン: 能力、道具、名前がエネルギーを整理する方法。',
    soulUrge: '母音のパターン: 動機、願い、私的な価値観、感情的な欲求。',
    personality: '子音のパターン: 第一印象、スタイル、社会的な見え方。',
    maturity: 'ライフパスと表現数の合計: 後半生で統合されるポイント。',
    balance: 'イニシャルの還元: ストレス下でバランスを取り戻す反応。',
    rationalThought: '名と生まれ日の組み合わせ: 判断や実務的思考のスタイル。'
  }
};

const LOCAL_CORE_PROMPTS = {
  ja: {
    lifePath: '最初に読みます。人生が繰り返し問いかける課題と、調和を感じやすい行動を示します。',
    birthday: 'すぐ使える自然な才能です。迷った時、最も出しやすい強みを示します。',
    expression: '仕事、公的活動、長期的な能力に使います。育てて使うべき道具を示します。',
    soulUrge: '私的な幸せに使います。外側の人格と違っても、内側で必要なものを示します。',
    personality: '第一印象に使います。深い動機を知られる前に外からどう見えるかを示します。',
    maturity: '後半生の目標です。経験が課題と能力を統合した時に強くなる方向を示します。',
    balance: 'ストレス時に使います。中心に戻るための一番早い行動を示します。',
    rationalThought: '判断に使います。実務的な問題を解く時に心が使いやすいスタイルを示します。'
  }
};

function coreDescription(key) {
  if (LOCAL_CORE_DESCRIPTIONS[PAGE_LANG]?.[key]) return LOCAL_CORE_DESCRIPTIONS[PAGE_LANG][key];
  return PAGE_LANG === 'en' ? CORE_DESCRIPTIONS[key] : GENERATED_FALLBACK_TEXT[PAGE_LANG];
}

function corePrompt(key) {
  if (LOCAL_CORE_PROMPTS[PAGE_LANG]?.[key]) return LOCAL_CORE_PROMPTS[PAGE_LANG][key];
  return PAGE_LANG === 'en' ? CORE_PERSONAL_PROMPTS[key] : GENERATED_FALLBACK_TEXT[PAGE_LANG];
}

const WORKSHEET_COVERAGE = [
  { group: 'Foundation', name: 'Letters correspond to numbers', purpose: 'Turns a written name into a number pattern.', read: 'Use this as the base map. If the name system changes, name-based numbers can change too.' },
  { group: 'Foundation', name: 'Adding and reducing numbers', purpose: 'Condenses a total into a symbolic vibration.', read: 'Read the final digit as the main tone and raw totals as supporting context, especially 11, 22, 33, 13, 14, 16, and 19.' },
  { group: 'Name numbers', name: 'Name Number / Expression', purpose: 'Shows the tools, talents, and public capacity carried by the full name.', read: 'Ask: What am I built to express or develop in the outside world?' },
  { group: 'Name numbers', name: 'Heart Number / Soul Urge', purpose: 'Shows private motivation through vowels.', read: 'Ask: What do I need emotionally even when nobody is watching?' },
  { group: 'Name numbers', name: 'Personality Number', purpose: 'Shows first impression and social surface through consonants.', read: 'Ask: How do people initially experience my style, defense, or presence?' },
  { group: 'Name numbers', name: 'Name + Heart + Personality combinations', purpose: 'Compares outer ability, inner desire, and social mask.', read: 'A smooth combination feels aligned. A contrasting combination shows inner/outer tension to understand.' },
  { group: 'Chosen numbers', name: 'Choosing names and life numbers', purpose: 'Evaluates optional labels such as phone, email, address, business name, pet, or plate.', read: 'Compare the reduced tone with the practical purpose of the item. It is a symbolic fit check, not a guarantee.' },
  { group: 'Birth numbers', name: 'Birthday Number', purpose: 'Shows an obvious gift or style from the day of birth.', read: 'Read it as a natural talent that may come easily but still needs maturity.' },
  { group: 'Birth numbers', name: 'Life Path Number', purpose: 'Shows the broad life-road theme from the full birth date.', read: 'Use it as the main lens for lessons, repeated situations, and long-term growth.' },
  { group: 'Life periods', name: 'Pinnacles and Challenges', purpose: 'Splits life into four development periods with opportunity and friction themes.', read: 'Pinnacle shows the period’s growth environment; Challenge shows the skill being tested.' },
  { group: 'Calendar cycles', name: 'Personal Year, Month, Day', purpose: 'Reads the current timing tone for year, month, and day.', read: 'Use Year for the main season, Month for the current focus, Day for immediate mood/action.' },
  { group: 'Calendar cycles', name: 'Triad Numbers', purpose: 'Shows Personal Year / Month / Day as one timing stack.', read: 'Read left to right: background season, current chapter, today’s trigger.' },
  { group: 'Important years', name: 'Important Year Numbers', purpose: 'Collects milestone, highlight, red-letter, maturity, universal, and overtone values.', read: 'Use this section to see whether the current year repeats important chart themes.' },
  { group: 'Advanced timing', name: 'Progressed Letters', purpose: 'Uses age to identify active letters in the name.', read: 'Read active letters as temporary qualities being emphasized in the current life stage.' },
  { group: 'Advanced timing', name: 'Essence and Hidden Essence', purpose: 'Reduces active progressed letters, then blends with Personal Year.', read: 'Essence is the present inner atmosphere; Hidden Essence is the quieter undercurrent.' },
  { group: 'Other numbers', name: 'Hidden Cross', purpose: 'Looks at the inclusion-table cross numbers 2, 4, 5, 6, and 8.', read: 'Use it as a compact view of support, structure, change, care, and power patterns in the name.' },
  { group: 'Other numbers', name: 'Inclusion Table', purpose: 'Counts how often each 1-9 value appears in the name.', read: 'Repeated numbers show emphasized habits; missing numbers show qualities to practice consciously.' },
  { group: 'Other numbers', name: 'Intensification Number', purpose: 'Shows the most repeated value in the name.', read: 'This is the loudest name habit. It can be a strength or something overused.' },
  { group: 'Other numbers', name: 'Karma Number / Karmic Lessons', purpose: 'Shows values absent from the name.', read: 'Treat missing values as growth skills, not punishments.' },
  { group: 'Other numbers', name: 'Subconscious Response', purpose: 'Counts how many different number types appear.', read: 'More types suggest broader instinctive range; fewer types suggest a narrower automatic response.' },
  { group: 'Other numbers', name: 'Point of Security', purpose: 'Reduces the Subconscious Response.', read: 'This points to what helps the person feel stable under pressure.' },
  { group: 'Other numbers', name: 'Type and Traits Chart', purpose: 'Groups name values into practical, mental, emotional, and intuitive planes.', read: 'The strongest plane shows the default mode; the weakest plane shows an area to develop.' },
  { group: 'Other numbers', name: 'Malefic / karmic-debt watch numbers', purpose: 'Flags raw totals often read as 13, 14, 16, and 19 lessons.', read: 'Use them as caution themes: effort, discipline, humility, independence, and wise use of freedom.' }
];

const today = new Date();
const isoToday = today.toISOString().slice(0, 10);

function cleanLetters(value) {
  return String(value || '').toUpperCase().replace(/[^A-Z]/g, '');
}

function words(value) {
  return String(value || '').trim().split(/\s+/).filter(Boolean);
}

function isVowelAt(letters, index) {
  const char = letters[index];
  if (VOWELS.has(char)) return true;
  if (char === 'Y') {
    const prev = letters[index - 1];
    const next = letters[index + 1];
    return (!prev || !VOWELS.has(prev)) && (!next || !VOWELS.has(next));
  }
  return false;
}

function tableFor(system) {
  return system === 'chaldean' ? CHALDEAN : PYTHAGOREAN;
}

function reduce(value, keepMaster = true) {
  let number = Math.abs(Number(value || 0));
  if (keepMaster && MASTER_NUMBERS.has(number)) return number;
  while (number > 9) {
    number = String(number).split('').reduce((total, digit) => total + Number(digit), 0);
    if (keepMaster && MASTER_NUMBERS.has(number)) return number;
  }
  return number || 0;
}

function digitSum(value) {
  return String(Math.abs(Number(value || 0))).split('').reduce((total, digit) => total + Number(digit), 0);
}

function letterValues(name, system) {
  const table = tableFor(system);
  return cleanLetters(name).split('').map((letter, index, all) => ({
    letter,
    value: table[letter] || 0,
    vowel: isVowelAt(all, index)
  }));
}

function nameTotal(name, system, mode = 'all') {
  const values = letterValues(name, system).filter((item) => {
    if (mode === 'vowels') return item.vowel;
    if (mode === 'consonants') return !item.vowel;
    return true;
  });
  return {
    raw: values.reduce((total, item) => total + item.value, 0),
    values
  };
}

function firstName(name) {
  return words(name)[0] || '';
}

function dateParts(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  return {
    date,
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate()
  };
}

function lifePathNumber({ year, month, day }) {
  return reduce(digitSum(year) + digitSum(month) + digitSum(day));
}

function personalYearNumber({ month, day }, readingYear) {
  return reduce(digitSum(month) + digitSum(day) + digitSum(readingYear));
}

function personalMonthNumber(personalYear, month) {
  return reduce(personalYear + digitSum(month));
}

function personalDayNumber(personalMonth, day) {
  return reduce(personalMonth + digitSum(day));
}

function pinnacleAges(lifePath) {
  const base = reduce(lifePath, false);
  const firstEnd = 36 - base;
  return [
    `Birth-${firstEnd}`,
    `${firstEnd + 1}-${firstEnd + 9}`,
    `${firstEnd + 10}-${firstEnd + 18}`,
    `${firstEnd + 19}+`
  ];
}

function inclusionTable(name, system) {
  const counts = Object.fromEntries(Array.from({ length: 9 }, (_, i) => [String(i + 1), 0]));
  letterValues(name, system).forEach((item) => {
    const key = String(reduce(item.value, false));
    if (counts[key] !== undefined) counts[key] += 1;
  });
  return counts;
}

function topEntries(counts) {
  const entries = Object.entries(counts).sort((a, b) => b[1] - a[1] || Number(a[0]) - Number(b[0]));
  return entries.filter(([, count]) => count === entries[0][1] && count > 0).map(([number]) => Number(number));
}

function missingEntries(counts) {
  return Object.entries(counts).filter(([, count]) => count === 0).map(([number]) => Number(number));
}

function ageOnDate(birth, reading) {
  let age = reading.year - birth.year;
  if (reading.month < birth.month || (reading.month === birth.month && reading.day < birth.day)) age -= 1;
  return Math.max(0, age);
}

function currentProgressedLetters(name, system, age) {
  return words(name).map((part) => {
    const values = letterValues(part, system);
    if (!values.length) return { word: part, letter: '-', value: 0, position: 0 };
    const cycleLength = values.reduce((total, item) => total + Math.max(1, item.value), 0);
    let cursor = age % Math.max(1, cycleLength);
    for (let index = 0; index < values.length; index += 1) {
      const span = Math.max(1, values[index].value);
      if (cursor < span) return { word: part, letter: values[index].letter, value: values[index].value, position: index + 1 };
      cursor -= span;
    }
    const last = values[values.length - 1];
    return { word: part, letter: last.letter, value: last.value, position: values.length };
  });
}

function chosenNumberValue(value, system) {
  const text = String(value || '').trim();
  if (!text) return null;
  const digits = (text.match(/\d/g) || []).map(Number);
  const letters = nameTotal(text, system, 'all').raw;
  const raw = digits.reduce((total, digit) => total + digit, 0) + letters;
  return { raw, reduced: reduce(raw), digits: digits.length, letters: cleanLetters(text).length };
}

function typeTraitCounts(counts) {
  const read = (number) => Number(counts[String(number)] || 0);
  return {
    practical: read(4) + read(5),
    mental: read(1) + read(8),
    emotional: read(2) + read(3) + read(6),
    intuitive: read(7) + read(9)
  };
}

function hiddenCross(counts) {
  const crossNumbers = [2, 4, 5, 6, 8];
  const total = crossNumbers.reduce((sum, number) => sum + Number(counts[String(number)] || 0), 0);
  return { total, reduced: reduce(total), details: crossNumbers.map((number) => `${number}:${counts[String(number)] || 0}`).join('  ') };
}

function karmicDebtFlags(rawValues) {
  const debtNumbers = new Set([13, 14, 16, 19]);
  return Object.entries(rawValues)
    .filter(([, value]) => debtNumbers.has(Number(value)))
    .map(([label, value]) => `${label} ${value}`);
}

function milestoneInfo(birth, reading) {
  const age = ageOnDate(birth, reading);
  const nextAge = Math.ceil((age + 1) / 9) * 9;
  return {
    age,
    nextAge,
    nextYear: birth.year + nextAge,
    currentMilestone: age > 0 && age % 9 === 0
  };
}

function calculateChart(form) {
  const birth = dateParts(form.birthDate);
  const reading = dateParts(form.readingDate);
  const allName = nameTotal(form.fullName, form.nameSystem, 'all');
  const vowels = nameTotal(form.fullName, form.nameSystem, 'vowels');
  const consonants = nameTotal(form.fullName, form.nameSystem, 'consonants');
  const first = nameTotal(firstName(form.fullName), form.nameSystem, 'all');
  const initials = words(form.fullName).map((part) => part[0] || '').join('');
  const initialsTotal = nameTotal(initials, form.nameSystem, 'all');
  const counts = inclusionTable(form.fullName, form.nameSystem);
  const lp = lifePathNumber(birth);
  const expression = reduce(allName.raw);
  const soulUrge = reduce(vowels.raw);
  const personality = reduce(consonants.raw);
  const birthday = reduce(birth.day);
  const maturity = reduce(lp + expression);
  const personalYear = personalYearNumber(birth, reading.year);
  const personalMonth = personalMonthNumber(personalYear, reading.month);
  const personalDay = personalDayNumber(personalMonth, reading.day);
  const universalYear = reduce(digitSum(reading.year));
  const birthMonth = reduce(birth.month);
  const birthDay = reduce(birth.day);
  const birthYear = reduce(digitSum(birth.year));
  const pinnacleNumbers = [
    reduce(birthMonth + birthDay),
    reduce(birthDay + birthYear),
    reduce(reduce(birthMonth + birthDay) + reduce(birthDay + birthYear)),
    reduce(birthMonth + birthYear)
  ];
  const challengeNumbers = [
    reduce(Math.abs(birthMonth - birthDay), false),
    reduce(Math.abs(birthDay - birthYear), false),
    reduce(Math.abs(reduce(Math.abs(birthMonth - birthDay), false) - reduce(Math.abs(birthDay - birthYear), false)), false),
    reduce(Math.abs(birthMonth - birthYear), false)
  ];
  const letters = cleanLetters(form.fullName);
  const firstVowel = letterValues(form.fullName, form.nameSystem).find((item) => item.vowel);
  const cornerstone = letters[0] || '-';
  const capstone = letters[letters.length - 1] || '-';
  const age = ageOnDate(birth, reading);
  const progressed = currentProgressedLetters(form.fullName, form.nameSystem, age);
  const essence = reduce(progressed.reduce((total, item) => total + Number(item.value || 0), 0));
  const hiddenEssence = reduce(essence + personalYear);
  const milestone = milestoneInfo(birth, reading);
  const choice = chosenNumberValue(form.chosenNumber, form.nameSystem);
  const rawValues = {
    name: allName.raw,
    heart: vowels.raw,
    personality: consonants.raw,
    birthday: birth.day,
    lifePathBridge: digitSum(birth.year) + digitSum(birth.month) + digitSum(birth.day)
  };
  return {
    input: form,
    birth,
    reading,
    core: {
      lifePath: lp,
      birthday,
      expression,
      soulUrge,
      personality,
      maturity,
      balance: reduce(initialsTotal.raw),
      rationalThought: reduce(first.raw + birth.day)
    },
    cycles: {
      personalYear,
      personalMonth,
      personalDay,
      universalYear,
      triad: [personalYear, personalMonth, personalDay],
      redLetterYear: personalYear === lp || personalYear === expression || personalYear === birthday,
      overtone: reduce(personalYear + universalYear),
      highlightYear: reduce(lp + personalYear),
      milestone
    },
    advanced: {
      karmicLessons: missingEntries(counts),
      hiddenPassion: topEntries(counts),
      intensification: topEntries(counts),
      subconsciousSelf: Object.values(counts).filter(Boolean).length,
      pointOfSecurity: reduce(Object.values(counts).filter(Boolean).length),
      firstVowel: firstVowel ? `${firstVowel.letter} (${firstVowel.value})` : '-',
      cornerstone,
      capstone,
      inclusion: counts,
      hiddenCross: hiddenCross(counts),
      typeTraits: typeTraitCounts(counts),
      progressed,
      essence,
      hiddenEssence,
      malefic: karmicDebtFlags(rawValues),
      choice
    },
    timeline: pinnacleNumbers.map((number, index) => ({
      period: pinnacleAges(lp)[index],
      pinnacle: number,
      challenge: challengeNumbers[index]
    }))
  };
}

function meaning(number) {
  const key = MEANINGS[number] ? number : (MEANINGS[reduce(number, false)] ? reduce(number, false) : 9);
  const base = MEANINGS[key];
  const local = LOCAL_MEANINGS[PAGE_LANG]?.[key] || {};
  const fallback = GENERATED_FALLBACK_TEXT[PAGE_LANG] || '';
  return {
    ...base,
    ...local,
    strength: local.strength || (PAGE_LANG === 'en' ? base.strength : fallback),
    friction: local.friction || (PAGE_LANG === 'en' ? base.friction : fallback),
    guidance: local.guidance || (PAGE_LANG === 'en' ? base.guidance : fallback)
  };
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  })[char]);
}

function renderMetric(label, value, note = '') {
  return `<div class="metric"><span>${escapeHtml(ui(label))}</span><strong>${escapeHtml(localText(value))}</strong>${note ? `<small>${escapeHtml(localText(note))}</small>` : ''}</div>`;
}

function metricNote(purpose, read) {
  return localText(`${purpose} ${ui('How to read it:')} ${read}`);
}

function renderCoverageCard(title, items, wide = false) {
  return `
    <div class="metric${wide ? ' wide' : ''}">
      <span>${escapeHtml(title)}</span>
      <ul class="coverage-list">
        ${items.map((item) => {
          if (typeof item === 'string') return `<li>${escapeHtml(localText(item))}</li>`;
          return `<li><b>${escapeHtml(localText(item.name))}:</b> ${escapeHtml(localText(item.purpose))} <em>${escapeHtml(ui('How to read it:'))}</em> ${escapeHtml(localText(item.read))}</li>`;
        }).join('')}
      </ul>
    </div>
  `;
}

function renderReportSummary(chart) {
  const path = meaning(chart.core.lifePath);
  const inner = meaning(chart.core.soulUrge);
  const outer = meaning(chart.core.personality);
  const year = meaning(chart.cycles.personalYear);
  const choice = chart.advanced.choice;
  const intro = PAGE_LANG === 'en'
    ? `Your chart centers on Life Path ${chart.core.lifePath}, the ${path.title.toLowerCase()} pattern.
        This means your strongest growth comes from this practical lesson: ${path.guidance}
        Your Heart ${chart.core.soulUrge} (${inner.title}) shows what keeps you emotionally fed:
        ${inner.strength} Your Personality ${chart.core.personality} (${outer.title})
        shows the style others may notice first.`
    : uiTemplate('summaryIntro', {
        lifePath: chart.core.lifePath,
        path: path.title,
        guidance: path.guidance,
        soulUrge: chart.core.soulUrge,
        inner: inner.title,
        innerStrength: inner.strength,
        personality: chart.core.personality,
        outer: outer.title
      });
  return `
    <div>
      <p class="eyebrow">${escapeHtml(ui('Reading report'))}</p>
      <h3>${escapeHtml(chart.input.fullName)} · ${escapeHtml(chart.birth.year)}-${String(chart.birth.month).padStart(2, '0')}-${String(chart.birth.day).padStart(2, '0')}</h3>
      <p>${escapeHtml(intro)}</p>
    </div>
    <ul>
      <li><b>${escapeHtml(ui('Your useful strength:'))}</b> ${escapeHtml(path.strength)}</li>
      <li><b>${escapeHtml(ui('Your likely friction:'))}</b> ${escapeHtml(path.friction)}</li>
      <li><b>${escapeHtml(ui('This year:'))}</b> ${escapeHtml(ui('Personal Year'))} ${chart.cycles.personalYear}: ${escapeHtml(year.guidance)}</li>
      <li><b>${escapeHtml(ui('Growth direction:'))}</b> ${escapeHtml(ui('Maturity'))} ${chart.core.maturity}: ${escapeHtml(meaning(chart.core.maturity).guidance)}</li>
      <li><b>${escapeHtml(ui('Watch point:'))}</b> ${chart.advanced.karmicLessons.length ? `${escapeHtml(ui('Karmic lessons'))}: ${chart.advanced.karmicLessons.join(', ')}` : '1-9'}</li>
      <li><b>${escapeHtml(ui('Chosen number:'))}</b> ${choice ? `${escapeHtml(chart.input.chosenNumber)}: ${choice.reduced} (${escapeHtml(meaning(choice.reduced).title)})` : escapeHtml(ui('No chosen item entered'))}</li>
    </ul>
  `;
}

function renderChart(chart) {
  document.getElementById('resultsEmpty').hidden = true;
  document.getElementById('results').hidden = false;
  document.getElementById('reportSummary').innerHTML = renderReportSummary(chart);
  const coreLabels = [
    [ui('Life Path'), 'lifePath'],
    [ui('Birthday'), 'birthday'],
    [ui('Name Number / Expression'), 'expression'],
    [ui('Soul Urge / Heart'), 'soulUrge'],
    [ui('Personality'), 'personality'],
    [ui('Maturity'), 'maturity'],
    [ui('Balance'), 'balance'],
    [ui('Rational Thought'), 'rationalThought']
  ];
  document.getElementById('coreGrid').innerHTML = coreLabels.map(([label, key]) => {
    const value = chart.core[key];
    const data = meaning(value);
    return `
      <article class="number-card" data-number="${value}">
        <span>${label}</span>
        <strong>${value}</strong>
        <h4>${escapeHtml(data.title)} · ${escapeHtml(data.keywords)}</h4>
        <p><b>${escapeHtml(ui('What it is:'))}</b> ${escapeHtml(coreDescription(key))}</p>
        <p><b>${escapeHtml(ui('What it means to you:'))}</b> ${escapeHtml(corePrompt(key))}</p>
        <p><b>${escapeHtml(ui('Strength:'))}</b> ${escapeHtml(data.strength)}</p>
        <p><b>${escapeHtml(ui('Friction:'))}</b> ${escapeHtml(data.friction)}</p>
        <p><b>${escapeHtml(ui('Use it like this:'))}</b> ${escapeHtml(data.guidance)}</p>
      </article>
    `;
  }).join('');

  document.getElementById('interpretationList').innerHTML = coreLabels.slice(0, 6).map(([label, key]) => {
    const value = chart.core[key];
    const data = meaning(value);
    return `
      <article class="detail-card">
        <span>${label}: ${value}</span>
        <h4>${escapeHtml(data.title)} — ${escapeHtml(data.keywords)}</h4>
        <p><b>${escapeHtml(ui('Strength:'))}</b> ${escapeHtml(data.strength)}</p>
        <p><b>${escapeHtml(ui('Friction:'))}</b> ${escapeHtml(data.friction)}</p>
        <p><b>${escapeHtml(ui('Practical guidance:'))}</b> ${escapeHtml(data.guidance)}</p>
      </article>
    `;
  }).join('');

  document.getElementById('cycleGrid').innerHTML = [
    renderMetric('Personal Year', chart.cycles.personalYear, metricNote('The main theme of this calendar year for you.', `Plan around ${meaning(chart.cycles.personalYear).keywords}.`)),
    renderMetric('Personal Month', chart.cycles.personalMonth, metricNote('The current month’s focus inside the year theme.', `Use it for short-term priorities: ${meaning(chart.cycles.personalMonth).keywords}.`)),
    renderMetric('Personal Day', chart.cycles.personalDay, metricNote('The immediate daily tone.', `Use it for today’s action style: ${meaning(chart.cycles.personalDay).keywords}.`)),
    renderMetric('Universal Year', chart.cycles.universalYear, metricNote('The collective calendar tone.', 'Compare it with your Personal Year to see if your private rhythm matches or contrasts the wider year.')),
    renderMetric('Triad', chart.cycles.triad.join(' / '), metricNote('Year, month, and day together.', 'Read left to right: season, chapter, immediate trigger.')),
    renderMetric('Overtone', chart.cycles.overtone, metricNote('Personal Year plus Universal Year.', chart.cycles.redLetterYear ? 'A core number repeats this year, so the theme may feel more personal.' : 'Use it as the background blend between personal and collective timing.'))
  ].join('');

  const missing = chart.advanced.karmicLessons.length ? chart.advanced.karmicLessons.join(', ') : 'None';
  const passion = chart.advanced.hiddenPassion.length ? chart.advanced.hiddenPassion.join(', ') : 'None';
  document.getElementById('advancedGrid').innerHTML = [
    renderMetric('Karmic lessons', missing, metricNote('Numbers absent from the name table.', 'Treat them as skills to practice consciously, not as a punishment.')),
    renderMetric('Hidden passion / Intensification', passion, metricNote('Most repeated name-table numbers.', 'This is the loudest habit in the name: useful as a strength, risky if overused.')),
    renderMetric('Subconscious response', chart.advanced.subconsciousSelf, metricNote('How many number types appear.', 'A wider count suggests a broader automatic response range.')),
    renderMetric('Point of security', chart.advanced.pointOfSecurity, metricNote('Reduced subconscious response.', 'Use it as a stabilizing behavior when pressure rises.')),
    renderMetric('First vowel', chart.advanced.firstVowel, metricNote('The first vowel is read as instinctive emotional tone.', 'It hints at the first private reaction before the public mask appears.')),
    renderMetric('Cornerstone', chart.advanced.cornerstone, metricNote('The first letter of the name.', 'It suggests how the person begins, approaches, or initiates.')),
    renderMetric('Capstone', chart.advanced.capstone, metricNote('The final letter of the name.', 'It suggests how the person completes, exits, or finishes.')),
    renderMetric('Inclusion table', Object.entries(chart.advanced.inclusion).map(([n, c]) => `${n}:${c}`).join('  '), metricNote('Letter counts by number.', 'Repeated numbers show emphasis; missing numbers show development areas.'))
  ].join('');

  document.getElementById('timeline').innerHTML = chart.timeline.map((item, index) => `
    <article class="timeline-card">
      <span>${index + 1}${['st', 'nd', 'rd', 'th'][Math.min(index, 3)]} period · age ${escapeHtml(item.period)}</span>
      <strong>${item.pinnacle}</strong>
      <p><b>${escapeHtml(ui('Pinnacle:'))}</b> ${escapeHtml(meaning(item.pinnacle).title)}. <b>${escapeHtml(ui('Challenge:'))}</b> ${escapeHtml(String(item.challenge))} ${escapeHtml(meaning(item.challenge || 9).keywords)}.</p>
    </article>
  `).join('');

  const groupedCoverage = ['Foundation', 'Name numbers', 'Chosen numbers', 'Birth numbers', 'Life periods', 'Calendar cycles', 'Important years', 'Advanced timing', 'Other numbers']
    .map((group) => [ui(group), WORKSHEET_COVERAGE.filter((item) => item.group === group)])
    .filter(([, items]) => items.length);
  document.getElementById('worksheetGrid').innerHTML = groupedCoverage.map(([title, items]) => renderCoverageCard(title, items)).join('');

  const combo = [
    `Name ${chart.core.expression}: ${meaning(chart.core.expression).title} shows the public toolkit.`,
    `Heart ${chart.core.soulUrge}: ${meaning(chart.core.soulUrge).title} describes private motivation.`,
    `Personality ${chart.core.personality}: ${meaning(chart.core.personality).title} colors the first impression.`,
    `Blend: ${chart.core.expression}-${chart.core.soulUrge}-${chart.core.personality} asks whether outer action, inner desire, and social style are cooperating or pulling in different directions.`
  ];
  document.getElementById('combinationGrid').innerHTML = renderCoverageCard(ui('Combination synthesis'), combo, true);

  const milestone = chart.cycles.milestone;
  document.getElementById('importantYearGrid').innerHTML = [
    renderMetric('Current age', milestone.age, metricNote('Used for milestone and progression timing.', milestone.currentMilestone ? 'You are in a milestone age now.' : `Next 9-year milestone age is ${milestone.nextAge}.`)),
    renderMetric('Next milestone year', milestone.nextYear, metricNote('A nine-year rhythm marker.', 'Use it as a checkpoint year for review and redirection.')),
    renderMetric('Highlight year', chart.cycles.highlightYear, metricNote('Life Path blended with Personal Year.', 'It shows which core life lesson is highlighted this year.')),
    renderMetric('Red-letter year', chart.cycles.redLetterYear ? 'Yes' : 'No', metricNote('Personal Year matching a core chart number.', 'If yes, the year repeats a major personal theme.')),
    renderMetric('Maturity number', chart.core.maturity, metricNote('Life Path plus Name Number.', 'Read it as what experience asks you to grow into.')),
    renderMetric('Universal year', chart.cycles.universalYear, metricNote('Collective calendar reduction.', 'Compare collective climate with your personal cycle.')),
    renderMetric('Overtone number', chart.cycles.overtone, metricNote('Personal Year plus Universal Year.', 'Use it as the blended atmosphere around the current year.')),
    renderMetric('Triad numbers', chart.cycles.triad.join(' / '), metricNote('Personal Year, Month, Day.', 'Use this as a timing stack rather than three unrelated numbers.'))
  ].join('');

  const activeLetters = chart.advanced.progressed.map((item) => `${item.word}: ${item.letter}${item.value ? ` (${item.value})` : ''}`).join('  ');
  document.getElementById('progressionGrid').innerHTML = [
    renderMetric('Progressed letters', activeLetters || '-', metricNote('Active name letters by current age.', 'Read them as qualities temporarily emphasized in this life stage.')),
    renderMetric('Essence number', chart.advanced.essence, metricNote('Reduced total of active progressed letters.', `This period asks for ${meaning(chart.advanced.essence).keywords}.`)),
    renderMetric('Hidden essence', chart.advanced.hiddenEssence, metricNote('Essence blended with Personal Year.', 'Read it as the quieter undercurrent beneath the visible year.')),
    renderMetric('Hidden cross', chart.advanced.hiddenCross.reduced, metricNote('Cross values 2, 4, 5, 6, and 8 in the inclusion table.', chart.advanced.hiddenCross.details)),
    renderMetric('Type and traits', Object.entries(chart.advanced.typeTraits).map(([k, v]) => `${k}:${v}`).join('  '), metricNote('Grouped distribution across practical, mental, emotional, and intuitive planes.', 'The strongest group is the default mode; the weakest group is a development area.')),
    renderMetric('Malefic / karmic-debt flags', chart.advanced.malefic.length ? chart.advanced.malefic.join(', ') : 'None', metricNote('Watches raw 13, 14, 16, and 19 totals.', 'Use flags as caution themes, not fear-based predictions.'))
  ].join('');

  const choice = chart.advanced.choice;
  document.getElementById('choiceGrid').innerHTML = choice ? [
    renderMetric('Chosen item', chart.input.chosenNumber, metricNote('Phone, email, address, business, pet, or plate.', 'This is a symbolic tone check for something you can choose or rename.')),
    renderMetric('Chosen raw total', choice.raw, metricNote(`${choice.letters} letters and ${choice.digits} digits counted.`, 'Raw total preserves extra context before reduction.')),
    renderMetric('Chosen reduced number', choice.reduced, metricNote('The main symbolic tone of the chosen item.', `Read it as ${meaning(choice.reduced).keywords}.`)),
    renderMetric('Use case note', meaning(choice.reduced).title, metricNote('Compares the number with the item’s purpose.', 'For example, a business name may want clarity, trust, growth, or authority depending on your goal.'))
  ].join('') : [
    renderMetric('No chosen item entered', 'Optional', metricNote('This section evaluates numbers you can choose.', 'Add a phone, email, address, business name, pet name, or plate to evaluate it.')),
    renderMetric('Baby naming / business naming', 'Supported', metricNote('Names can be compared before choosing them.', 'Enter the proposed name here or in the full-name field.')),
    renderMetric('House / office / P.O. box', 'Supported', metricNote('Addresses and boxes often contain digits and letters.', 'The app reduces both into one symbolic tone.')),
    renderMetric('Pets and vanity plates', 'Supported', metricNote('Labels can carry playful or personal symbolism.', 'Use this as a fit check, not a rule.'))
  ].join('');
}

function renderMeanings() {
  document.getElementById('meaningGrid').innerHTML = [1,2,3,4,5,6,7,8,9,11,22,33].map((number) => {
    const item = meaning(number);
    return `
      <article class="meaning-card">
        <strong>${number}</strong>
        <div>
          <h3>${escapeHtml(item.title)}</h3>
          <p><b>${escapeHtml(item.keywords)}.</b></p>
          <p><b>${escapeHtml(ui('Strength:'))}</b> ${escapeHtml(item.strength)}</p>
          <p><b>${escapeHtml(ui('Friction:'))}</b> ${escapeHtml(item.friction)}</p>
          <p><b>${escapeHtml(ui('Practical guidance:'))}</b> ${escapeHtml(item.guidance)}</p>
        </div>
      </article>
    `;
  }).join('');
}

function renderLibrary() {
  const query = document.getElementById('librarySearch').value.trim().toLowerCase();
  const active = document.querySelector('.filter-tabs button.active')?.dataset.filter || 'all';
  const cards = LIBRARY.filter((item) => {
    const matchesFilter = active === 'all' || item.type === active;
    const haystack = `${item.title} ${item.text} ${item.type}`.toLowerCase();
    return matchesFilter && (!query || haystack.includes(query));
  });
  document.getElementById('libraryGrid').innerHTML = cards.map((item) => `
    <article class="library-card">
      <span class="tag">${escapeHtml(localText(item.type))}</span>
      <h3>${escapeHtml(localText(item.title))}</h3>
      <p>${escapeHtml(localText(item.text))}</p>
      ${item.link ? `<a href="${escapeHtml(item.link)}" target="_blank" rel="noreferrer">${escapeHtml(ui('Open reference'))}</a>` : ''}
    </article>
  `).join('');
}

function addAskMessage(role, html) {
  const messages = document.getElementById('askMessages');
  const item = document.createElement('div');
  item.className = `ask-message ${role}`;
  item.innerHTML = html;
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
}

function askAnswer(question) {
  const normalized = question.toLowerCase();
  const hit = ASK_KNOWLEDGE.find((item) => item.terms.some((term) => normalized.includes(term)));
  if (hit) {
    return `<strong>${escapeHtml(localText(hit.title))}</strong>${escapeHtml(localText(hit.answer))} <a href="#worksheet">${escapeHtml(ui('See worksheet guide'))}</a>`;
  }
  const worksheetHit = WORKSHEET_COVERAGE.find((item) => {
    const text = `${item.name} ${item.purpose} ${item.read}`.toLowerCase();
    return normalized.split(/\s+/).filter((word) => word.length > 3).some((word) => text.includes(word));
  });
  if (worksheetHit) {
    return `<strong>${escapeHtml(localText(worksheetHit.name))}</strong>${escapeHtml(localText(worksheetHit.purpose))} <em>${escapeHtml(ui('How to read it:'))}</em> ${escapeHtml(localText(worksheetHit.read))} <a href="#worksheet">${escapeHtml(ui('See worksheet guide'))}</a>`;
  }
  return `<strong>${escapeHtml(ui('Try asking about a chart term'))}</strong>${escapeHtml(ui('askFallback'))}`;
}

function openAskPanel() {
  const panel = document.getElementById('askPanel');
  panel.hidden = false;
  document.getElementById('askToggle').setAttribute('aria-expanded', 'true');
  if (!document.getElementById('askMessages').children.length) {
    addAskMessage('bot', `<strong>${escapeHtml(ui('Try asking about a chart term'))}</strong>${escapeHtml(ui('askWelcome'))}`);
  }
  document.getElementById('askInput').focus();
}

function closeAskPanel() {
  document.getElementById('askPanel').hidden = true;
  document.getElementById('askToggle').setAttribute('aria-expanded', 'false');
}

function setDefaults() {
  document.getElementById('readingDate').value = isoToday;
  document.getElementById('birthDate').value = '1990-01-01';
  document.getElementById('fullName').value = 'Ada Lovelace';
}

function bindEvents() {
  document.getElementById('profileForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    renderChart(calculateChart(data));
    document.getElementById('chart').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  document.getElementById('librarySearch').addEventListener('input', renderLibrary);
  document.querySelector('.filter-tabs').addEventListener('click', (event) => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    document.querySelectorAll('.filter-tabs button').forEach((item) => item.classList.toggle('active', item === button));
    renderLibrary();
  });
  document.querySelector('.nav-toggle').addEventListener('click', (event) => {
    const open = !document.body.classList.contains('nav-open');
    document.body.classList.toggle('nav-open', open);
    event.currentTarget.setAttribute('aria-expanded', String(open));
  });
  document.querySelectorAll('.site-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      document.querySelector('.nav-toggle').setAttribute('aria-expanded', 'false');
    });
  });
  document.getElementById('askToggle').addEventListener('click', () => {
    if (document.getElementById('askPanel').hidden) openAskPanel();
    else closeAskPanel();
  });
  document.getElementById('askClose').addEventListener('click', closeAskPanel);
  document.getElementById('askForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('askInput');
    const question = input.value.trim();
    if (!question) return;
    addAskMessage('user', `<strong>${escapeHtml(ui('You'))}</strong>${escapeHtml(question)}`);
    input.value = '';
    setTimeout(() => addAskMessage('bot', askAnswer(question)), 120);
  });
}

setDefaults();
renderMeanings();
renderLibrary();
renderChart(calculateChart({
  fullName: document.getElementById('fullName').value,
  birthDate: document.getElementById('birthDate').value,
  readingDate: document.getElementById('readingDate').value,
  nameSystem: document.getElementById('nameSystem').value
}));
bindEvents();
