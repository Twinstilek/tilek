const allQuestions = [
    { q: "I ___ a student.", a: "am", b: "is", c: "are", correct: "a" },
    { q: "She ___ from Spain.", a: "am", b: "is", c: "are", correct: "b" },
    { q: "___ you like apple juice?", a: "Do", b: "Does", c: "Are", correct: "a" },
    { q: "He ___ play tennis.", a: "don't", b: "doesn't", c: "isn't", correct: "b" },
    { q: "They ___ reading a book now.", a: "am", b: "is", c: "are", correct: "c" },
    { q: "What ___ your name?", a: "am", b: "is", c: "are", correct: "b" },
    { q: "I have two ___.", a: "child", b: "childs", c: "children", correct: "c" },
    { q: "___ is a pen on the table.", a: "There", b: "Their", c: "Here", correct: "a" },
    { q: "She goes to work ___ bus.", a: "on", b: "by", c: "in", correct: "b" },
    { q: "I get up ___ 7 o'clock.", a: "at", b: "on", c: "in", correct: "a" },
    { q: "___ old are you?", a: "What", b: "How", c: "Who", correct: "b" },
    { q: "My brother ___ a car.", a: "have", b: "has", c: "having", correct: "b" },
    { q: "Look at ___ bird!", a: "that", b: "those", c: "these", correct: "a" },
    { q: "We ___ to the cinema yesterday.", a: "go", b: "went", c: "goes", correct: "b" },
    { q: "I ___ buy a new phone tomorrow.", a: "am going to", b: "going to", c: "go to", correct: "a" },
    { q: "She is ___ than me.", a: "tall", b: "taller", c: "tallest", correct: "b" },
    { q: "He can ___ fast.", a: "run", b: "runs", c: "running", correct: "a" },
    { q: "This is ___ book.", a: "my", b: "mine", c: "me", correct: "a" },
    { q: "___ time is it?", a: "When", b: "What", c: "How", correct: "b" },
    { q: "Do you have ___ brothers?", a: "some", b: "any", c: "a", correct: "b" },
    { q: "I usually ___ breakfast at 8 AM.", a: "eat", b: "eats", c: "eating", correct: "a" },
    { q: "Where ___ you live?", a: "do", b: "does", c: "are", correct: "a" },
    { q: "She is listening ___ music.", a: "at", b: "to", c: "for", correct: "b" },
    { q: "___ are you from?", a: "What", b: "Where", c: "Who", correct: "b" },
    { q: "They ___ not at home yesterday.", a: "was", b: "were", c: "did", correct: "b" },
    { q: "I didn't ___ TV last night.", a: "watch", b: "watched", c: "watches", correct: "a" },
    { q: "___ are my shoes.", a: "This", b: "That", c: "These", correct: "c" },
    { q: "He works ___ a hospital.", a: "in", b: "on", c: "at", correct: "a" },
    { q: "I would like ___ water, please.", a: "any", b: "some", c: "many", correct: "b" },
    { q: "How ___ apples do we have?", a: "much", b: "many", c: "any", correct: "b" },
    { q: "My birthday is ___ May.", a: "in", b: "on", c: "at", correct: "a" },
    { q: "I ___ a bath every evening.", a: "make", b: "do", c: "take", correct: "c" },
    { q: "Can you ___ English?", a: "speak", b: "talk", c: "say", correct: "a" },
    { q: "He is wearing a red ___.", a: "shoes", b: "shirt", c: "pants", correct: "b" },
    { q: "There isn't ___ milk in the fridge.", a: "some", b: "any", c: "no", correct: "b" },
    { q: "We are ___ vacation.", a: "in", b: "on", c: "at", correct: "b" },
    { q: "She always ___ early.", a: "arrive", b: "arrives", c: "arrived", correct: "b" },
    { q: "Are you hungry? Yes, I ___.", a: "do", b: "am", c: "have", correct: "b" },
    { q: "Let's ___ to the park.", a: "go", b: "going", c: "goes", correct: "a" },
    { q: "I am interested ___ art.", a: "in", b: "on", c: "about", correct: "a" },
    { q: "Whose bag is this? It's ___.", a: "her", b: "hers", c: "she", correct: "b" },
    { q: "___ is your favorite actor?", a: "Who", b: "What", c: "Which", correct: "a" },
    { q: "I need ___ new shoes.", a: "a", b: "an", c: "-", correct: "c" },
    { q: "She loves ___ pizza.", a: "eat", b: "eating", c: "eats", correct: "b" },
    { q: "The book is ___ the table.", a: "in", b: "on", c: "at", correct: "b" },
    { q: "My father is a doctor. ___ works hard.", a: "He", b: "She", c: "It", correct: "a" },
    { q: "They ___ playing football now.", a: "am", b: "is", c: "are", correct: "c" },
    { q: "We ___ an old car.", a: "has", b: "have", c: "having", correct: "b" },
    { q: "Did she ___ to the party?", a: "come", b: "came", c: "comes", correct: "a" },
    { q: "I don't like ___ cold weather.", a: "a", b: "the", c: "-", correct: "c" }
];

let selectedQuestions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 30);
let currentQuiz = 0;
let score = 0;
let mistakes = []; // Сохраняем ошибки

function loadQuiz() {
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');
    const progressEl = document.getElementById('progress');
    
    const data = selectedQuestions[currentQuiz];
    
    progressEl.innerText = `${currentQuiz + 1}/30`;
    questionEl.innerText = data.q;
    
    optionsEl.innerHTML = `
        <button class="option" onclick="checkAnswer('a')">${data.a}</button>
        <button class="option" onclick="checkAnswer('b')">${data.b}</button>
        <button class="option" onclick="checkAnswer('c')">${data.c}</button>
    `;
}

window.checkAnswer = function(answer) {
    const data = selectedQuestions[currentQuiz];
    
    if (answer === data.correct) {
        score++;
    } else {
        mistakes.push(`
            <div style="background:#fff3f3; padding:10px; margin-top:10px; border-radius:8px; text-align:left; border-left:4px solid #ff4d4d; font-size: 0.9rem;">
                <p style="margin-bottom:5px; color:#333;"><b>${data.q}</b></p>
                <p style="color:#ff4d4d; margin-bottom:5px;">❌ Ваш ответ: ${data[answer]}</p>
                <p style="color:#28a745;">✅ Правильно: ${data[data.correct]}</p>
            </div>
        `);
    }
    
    currentQuiz++;

    if (currentQuiz < 30) {
        loadQuiz();
    } else {
        const percent = Math.round((score / 30) * 100);
        let mistakesHTML = mistakes.length > 0 
            ? `<div style="margin-top:20px; max-height: 200px; overflow-y: auto;">${mistakes.join('')}</div>` 
            : `<p style="margin-top:20px; color:#28a745; font-weight:bold;">Ошибок нет! Отличная работа!</p>`;

        document.getElementById('quiz').innerHTML = `
            <div class="result-text">Вы ответили на <b>${score} из 30</b></div>
            <div class="result-text">Ваш результат: <b>${percent}%</b></div>
            ${mistakesHTML}
            <button class="restart-btn" onclick="location.reload()">Пройти снова</button>
        `;
        document.getElementById('progress').style.display = 'none';
    }
}

loadQuiz();