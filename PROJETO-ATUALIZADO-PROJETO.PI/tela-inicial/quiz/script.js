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
                    Fundamentos do JAVASCRIPT: o básico da programação web com javascript.
                    Estilizando suas páginas web com CSS: seletores, propriedades, valores e layout responsivo.
                    Utilizando o Bootstrap para criar layouts e componentes reutilizáveis.
                    Melhores práticas para otimizar o desempenho e a compatibilidade dos seus websites.
                    Projeto prático: construindo um website completo usando HTML, CSS, Bootstrap e JAVASCRIPT."`,
      link: "https://www.udemy.com/course/curso-de-desenvolvimento-web-html-e-css-2023/"
    },
    {
      area: "Desenvolvimento de Software (Back-end)",
      course: "Curso de Node.js: O Guia Completo",
      platform: "Udemy",
      description: "Este curso aborda o desenvolvimento back-end com Node.js, um dos frameworks mais populares para esse tipo de desenvolvimento. Inclui conceitos de APIs RESTful, bancos de dados, autenticação e muito mais.",
      link: "https://www.udemy.com/courses/search/?src=ukw&q=back+end"
    },
    {
      area: "Desenvolvimento de Aplicativos (Mobile)",
      course: "Desenvolvimento de Apps Android com Kotlin",
      platform: "Udemy",
      description: "Focado no desenvolvimento de aplicativos Android com Kotlin. Esse curso é ideal para quem quer começar a criar apps para dispositivos móveis, utilizando uma das linguagens mais modernas e recomendadas para a plataforma Android.",
      link: "https://www.udemy.com/courses/search/?src=ukw&q=back+end"
    },
    {
      area: "DevOps",
      course: "DevOps: A Prática Completa (AWS, Docker, Jenkins, Kubernetes)",
      platform: "Udemy",
      description: "Este curso é perfeito para quem deseja aprender práticas de DevOps, utilizando ferramentas como AWS, Docker, Jenkins e Kubernetes. Ele oferece uma visão abrangente de como integrar e automatizar o ciclo de vida de desenvolvimento de software.",
      link: "https://www.udemy.com/courses/search/?src=ukw&q=back+end"
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
