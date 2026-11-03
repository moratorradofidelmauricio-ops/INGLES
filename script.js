const lessons = {
  travel: [
    { prompt: 'pasaporte', hint: 'El documento que necesitas para cruzar una frontera.', answer: 'passport', options: ['passport', 'suitcase', 'ticket', 'map'] },
    { prompt: 'andén', hint: 'El lugar donde esperas a que llegue tu tren.', answer: 'platform', options: ['platform', 'airport', 'aisle', 'bridge'] },
    { prompt: 'equipaje', hint: 'Las maletas y bolsas que llevas contigo al viajar.', answer: 'luggage', options: ['luggage', 'jewelry', 'sunglasses', 'schedule'] },
    { prompt: 'solo ida', hint: 'Un billete que no incluye el viaje de vuelta.', answer: 'one-way', options: ['one-way', 'round trip', 'next stop', 'on time'] },
    { prompt: 'ventanilla', hint: 'El asiento junto a la ventana del avión.', answer: 'window seat', options: ['window seat', 'aisle seat', 'front desk', 'backpack'] },
  ],
  food: [
    { prompt: 'sin gluten', hint: 'Una opción para quien no puede comer trigo o cebada.', answer: 'gluten-free', options: ['gluten-free', 'sugar-free', 'spicy', 'well-done'] },
    { prompt: 'cuenta', hint: 'Lo que pides al terminar de comer en un restaurante.', answer: 'bill', options: ['bill', 'recipe', 'tip', 'menu'] },
    { prompt: 'rebanada', hint: 'Una porción fina de pan, queso o fruta.', answer: 'slice', options: ['slice', 'bowl', 'spoon', 'bottle'] },
    { prompt: 'bien cocido', hint: 'Así puedes pedir que preparen mucho tu carne.', answer: 'well-done', options: ['well-done', 'raw', 'frozen', 'sour'] },
    { prompt: 'para llevar', hint: 'Lo que dices si no vas a comer en el local.', answer: 'to go', options: ['to go', 'on tap', 'all you can eat', 'in season'] },
  ],
  everyday: [
    { prompt: 'despertador', hint: 'El aparato que te ayuda a levantarte a una hora concreta.', answer: 'alarm clock', options: ['alarm clock', 'calendar', 'headphones', 'wallet'] },
    { prompt: 'quehaceres', hint: 'Las tareas de casa, como limpiar o lavar la ropa.', answer: 'chores', options: ['chores', 'shifts', 'hobbies', 'breaks'] },
    { prompt: 'cargador', hint: 'El accesorio que conecta tu móvil a la corriente.', answer: 'charger', options: ['charger', 'screen', 'keyboard', 'speaker'] },
    { prompt: 'con antelación', hint: 'Hacer algo antes del último momento.', answer: 'in advance', options: ['in advance', 'at least', 'by mistake', 'right away'] },
    { prompt: 'hacer recados', hint: 'Salir para comprar algo o resolver pequeñas tareas.', answer: 'run errands', options: ['run errands', 'take a nap', 'set the table', 'catch up'] },
  ],
};

const topicNames = { travel: 'Viajes', food: 'Comida', everyday: 'Día a día' };

function getTodayKey() {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${today.getFullYear()}-${month}-${day}`;
}

const scoreStorageKey = `wordtrip-score-${getTodayKey()}`;

function getDailyScore() {
  try {
    return Number(localStorage.getItem(scoreStorageKey)) || 0;
  } catch {
    return 0;
  }
}

const state = { topic: 'travel', index: 0, correct: 0, dailyCorrect: getDailyScore(), streak: 0, answered: false, sound: true };

const elements = {
  answerGrid: document.querySelector('#answer-grid'),
  questionCount: document.querySelector('#question-count'),
  progressFill: document.querySelector('#progress-fill'),
  progressTrack: document.querySelector('.progress-track'),
  questionWord: document.querySelector('#question-word'),
  questionHint: document.querySelector('#question-hint'),
  feedback: document.querySelector('#feedback'),
  nextButton: document.querySelector('#next-button'),
  scoreValue: document.querySelector('#score-value'),
  streakValue: document.querySelector('#streak-value'),
  encouragement: document.querySelector('#encouragement'),
  pronounceButton: document.querySelector('#pronounce-button'),
  soundToggle: document.querySelector('#sound-toggle'),
  soundLabel: document.querySelector('#sound-label'),
  questionLabel: document.querySelector('#question-label'),
};

elements.scoreValue.textContent = String(state.dailyCorrect);

function renderQuestion() {
  const lesson = lessons[state.topic];
  const isComplete = state.index >= lesson.length;

  elements.answerGrid.replaceChildren();
  elements.feedback.hidden = true;
  elements.nextButton.hidden = true;
  elements.progressTrack.setAttribute('aria-valuenow', String(Math.min(state.index, lesson.length)));
  elements.progressFill.style.width = `${(Math.min(state.index, lesson.length) / lesson.length) * 100}%`;

  if (isComplete) {
    elements.questionCount.innerHTML = 'LECCIÓN <span>COMPLETADA</span>';
    elements.questionLabel.textContent = '¡Lo has conseguido!';
    elements.questionWord.textContent = `${state.correct} de ${lesson.length}`;
    elements.questionHint.textContent = `Aciertos en ${topicNames[state.topic].toLowerCase()}. Cada práctica suma.`;
    elements.encouragement.textContent = state.correct === lesson.length
      ? '¡Pleno! Ya puedes explorar otro tema.'
      : '¡Buen trabajo! Repasa las que fallaste o prueba otro tema.';
    elements.encouragement.classList.add('complete-message');
    elements.nextButton.innerHTML = 'Repetir tema <span aria-hidden="true">↻</span>';
    elements.nextButton.hidden = false;
    elements.nextButton.dataset.action = 'restart';
    elements.nextButton.setAttribute('aria-label', `Repetir el tema ${topicNames[state.topic]}`);
    return;
  }

  const question = lesson[state.index];
  elements.questionCount.innerHTML = `PALABRA ${String(state.index + 1).padStart(2, '0')} <span>/ ${String(lesson.length).padStart(2, '0')}</span>`;
  elements.questionLabel.textContent = '¿Cómo se dice en inglés?';
  elements.questionWord.textContent = question.prompt;
  elements.questionHint.textContent = question.hint;
  elements.nextButton.dataset.action = 'next';
  elements.encouragement.classList.remove('complete-message');

  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'answer-option';
    button.type = 'button';
    button.textContent = option;
    button.setAttribute('aria-label', `Opción ${index + 1}: ${option}`);
    button.addEventListener('click', () => selectAnswer(button, option, question.answer));
    elements.answerGrid.append(button);
  });
}

function selectAnswer(button, selected, answer) {
  if (state.answered) return;
  state.answered = true;
  const isCorrect = selected === answer;

  elements.answerGrid.querySelectorAll('button').forEach((option) => {
    option.disabled = true;
    if (option.textContent === answer) option.classList.add('is-correct');
  });

  if (isCorrect) {
    state.correct += 1;
    state.dailyCorrect += 1;
    state.streak += 1;
    try {
      localStorage.setItem(scoreStorageKey, String(state.dailyCorrect));
    } catch {
    }
    button.classList.add('is-correct');
    elements.feedback.textContent = ['¡Exacto! Vas genial.', '¡Muy bien! Una más a tu vocabulario.', 'Correcto. Sigue así.'][state.index % 3];
    elements.feedback.classList.remove('is-wrong');
    elements.encouragement.textContent = '¡Un acierto más! Tu práctica va tomando forma.';
  } else {
    state.streak = 0;
    button.classList.add('is-wrong');
    elements.feedback.textContent = `Casi. La respuesta correcta es “${answer}”.`;
    elements.feedback.classList.add('is-wrong');
    elements.encouragement.textContent = 'Equivocarse también es parte de aprender.';
  }

  elements.feedback.hidden = false;
  elements.scoreValue.textContent = String(state.dailyCorrect);
  elements.streakValue.textContent = String(state.streak);
  elements.nextButton.innerHTML = state.index === lessons[state.topic].length - 1
    ? 'Ver resultado <span aria-hidden="true">→</span>'
    : 'Siguiente <span aria-hidden="true">→</span>';
  elements.nextButton.hidden = false;
  state.answered = true;
}

document.querySelectorAll('.topic-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    state.topic = tab.dataset.topic;
    state.index = 0;
    state.correct = 0;
    state.streak = 0;
    state.answered = false;
    elements.streakValue.textContent = '0';
    elements.encouragement.textContent = 'Cada palabra cuenta. Vamos con la primera.';
    document.querySelectorAll('.topic-tab').forEach((item) => {
      const active = item === tab;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    renderQuestion();
  });
});

elements.nextButton.addEventListener('click', () => {
  if (elements.nextButton.dataset.action === 'restart') {
    state.index = 0;
    state.correct = 0;
    state.streak = 0;
    elements.streakValue.textContent = '0';
    elements.encouragement.textContent = 'Cada palabra cuenta. Vamos con la primera.';
  } else {
    state.index += 1;
  }
  state.answered = false;
  renderQuestion();
});

elements.pronounceButton.addEventListener('click', () => {
  if (!state.sound || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const word = lessons[state.topic][state.index]?.answer;
  if (!word) return;
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'en-US';
  utterance.rate = 0.86;
  window.speechSynthesis.speak(utterance);
});

elements.soundToggle.addEventListener('click', () => {
  state.sound = !state.sound;
  elements.soundToggle.setAttribute('aria-pressed', String(state.sound));
  elements.soundLabel.textContent = state.sound ? 'Sonido activo' : 'Sonido apagado';
  if (!state.sound && 'speechSynthesis' in window) window.speechSynthesis.cancel();
});

renderQuestion();