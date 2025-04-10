
const questions = [
  {
    question: "Qual o primeiro passo para aplicar a Medicina Baseada em Evidências?",
    options: ["Gerenciar custos", "Acessar, entender e usar evidências", "Relacionar-se bem com famílias", "Aplicar métodos estatísticos", "Criar um protocolo fixo"],
    answer: 1,
    explanation: "O primeiro passo é saber acessar, interpretar e aplicar as evidências científicas na prática clínica."
  },
  {
    question: "Relacione os tipos de conhecimento às suas definições:\n(1) Científico\n(2) Empírico\n(3) Teológico\n(4) Filosófico\n- Fé e doutrina religiosa\n- Observação e experiência prática\n- Métodos de análise e validação\n- Reflexão racional e crítica",
    options: ["3 – 2 – 1 – 4", "4 – 3 – 1 – 2", "1 – 4 – 2 – 3", "2 – 1 – 4 – 3"],
    answer: 0,
    explanation: "Fé = teológico; experiência = empírico; método = científico; reflexão = filosófico."
  }
  // ... as demais questões devem ser inseridas aqui
];

let score = 0;
let current = 0;

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach((option, index) => {
    const opt = document.createElement("div");
    opt.className = "option";
    opt.innerHTML = `<input type='radio' name='option' value='${index}'> ${option}`;
    optionsDiv.appendChild(opt);
  });
  document.getElementById("explanation").style.display = "none";
  document.getElementById("explanation").innerText = "";
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("result").innerText = "";
}

function submitAnswer() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) return alert("Selecione uma opção!");
  const selectedIndex = parseInt(selected.value);
  const correctIndex = questions[current].answer;
  const explanation = questions[current].explanation;

  if (selectedIndex === correctIndex) score++;

  const feedback = document.createElement('div');
  feedback.style.fontWeight = 'bold';
  feedback.style.marginTop = '10px';
  feedback.classList.add('animate');
  feedback.classList.add(selectedIndex === correctIndex ? 'acerto' : 'erro');
  const frasesAcerto = ["Parabéns, você é um monstro da ciência!", "Acertou! Claramente não está de brincadeira!"];
  const frasesErro = ["Errou feio, errou rude! 😬", "Nem pra chutar certo, hein? 😂"];
  const usada = selectedIndex === correctIndex ? frasesAcerto[Math.floor(Math.random() * frasesAcerto.length)] : frasesErro[Math.floor(Math.random() * frasesErro.length)];
  feedback.innerText = usada;
  document.getElementById("options").appendChild(feedback);

  document.getElementById("explanation").innerText = `Explicação: ${explanation}`;
  document.getElementById("explanation").style.display = "block";
  document.getElementById("nextBtn").style.display = "inline-block";
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    const pontos = score * 10;
    document.getElementById("quiz").innerHTML = `<div class='result'>Você acertou ${score} de ${questions.length} perguntas!<br>Pontuação final: ${pontos} pontos</div>`;
  }
}

window.onload = function() {
  loadQuestion();
};
