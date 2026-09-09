// Typing Practice App Core Logic

// Keyboard codes sequence for mapping to rows
const KEY_CODES = [
  // Row 1
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  // Row 2
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
  // Row 3
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  // Row 4
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight'],
  // Row 5
  ['ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight']
];

// Interactive keyboard configuration layouts
const KEYBOARD_LAYOUTS = {
  english: [
    [
      { key: '`', shift: '~' }, { key: '1', shift: '!' }, { key: '2', shift: '@' }, { key: '3', shift: '#' },
      { key: '4', shift: '$' }, { key: '5', shift: '%' }, { key: '6', shift: '^' }, { key: '7', shift: '&' },
      { key: '8', shift: '*' }, { key: '9', shift: '(' }, { key: '0', shift: ')' }, { key: '-', shift: '_' },
      { key: '=', shift: '+' }, { key: 'Backspace', class: 'key-backspace' }
    ],
    [
      { key: 'Tab', class: 'key-tab' }, { key: 'q', shift: 'Q' }, { key: 'w', shift: 'W' }, { key: 'e', shift: 'E' },
      { key: 'r', shift: 'R' }, { key: 't', shift: 'T' }, { key: 'y', shift: 'Y' }, { key: 'u', shift: 'U' },
      { key: 'i', shift: 'I' }, { key: 'o', shift: 'O' }, { key: 'p', shift: 'P' }, { key: '[', shift: '{' },
      { key: ']', shift: '}' }, { key: '\\', shift: '|' }
    ],
    [
      { key: 'CapsLock', class: 'key-caps' }, { key: 'a', shift: 'A' }, { key: 's', shift: 'S' }, { key: 'd', shift: 'D' },
      { key: 'f', shift: 'F' }, { key: 'g', shift: 'G' }, { key: 'h', shift: 'H' }, { key: 'j', shift: 'J' },
      { key: 'k', shift: 'K' }, { key: 'l', shift: 'L' }, { key: ';', shift: ':' }, { key: "'", shift: '"' },
      { key: 'Enter', class: 'key-enter' }
    ],
    [
      { key: 'Shift', class: 'key-shift-l' }, { key: 'z', shift: 'Z' }, { key: 'x', shift: 'X' }, { key: 'c', shift: 'C' },
      { key: 'v', shift: 'V' }, { key: 'b', shift: 'B' }, { key: 'n', shift: 'N' }, { key: 'm', shift: 'M' },
      { key: ',', shift: '<' }, { key: '.', shift: '>' }, { key: '/', shift: '?' }, { key: 'Shift', class: 'key-shift-r' }
    ],
    [
      { key: 'Ctrl', class: 'key-ctrl' }, { key: 'Alt' }, { key: ' ', class: 'key-space' }, { key: 'Alt' }, { key: 'Ctrl' }
    ]
  ],
  punjabi: [
    [
      { key: 'ੑ', shift: 'ੱ' }, { key: '੧', shift: 'ੱ' }, { key: '੨', shift: 'ਖ਼' }, { key: '੩', shift: 'ਗ਼' },
      { key: '੪', shift: 'ਜ਼' }, { key: '੫', shift: 'ਫ਼' }, { key: '੬', shift: 'ਲ਼' }, { key: '੭', shift: 'ਸ਼' },
      { key: '੮', shift: 'ਖ਼' }, { key: '੯', shift: '(' }, { key: '੦', shift: ')' }, { key: '-', shift: 'ਃ' },
      { key: '੍ਰ', shift: '੍ਰ' }, { key: 'Backspace', class: 'key-backspace' }
    ],
    [
      { key: 'Tab', class: 'key-tab' }, { key: 'ੌ', shift: 'ਔ' }, { key: 'ੈ', shift: 'ਐ' }, { key: 'ਾ', shift: 'ਆ' },
      { key: 'ੀ', shift: 'ਈ' }, { key: 'ੂ', shift: 'ਊ' }, { key: 'ਬ', shift: 'ਭ' }, { key: 'ਹ', shift: 'ਙ' },
      { key: 'ਗ', shift: 'ਘ' }, { key: 'ਦ', shift: 'ਧ' }, { key: 'ਜ', shift: 'ਝ' }, { key: 'ਡ', shift: 'ਢ' },
      { key: '਼', shift: 'ਞ' }, { key: 'ੌ', shift: 'ਔ' }
    ],
    [
      { key: 'CapsLock', class: 'key-caps' }, { key: 'ੋ', shift: 'ਓ' }, { key: 'ੇ', shift: 'ਏ' }, { key: '੍', shift: 'ਅ' },
      { key: 'ਿ', shift: 'ਇ' }, { key: 'ੁ', shift: 'ਉ' }, { key: 'ਪ', shift: 'ਫ' }, { key: 'ਰ', shift: 'ੜ' },
      { key: 'ਕ', shift: 'ਖ' }, { key: 'ਤ', shift: 'ਥ' }, { key: 'ਚ', shift: 'ਛ' }, { key: 'ਟ', shift: 'ਠ' },
      { key: 'Enter', class: 'key-enter' }
    ],
    [
      { key: 'Shift', class: 'key-shift-l' }, { key: 'ੑ', shift: 'ੲ' }, { key: 'ੰ', shift: 'ਂ' }, { key: 'ਮ', shift: 'ਣ' },
      { key: 'ਨ', shift: 'ਣ' }, { key: 'ਵ', shift: 'ਲ਼' }, { key: 'ਲ', shift: 'ਲ਼' }, { key: 'ਸ', shift: 'ਸ਼' },
      { key: ',', shift: '<' }, { key: '.', shift: '।' }, { key: 'ਯ', shift: '?' }, { key: 'Shift', class: 'key-shift-r' }
    ],
    [
      { key: 'Ctrl', class: 'key-ctrl' }, { key: 'Alt' }, { key: ' ', class: 'key-space' }, { key: 'Alt' }, { key: 'Ctrl' }
    ]
  ],
  hindi: [
    [
      { key: '◌ॄ', shift: '◌ॅ' }, { key: '१', shift: '१' }, { key: '२', shift: '२' }, { key: '३', shift: '३' },
      { key: '४', shift: '४' }, { key: '५', shift: '५' }, { key: '६', shift: '६' }, { key: '७', shift: '७' },
      { key: '८', shift: '८' }, { key: '९', shift: '९' }, { key: '०', shift: '०' }, { key: '-', shift: '◌ः' },
      { key: 'ृ', shift: 'ृ' }, { key: 'Backspace', class: 'key-backspace' }
    ],
    [
      { key: 'Tab', class: 'key-tab' }, { key: 'ौ', shift: 'औ' }, { key: 'ै', shift: 'ऐ' }, { key: 'ा', shift: 'आ' },
      { key: 'ी', shift: 'ई' }, { key: 'ू', shift: 'ऊ' }, { key: 'ब', shift: 'भ' }, { key: 'ह', shift: 'ङ' },
      { key: 'ग', shift: 'घ' }, { key: 'द', shift: 'ध' }, { key: 'ज', shift: 'झ' }, { key: 'ड', shift: 'ढ' },
      { key: '़', shift: 'ञ' }, { key: 'ौ', shift: 'औ' }
    ],
    [
      { key: 'CapsLock', class: 'key-caps' }, { key: 'ो', shift: 'ओ' }, { key: 'े', shift: 'ए' }, { key: '्', shift: 'अ' },
      { key: 'ि', shift: 'इ' }, { key: 'ु', shift: 'उ' }, { key: 'प', shift: 'फ' }, { key: 'र', shift: 'ऱ' },
      { key: 'क', shift: 'ख' }, { key: 'त', shift: 'थ' }, { key: 'च', shift: 'छ' }, { key: 'ट', shift: 'ठ' },
      { key: 'Enter', class: 'key-enter' }
    ],
    [
      { key: 'Shift', class: 'key-shift-l' }, { key: 'ॆ', shift: 'ऎ' }, { key: 'ं', shift: 'ँ' }, { key: 'म', shift: 'ण' },
      { key: 'न', shift: 'ऩ' }, { key: 'व', shift: 'ऴ' }, { key: 'ल', shift: 'ळ' }, { key: 'स', shift: 'श' },
      { key: ',', shift: 'ष' }, { key: '.', shift: '।' }, { key: 'य', shift: '?' }, { key: 'Shift', class: 'key-shift-r' }
    ],
    [
      { key: 'Ctrl', class: 'key-ctrl' }, { key: 'Alt' }, { key: ' ', class: 'key-space' }, { key: 'Alt' }, { key: 'Ctrl' }
    ]
  ],
  hindi_remington: [
    [
      { key: '◌', shift: '◌' }, { key: '१', shift: '१' }, { key: '२', shift: '२' }, { key: '३', shift: '३' },
      { key: '४', shift: '४' }, { key: '५', shift: '५' }, { key: '६', shift: '६' }, { key: '७', shift: '७' },
      { key: '८', shift: '८' }, { key: '९', shift: '९' }, { key: '०', shift: '०' }, { key: '-', shift: '◌ः' },
      { key: 'ृ', shift: 'ृ' }, { key: 'Backspace', class: 'key-backspace' }
    ],
    [
      { key: 'Tab', class: 'key-tab' }, { key: 'ु', shift: 'फ' }, { key: 'ू', shift: 'ॅ' }, { key: 'म', shift: 'म्' },
      { key: 'त', shift: 'त्' }, { key: 'ज', shift: 'ज्' }, { key: 'ल', shift: 'ल्' }, { key: 'न', shift: 'न्' },
      { key: 'प', shift: 'प्' }, { key: 'व', shift: 'व्' }, { key: 'च', shift: 'च्' }, { key: 'ख्', shift: 'क्ष' },
      { key: 'ृ', shift: 'श्र' }, { key: '।', shift: '।' }
    ],
    [
      { key: 'CapsLock', class: 'key-caps' }, { key: '◌ं', shift: '◌ा' }, { key: 'ै', shift: 'े' }, { key: 'क', shift: 'क्' },
      { key: 'ि', shift: 'थ्' }, { key: 'ह', shift: 'ळ' }, { key: 'ी', shift: 'ਭ' }, { key: 'र', shift: 'ੜ' },
      { key: 'ा', shift: 'ਖ' }, { key: 'स', shift: 'ਥ' }, { key: 'य', shift: 'ਛ' }, { key: 'श', shift: 'ਠ' },
      { key: 'Enter', class: 'key-enter' }
    ],
    [
      { key: 'Shift', class: 'key-shift-l' }, { key: '्र', shift: 'र' }, { key: 'ग', shift: 'ग्' }, { key: 'ब', shift: 'ब्' },
      { key: 'अ', shift: 'भ' }, { key: 'इ', shift: 'श' }, { key: 'द', shift: 'ध' }, { key: 'उ', shift: 'ख' },
      { key: 'ए', shift: 'ष' }, { key: '।', shift: '।' }, { key: 'ध', shift: '?' }, { key: 'Shift', class: 'key-shift-r' }
    ],
    [
      { key: 'Ctrl', class: 'key-ctrl' }, { key: 'Alt' }, { key: ' ', class: 'key-space' }, { key: 'Alt' }, { key: 'Ctrl' }
    ]
  ]
};

// Gurmukhi Inscript Translation Map (QWERTY key -> Gurmukhi char)
const GURMUKHI_INSCRIPT_MAP = {
  // Normal Lowercase
  'q': 'ੌ', 'w': 'ੈ', 'e': 'ਾ', 'r': 'ੀ', 't': 'ੂ', 'y': 'ਬ', 'u': 'ਹ', 'i': 'ਗ', 'o': 'ਦ', 'p': 'ਜ', '[': 'ਡ', ']': '਼',
  'a': 'ੋ', 's': 'ੇ', 'd': '੍', 'f': 'ਿ', 'g': 'ੁ', 'h': 'ਪ', 'j': 'ਰ', 'k': 'ਕ', 'l': 'ਤ', ';': 'ਚ', "'": 'ਟ',
  'z': 'ੑ', 'x': 'ੰ', 'c': 'ਮ', 'v': 'ਨ', 'b': 'ਵ', 'n': 'ਲ', 'm': 'ਸ', ',': ',', '.': '।', '/': 'ਯ',
  // Shifted Uppercase
  'Q': 'ਔ', 'W': 'ਐ', 'E': 'ਆ', 'R': 'ਈ', 'T': 'ਊ', 'Y': 'ਭ', 'U': 'ਙ', 'I': 'ਘ', 'O': 'ਧ', 'P': 'ਝ', '{': 'ਢ', '}': 'ਞ',
  'A': 'ਓ', 'S': 'ਏ', 'D': 'ਅ', 'F': 'ਇ', 'G': 'ਉ', 'H': 'ਫ', 'J': 'ੜ', 'K': 'ਖ', 'L': 'ਥ', ':': 'ਛ', '"': 'ਠ',
  'Z': 'ੲ', 'X': 'ਂ', 'C': 'ਣ', 'V': 'ਣ', 'B': 'ਲ਼', 'N': 'ਲ਼', 'M': 'ਸ਼', '<': '<', '>': '>', '?': '?'
};

// Devanagari Inscript Translation Map (QWERTY key -> Devanagari char)
const HINDI_INSCRIPT_MAP = {
  // Normal Lowercase
  'q': 'ौ', 'w': 'ै', 'e': 'ा', 'r': 'ी', 't': 'ू', 'y': 'ब', 'u': 'ह', 'i': 'ग', 'o': 'द', 'p': 'ज', '[': 'ड', ']': '़',
  'a': 'ो', 's': 'े', 'd': '्', 'f': 'ि', 'g': 'ु', 'h': 'प', 'j': 'र', 'k': 'क', 'l': 'त', ';': 'च', "'": 'ट',
  'z': 'ॆ', 'x': 'ं', 'c': 'म', 'v': 'न', 'b': 'व', 'n': 'ल', 'm': 'स', ',': ',', '.': '।', '/': 'य',
  // Shifted Uppercase
  'Q': 'औ', 'W': 'ऐ', 'E': 'आ', 'R': 'ई', 'T': 'ऊ', 'Y': 'भ', 'U': 'ङ', 'I': 'घ', 'O': 'ध', 'P': 'झ', '{': 'ढ', '}': 'ञ',
  'A': 'ओ', 'S': 'ए', 'D': 'अ', 'F': 'इ', 'G': 'उ', 'H': 'फ', 'J': 'ऱ', 'K': 'ख', 'L': 'थ', ':': 'छ', '"': 'ठ',
  'Z': 'ऎ', 'X': 'ँ', 'C': 'ण', 'V': 'ऩ', 'B': 'ऴ', 'N': 'ळ', 'M': 'श', '<': '<', '>': '>', '?': '?'
};

// Devanagari Remington Gail Map (QWERTY key -> Devanagari Remington char)
const HINDI_REMINGTON_MAP = {
  // Normal Lowercase
  'q': 'ु', 'w': 'ू', 'e': 'म', 'r': 'त', 't': 'ज', 'y': 'ल', 'u': 'न', 'i': 'प', 'o': 'व', 'p': 'च', '[': 'ख्', ']': ',,',
  'a': 'ं', 's': 'े', 'd': 'क', 'f': 'ि', 'g': 'ह', 'h': 'ी', 'j': 'र', 'k': 'ा', 'l': 'स', ';': 'य', "'": 'श',
  'z': '्र', 'x': 'ग', 'c': 'ब', 'v': 'अ', 'b': 'इ', 'n': 'द', 'm': 'उ', ',': 'ए', '.': '।', '/': 'ध',
  // Shifted Uppercase
  'Q': 'फ', 'W': 'ॅ', 'E': 'म्', 'R': 'त्', 'T': 'ज्', 'Y': 'ल्', 'U': 'न्', 'I': 'प्', 'O': 'व्', 'P': 'च्', '{': 'क्ष', '}': 'द्व',
  'A': 'ां', 'S': 'ै', 'D': 'क्', 'F': 'थ्', 'G': 'ळ', 'H': 'भ्', 'J': 'श्र', 'K': 'ज्ञ', 'L': 'स्', ':': 'रू', '"': 'ष',
  'Z': 'र्', 'X': 'ग्', 'C': 'ब्', 'V': 'भ', 'B': 'श्', 'N': 'ध्', 'M': 'ख्', '<': 'ऋ', '>': '।', '?': '?'
};

// App State
let selectedLanguage = 'english';
let selectedPassage = null;
let timeLimit = 600; // 10 minutes (seconds)
let timeLeft = 600;
let timerInterval = null;
let isRunning = false;
let backspaceAllowed = true;
let highlightWords = true;
let onScreenMode = true;
let customPassages = [];
let keystrokeCount = 0;
let speedHistory = []; // Timeline of WPM snapshots [{time: "0:10", wpm: 32}]
let currentSnapshotInterval = 10; // seconds
let snapshotTimer = 0;
let lastPassageId = '';
let enableSound = true;
let audioCtx = null;

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const examModeBtn = document.getElementById('examModeBtn');
const langSelect = document.getElementById('langSelect');
const passageSelect = document.getElementById('passageSelect');
const timeLimitSelect = document.getElementById('timeLimit');
const allowBackspaceCb = document.getElementById('allowBackspace');
const highlightWordsCb = document.getElementById('highlightWords');
const timeLeftEl = document.getElementById('timeLeft');
const liveWpmEl = document.getElementById('liveWpm');
const liveAccuracyEl = document.getElementById('liveAccuracy');
const modeOnScreenBtn = document.getElementById('modeOnScreen');
const modePaperBtn = document.getElementById('modePaper');
const sourcePanel = document.getElementById('sourcePanel');
const sourceTextContainer = document.getElementById('sourceText');
const paperOverlay = document.getElementById('paperOverlay');
const printPassageBtn = document.getElementById('printPassageBtn');
const typingBox = document.getElementById('typingBox');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const virtualKeyboard = document.getElementById('virtualKeyboard');

// Modals
const resultsModal = document.getElementById('resultsModal');
const closeResultsBtn = document.getElementById('closeResultsBtn');
const okResultsBtn = document.getElementById('okResultsBtn');
const retestBtn = document.getElementById('retestBtn');
const referenceModal = document.getElementById('referenceModal');
const closeRefBtn = document.getElementById('closeRefBtn');
const closeRefOkBtn = document.getElementById('closeRefOkBtn');
const printableArea = document.getElementById('printableArea');
const printBtn = document.getElementById('printBtn');

// Result Metrics
const qualifyBanner = document.getElementById('qualifyBanner');
const resNetWpm = document.getElementById('resNetWpm');
const resGrossWpm = document.getElementById('resGrossWpm');
const resAccuracy = document.getElementById('resAccuracy');
const resMistakes = document.getElementById('resMistakes');
const resTime = document.getElementById('resTime');
const diffViewer = document.getElementById('diffViewer');

// Custom Passages
const customPassageText = document.getElementById('customPassageText');
const customPassageLang = document.getElementById('customPassageLang');
const loadCustomBtn = document.getElementById('loadCustomBtn');
const historyList = document.getElementById('historyList');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const enableSoundCb = document.getElementById('enableSound');

// Initial Setup
window.addEventListener('DOMContentLoaded', () => {
  loadHistory();
  populatePassages();
  loadSelectedPassage();
  renderKeyboard();
  setupEventListeners();
  
  // Theme check
  if (localStorage.getItem('theme') === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.checked = true;
  }

  // Sound preference check
  if (localStorage.getItem('keystrokeSound') === 'false') {
    enableSound = false;
    enableSoundCb.checked = false;
  }
});

// Event Listeners Setup
function setupEventListeners() {
  // Theme Switches
  themeToggle.addEventListener('change', (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });

  examModeBtn.addEventListener('click', () => {
    const isExamMode = document.body.classList.toggle('sssc-exam-theme');
    examModeBtn.innerHTML = isExamMode ? 
      '<i class="fa-solid fa-building-columns"></i> SSSC Exam Mode: ON' : 
      '<i class="fa-solid fa-building-columns"></i> SSSC Exam Mode: OFF';
    
    // Set official exam configurations
    if (isExamMode) {
      allowBackspaceCb.checked = true; // SSSC allows Backspace
      highlightWordsCb.checked = false; // Real exam has no current word highlighting
      timeLimitSelect.value = "600"; // 10 minutes standard
      
      backspaceAllowed = true;
      highlightWords = false;
      timeLimit = 600;
      
      allowBackspaceCb.disabled = true;
      highlightWordsCb.disabled = true;
      timeLimitSelect.disabled = true;
    } else {
      allowBackspaceCb.disabled = false;
      highlightWordsCb.disabled = false;
      timeLimitSelect.disabled = false;
    }
    
    resetTest();
  });

  // Config Selectors
  langSelect.addEventListener('change', (e) => {
    selectedLanguage = e.target.value;
    populatePassages();
    loadSelectedPassage();
    renderKeyboard();
    resetTest();
  });

  passageSelect.addEventListener('change', () => {
    loadSelectedPassage();
    resetTest();
  });

  timeLimitSelect.addEventListener('change', (e) => {
    timeLimit = parseInt(e.target.value);
    resetTest();
  });

  allowBackspaceCb.addEventListener('change', (e) => {
    backspaceAllowed = e.target.checked;
  });

  highlightWordsCb.addEventListener('change', (e) => {
    highlightWords = e.target.checked;
    renderSourceTextSpans();
  });

  enableSoundCb.addEventListener('change', (e) => {
    enableSound = e.target.checked;
    localStorage.setItem('keystrokeSound', enableSound);
    if (enableSound) {
      initAudio();
      playClick(' ');
    }
  });

  // Modes
  modeOnScreenBtn.addEventListener('click', () => {
    onScreenMode = true;
    modeOnScreenBtn.classList.add('btn-primary');
    modePaperBtn.classList.remove('btn-primary');
    sourceTextContainer.style.display = 'block';
    paperOverlay.style.display = 'none';
    resetTest();
  });

  modePaperBtn.addEventListener('click', () => {
    onScreenMode = false;
    modePaperBtn.classList.add('btn-primary');
    modeOnScreenBtn.classList.remove('btn-primary');
    sourceTextContainer.style.display = 'none';
    paperOverlay.style.display = 'flex';
    resetTest();
  });

  printPassageBtn.addEventListener('click', openReferenceModal);

  // Test Actions
  startBtn.addEventListener('click', () => {
    if (isRunning) {
      stopTest(false); // Cancel
    } else {
      startTest();
    }
  });

  resetBtn.addEventListener('click', resetTest);

  // Typing Inputs keydown/keyup interception
  typingBox.addEventListener('keydown', handleKeydown);
  typingBox.addEventListener('keyup', handleKeyup);
  typingBox.addEventListener('input', handleInput);

  // Custom passage loading
  loadCustomBtn.addEventListener('click', loadCustomPassage);
  clearHistoryBtn.addEventListener('click', clearHistory);

  // Modal Closures
  closeResultsBtn.addEventListener('click', () => {
    resultsModal.classList.remove('show');
    resetTest();
  });
  okResultsBtn.addEventListener('click', () => {
    resultsModal.classList.remove('show');
    resetTest();
  });
  retestBtn.addEventListener('click', () => {
    resultsModal.classList.remove('show');
    if (lastPassageId) {
      passageSelect.value = lastPassageId;
      loadSelectedPassage();
    }
    resetTest();
    startTest();
  });
  
  closeRefBtn.addEventListener('click', () => referenceModal.classList.remove('show'));
  closeRefOkBtn.addEventListener('click', () => referenceModal.classList.remove('show'));
  printBtn.addEventListener('click', () => {
    const printContent = printableArea.innerHTML;
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = `<div style="padding:40px; font-size:1.5rem; line-height:1.8;">${printContent}</div>`;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload(); // Refresh to restore application bindings safely
  });
}

// Finger guidance colors map
function getFingerClass(code) {
  const pinkyL = ['Backquote', 'Digit1', 'KeyQ', 'KeyA', 'KeyZ', 'CapsLock', 'ShiftLeft', 'ControlLeft'];
  const ringL = ['Digit2', 'KeyW', 'KeyS', 'KeyX', 'AltLeft'];
  const middleL = ['Digit3', 'KeyE', 'KeyD', 'KeyC'];
  const indexL = ['Digit4', 'Digit5', 'KeyR', 'KeyT', 'KeyF', 'KeyG', 'KeyV', 'KeyB'];
  const indexR = ['Digit6', 'Digit7', 'KeyY', 'KeyU', 'KeyH', 'KeyJ', 'KeyN', 'KeyM'];
  const middleR = ['Digit8', 'KeyI', 'KeyK', 'Comma'];
  const ringR = ['Digit9', 'KeyO', 'KeyL', 'Period'];
  
  if (pinkyL.includes(code)) return 'finger-l-pinky';
  if (ringL.includes(code)) return 'finger-l-ring';
  if (middleL.includes(code)) return 'finger-l-middle';
  if (indexL.includes(code)) return 'finger-l-index';
  if (code === 'Space') return 'finger-thumb';
  if (indexR.includes(code)) return 'finger-r-index';
  if (middleR.includes(code)) return 'finger-r-middle';
  if (ringR.includes(code)) return 'finger-r-ring';
  return 'finger-r-pinky';
}

// Virtual Keyboard Render
function renderKeyboard() {
  const layout = KEYBOARD_LAYOUTS[selectedLanguage] || KEYBOARD_LAYOUTS.english;
  
  for (let rowIndex = 0; rowIndex < layout.length; rowIndex++) {
    const rowEl = document.getElementById(`kbRow${rowIndex + 1}`);
    if (!rowEl) continue;
    rowEl.innerHTML = '';
    
    const rowKeys = layout[rowIndex];
    const rowCodes = KEY_CODES[rowIndex];
    
    for (let colIndex = 0; colIndex < rowKeys.length; colIndex++) {
      const keyData = rowKeys[colIndex];
      const keyCode = rowCodes[colIndex];
      
      const keyEl = document.createElement('div');
      keyEl.className = `key ${keyData.class || ''} ${getFingerClass(keyCode)}`;
      keyEl.setAttribute('data-code', keyCode);
      
      const mainChar = keyData.key;
      const shiftChar = keyData.shift || '';
      
      if (shiftChar && shiftChar !== mainChar && !keyData.class) {
        keyEl.innerHTML = `<span>${mainChar}</span><span class="sub-char">${shiftChar}</span>`;
        keyEl.classList.add('key-double-char');
      } else {
        keyEl.innerHTML = `<span>${mainChar}</span>`;
      }
      
      rowEl.appendChild(keyEl);
    }
  }
}

// Highlight virtual keys on press
function highlightKey(code, isShifted, active) {
  const keyEl = virtualKeyboard.querySelector(`.key[data-code="${code}"]`);
  if (!keyEl) return;
  
  if (active) {
    keyEl.classList.add('active');
  } else {
    keyEl.classList.remove('active');
  }
}

// Populate Passages Select list
function populatePassages() {
  passageSelect.innerHTML = '';
  
  // Standard preset passages
  const langPassages = PASSAGES[selectedLanguage] || [];
  langPassages.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = p.title;
    passageSelect.appendChild(opt);
  });
  
  // Loaded Custom passages
  customPassages.forEach(p => {
    if (p.lang === selectedLanguage) {
      const opt = document.createElement('option');
      opt.value = p.id;
      opt.textContent = `[Custom] ${p.title}`;
      passageSelect.appendChild(opt);
    }
  });

  // Select a random passage by default
  const optionsCount = passageSelect.options.length;
  if (optionsCount > 0) {
    const randomIndex = Math.floor(Math.random() * optionsCount);
    passageSelect.selectedIndex = randomIndex;
  }
}

// Load Selected Passage text into state
function loadSelectedPassage() {
  const pid = passageSelect.value;
  if (!pid) {
    selectedPassage = { title: "No passage", text: "" };
    return;
  }
  
  // Check presets
  let found = (PASSAGES[selectedLanguage] || []).find(p => p.id === pid);
  
  // Check customs
  if (!found) {
    found = customPassages.find(p => p.id === pid);
  }
  
  selectedPassage = found || { title: "Error", text: "Passage not found." };
  
  // Update details
  document.getElementById('passageTitle').textContent = selectedPassage.title;
  const wordCount = selectedPassage.text.split(/\s+/).filter(Boolean).length;
  document.getElementById('passageWordCount').textContent = `Words: ${wordCount}`;
  
  renderSourceTextSpans();
}

// Render source passage as single character spans for real-time highlighting
function renderSourceTextSpans() {
  if (!onScreenMode) return;
  
  sourceTextContainer.innerHTML = '';
  const text = selectedPassage.text;
  
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.className = 'char';
    span.textContent = text[i];
    sourceTextContainer.appendChild(span);
  }
  
  if (text.length > 0) {
    sourceTextContainer.children[0].classList.add('current');
  }
}

// Keyboard Interception Handlers
function handleKeydown(e) {
  initAudio();
  if (enableSound && !e.repeat) {
    const isSpecialSystemKey = e.key.startsWith('F') && e.key.length > 1;
    if (e.key !== 'Escape' && !isSpecialSystemKey) {
      playClick(e.key);
    }
  }

  if (!isRunning && typingBox.disabled === false) {
    startTest();
  }
  
  // Prevent Backspace if restricted
  if (e.key === 'Backspace' && !backspaceAllowed) {
    e.preventDefault();
    return;
  }

  // Highlight physical keystroke on virtual keyboard
  highlightKey(e.code, e.shiftKey, true);

  // Shift & Caps highlights
  if (e.key === 'Shift') {
    const keys = virtualKeyboard.querySelectorAll('.key[data-code="ShiftLeft"], .key[data-code="ShiftRight"]');
    keys.forEach(k => k.classList.add('active'));
  }
  if (e.key === 'CapsLock') {
    const key = virtualKeyboard.querySelector('.key[data-code="CapsLock"]');
    key.classList.toggle('active');
  }

  // Custom Input Method Editor (IME) Translation mapping
  if (selectedLanguage !== 'english') {
    const isChar = e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey;
    
    if (isChar) {
      e.preventDefault();
      
      let mappedChar = '';
      if (selectedLanguage === 'punjabi') {
        mappedChar = GURMUKHI_INSCRIPT_MAP[e.key] || e.key;
      } else if (selectedLanguage === 'hindi') {
        mappedChar = HINDI_INSCRIPT_MAP[e.key] || e.key;
      } else if (selectedLanguage === 'hindi_remington') {
        mappedChar = HINDI_REMINGTON_MAP[e.key] || e.key;
      }
      
      // Inject mapped character
      const start = this.selectionStart;
      const end = this.selectionEnd;
      const val = this.value;
      this.value = val.substring(0, start) + mappedChar + val.substring(end);
      this.selectionStart = this.selectionEnd = start + mappedChar.length;
      
      // Update typing area
      handleInput();
    }
  }
}

function handleKeyup(e) {
  highlightKey(e.code, e.shiftKey, false);
  if (e.key === 'Shift') {
    const keys = virtualKeyboard.querySelectorAll('.key[data-code="ShiftLeft"], .key[data-code="ShiftRight"]');
    keys.forEach(k => k.classList.remove('active'));
  }
}

// Live typing input feedback loop
function handleInput() {
  keystrokeCount++;
  
  const typedText = typingBox.value;
  const originalText = selectedPassage.text;
  
  // Real-time character spans highlights
  if (onScreenMode) {
    const spans = sourceTextContainer.querySelectorAll('.char');
    for (let i = 0; i < spans.length; i++) {
      const span = spans[i];
      if (i < typedText.length) {
        if (typedText[i] === originalText[i]) {
          span.className = 'char correct';
        } else {
          span.className = 'char incorrect';
        }
      } else if (i === typedText.length) {
        span.className = 'char current';
        scrollIntoViewIfNeeded(span);
      } else {
        span.className = 'char';
      }
    }
  }

  // Update quick dashboard stats
  updateLiveStats();

  // Standard Auto-stop if user finishes passage exactly
  if (typedText.length >= originalText.length) {
    stopTest(true);
  }
}

// Keep the current word centered in scrollable source frame
function scrollIntoViewIfNeeded(element) {
  const container = sourceTextContainer;
  const containerTop = container.scrollTop;
  const containerBottom = containerTop + container.clientHeight;
  
  const elemTop = element.offsetTop - container.offsetTop;
  const elemBottom = elemTop + element.clientHeight;
  
  if (elemTop < containerTop) {
    container.scrollTop = elemTop - 20;
  } else if (elemBottom > containerBottom) {
    container.scrollTop = elemBottom - container.clientHeight + 20;
  }
}

// Quick live dashboard stats updates
function updateLiveStats() {
  const typed = typingBox.value;
  if (!typed || !isRunning) return;
  
  const elapsedSeconds = timeLimit - timeLeft;
  const elapsedMinutes = elapsedSeconds / 60 || 1 / 60;
  
  // Standard Gross WPM: 5 strokes per word
  const grossWords = typed.length / 5;
  
  // Calculate basic live mistakes (quick check)
  let liveMistakes = 0;
  const original = selectedPassage.text;
  const compareLen = Math.min(typed.length, original.length);
  for (let i = 0; i < compareLen; i++) {
    if (typed[i] !== original[i]) {
      // Basic character mismatch count for live feedback
      liveMistakes += 0.2; // approx 1 word mistake per 5 character errors
    }
  }
  
  // Include missing/extra characters as penalties
  if (typed.length > original.length) {
    liveMistakes += (typed.length - original.length) / 5;
  }
  
  const approxWordMistakes = Math.floor(liveMistakes);
  const netWords = Math.max(0, grossWords - approxWordMistakes);
  
  const liveNetWpm = Math.round(netWords / elapsedMinutes);
  const accuracy = Math.max(0, Math.round((netWords / grossWords) * 100)) || 0;
  
  liveWpmEl.textContent = liveNetWpm;
  liveAccuracyEl.textContent = `${accuracy}%`;
}

// Start Timer & input enabled
function startTest() {
  if (isRunning) return;
  
  initAudio();
  isRunning = true;
  typingBox.disabled = false;
  typingBox.focus();
  startBtn.innerHTML = '<i class="fa-solid fa-square"></i> Stop Test';
  
  timeLeft = timeLimit;
  keystrokeCount = 0;
  speedHistory = [];
  snapshotTimer = 0;
  
  updateTimerDisplay();
  
  timerInterval = setInterval(() => {
    timeLeft--;
    snapshotTimer++;
    updateTimerDisplay();
    
    // Capture periodic WPM for the timeline chart
    if (snapshotTimer >= currentSnapshotInterval) {
      captureWpmSnapshot();
      snapshotTimer = 0;
    }
    
    if (timeLeft <= 0) {
      stopTest(true);
    }
  }, 1000);
}

// Update Timer string format (MM:SS)
function updateTimerDisplay() {
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  timeLeftEl.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Snapshot speed logs for progress timeline
function captureWpmSnapshot() {
  const typed = typingBox.value;
  const elapsedSecs = timeLimit - timeLeft;
  if (elapsedSecs <= 0 || !typed) return;
  
  const elapsedMinutes = elapsedSecs / 60;
  const grossWords = typed.length / 5;
  
  // Basic calculation for snapshot
  let mistakes = 0;
  const original = selectedPassage.text;
  const checkLen = Math.min(typed.length, original.length);
  for (let i = 0; i < checkLen; i++) {
    if (typed[i] !== original[i]) mistakes += 0.2;
  }
  const netWords = Math.max(0, grossWords - Math.floor(mistakes));
  const currentWpm = Math.round(netWords / elapsedMinutes);
  
  // Time format MM:SS elapsed
  const mins = Math.floor(elapsedSecs / 60);
  const secs = elapsedSecs % 60;
  const timeStr = `${mins}:${secs.toString().padStart(2, '0')}`;
  
  speedHistory.push({ time: timeStr, wpm: currentWpm });
}

// Stop Timer & lock inputs
function stopTest(evalResults = true) {
  if (!isRunning) return;
  
  clearInterval(timerInterval);
  isRunning = false;
  typingBox.disabled = true;
  startBtn.innerHTML = '<i class="fa-solid fa-play"></i> Start Test';
  
  if (evalResults) {
    evaluateResults();
  }
}

// Reset typing arena state
function resetTest() {
  stopTest(false);
  typingBox.disabled = false;
  typingBox.value = '';
  keystrokeCount = 0;
  speedHistory = [];
  snapshotTimer = 0;
  timeLeft = timeLimit;
  updateTimerDisplay();
  
  liveWpmEl.textContent = '0';
  liveAccuracyEl.textContent = '0%';
  
  renderSourceTextSpans();
  if (onScreenMode) {
    sourceTextContainer.scrollTop = 0;
  }
}

// Word-by-Word Alignment Algorithm (Semi-global prefix alignment)
function alignWords(sourceWords, typedWords) {
  const n = sourceWords.length;
  const m = typedWords.length;
  
  if (m === 0) {
    return sourceWords.map(w => ({ type: 'untyped', source: w, typed: '' }));
  }
  
  // Initialize DP matrix
  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
  
  for (let i = 0; i <= n; i++) dp[i][0] = i;
  for (let j = 0; j <= m; j++) dp[0][j] = j;
  
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (sourceWords[i - 1].toLowerCase() === typedWords[j - 1].toLowerCase()) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j - 1] + 1, // Substitution
          dp[i - 1][j] + 1,     // Deletion (Omission)
          dp[i][j - 1] + 1      // Insertion (Extra word)
        );
      }
    }
  }
  
  // Find the optimal end position in sourceWords (bestI) that aligns all m typed words.
  // Words after bestI in sourceWords are untyped remaining words with zero penalty.
  let bestI = m <= n ? m : n;
  let minCost = dp[bestI][m];
  
  for (let i = 1; i <= n; i++) {
    if (dp[i][m] < minCost) {
      minCost = dp[i][m];
      bestI = i;
    } else if (dp[i][m] === minCost) {
      // Tie-breaking: prefer position closest to m to prevent leaping ahead across document
      if (Math.abs(i - m) < Math.abs(bestI - m)) {
        bestI = i;
      }
    }
  }
  
  // Backtrack from (bestI, m)
  let i = bestI, j = m;
  const alignment = [];
  
  // Any words in source beyond bestI are remaining untyped words
  for (let k = n - 1; k >= bestI; k--) {
    alignment.push({ type: 'untyped', source: sourceWords[k], typed: '' });
  }
  
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && sourceWords[i - 1].toLowerCase() === typedWords[j - 1].toLowerCase()) {
      alignment.push({ type: 'match', source: sourceWords[i - 1], typed: typedWords[j - 1] });
      i--;
      j--;
    } else if (i > 0 && j > 0 && dp[i][j] === dp[i - 1][j - 1] + 1) {
      alignment.push({ type: 'substitution', source: sourceWords[i - 1], typed: typedWords[j - 1] });
      i--;
      j--;
    } else if (i > 0 && (j === 0 || dp[i][j] === dp[i - 1][j] + 1)) {
      alignment.push({ type: 'omission', source: sourceWords[i - 1], typed: '' });
      i--;
    } else {
      alignment.push({ type: 'insertion', source: '', typed: typedWords[j - 1] });
      j--;
    }
  }
  
  return alignment.reverse();
}

// Calculate results and render report
function evaluateResults() {
  const sourceText = selectedPassage.text;
  const typedText = typingBox.value;
  
  const sourceWords = sourceText.split(/\s+/).filter(Boolean);
  const typedWords = typedText.split(/\s+/).filter(Boolean);
  
  // Calculate Alignment
  const aligned = alignWords(sourceWords, typedWords);

  let matchCount = 0;
  let substitutionCount = 0;
  let omissionCount = 0;
  let insertionCount = 0;
  let untypedCount = 0;
  
  // Format HTML diff view
  diffViewer.innerHTML = '';
  
  aligned.forEach(item => {
    const span = document.createElement('span');
    
    // Words at the end of the passage that the user never reached
    if (item.type === 'untyped') {
      span.className = 'diff-untyped';
      span.textContent = item.source + ' ';
      span.title = 'Untyped (Remaining)';
      diffViewer.appendChild(span);
      untypedCount++;
      return;
    }

    if (item.type === 'match') {
      span.className = 'diff-match';
      span.textContent = item.source + ' ';
      matchCount++;
    } else if (item.type === 'substitution') {
      span.className = 'diff-error';
      span.textContent = item.typed + ' ';
      span.title = `Should be: ${item.source}`;
      substitutionCount++;
      
      // Append correction bracket
      const correctSpan = document.createElement('span');
      correctSpan.className = 'diff-match';
      correctSpan.style.opacity = '0.5';
      correctSpan.textContent = `(${item.source}) `;
      
      diffViewer.appendChild(span);
      diffViewer.appendChild(correctSpan);
      return;
    } else if (item.type === 'omission') {
      span.className = 'diff-omitted';
      span.textContent = item.source + ' ';
      span.title = `Word Omitted (Skipped)`;
      omissionCount++;
    } else if (item.type === 'insertion') {
      span.className = 'diff-inserted';
      span.textContent = item.typed + ' ';
      span.title = `Extra Word Typed`;
      insertionCount++;
    }
    diffViewer.appendChild(span);
  });
  
  // Total Official Mistakes
  const totalMistakes = substitutionCount + omissionCount + insertionCount;
  
  // Timings
  const elapsedSeconds = timeLimit - timeLeft;
  const elapsedMinutes = elapsedSeconds / 60 || 1 / 60;
  
  // Official SSSC evaluation speed metrics:
  // Gross words based on 5 characters per word
  const grossWords = typedText.length / 5;
  const grossWpm = Math.round(grossWords / elapsedMinutes);
  
  // Net words = Gross Words - Mistakes
  const netWords = Math.max(0, grossWords - totalMistakes);
  const netWpm = Math.round(netWords / elapsedMinutes);
  
  // Accuracy
  const accuracy = grossWords > 0 ? Math.max(0, Math.round((netWords / grossWords) * 100)) : 0;
  
  // Check qualification
  const targetWpm = 30; // High court minimum qualifying speed
  const qualified = netWpm >= targetWpm;
  
  // Render results
  resNetWpm.textContent = netWpm;
  resGrossWpm.textContent = grossWpm;
  resAccuracy.textContent = `${accuracy}%`;
  resMistakes.textContent = totalMistakes;
  
  // Format elapsed time string
  const elapsedMins = Math.floor(elapsedSeconds / 60);
  const elapsedSecs = elapsedSeconds % 60;
  resTime.textContent = `${elapsedMins.toString().padStart(2, '0')}:${elapsedSecs.toString().padStart(2, '0')}`;
  
  // Qualification banner
  qualifyBanner.className = 'result-card ' + (qualified ? 'success-border' : 'error-border');
  qualifyBanner.innerHTML = qualified ? 
    `<i class="fa-solid fa-circle-check" style="font-size: 2rem; color: var(--success-color); margin-bottom: 0.5rem;"></i>
     <div style="color: var(--success-color); font-size: 1.6rem; font-weight: 700;">QUALIFIED</div>
     <div style="font-size: 0.9rem; font-weight: normal; color: var(--text-secondary); margin-top: 0.25rem;">
       Congratulations! Your Net Speed of <strong>${netWpm} WPM</strong> meets the Punjab and Haryana High Court requirement of <strong>${targetWpm} WPM</strong>.
     </div>` : 
    `<i class="fa-solid fa-triangle-exclamation" style="font-size: 2rem; color: var(--error-color); margin-bottom: 0.5rem;"></i>
     <div style="color: var(--error-color); font-size: 1.6rem; font-weight: 700;">NOT QUALIFIED</div>
     <div style="font-size: 0.9rem; font-weight: normal; color: var(--text-secondary); margin-top: 0.25rem;">
       Your Net Speed of <strong>${netWpm} WPM</strong> is below the High Court requirement of <strong>${targetWpm} WPM</strong>. Keep practicing!
     </div>`;
     
  // Save log history
  saveLog({
    passageTitle: selectedPassage.title,
    language: selectedLanguage,
    netWpm,
    grossWpm,
    accuracy,
    mistakes: totalMistakes,
    date: new Date().toLocaleDateString(),
    qualified
  });
  
  // Draw Chart
  // Ensure we append final snapshot at the end
  if (speedHistory.length === 0 || speedHistory[speedHistory.length - 1].time !== resTime.textContent) {
    speedHistory.push({ time: resTime.textContent, wpm: netWpm });
  }
  
  // Store the test we just finished in case they click "Retest Same Passage"
  lastPassageId = passageSelect.value;
  
  // Load next random passage
  loadNextRandomPassage();
  
  // Open Modal
  resultsModal.classList.add('show');
  
  // Canvas render timeline chart
  setTimeout(() => drawSpeedChart(speedHistory), 200);
}

// Canvas Timeline chart rendering (zero libraries required)
function drawSpeedChart(timelineData) {
  const canvas = document.getElementById('speedChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  
  const width = rect.width;
  const height = rect.height;
  
  ctx.clearRect(0, 0, width, height);
  
  if (!timelineData || timelineData.length === 0) {
    ctx.fillStyle = '#94a3b8';
    ctx.font = '14px Outfit';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('No speed logs recorded', width / 2, height / 2);
    return;
  }
  
  const padding = 35;
  const graphWidth = width - padding * 2;
  const graphHeight = height - padding * 2;
  
  const speeds = timelineData.map(d => d.wpm);
  const maxWpm = Math.max(50, ...speeds) + 10;
  const minWpm = 0;
  
  const xStep = graphWidth / (timelineData.length - 1 || 1);
  
  // Draw horizontal gridlines & labels
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.lineWidth = 1;
  ctx.fillStyle = '#94a3b8';
  ctx.font = '10px JetBrains Mono';
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';
  
  const gridLines = 4;
  for (let i = 0; i <= gridLines; i++) {
    const val = minWpm + (maxWpm - minWpm) * (i / gridLines);
    const y = height - padding - (val / maxWpm) * graphHeight;
    
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(width - padding, y);
    ctx.stroke();
    
    ctx.fillText(Math.round(val), padding - 8, y);
  }
  
  // Draw X axis labels (time elapsed stamps)
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  const labelInterval = Math.max(1, Math.ceil(timelineData.length / 8));
  for (let i = 0; i < timelineData.length; i += labelInterval) {
    const x = padding + i * xStep;
    const y = height - padding + 8;
    ctx.fillText(timelineData[i].time, x, y);
  }
  
  // Draw glowing gradient line area
  const grad = ctx.createLinearGradient(0, padding, 0, height - padding);
  grad.addColorStop(0, 'rgba(6, 182, 212, 0.25)');
  grad.addColorStop(1, 'rgba(6, 182, 212, 0.00)');
  
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.moveTo(padding, height - padding);
  for (let i = 0; i < timelineData.length; i++) {
    const x = padding + i * xStep;
    const y = height - padding - (timelineData[i].wpm / maxWpm) * graphHeight;
    ctx.lineTo(x, y);
  }
  ctx.lineTo(padding + (timelineData.length - 1) * xStep, height - padding);
  ctx.closePath();
  ctx.fill();
  
  // Draw core timeline line
  ctx.strokeStyle = '#06b6d4';
  ctx.lineWidth = 3;
  ctx.beginPath();
  for (let i = 0; i < timelineData.length; i++) {
    const x = padding + i * xStep;
    const y = height - padding - (timelineData[i].wpm / maxWpm) * graphHeight;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
  
  // Draw timeline dot markers
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = '#06b6d4';
  ctx.lineWidth = 2;
  for (let i = 0; i < timelineData.length; i++) {
    const x = padding + i * xStep;
    const y = height - padding - (timelineData[i].wpm / maxWpm) * graphHeight;
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
}

// Save Practice results to LocalStorage
function saveLog(logItem) {
  const logs = JSON.parse(localStorage.getItem('typingLogs') || '[]');
  logs.unshift(logItem);
  localStorage.setItem('typingLogs', JSON.stringify(logs.slice(0, 50))); // Cap at 50 logs
  loadHistory();
}

// Load Practice history logs from local storage
function loadHistory() {
  historyList.innerHTML = '';
  const logs = JSON.parse(localStorage.getItem('typingLogs') || '[]');
  
  if (logs.length === 0) {
    historyList.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: var(--text-secondary); font-size: 0.9rem;">
        No practice logs yet. Complete a test to see your history!
      </div>`;
    return;
  }
  
  logs.forEach(log => {
    const item = document.createElement('div');
    item.className = 'history-item';
    
    // Format Lang string
    let langLabel = 'EN';
    if (log.language === 'punjabi') langLabel = 'PB';
    if (log.language === 'hindi' || log.language === 'hindi_remington') langLabel = 'HN';
    
    const badgeClass = log.qualified ? 'qualified' : 'unqualified';
    const badgeText = log.qualified ? 'QUAL' : 'FAIL';
    
    item.innerHTML = `
      <div class="history-meta">
        <div class="history-title">${log.passageTitle}</div>
        <div class="history-date">${log.date} • Layout: ${langLabel}</div>
      </div>
      <div class="history-stats">
        <span class="history-stat-badge" title="Net Speed">${log.netWpm} WPM</span>
        <span class="history-stat-badge" title="Accuracy">${log.accuracy}%</span>
        <span class="history-stat-badge ${badgeClass}" title="Status">${badgeText}</span>
      </div>`;
      
    historyList.appendChild(item);
  });
}

// Clear practice history
function clearHistory() {
  if (confirm("Are you sure you want to clear your entire typing history?")) {
    localStorage.removeItem('typingLogs');
    loadHistory();
  }
}

// Custom passages importing
function loadCustomPassage() {
  const rawText = customPassageText.value.trim();
  const lang = customPassageLang.value;
  
  if (!rawText) {
    alert("Please paste some text before loading.");
    return;
  }

  // Normalize custom passage text for typing practice:
  // Convert smart quotes, dashes, non-breaking spaces, carriage returns, and normalize whitespace
  const text = rawText
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/\r\n/g, ' ')
    .replace(/[\r\n\t]+/g, ' ')
    .replace(/[ \u00A0\u200B]+/g, ' ')
    .trim();
  
  const id = `custom_${Date.now()}`;
  const title = `My Text - ${text.substring(0, 25)}...`;

  // Synchronize language if different
  if (selectedLanguage !== lang) {
    selectedLanguage = lang;
    langSelect.value = lang;
    renderKeyboard();
  }
  
  const passageObj = { id, title, text, lang };
  customPassages.push(passageObj);
  
  // Re-populate select list
  populatePassages();
  passageSelect.value = id;
  loadSelectedPassage();
  resetTest();
  
  customPassageText.value = '';
  alert("Custom passage loaded and selected! Click 'Start Test' when ready.");
}

// Paper-to-Screen modal controls
function openReferenceModal() {
  printableArea.innerHTML = selectedPassage.text;
  referenceModal.classList.add('show');
}

// Automatically change the sample text to a new random one
function loadNextRandomPassage() {
  // If user is practicing a custom passage, keep it active for repeated practice
  if (passageSelect.value && passageSelect.value.startsWith('custom_')) {
    return;
  }

  const options = Array.from(passageSelect.options);
  if (options.length <= 1) return; // Only 1 passage available
  
  // Filter out the lastPassageId so we don't repeat the same passage immediately
  const otherOptions = options.filter(opt => opt.value !== lastPassageId);
  if (otherOptions.length === 0) return;
  
  const randomOption = otherOptions[Math.floor(Math.random() * otherOptions.length)];
  
  passageSelect.value = randomOption.value;
  loadSelectedPassage();
}

// Initialize Web Audio context
function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// Synthesize mechanical keyboard keystroke sound dynamically
function playClick(key) {
  if (!enableSound || !audioCtx) return;
  
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  
  const now = audioCtx.currentTime;
  
  // Cache a 100ms noise buffer to avoid recreating it on every keypress
  if (!window.cachedNoiseBuffer) {
    const bufferSize = audioCtx.sampleRate * 0.1; // 100ms
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    window.cachedNoiseBuffer = buffer;
  }
  
  // Base parameters for standard keys (very crisp and tactile)
  let thudFreq = 115;
  let thudDecay = 0.035;
  let thudVolume = 0.30; // Increased low thunk
  
  let clickFreq = 5500;
  let clickDecay = 0.010;
  let clickVolume = 0.09;
  
  let popFreq = 750;
  let popDecay = 0.020;
  let popVolume = 0.16; // Increased plastic snap resonance
  
  let sharpClickVolume = 0.12; // Snap/tick component
  let sharpClickFreq = 6500;

  if (key === ' ') {
    // Spacebar: deeper, hollower stabilizer thud
    thudFreq = 85;
    thudDecay = 0.065;
    thudVolume = 0.40;
    
    popFreq = 380;
    popDecay = 0.045;
    popVolume = 0.18;
    
    clickVolume = 0.01;
    sharpClickVolume = 0.03;
    sharpClickFreq = 4000;
  } else if (key === 'Backspace') {
    // Backspace: softer mechanical feedback
    thudFreq = 95;
    thudDecay = 0.045;
    thudVolume = 0.28;
    
    popFreq = 520;
    popDecay = 0.030;
    popVolume = 0.12;
    
    clickVolume = 0.03;
    sharpClickVolume = 0.05;
    sharpClickFreq = 5000;
  } else if (key === 'Enter') {
    // Enter: bright and distinct snappy click
    thudFreq = 125;
    thudDecay = 0.040;
    thudVolume = 0.32;
    
    popFreq = 850;
    popDecay = 0.025;
    popVolume = 0.20;
    
    clickFreq = 6500;
    clickDecay = 0.012;
    clickVolume = 0.14;
    sharpClickVolume = 0.16;
    sharpClickFreq = 7000;
  } else {
    // Humanize standard keys to prevent robotic sound
    const variation = (Math.random() - 0.5) * 0.15; // +/- 7.5% variation
    thudFreq *= (1 + variation);
    thudDecay *= (1 + variation * 0.2);
    popFreq *= (1 + variation * 0.5);
    clickFreq *= (1 + variation * 0.3);
    sharpClickFreq *= (1 + variation * 0.2);
  }
  
  // 1. Low-frequency "thud" (representing bottoming out plate impact)
  const thudOsc = audioCtx.createOscillator();
  const thudGain = audioCtx.createGain();
  thudOsc.type = 'triangle';
  thudOsc.frequency.setValueAtTime(thudFreq, now);
  thudOsc.frequency.exponentialRampToValueAtTime(thudFreq * 0.6, now + thudDecay);
  
  thudGain.gain.setValueAtTime(thudVolume, now);
  thudGain.gain.exponentialRampToValueAtTime(0.001, now + thudDecay);
  
  thudOsc.connect(thudGain);
  thudGain.connect(audioCtx.destination);
  thudOsc.start(now);
  thudOsc.stop(now + thudDecay);

  // 2. Mid-frequency "pop" (representing keycap hollow plastic resonance)
  const noiseSource = audioCtx.createBufferSource();
  noiseSource.buffer = window.cachedNoiseBuffer;
  
  const popFilter = audioCtx.createBiquadFilter();
  popFilter.type = 'bandpass';
  popFilter.frequency.setValueAtTime(popFreq, now);
  popFilter.Q.setValueAtTime(3.5, now); // Narrower Q for distinct tone
  
  const popGain = audioCtx.createGain();
  popGain.gain.setValueAtTime(popVolume, now);
  popGain.gain.exponentialRampToValueAtTime(0.001, now + popDecay);
  
  noiseSource.connect(popFilter);
  popFilter.connect(popGain);
  popGain.connect(audioCtx.destination);
  noiseSource.start(now);
  noiseSource.stop(now + popDecay);
  
  // 3. High-frequency click noise (representing leaf friction)
  const clickNoiseSource = audioCtx.createBufferSource();
  clickNoiseSource.buffer = window.cachedNoiseBuffer;
  
  const clickFilter = audioCtx.createBiquadFilter();
  clickFilter.type = 'highpass';
  clickFilter.frequency.setValueAtTime(clickFreq, now);
  
  const clickGain = audioCtx.createGain();
  clickGain.gain.setValueAtTime(clickVolume, now);
  clickGain.gain.exponentialRampToValueAtTime(0.001, now + clickDecay);
  
  clickNoiseSource.connect(clickFilter);
  clickFilter.connect(clickGain);
  clickGain.connect(audioCtx.destination);
  clickNoiseSource.start(now);
  clickNoiseSource.stop(now + clickDecay);

  // 4. Sharp leaf sweep snap (gives the distinct high-frequency mechanical tactile "tick")
  const leafOsc = audioCtx.createOscillator();
  const leafGain = audioCtx.createGain();
  leafOsc.type = 'sine';
  leafOsc.frequency.setValueAtTime(sharpClickFreq, now);
  leafOsc.frequency.exponentialRampToValueAtTime(sharpClickFreq * 0.5, now + 0.006); // Extremely fast 6ms sweep
  
  leafGain.gain.setValueAtTime(sharpClickVolume, now);
  leafGain.gain.exponentialRampToValueAtTime(0.001, now + 0.006);
  
  leafOsc.connect(leafGain);
  leafGain.connect(audioCtx.destination);
  leafOsc.start(now);
  leafOsc.stop(now + 0.006);
}
