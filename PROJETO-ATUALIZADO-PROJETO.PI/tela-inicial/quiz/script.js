const questions = [
  {
    question: "VOCE PREFERE TRABALHAR COM:",
    options: [
      "Design e experiência do usuário (UI/UX)",
      "Lógica de programação e banco de dados",
      "Criação de aplicativos e soluções móveis",
      "Soluções de infraestrutura e automação"
    ],
    points: [0, 1, 2, 3] // Indica a área que mais se identifica com a resposta
  },
  {
    question: "Você se interessa mais por:",
    options: [
      "Aparência e interatividade de sites e aplicativos",
      "Construir a lógica que faz sistemas funcionarem",
      "Desenvolver jogos e experiências imersivas",
      "Gerenciar servidores e melhorar a performance"
    ],
    points: [0, 1, 2, 3]
  },
  {
    question: "Em qual destas atividades você mais se sente motivado?",
    options: [
      "Criar designs e interfaces agradáveis",
      "Desenvolver funções complexas e trabalhar com dados",
      "Criar jogos e simulações realistas",
      "Garantir que sistemas e infraestruturas funcionem de forma eficiente"
    ],
    points: [0, 1, 2, 3]
  },
  {
    question: "Quais habilidades você prefere desenvolver?",
    options: [
      "HTML, CSS, JavaScript, Design",
      "Linguagens de programação como Python, Java, SQL",
      "Motores de jogos como Unity e Unreal Engine",
      "Ferramentas de automação e infraestrutura como Docker e Kubernetes"
    ],
    points: [0, 1, 2, 3]
  },
  {
    question: "Você gostaria de trabalhar com:",
    options: [
      "Aparência visual e experiência do usuário",
      "Desenvolvimento de soluções lógicas e sistemas",
      "Jogos e novas formas de entretenimento interativo",
      "Redes, servidores e processos de CI/CD"
    ],
    points: [0, 1, 2, 3]
  }
];

let currentQuestionIndex = 0;
let scores = [0, 0, 0, 0]; // Pontuação para cada área: [Front-end, Back-end, Mobile, DevOps]

function displayQuestion() {
  const questionContainer = document.getElementById('question-container');
  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');
  const nextButton = document.getElementById('next-button');

  const currentQuestion = questions[currentQuestionIndex];

  // Exibe a pergunta atual
  questionText.textContent = currentQuestion.question;
  optionsContainer.innerHTML = '';

  // Cria as opções de resposta
  currentQuestion.options.forEach((option, index) => {
    const optionElement = document.createElement('div');
    optionElement.classList.add('option');
    optionElement.textContent = option;
    optionElement.onclick = () => handleAnswer(index);
    optionsContainer.appendChild(optionElement);
  });

  // Oculta o botão "Next" inicialmente
  nextButton.style.display = 'none';
}

function handleAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  const points = currentQuestion.points[selectedIndex];

  // Atribui pontos à área correspondente
  scores[points]++;

  // Exibe o botão "Next" após a resposta
  document.getElementById('next-button').style.display = 'inline-block';
}

function nextQuestion() {
  // Avança para a próxima pergunta
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  const resultText = document.getElementById('result-text');
  const courseContainer = document.getElementById('course-container');
  const resultTitle = document.getElementById('result-title');

  // Determina a área com maior pontuação
  const maxScore = Math.max(...scores);
  const areas = ["Desenvolvimento Web", "Desenvolvimento de Software (Back-end)", "Desenvolvimento de Aplicativos (Mobile)", "DevOps"];
  const courses = [
    {
      area: "Desenvolvimento Web",
      course: "Desenvolvimento Web Completo com HTML, CSS, JavaScript, SQL e PHP",
      platform: "Udemy",
      description: `Principais tópicos abordados neste curso gratuito:
                    Introdução ao desenvolvimento web e à importância do HTML, CSS e Bootstrap.
                    Fundamentos do HTML: estrutura básica, tags, imagens, links e formatação de conteúdo.
                    Fundamentos do JAVASCRIPT: o básico da programação web com javascript."`,
      link: "https://www.udemy.com/course/curso-de-desenvolvimento-web-html-e-css-2023/",
    },
    {
      area: "Desenvolvimento de Software (Back-end)",
      course: "Programador Back End - Visual Studio 2019",
      platform: "Udemy",
      description: `O curso de Programador Back End com Visual Studio 2019 e Visual Basic possui 60 vídeo aulas,
                    ele pode ser acompanhado também com as versões 2015 ou 2017, neste curso o aluno vai aprender a trabalhar
                    com a plataforma usando a linguagem Visual Basic como programador back end, pegando um projeto desenvolvido
                    por um front end e aplicamos a comunicação com o banco de dados mysql onde fazemos todo o crud inserindo dados
                    , editando, criando consultas e muito mais, é aconselhável o aluno acompanhar antes o módulo anterior onde 
                    é mostrado como trabalhar com o visual studio para desenvolvedor front end.`,
      link: "https://www.udemy.com/course/programador-back-end-visual-studio-2019/?couponCode=ST13MT80425G3"
    },
    {
      area: "Desenvolvimento de Aplicativos (Mobile)",
      course: "Primeiros Passos com React Native - Apps Mobile",
      platform: "Udemy",
      description: `Aprenda a construir aplicativos para as plataformas Android e iOS com Javascript usando React Native.`,
      link: "https://www.udemy.com/course/primeiros-passos-com-react-native/"
    },
    {
      area: "DevOps",
      course: "Conceitos DevOps",
      platform: "Udemy",
      description: `Conceito DevOps Escopo das práticas DevOps no treinamento. Monitoração, integração, entrega e implantação
                    contínua. Noções básicas de serviços e Stack.`,
      link: "https://www.udemy.com/course/conceitos-devops/"
    }
  ];

  // Encontra a área com maior pontuação
  let bestArea = areas[scores.indexOf(maxScore)];
  let bestCourse = courses[areas.indexOf(bestArea)];

  // Atualiza o conteúdo do resultado
  resultText.textContent = `VOCÊ MAIS SE IDENTIFICA COM A ÁREA DE: ${bestArea}!`;

  // Atualiza as informações do curso recomendado
  document.getElementById('course-name').textContent = `Curso: ${bestCourse.course}`;
  document.getElementById('course-platform').textContent = `Plataforma: ${bestCourse.platform}`;
  document.getElementById('course-description').textContent = `Descrição: ${bestCourse.description}`;
  //document.getElementById(`course-link`).textContent = `link: ${bestCourse.link}`;
  document.getElementById('course-link').href = bestCourse.link

  // Exibe a seção de resultados e oculta o quiz
  document.getElementById('quiz-container').style.display = 'none';
  document.getElementById('result-container').classList.remove('hidden');
}

window.onload = function () {
  displayQuestion();
};
