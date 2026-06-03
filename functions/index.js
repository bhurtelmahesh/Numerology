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

const MEANINGS = {
  1: { title: 'Originator', keywords: 'initiative, identity, leadership', text: 'A one vibration focuses attention on independence, direction, courage, and the need to act without waiting for permission.' },
  2: { title: 'Diplomat', keywords: 'cooperation, tact, sensitivity', text: 'Two works through relationship, listening, mediation, rhythm, and the skill of creating peace without disappearing.' },
  3: { title: 'Messenger', keywords: 'expression, joy, imagination', text: 'Three is linked with language, creativity, performance, humor, and the discipline needed to finish what inspiration begins.' },
  4: { title: 'Builder', keywords: 'structure, work, reliability', text: 'Four emphasizes systems, patience, loyalty, craft, and the practical effort required to turn ideas into something usable.' },
  5: { title: 'Explorer', keywords: 'change, freedom, versatility', text: 'Five brings movement, curiosity, sensory intelligence, travel, risk, and lessons around responsible freedom.' },
  6: { title: 'Guardian', keywords: 'care, beauty, responsibility', text: 'Six is associated with home, repair, teaching, harmony, service, and the boundary between care and over-responsibility.' },
  7: { title: 'Seeker', keywords: 'analysis, solitude, wisdom', text: 'Seven points toward research, spiritual inquiry, skepticism, privacy, study, and learning to trust quiet knowledge.' },
  8: { title: 'Executor', keywords: 'power, finance, authority', text: 'Eight speaks to management, ambition, material results, endurance, and the ethical handling of influence.' },
  9: { title: 'Humanitarian', keywords: 'completion, compassion, breadth', text: 'Nine widens the frame toward empathy, art, endings, forgiveness, global perspective, and service beyond the self.' },
  11: { title: 'Illuminator', keywords: 'intuition, vision, inspiration', text: 'Master 11 intensifies the two: sensitivity, symbolic insight, nervous voltage, and the call to inspire rather than withdraw.' },
  22: { title: 'Master builder', keywords: 'scale, strategy, manifestation', text: 'Master 22 intensifies the four: large plans, real-world building, organization, and the pressure of high expectations.' },
  33: { title: 'Master teacher', keywords: 'compassion, healing, devotion', text: 'Master 33 intensifies the six: selfless service, creative teaching, emotional maturity, and care with wisdom.' }
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
  { terms: ['life path', 'lifepath'], title: 'Life Path', answer: 'Life Path is the main birth-date theme. Read it as the broad road-map: repeated lessons, the kind of growth that makes life feel aligned, and the situations that keep teaching you.' },
  { terms: ['birthday', 'birth day'], title: 'Birthday Number', answer: 'Birthday Number is the day-of-month gift. It is usually an easy-access talent or natural style. It shows what comes naturally, not the whole personality.' },
  { terms: ['name number', 'expression', 'destiny'], title: 'Name Number / Expression', answer: 'Name Number, also called Expression, comes from the full name. It describes your outer toolkit: how you express ability, work, create, communicate, or build in the world.' },
  { terms: ['heart', 'soul urge', 'vowel'], title: 'Heart / Soul Urge', answer: 'Heart Number or Soul Urge comes from vowels. Read it as private motivation: what feels emotionally satisfying even when other people cannot see it.' },
  { terms: ['personality', 'consonant'], title: 'Personality Number', answer: 'Personality Number comes from consonants. It describes the first layer others meet: social style, first impression, and the protective surface.' },
  { terms: ['maturity'], title: 'Maturity Number', answer: 'Maturity combines Life Path and Name Number. Read it as what you grow into with age, choices, and experience.' },
  { terms: ['pinnacle', 'pinnacles'], title: 'Pinnacles', answer: 'Pinnacles divide life into four growth periods. Each pinnacle shows the environment or opportunity theme of that period.' },
  { terms: ['challenge', 'challenges'], title: 'Challenges', answer: 'Challenges sit beside pinnacles. They show the skill being tested during a life period: not a punishment, but the friction that asks for development.' },
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
  lifePath: 'Use this as the broad road-map: the situations you repeatedly meet, the lesson that keeps returning, and the kind of growth that tends to make life feel on track.',
  birthday: 'Read this as an easy-access talent. It often describes a natural style you do not have to force, but still need to use maturely.',
  expression: 'This describes your working toolkit: how your name pattern suggests you build, communicate, lead, support, analyze, or create in the world.',
  soulUrge: 'This points to what feels emotionally satisfying. When ignored, it can show up as restlessness even when life looks fine from outside.',
  personality: 'This is the first layer others often meet. It is useful for understanding your social impression, not your whole self.',
  maturity: 'This is the integration number: what your chart is asking you to grow into with age, experience, and repeated choices.',
  balance: 'This is a stress-response hint. It suggests what kind of behavior can bring you back to center when pressure rises.',
  rationalThought: 'This is the practical thinking pattern: how you tend to approach decisions, plans, details, and problem solving.'
};

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
  return MEANINGS[number] || MEANINGS[reduce(number, false)] || MEANINGS[9];
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
  return `<div class="metric"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong>${note ? `<small>${escapeHtml(note)}</small>` : ''}</div>`;
}

function metricNote(purpose, read) {
  return `${purpose} How to read it: ${read}`;
}

function renderCoverageCard(title, items, wide = false) {
  return `
    <div class="metric${wide ? ' wide' : ''}">
      <span>${escapeHtml(title)}</span>
      <ul class="coverage-list">
        ${items.map((item) => {
          if (typeof item === 'string') return `<li>${escapeHtml(item)}</li>`;
          return `<li><b>${escapeHtml(item.name)}:</b> ${escapeHtml(item.purpose)} <em>How to read it:</em> ${escapeHtml(item.read)}</li>`;
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
  return `
    <div>
      <p class="eyebrow">Reading report</p>
      <h3>${escapeHtml(chart.input.fullName)} · ${escapeHtml(chart.birth.year)}-${String(chart.birth.month).padStart(2, '0')}-${String(chart.birth.day).padStart(2, '0')}</h3>
      <p>
        Your chart centers on Life Path ${chart.core.lifePath}, the ${escapeHtml(path.title.toLowerCase())} pattern.
        In plain words, this reading is about ${escapeHtml(path.keywords)}. Your Heart ${chart.core.soulUrge}
        (${escapeHtml(inner.title)}) describes what privately motivates you, while Personality ${chart.core.personality}
        (${escapeHtml(outer.title)}) describes the style others meet first.
      </p>
    </div>
    <ul>
      <li><b>This year:</b> Personal Year ${chart.cycles.personalYear} brings a ${escapeHtml(year.title.toLowerCase())} tone: ${escapeHtml(year.keywords)}.</li>
      <li><b>Growth direction:</b> Maturity ${chart.core.maturity} asks you to integrate ${escapeHtml(meaning(chart.core.maturity).keywords)} over time.</li>
      <li><b>Watch point:</b> ${chart.advanced.karmicLessons.length ? `Missing name-table numbers ${chart.advanced.karmicLessons.join(', ')} can be read as skills to practice consciously.` : 'Your name table contains every 1-9 value, so the reading emphasizes balance rather than absent-number lessons.'}</li>
      <li><b>Chosen number:</b> ${choice ? `${escapeHtml(chart.input.chosenNumber)} reduces to ${choice.reduced}, a ${escapeHtml(meaning(choice.reduced).title.toLowerCase())} tone.` : 'Add a phone, address, email, business name, pet name, or plate to compare its symbolic tone.'}</li>
    </ul>
  `;
}

function renderChart(chart) {
  document.getElementById('resultsEmpty').hidden = true;
  document.getElementById('results').hidden = false;
  document.getElementById('reportSummary').innerHTML = renderReportSummary(chart);
  const coreLabels = [
    ['Life Path', 'lifePath'],
    ['Birthday', 'birthday'],
    ['Name Number / Expression', 'expression'],
    ['Soul Urge / Heart', 'soulUrge'],
    ['Personality', 'personality'],
    ['Maturity', 'maturity'],
    ['Balance', 'balance'],
    ['Rational Thought', 'rationalThought']
  ];
  document.getElementById('coreGrid').innerHTML = coreLabels.map(([label, key]) => {
    const value = chart.core[key];
    const data = meaning(value);
    return `
      <article class="number-card" data-number="${value}">
        <span>${label}</span>
        <strong>${value}</strong>
        <h4>${escapeHtml(data.title)} · ${escapeHtml(data.keywords)}</h4>
        <p><b>What it is:</b> ${escapeHtml(CORE_DESCRIPTIONS[key])}</p>
        <p><b>What it means to you:</b> ${escapeHtml(CORE_PERSONAL_PROMPTS[key])}</p>
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
        <p>${escapeHtml(data.text)}</p>
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
      <p><b>Pinnacle:</b> ${escapeHtml(meaning(item.pinnacle).title)}. <b>Challenge:</b> ${escapeHtml(String(item.challenge))} ${escapeHtml(meaning(item.challenge || 9).keywords)}.</p>
    </article>
  `).join('');

  const groupedCoverage = ['Foundation', 'Name numbers', 'Chosen numbers', 'Birth numbers', 'Life periods', 'Calendar cycles', 'Important years', 'Advanced timing', 'Other numbers']
    .map((group) => [group, WORKSHEET_COVERAGE.filter((item) => item.group === group)])
    .filter(([, items]) => items.length);
  document.getElementById('worksheetGrid').innerHTML = groupedCoverage.map(([title, items]) => renderCoverageCard(title, items)).join('');

  const combo = [
    `Name ${chart.core.expression}: ${meaning(chart.core.expression).title} shows the public toolkit.`,
    `Heart ${chart.core.soulUrge}: ${meaning(chart.core.soulUrge).title} describes private motivation.`,
    `Personality ${chart.core.personality}: ${meaning(chart.core.personality).title} colors the first impression.`,
    `Blend: ${chart.core.expression}-${chart.core.soulUrge}-${chart.core.personality} asks whether outer action, inner desire, and social style are cooperating or pulling in different directions.`
  ];
  document.getElementById('combinationGrid').innerHTML = renderCoverageCard('Combination synthesis', combo, true);

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
    const item = MEANINGS[number];
    return `
      <article class="meaning-card">
        <strong>${number}</strong>
        <div>
          <h3>${escapeHtml(item.title)}</h3>
          <p><b>${escapeHtml(item.keywords)}.</b> ${escapeHtml(item.text)}</p>
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
      <span class="tag">${escapeHtml(item.type)}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
      ${item.link ? `<a href="${escapeHtml(item.link)}" target="_blank" rel="noreferrer">Open reference</a>` : ''}
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
    return `<strong>${escapeHtml(hit.title)}</strong>${escapeHtml(hit.answer)} <a href="#worksheet">See worksheet guide</a>`;
  }
  const worksheetHit = WORKSHEET_COVERAGE.find((item) => {
    const text = `${item.name} ${item.purpose} ${item.read}`.toLowerCase();
    return normalized.split(/\s+/).filter((word) => word.length > 3).some((word) => text.includes(word));
  });
  if (worksheetHit) {
    return `<strong>${escapeHtml(worksheetHit.name)}</strong>${escapeHtml(worksheetHit.purpose)} <em>How to read it:</em> ${escapeHtml(worksheetHit.read)} <a href="#worksheet">See worksheet guide</a>`;
  }
  return '<strong>Try asking about a chart term</strong>I can explain Life Path, Heart Number, Personality, Pinnacles, Challenges, Personal Year, Essence, Inclusion Table, Karmic Lessons, Hidden Cross, chosen numbers, and evidence limits.';
}

function openAskPanel() {
  const panel = document.getElementById('askPanel');
  panel.hidden = false;
  document.getElementById('askToggle').setAttribute('aria-expanded', 'true');
  if (!document.getElementById('askMessages').children.length) {
    addAskMessage('bot', '<strong>Hi, I can help read the chart.</strong>Ask me things like “What is Life Path?”, “How do I read Karmic Lessons?”, or “What is Essence?”');
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
    addAskMessage('user', `<strong>You</strong>${escapeHtml(question)}`);
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
