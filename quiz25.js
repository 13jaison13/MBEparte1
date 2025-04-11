const questions = [
{
  question: `A Associação Brasileira de Normas Técnicas (ABNT) estabelece diretrizes para padronizar trabalhos acadêmicos. Assinale a alternativa que contém apenas elementos pré-textuais:`,
  options: ['Folha de rosto, resumo e capa', 'Errata, introdução e apêndice', 'Resumo em língua estrangeira, agradecimentos e apêndice', 'Referências, anexos e glossário', 'Conclusão, introdução e desenvolvimento'],
  answer: 0,
  explanation: `São elementos da parte pré-textual definidos pela ABNT.`
},
{
  question: `Sobre a formulação dos objetivos em projetos de pesquisa, identifique a opção correta:`,
  options: ['Os objetivos específicos, quando bem elaborados, orientam a trajetória para o alcance do objetivo geral em um projeto estruturado.', 'Objetivos gerais e específicos não são essenciais na elaboração do projeto.', 'Objetivos gerais representam metas de curto prazo.', 'Evite verbos no infinitivo como investigar, analisar, comparar.', 'A estruturação dos objetivos é externa aos estudos da metodologia científica.'],
  answer: 0,
  explanation: `Os objetivos específicos devem estar alinhados para conduzir ao objetivo geral.`
},
{
  question: `O PubMed é um sistema internacional de recuperação de literatura biomédica. Qual seu principal componente?`,
  options: ['Biblioteca Virtual em Saúde (BVS)', 'MeSH (Medical Subject Headings)', 'Biblioteca Cochrane', 'Evidence Portal', 'MEDLINE'],
  answer: 4,
  explanation: `O MEDLINE é o principal componente do PubMed, reunindo a maioria dos artigos indexados.`
},
{
  question: `A Metodologia Científica é essencial na construção do saber acadêmico. Qual alternativa está INCORRETA?`,
  options: ['O conteúdo e a finalidade da Metodologia Científica são idênticos aos de outras disciplinas.', 'A Metodologia Científica combina uma lógica estruturada com métodos adequados ao objeto de estudo.', 'É possível estruturar uma investigação sobre fenômenos naturais ou teóricos com Metodologia Científica.', 'Essa disciplina é fundamental para nortear pesquisas com segurança e coerência.', 'É um sistema organizado que viabiliza a análise e compreensão de objetos de estudo.'],
  answer: 0,
  explanation: `Essa afirmação é incorreta; a Metodologia Científica tem propósitos distintos das demais disciplinas.`
},
{
  question: `Sobre critérios para selecionar bases de dados científicas, indique a alternativa adequada:`,
  options: ['Bases pagas devem ser priorizadas pela qualidade.', 'A reputação da base de dados é um critério relevante.', 'O número total de publicações é mais importante que acesso gratuito.', 'Bases de uma única instituição devem ser priorizadas.', 'A escolha deve se basear unicamente na popularidade da base.'],
  answer: 1,
  explanation: `A credibilidade da base é fundamental para garantir a confiabilidade das fontes.`
},
{
  question: `Sobre a redação de artigos científicos para periódicos educacionais, assinale a opção correta:`,
  options: ['Resultados devem ser apresentados sem interpretações; estas ocorrem na discussão.', 'Redação científica deve priorizar reflexões pessoais dos autores.', 'Artigos devem seguir exclusivamente critérios da ABNT.', 'Evite termos técnicos para facilitar a leitura leiga.', 'Introdução deve apenas expor o problema sem justificar o estudo.'],
  answer: 0,
  explanation: `A seção de resultados apresenta os dados sem interpretações, que ocorrem na discussão.`
},
{
  question: `Qual ferramenta NÃO é um gerenciador de referências?`,
  options: ['Zotero', 'BLISS', 'Mendeley', 'EndNote', 'MORE'],
  answer: 1,
  explanation: `BLISS não é um gerenciador de referências conhecido na literatura acadêmica.`
},
{
  question: `Segundo a NBR 6028:2021, qual a extensão recomendada de resumos para trabalhos acadêmicos?`,
  options: ['De 150 a 500 palavras para trabalhos acadêmicos e relatórios técnico-científicos', 'De 150 a 500 palavras para artigos de periódicos científicos', 'De 100 a 250 palavras para trabalhos acadêmicos e relatórios técnico-científicos', 'De 50 a 100 palavras para artigos de periódicos científicos', 'De 100 a 150 palavras para artigos científicos'],
  answer: 0,
  explanation: `A NBR 6028 especifica essa extensão para trabalhos acadêmicos e relatórios técnicos.`
},
{
  question: `Com base nas Normas Técnicas Brasileiras, associe corretamente cada norma da Coluna 1 à sua descrição correspondente na Coluna 2:
Coluna 1:
1. NBR 6023
2. NBR 10520
3. NBR 6024
4. NBR 14724
5. NBR 6028
Coluna 2:
( ) Define os critérios para apresentação de citações em trabalhos acadêmicos.
( ) Estabelece os requisitos formais para apresentação de dissertações, teses e trabalhos acadêmicos em geral.
( ) Especifica os elementos que devem compor uma referência bibliográfica.
( ) Regula a numeração progressiva das seções em documentos técnicos e científicos.
( ) Fornece os parâmetros para estruturação de resumos e recensões.`,
  options: ['5 – 3 – 4 – 2 – 1', '3 – 1 – 2 – 4 – 5', '2 – 4 – 1 – 3 – 5', '1 – 5 – 3 – 2 – 4', '4 – 2 – 5 – 3 – 1'],
  answer: 2,
  explanation: `Cada norma corresponde corretamente à função descrita.`
},
{
  question: `Relacione os tipos de conhecimento às suas definições correspondentes:
1. Científico
2. Empírico
3. Teológico
4. Filosófico
( ) Fundamenta-se na fé e na doutrina religiosa.
( ) É adquirido por meio da observação e experiência prática.
( ) Utiliza métodos sistemáticos de análise e validação.
( ) Resulta da reflexão racional e crítica sobre os fenômenos.`,
  options: ['3 – 2 – 1 – 4', '4 – 3 – 1 – 2', '1 – 4 – 2 – 3', '2 – 1 – 4 – 3'],
  answer: 0,
  explanation: `Fé = teológico; experiência = empírico; método = científico; reflexão = filosófico.`
},
{
  question: `Por que o planejamento é necessário na pesquisa científica?`,
  options: ['Porque é baseada em improviso.', 'Não exige seguir etapas estabelecidas.', 'Porque pressupõe lógica, organização e racionalidade.', 'Depende da criatividade do pesquisador.'],
  answer: 2,
  explanation: `A pesquisa científica requer planejamento racional e estruturado.`
},
{
  question: `Qual a base para a estruturação de uma pesquisa científica?`,
  options: ['Elaboração do cronograma.', 'Introdução do problema.', 'Projeto de pesquisa.', 'Levantamento teórico.'],
  answer: 2,
  explanation: `A estruturação de um projeto orienta todas as fases da pesquisa.`
},
{
  question: `Por que um projeto bem definido é essencial?`,
  options: ['Permite dados subjetivos.', 'Elimina retorno à literatura.', 'Assegura coerência lógica e validade dos resultados.', 'Exige modelo pré-formatado.'],
  answer: 2,
  explanation: `Facilita a compreensão e confere rigor metodológico ao estudo.`
},
{
  question: `Durante a apresentação de um artigo, um estudante afirma que, segundo a ABNT 10520, citações com mais de três linhas devem ser destacadas com aspas e itálico. Essa afirmação é:`,
  options: ['Correta, desde que a citação também tenha espaçamento maior e fonte reduzida.', 'Incorreta, visto que essas citações devem ser destacadas por recuo à margem esquerda, sem uso de aspas.', 'Incorreta, pois não se recomenda o uso de citações longas em textos acadêmicos.', 'Correta, pois o uso de aspas e itálico é obrigatório nesse tipo de citação.'],
  answer: 1,
  explanation: `Segundo a ABNT 10520, citações com mais de três linhas devem ser destacadas com recuo de 4 cm, sem aspas e com fonte menor.`
},
{
  question: `Analise a citação: '[...] o acesso à informação é um direito fundamental do cidadão moderno [...]' (Ferreira, 2021, p. 47). De acordo com a ABNT 10520, essa citação é:`,
  options: ['Uma citação direta curta, apresentada entre aspas e com referência à página.', 'Uma paráfrase com citação de fonte em aspas simples.', 'Uma citação direta longa, com recuo e fonte menor.', 'Uma citação indireta curta, indicada entre parênteses.'],
  answer: 0,
  explanation: `Trata-se de uma citação direta curta (até 3 linhas), apresentada entre aspas e acompanhada da fonte com indicação da página.`
},
{
  question: `Qual argumento contesta a visão de que prática clínica sozinha é suficiente?`,
  options: ['A MBE aprimora o julgamento clínico ao unir observações práticas, dados dos pacientes e resultados de pesquisas científicas.', 'A MBE limita-se ao ambiente acadêmico e não se aplica à prática assistencial cotidiana.', 'A experiência do profissional é mais valiosa do que resultados obtidos por meio de estudos científicos.', 'A MBE depende apenas de recursos materiais disponíveis.'],
  answer: 0,
  explanation: `A MBE aprimora o julgamento clínico ao unir experiência prática, dados do paciente e evidências científicas.`
},
{
  question: `Qual o primeiro desafio que o profissional de saúde deve superar ao aplicar a MBE?`,
  options: ['Estabelecer estratégias administrativas no hospital.', 'Desenvolver habilidade para acessar, compreender e utilizar evidências científicas.', 'Aprender a manejar custos operacionais.', 'Manter relacionamento com os familiares dos pacientes.'],
  answer: 1,
  explanation: `O primeiro passo para aplicar a MBE é desenvolver competência para localizar, interpretar e aplicar evidências científicas.`
},
{
  question: `Segundo Sackett (1996; 2000), a MBE consiste em:`,
  options: ['Uma prática voltada à observação empírica e subjetiva.', 'Um método com foco exclusivo na redução de custos institucionais.', 'Uso criterioso, consciente e explícito das melhores evidências disponíveis na tomada de decisão clínica.', 'Substituição da experiência clínica pela interpretação estatística dos dados.'],
  answer: 2,
  explanation: `A definição clássica de MBE enfatiza o uso consciente e crítico das melhores evidências para decisões clínicas.`
},
{
  question: `Segundo Eddy (2005), qual o principal objetivo da MBE?`,
  options: ['Garantir que as diretrizes médicas sigam padrões internacionais fixos.', 'Basear decisões unicamente na autoridade de especialistas.', 'Assegurar que decisões em saúde sejam fundamentadas em evidências científicas sobre eficácia e benefícios.', 'Eliminar a necessidade de contextualização local.'],
  answer: 2,
  explanation: `A MBE visa embasar decisões com evidência científica confiável sobre a eficácia das intervenções.`
},
{
  question: `A MBE pode ser descrita como:`,
  options: ['Um procedimento empírico que valoriza experiências individuais.', 'Um conjunto inflexível de regras para decisões médicas.', 'Uma abordagem investigativa com fundamentos epistemológicos e conduta clínica baseada em evidências.', 'Uma técnica qualitativa de observação descritiva.'],
  answer: 2,
  explanation: `A MBE combina fundamentos teóricos com prática clínica baseada em evidência.`
},
{
  question: `No contexto da MBE, o que significa 'evidência'?`,
  options: ['Opinião consolidada de especialistas.', 'Indício ou suposição não comprovada.', 'Relevância de dados estatísticos e opiniões.', 'Prova científica com base em dados confiáveis e validados.'],
  answer: 3,
  explanation: `Na MBE, evidência é entendida como dado comprovado, com base em estudos confiáveis.`
},
{
  question: `Qual é o foco central da MBE?`,
  options: ['Relegar a experiência clínica em prol das evidências.', 'Ampliar a complexidade dos protocolos assistenciais.', 'Promover a integração entre achados científicos e benefícios clínicos ao paciente.', 'Reduzir gastos financeiros na prática clínica.'],
  answer: 2,
  explanation: `A MBE busca integrar dados científicos ao cuidado do paciente.`
},
{
  question: `A atuação da MBE se estende também a:`,
  options: ['Apenas instituições privadas com tecnologia.', 'Indústria farmacêutica.', 'Formação profissional, políticas públicas e diretrizes sanitárias.', 'Práticas complementares e alternativas.'],
  answer: 2,
  explanation: `A MBE influencia além da clínica: educação, políticas públicas e diretrizes de saúde.`
},
{
  question: `Qual desafio está associado à MBE?`,
  options: ['Substituir estudos clínicos por revisões narrativas.', 'Definir o que é boa evidência e aplicá-la.', 'Exigir uniformidade absoluta entre profissionais.', 'Excluir a prática clínica das decisões médicas.'],
  answer: 1,
  explanation: `Definir o que é uma boa evidência e como aplicá-la é um dos grandes desafios da MBE.`
}
];

const frasesAcerto = [
  "Excelente trabalho, continue assim! 👏",
  "Muito bem! Você está no caminho certo. 🌟",
  "Ótimo acerto! Você estudou direitinho. ✅",
  "Mandou bem! Continue nesse ritmo. 💪",
  "Você está arrasando! Parabéns! 🎉",
  "Acertou! Cada vez mais afiado. 🧠",
  "Boa! Seu esforço está valendo a pena. 🚀",
  "Parabéns pela resposta correta! 🥳",
  "Show de bola! 👌",
  "Mais um ponto pra conta! 🎯"
];


const frasesErro = [
  "Não foi dessa vez, mas você está aprendendo! 📚",
  "Quase lá! Continue tentando. 💡",
  "Erros também fazem parte do aprendizado. ✨",
  "Não desanime! Cada erro é uma chance de melhorar. ❤️",
  "Respira fundo e bora pra próxima! 🙌",
  "Força! Você está evoluindo. 🌱",
  "Todo mundo erra, o importante é continuar! 🚶‍♂️🚶‍♀️",
  "Aprender é um processo, continue firme! 🔄",
  "Foi por pouco! Você consegue! 🌈",
  "Vai com tudo na próxima! 💥"
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
