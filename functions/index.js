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
  { type: 'evidence', title: 'Reflective use case', text: 'A numerology chart can still be useful as a reflective prompt: it asks what you are building, avoiding, repeating, completing, or ready to choose.' }
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
      overtone: reduce(personalYear + universalYear)
    },
    advanced: {
      karmicLessons: missingEntries(counts),
      hiddenPassion: topEntries(counts),
      subconsciousSelf: Object.values(counts).filter(Boolean).length,
      pointOfSecurity: reduce(Object.values(counts).filter(Boolean).length),
      firstVowel: firstVowel ? `${firstVowel.letter} (${firstVowel.value})` : '-',
      cornerstone,
      capstone,
      inclusion: counts
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

function renderChart(chart) {
  document.getElementById('resultsEmpty').hidden = true;
  document.getElementById('results').hidden = false;
  const coreLabels = [
    ['Life Path', 'lifePath'],
    ['Birthday', 'birthday'],
    ['Expression / Name', 'expression'],
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
        <p>${escapeHtml(CORE_DESCRIPTIONS[key])}</p>
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
    renderMetric('Personal Year', chart.cycles.personalYear, meaning(chart.cycles.personalYear).keywords),
    renderMetric('Personal Month', chart.cycles.personalMonth, meaning(chart.cycles.personalMonth).keywords),
    renderMetric('Personal Day', chart.cycles.personalDay, meaning(chart.cycles.personalDay).keywords),
    renderMetric('Universal Year', chart.cycles.universalYear, 'Collective calendar tone'),
    renderMetric('Triad', chart.cycles.triad.join(' / '), 'Year, month, and day together'),
    renderMetric('Overtone', chart.cycles.overtone, chart.cycles.redLetterYear ? 'Red-letter year match detected' : 'Personal and universal blend')
  ].join('');

  const missing = chart.advanced.karmicLessons.length ? chart.advanced.karmicLessons.join(', ') : 'None';
  const passion = chart.advanced.hiddenPassion.length ? chart.advanced.hiddenPassion.join(', ') : 'None';
  document.getElementById('advancedGrid').innerHTML = [
    renderMetric('Karmic lessons', missing, 'Numbers absent from the name table'),
    renderMetric('Hidden passion', passion, 'Most repeated name-table numbers'),
    renderMetric('Subconscious self', chart.advanced.subconsciousSelf, 'How many number types appear'),
    renderMetric('Point of security', chart.advanced.pointOfSecurity, 'Reduced subconscious response'),
    renderMetric('First vowel', chart.advanced.firstVowel, 'Instinctive emotional tone'),
    renderMetric('Cornerstone', chart.advanced.cornerstone, 'How the name begins'),
    renderMetric('Capstone', chart.advanced.capstone, 'How the name completes'),
    renderMetric('Inclusion table', Object.entries(chart.advanced.inclusion).map(([n, c]) => `${n}:${c}`).join('  '), 'Letter counts by number')
  ].join('');

  document.getElementById('timeline').innerHTML = chart.timeline.map((item, index) => `
    <article class="timeline-card">
      <span>${index + 1}${['st', 'nd', 'rd', 'th'][Math.min(index, 3)]} period · age ${escapeHtml(item.period)}</span>
      <strong>${item.pinnacle}</strong>
      <p><b>Pinnacle:</b> ${escapeHtml(meaning(item.pinnacle).title)}. <b>Challenge:</b> ${escapeHtml(String(item.challenge))} ${escapeHtml(meaning(item.challenge || 9).keywords)}.</p>
    </article>
  `).join('');
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
