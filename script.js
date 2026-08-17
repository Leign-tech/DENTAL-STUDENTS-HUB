// ===== TOGGLE MENU =====
function toggleMenu() {
  document.getElementById('navbar').classList.toggle('active');
}
  
// ===== QUESTION BANK - ADD MORE HERE =====
const questions = [
  {
    id: 1,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Which tooth has 5 cusps and is the largest tooth in the mouth?",
    options: ["Maxillary First Molar", "Mandibular First Molar", "Maxillary Canine", "Mandibular Premolar"],
    answer: 1,
    explanation: "The mandibular first molar is the largest tooth and typically has 5 cusps: 2 buccal, 2 lingual, and 1 distal."
  },
  {
    id: 2,
    module: "Oral Pathology",
    type: "MCQ", 
    question: "White patch that cannot be scraped off and cannot be attributed to any other condition is:",
    options: ["Candidiasis", "Leukoplakia", "Lichen Planus", "Geographic Tongue"],
    answer: 1,
    explanation: "Leukoplakia is a premalignant white patch. Key feature: cannot be wiped off. Requires biopsy."
  },
  {
    id: 3,
    module: "Dental Surgery",
    type: "Practical",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800", // tooth extraction
    question: "Looking at the image, what is the correct instrument for extracting a maxillary central incisor?",
    options: ["Extraction Forceps #150", "Extraction Forceps #18R", "Extraction Forceps #88R", "Extraction Forceps #210"],
    answer: 0,
    explanation: "#150 forceps are universal maxillary forceps. Used for centrals, laterals and canines. #18R is for maxillary molars."
  },
  {
    id: 4,
    module: "Conservative",
    type: "MCQ",
    question: "The most common site for dental caries in permanent molars is:",
    options: ["Smooth surface", "Pits and fissures", "Root surface", "Proximal surface"],
    answer: 1,
    explanation: "Pits and fissures trap plaque and food. Fluoride sealants are used for prevention here."
  },
  {
    id: 5,
    module: "Oral Pathology",
    type: "Practical",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800", // oral lesion
    question: "This clinical photo shows an ulcer with a white pseudomembrane. Most likely diagnosis?",
    options: ["Aphthous Ulcer", "Herpetic Ulcer", "Traumatic Ulcer", "Squamous Cell Carcinoma"],
    answer: 0,
    explanation: "Aphthous ulcers: round, <1cm, with erythematous halo and yellow-white center. Not infectious. Usually heals in 10-14 days."
  }
];

let score = 0;
let answered = 0;
let currentFilter = "all";

function renderQuestions() {
  const container = document.getElementById('quizContainer');
  const search = document.getElementById('searchInput').value.toLowerCase();
  
  const filtered = questions.filter(q => {
    const matchModule = currentFilter === "all" || q.module === currentFilter;
    const matchSearch = q.question.toLowerCase().includes(search) || q.module.toLowerCase().includes(search);
    return matchModule && matchSearch;
  });
  
  container.innerHTML = filtered.map(q => `
    <div class="quiz-card" data-id="${q.id}">
      <div class="meta">
        <span class="tag">${q.module}</span>
        <span class="tag ${q.type === 'Practical' ? 'practical' : ''}">${q.type}</span>
      </div>
      <div class="question">${q.id}. ${q.question}</div>
      ${q.image ? `<img src="${q.image}" class="quiz-img" alt="Dental image">` : ''}
      <div class="options">
        ${q.options.map((opt, i) => `<button onclick="checkAnswer(${q.id}, ${i}, this)">${String.fromCharCode(65+i)}. ${opt}</button>`).join('')}
      </div>
      <div class="explanation" id="exp-${q.id}">
        <strong>Explanation:</strong> ${q.explanation}
      </div>
    </div>
  `).join('');
}

function checkAnswer(qid, selected, btn) {
  const q = questions.find(x => x.id === qid);
  const card = btn.closest('.quiz-card');
  const buttons = card.querySelectorAll('.options button');
  
  buttons.forEach(b => b.disabled = true);
  
  if(selected === q.answer) {
    btn.classList.add('correct');
    score++;
  } else {
    btn.classList.add('wrong');
    buttons[q.answer].classList.add('correct');
  }
  
  answered++;
  document.getElementById('score').innerText = `Score: ${score} / ${answered}`;
  document.getElementById(`exp-${qid}`).classList.add('show');
}

// Filters
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.module;
    renderQuestions();
  }
});

document.getElementById('searchInput').oninput = renderQuestions;

renderQuestions();