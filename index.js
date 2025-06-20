const questions = [
    // Çoktan Seçmeli Sorular (30 adet)
    {
        type: "multiple-choice",
        question: "MongoDB'nin tam açılımı nedir?",
        options: ["Mongo Database", "Humongous Database", "Modern Database", "Multiple Database"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "MongoDB hangi tür veritabanıdır?",
        options: ["İlişkisel", "NoSQL", "Hiyerarşik", "Ağ"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "MongoDB'de varsayılan port numarası nedir?",
        options: ["27017", "3306", "5432", "1433"],
        correct: 0
    },
    {
        type: "multiple-choice",
        question: "MongoDB'yi Windows'ta kurmak için hangi dosya türü indirilmelidir?",
        options: [".exe", ".msi", ".zip", ".tar.gz"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "MongoDB'de veri hangi formatta saklanır?",
        options: ["XML", "JSON", "BSON", "CSV"],
        correct: 2
    },
    {
        type: "multiple-choice",
        question: "MongoDB Community Server'ın lisans türü nedir?",
        options: ["Ticari", "GPL", "SSPL", "MIT"],
        correct: 2
    },
    {
        type: "multiple-choice",
        question: "MongoDB'de database oluşturmak için hangi komut kullanılır?",
        options: ["CREATE DATABASE", "use database_name", "new database", "make database"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "MongoDB'de collection'lar neye karşılık gelir?",
        options: ["Satırlar", "Tablolar", "Sütunlar", "İndeksler"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "MongoDB'yi başlatmak için hangi komut kullanılır?",
        options: ["mongodb", "mongod", "mongo", "mongostart"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "MongoDB'de document'lar neye karşılık gelir?",
        options: ["Tablolar", "Satırlar", "Sütunlar", "İndeksler"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "MongoDB'nin minimum sistem gereksinimi RAM miktarı nedir?",
        options: ["512 MB", "1 GB", "2 GB", "4 GB"],
        correct: 2
    },
    {
        type: "multiple-choice",
        question: "MongoDB'de shell'e bağlanmak için hangi komut kullanılır?",
        options: ["mongod", "mongo", "mongodb", "mongosh"],
        correct: 3
    },
    {
        type: "multiple-choice",
        question: "MongoDB'de varsayılan data directory path'i nedir?",
        options: ["/data/db", "/var/mongodb", "/usr/local/mongodb", "/opt/mongodb"],
        correct: 0
    },
    {
        type: "multiple-choice",
        question: "MongoDB kurulumunda hangi işletim sistemi desteklenmez?",
        options: ["Windows", "Linux", "macOS", "Hepsi desteklenir"],
        correct: 3
    },
    {
        type: "multiple-choice",
        question: "MongoDB'de log dosyaları varsayılan olarak nerede saklanır?",
        options: ["/var/log/mongodb", "/data/log", "/logs", "/tmp"],
        correct: 0
    },
    {
        type: "multiple-choice",
        question: "MongoDB'yi servis olarak yüklemek için hangi parametre kullanılır?",
        options: ["--service", "--install", "--daemon", "--background"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "MongoDB'de configuration file'ın uzantısı nedir?",
        options: [".ini", ".cfg", ".conf", ".config"],
        correct: 2
    },
    {
        type: "multiple-choice",
        question: "MongoDB'yi durdurmak için hangi komut kullanılır?",
        options: ["mongod --stop", "killall mongod", "mongod --shutdown", "Hepsi doğru"],
        correct: 3
    },
    {
        type: "multiple-choice",
        question: "MongoDB'de replica set nedir?",
        options: ["Yedekleme", "Kümeleme", "İndeksleme", "Şifreleme"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "MongoDB Compass nedir?",
        options: ["Komut satırı aracı", "GUI yönetim aracı", "Programlama dili", "Veritabanı motoru"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "MongoDB'de sharding nedir?",
        options: ["Veri bölümleme", "Veri sıkıştırma", "Veri şifreleme", "Veri yedekleme"],
        correct: 0
    },
    {
        type: "multiple-choice",
        question: "MongoDB'yi yeniden başlatmak için Windows'ta hangi komut kullanılır?",
        options: ["restart mongodb", "net restart MongoDB", "service mongodb restart", "mongod restart"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "MongoDB'de GridFS nedir?",
        options: ["Dosya sistemi", "İndeks türü", "Sorgu dili", "Güvenlik protokolü"],
        correct: 0
    },
    {
        type: "multiple-choice",
        question: "MongoDB kurulumunda PATH değişkenine hangi dizin eklenir?",
        options: ["bin", "data", "log", "conf"],
        correct: 0
    },
    {
        type: "multiple-choice",
        question: "MongoDB'de authentication varsayılan olarak ne durumda?",
        options: ["Açık", "Kapalı", "Opsiyonel", "Konfigürasyona bağlı"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "MongoDB'yi Docker ile çalıştırmak için hangi image kullanılır?",
        options: ["mongodb", "mongo", "mongodb/mongo", "official/mongodb"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "MongoDB'de hangi storage engine varsayılan olarak kullanılır?",
        options: ["MMAPv1", "WiredTiger", "RocksDB", "TokuMX"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "MongoDB'nin minimum disk alanı gereksinimi nedir?",
        options: ["1 GB", "2 GB", "3 GB", "4 GB"],
        correct: 2
    },
    {
        type: "multiple-choice",
        question: "MongoDB'de journal dosyaları ne için kullanılır?",
        options: ["Log tutma", "Yedekleme", "Crash recovery", "İndeksleme"],
        correct: 2
    },
    {
        type: "multiple-choice",
        question: "MongoDB'yi üretim ortamında kullanmak için hangi sürüm önerilir?",
        options: ["Development", "Release Candidate", "Stable", "Beta"],
        correct: 2
    },

    // Kod Yazma Soruları (3 adet)
    {
        type: "code",
        question: "MongoDB'yi başlatmak ve 'test' adında bir veritabanı oluşturmak için gereken komutları yazın:",
        placeholder: "// MongoDB başlatma ve veritabanı oluşturma komutları\n",
        answer: "mongod\nmongo\nuse test"
    },
    {
        type: "code",
        question: "MongoDB'de 'users' collection'ına yeni bir kullanıcı eklemek için JavaScript kodu yazın:",
        placeholder: "// Kullanıcı ekleme kodu\n",
        answer: "db.users.insertOne({name: 'John', email: 'john@example.com', age: 25})"
    },
    {
        type: "code",
        question: "MongoDB'de tüm veritabanlarını listeleyen ve 'products' collection'ındaki tüm belgeleri gösteren komutları yazın:",
        placeholder: "// Veritabanları listeleme ve collection sorgulama\n",
        answer: "show dbs\ndb.products.find()"
    }
];

let currentQuestion = 0;
let userAnswers = [];
let score = 0;
let answeredQuestions = new Set();

// DOM elements
const questionContainer = document.getElementById('question-container');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const progressBar = document.getElementById('progress');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const resultsSection = document.getElementById('results-section');
const quizSection = document.querySelector('.quiz-section');
const restartBtn = document.getElementById('restart-btn');

// Initialize quiz
function initQuiz() {
    totalQuestionsSpan.textContent = questions.length;
    userAnswers = new Array(questions.length).fill(null);
    currentQuestion = 0;
    score = 0;
    answeredQuestions.clear();
    showQuestion();
    updateProgress();
    updateNavigation();
    
    // Hide results, show quiz
    resultsSection.style.display = 'none';
    quizSection.style.display = 'block';
}

// Show current question
function showQuestion() {
    const question = questions[currentQuestion];
    currentQuestionSpan.textContent = currentQuestion + 1;
    
    let html = `<div class="question">
        <h3>${currentQuestion + 1}. ${question.question}</h3>`;
    
    if (question.type === 'multiple-choice') {
        html += '<ul class="options">';
        question.options.forEach((option, index) => {
            const isSelected = userAnswers[currentQuestion] === index;
            const isAnswered = answeredQuestions.has(currentQuestion);
            const isCorrect = isAnswered && index === question.correct;
            const isIncorrect = isAnswered && isSelected && index !== question.correct;
            
            html += `
                <li class="option">
                    <label class="${isSelected ? 'selected' : ''} ${isCorrect ? 'correct' : ''} ${isIncorrect ? 'incorrect' : ''}"
                           data-option="${index}">
                        ${String.fromCharCode(65 + index)}. ${option}
                    </label>
                </li>`;
        });
        html += '</ul>';
        
        if (answeredQuestions.has(currentQuestion)) {
            const isCorrect = userAnswers[currentQuestion] === question.correct;
            html += `
                <div class="feedback ${isCorrect ? 'correct' : 'incorrect'}">
                    ${isCorrect ? '✓ Doğru!' : '✗ Yanlış! Doğru cevap: ' + question.options[question.correct]}
                </div>`;
        }
    } else if (question.type === 'code') {
        html += `
            <div class="code-editor">
                <textarea class="code-input" placeholder="${question.placeholder}">${userAnswers[currentQuestion] || ''}</textarea>
            </div>`;
    }
    
    questionContainer.innerHTML = html;
    
    // Add event listeners
    if (question.type === 'multiple-choice') {
        document.querySelectorAll('.option label').forEach(label => {
            label.addEventListener('click', function() {
                if (!answeredQuestions.has(currentQuestion)) {
                    const selectedOption = parseInt(this.dataset.option);
                    selectOption(selectedOption);
                }
            });
        });
    } else if (question.type === 'code') {
        const codeInput = document.querySelector('.code-input');
        codeInput.addEventListener('input', function() {
            userAnswers[currentQuestion] = this.value;
        });
    }
}

function selectOption(optionIndex) {
    const question = questions[currentQuestion];
    userAnswers[currentQuestion] = optionIndex;
    answeredQuestions.add(currentQuestion);
    
    // Update score
    if (optionIndex === question.correct) {
        score++;
    }
    
    // Show feedback
    showQuestion();
    updateNavigation();
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function updateNavigation() {
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.disabled = currentQuestion === questions.length - 1;
    
    // Show submit button on last question if all questions are answered
    if (currentQuestion === questions.length - 1) {
        submitBtn.style.display = answeredQuestions.size === questions.length ? 'block' : 'none';
    } else {
        submitBtn.style.display = 'none';
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
        updateProgress();
        updateNavigation();
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
        updateProgress();
        updateNavigation();
    }
}

function calculateScore() {
    let correctAnswers = 0;
    let wrongAnswers = 0;
    
    questions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            correctAnswers++;
        } else if (userAnswers[index] !== null) {
            wrongAnswers++;
        }
    });
    
    return {
        correct: correctAnswers,
        wrong: wrongAnswers,
        total: questions.length,
        percentage: Math.round((correctAnswers / questions.length) * 100)
    };
}

function showResults() {
    const results = calculateScore();
    
    document.getElementById('score-percentage').textContent = `${results.percentage}%`;
    document.getElementById('correct-answers').textContent = results.correct;
    document.getElementById('wrong-answers').textContent = results.wrong;
    document.getElementById('total-score').textContent = results.total;
    
    quizSection.style.display = 'none';
    resultsSection.style.display = 'block';
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    initQuiz();
    
    prevBtn.addEventListener('click', prevQuestion);
    nextBtn.addEventListener('click', nextQuestion);
    submitBtn.addEventListener('click', showResults);
    restartBtn.addEventListener('click', initQuiz);
});