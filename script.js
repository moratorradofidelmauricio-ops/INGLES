const quizzes = {
  10: {
    grade: '10.º grado',
    level: 'B1',
    description: 'Nivel B1 · Gramática, vocabulario, lectura y escritura',
    questions: [
      { category: 'Gramática', instruction: 'ELIGE EL TIEMPO VERBAL CORRECTO', prompt: 'She ___ at this school since 2022.', hint: 'La acción empezó en el pasado y continúa en el presente.', options: ['studied', 'has studied', 'is studying', 'studies'], answer: 'has studied', title: 'Present perfect con since', explanation: 'Usamos present perfect para una situación que comenzó en el pasado y sigue siendo cierta ahora. Since introduce el momento en que comenzó. Estructura: have/has + past participle.', example: 'She has studied here since 2022.', translation: 'Ella estudia aquí desde 2022.' },
      { category: 'Gramática', instruction: 'COMPLETA EL FIRST CONDITIONAL', prompt: 'If people recycle more, they ___ less waste.', hint: 'La oración expresa un resultado futuro posible.', options: ['produced', 'would produce', 'will produce', 'are producing'], answer: 'will produce', title: 'First conditional', explanation: 'Para una condición real o posible usamos if + present simple y, en el resultado, will + verbo base. No se usa will inmediatamente después de if.', example: 'If it rains, we will stay home.', translation: 'Si llueve, nos quedaremos en casa.' },
      { category: 'Gramática', instruction: 'ELIGE LA FORMA PASIVA', prompt: 'The new bridge ___ last year.', hint: 'El puente recibe la acción; el momento está en pasado.', options: ['built', 'is built', 'was built', 'has building'], answer: 'was built', title: 'Passive voice en pasado', explanation: 'En voz pasiva el sujeto recibe la acción. En pasado simple se forma con was/were + past participle. “Build” es irregular: build, built, built.', example: 'The school was built in 1998.', translation: 'La escuela fue construida en 1998.' },
      { category: 'Gramática', instruction: 'ELIGE EL REPORTED SPEECH CORRECTO', prompt: '“I am working on my project,” Maya said.', hint: 'Reporta lo que dijo Maya usando estilo indirecto.', options: ['Maya said she is working on her project.', 'Maya said she was working on her project.', 'Maya said I was working on my project.', 'Maya told she worked on her project.'], answer: 'Maya said she was working on her project.', title: 'Reported speech: cambio de tiempo', explanation: 'Cuando el verbo introductorio está en pasado (said), el presente continuo normalmente retrocede a pasado continuo: am working → was working. También cambia el pronombre según quién habla.', example: '“I am studying.” → He said he was studying.', translation: '“Estoy estudiando.” → Él dijo que estaba estudiando.' },
      { category: 'Gramática', instruction: 'ELIGE EL MODAL DE OBLIGACIÓN', prompt: 'All visitors ___ wear safety glasses in the laboratory.', hint: 'La regla es obligatoria, no una simple recomendación.', options: ['might', 'must', 'could', 'would'], answer: 'must', title: 'Must para obligación', explanation: 'Must expresa obligación fuerte o una regla. Might expresa posibilidad; could, habilidad o posibilidad; would aparece en situaciones hipotéticas o hábitos pasados.', example: 'You must follow the lab rules.', translation: 'Debes seguir las reglas del laboratorio.' },
      { category: 'Vocabulario', instruction: 'ELIGE EL SIGNIFICADO DE LA EXPRESIÓN', prompt: 'The students carried out a survey about screen time.', hint: '¿Qué hicieron los estudiantes con la encuesta?', options: ['cancelled', 'designed the cover of', 'conducted', 'answered by mistake'], answer: 'conducted', title: 'Phrasal verb: carry out', explanation: 'Carry out significa realizar o llevar a cabo un plan, una tarea o una investigación. En contextos académicos suele usarse con research, a study o a survey.', example: 'Our class carried out an experiment.', translation: 'Nuestra clase llevó a cabo un experimento.' },
      { category: 'Vocabulario', instruction: 'COMPLETA LA COLABORACIÓN DE PALABRAS', prompt: 'The documentary was ___ interesting that we watched it twice.', hint: 'La estructura es so + adjetivo + that.', options: ['such', 'too', 'so', 'enough'], answer: 'so', title: 'So ... that', explanation: 'Usamos so + adjetivo/adverbio + that para expresar que algo produce un resultado. Such va antes de un sustantivo: such an interesting film.', example: 'The test was so difficult that many students asked for help.', translation: 'El examen fue tan difícil que muchos estudiantes pidieron ayuda.' },
      { category: 'Lectura', instruction: 'LEE EL TEXTO Y ELIGE LA IDEA PRINCIPAL', prompt: 'Why did the town introduce bike sharing?', hint: 'Busca el propósito general, no un detalle aislado.', context: 'Two years ago, our town introduced a bike-sharing program. At first, only a few people used it. After the council added safe bike lanes near schools and parks, daily trips increased by 40%. The program now helps residents travel short distances without using a car.', options: ['To help people make short trips without driving.', 'To replace every bus in the town.', 'To make parks smaller and quieter.', 'To sell bicycles to local schools.'], answer: 'To help people make short trips without driving.', title: 'Lectura: idea principal', explanation: 'La última oración resume el beneficio del programa: desplazarse en distancias cortas sin automóvil. El aumento de viajes y las ciclovías son detalles que apoyan esa idea.', example: 'The program helps residents travel short distances without using a car.', translation: 'El programa ayuda a los residentes a recorrer distancias cortas sin usar automóvil.' },
      { category: 'Lectura', instruction: 'INFIERE LA CONCLUSIÓN DEL TEXTO', prompt: 'What can we infer about the bike-sharing program?', hint: 'Relaciona la causa con el cambio descrito en el texto.', context: 'Two years ago, our town introduced a bike-sharing program. At first, only a few people used it. After the council added safe bike lanes near schools and parks, daily trips increased by 40%. The program now helps residents travel short distances without using a car.', options: ['Safer routes encouraged more people to use it.', 'The program was most popular before the bike lanes existed.', 'Residents stopped travelling to schools and parks.', 'The council plans to remove the bike lanes.'], answer: 'Safer routes encouraged more people to use it.', title: 'Lectura: inferencia', explanation: 'El texto indica que los viajes aumentaron después de construir ciclovías seguras. Podemos inferir que sentirse más seguro animó a más personas a usar las bicicletas.', example: 'After safe lanes were added, daily trips increased.', translation: 'Después de agregar ciclovías seguras, los viajes diarios aumentaron.' },
      { category: 'Escritura', instruction: 'ELIGE LA MEJOR TESIS PARA UN ENSAYO', prompt: 'Essay topic: Should schools reduce single-use plastic?', hint: 'Una tesis efectiva presenta una postura y razones que se pueden desarrollar.', options: ['Plastic is a material used around the world.', 'This essay is about plastic at school.', 'Schools should reduce single-use plastic because it lowers waste and teaches responsibility.', 'Some students bring drinks to school.'], answer: 'Schools should reduce single-use plastic because it lowers waste and teaches responsibility.', title: 'Escritura: una tesis clara', explanation: 'Una tesis eficaz responde la pregunta, expresa una postura debatible y anticipa razones. Las otras opciones presentan un dato general, anuncian el tema o incluyen un detalle, pero no defienden una idea.', example: 'Schools should reduce plastic because it lowers waste and teaches responsibility.', translation: 'Las escuelas deberían reducir el plástico porque disminuye los residuos y enseña responsabilidad.' },
    ],
  },
  11: {
    grade: '11.º grado',
    level: 'B2',
    description: 'Nivel B2 · Gramática avanzada, vocabulario académico, lectura y escritura',
    questions: [
      { category: 'Gramática', instruction: 'COMPLETA EL THIRD CONDITIONAL', prompt: 'If the team ___ earlier, they would have caught the train.', hint: 'La situación no ocurrió en el pasado; imagina un resultado diferente.', options: ['left', 'had left', 'would leave', 'has left'], answer: 'had left', title: 'Third conditional', explanation: 'Para imaginar un pasado diferente, usamos if + past perfect y would have + past participle en el resultado. La condición no se cumplió: el equipo no salió temprano.', example: 'If I had studied, I would have passed.', translation: 'Si hubiera estudiado, habría aprobado.' },
      { category: 'Gramática', instruction: 'ELIGE EL MIXED CONDITIONAL CORRECTO', prompt: 'If I had accepted the scholarship, I ___ abroad now.', hint: 'Una decisión pasada tendría una consecuencia en el presente.', options: ['would live', 'will live', 'would be living', 'had lived'], answer: 'would be living', title: 'Mixed conditional: pasado y presente', explanation: 'La condición está en el pasado (if + past perfect), pero el resultado ocurre ahora (would + verbo). Se usa para conectar una causa pasada con una consecuencia presente.', example: 'If she had taken the job, she would be living in London now.', translation: 'Si hubiera aceptado el trabajo, ahora viviría en Londres.' },
      { category: 'Gramática', instruction: 'ELIGE EL PRONOMBRE RELATIVO ADECUADO', prompt: 'The scientist ___ discovery changed medicine won an award.', hint: 'El pronombre indica posesión: el descubrimiento pertenece a la científica.', options: ['which', 'whose', 'who', 'where'], answer: 'whose', title: 'Relative clause con whose', explanation: 'Whose expresa posesión y puede referirse a personas o cosas. Aquí conecta the scientist con her discovery. Who se refiere a personas, which a cosas y where a lugares.', example: 'I met a writer whose novel won a prize.', translation: 'Conocí a una escritora cuya novela ganó un premio.' },
      { category: 'Gramática', instruction: 'ELIGE EL ORDEN CORRECTO EN REPORTED QUESTIONS', prompt: '“Where do you keep the files?” → She asked me ...', hint: 'En una pregunta indirecta no se invierte el sujeto y el verbo.', options: ['where did I keep the files.', 'where I kept the files.', 'where do I keep the files.', 'where I did keep the files.'], answer: 'where I kept the files.', title: 'Reported questions', explanation: 'Las preguntas indirectas usan orden afirmativo: palabra interrogativa + sujeto + verbo. Si el verbo introductorio está en pasado, do/does suele desaparecer y el verbo retrocede: keep → kept.', example: '“Where is Ana?” → He asked where Ana was.', translation: '“¿Dónde está Ana?” → Él preguntó dónde estaba Ana.' },
      { category: 'Gramática', instruction: 'ELIGE LA ESTRUCTURA PASIVA FORMAL', prompt: 'Researchers expect the results ___ in June.', hint: 'Los resultados reciben la acción de publicar.', options: ['publishing', 'to publish', 'to be published', 'to have publish'], answer: 'to be published', title: 'Passive infinitive', explanation: 'Después de expect + objeto, la forma pasiva del infinitivo es to be + past participle. Los resultados no publican; alguien los publica.', example: 'The new policy is expected to be announced soon.', translation: 'Se espera que la nueva política sea anunciada pronto.' },
      { category: 'Vocabulario', instruction: 'ELIGE EL SIGNIFICADO ACADÉMICO', prompt: 'A sustainable solution should work over the long term.', hint: 'Piensa en una solución que puede mantenerse en el futuro.', options: ['expensive to introduce', 'temporary and quick', 'able to continue without exhausting resources', 'popular for a short time'], answer: 'able to continue without exhausting resources', title: 'Academic vocabulary: sustainable', explanation: 'Sustainable describe algo que puede mantenerse a largo plazo sin agotar los recursos ni causar daños que impidan su continuidad.', example: 'The city is investing in sustainable transport.', translation: 'La ciudad está invirtiendo en transporte sostenible.' },
      { category: 'Vocabulario', instruction: 'ELIGE EL PHRASAL VERB EQUIVALENTE', prompt: 'The research team conducted three experiments.', hint: 'Busca un phrasal verb que signifique realizar o llevar a cabo.', options: ['put up with', 'carry out', 'look after', 'come across'], answer: 'carry out', title: 'Phrasal verb: carry out', explanation: 'Carry out significa realizar o llevar a cabo una actividad planificada. Put up with es tolerar, look after es cuidar y come across es encontrar algo por casualidad.', example: 'The researchers carried out three experiments.', translation: 'Los investigadores realizaron tres experimentos.' },
      { category: 'Gramática', instruction: 'COMPLETA CON DESPITE', prompt: 'Despite ___ exhausted, Lena finished her presentation.', hint: 'Despite va seguido de un sustantivo o de un verbo terminado en -ing.', options: ['she was', 'being', 'to be', 'was'], answer: 'being', title: 'Despite + gerund', explanation: 'Despite es una preposición; por eso va seguida de un sustantivo o un gerundio (-ing), no de una oración con sujeto y verbo conjugado. Although sí puede introducir una oración completa.', example: 'Despite feeling nervous, he spoke clearly.', translation: 'A pesar de sentirse nervioso, habló con claridad.' },
      { category: 'Lectura', instruction: 'LEE EL TEXTO Y ELIGE LA CONCLUSIÓN', prompt: 'What is the writer’s main point about AI tutors?', hint: 'Distingue la postura principal de los ejemplos que la respaldan.', context: 'AI tutors can give students immediate practice and adapt the difficulty of exercises. However, they cannot fully replace teachers, who notice emotions, encourage discussion, and understand a class’s social context. Schools should use AI as a support tool while keeping teachers central to learning.', options: ['AI tutors should replace classroom teachers.', 'AI is useful as a supplement, but teachers remain essential.', 'Students learn best without feedback.', 'Schools should stop using digital tools.'], answer: 'AI is useful as a supplement, but teachers remain essential.', title: 'Lectura: tesis y argumento', explanation: 'El autor presenta beneficios de la IA, pero concluye que debe apoyar, no reemplazar, a los docentes. La frase “while keeping teachers central” expresa claramente esa postura equilibrada.', example: 'Schools should use AI as a support tool while keeping teachers central.', translation: 'Las escuelas deberían usar la IA como apoyo y mantener a los docentes en el centro.' },
      { category: 'Escritura', instruction: 'ELIGE EL CONECTOR QUE MANTIENE LA LÓGICA', prompt: 'The method is expensive. ___, it has produced reliable results.', hint: 'La segunda oración contrasta con la primera.', options: ['Therefore', 'Nevertheless', 'For example', 'Similarly'], answer: 'Nevertheless', title: 'Conectores de contraste', explanation: 'Nevertheless introduce una idea que contrasta con lo anterior: aunque el método es caro, produce resultados fiables. Therefore indica consecuencia; for example introduce un ejemplo; similarly señala semejanza.', example: 'The task was challenging. Nevertheless, the team completed it.', translation: 'La tarea fue difícil. Aun así, el equipo la terminó.' },
    ],
  },
};

const advancedQuestions = {
  10: [
    { category: 'Gramática', instruction: 'ELIGE EL TIEMPO QUE OCURRIÓ PRIMERO', prompt: 'By the time we arrived, the film ___.', hint: 'Una acción terminó antes de otra acción pasada.', options: ['already started', 'had already started', 'has already started', 'was already starting'], answer: 'had already started', title: 'Past perfect para ordenar eventos', explanation: 'Usamos past perfect (had + past participle) para marcar la acción anterior a otra acción en pasado. La película empezó antes de que llegáramos.', example: 'The train had left before we reached the station.', translation: 'El tren se había ido antes de que llegáramos a la estación.' },
    { category: 'Gramática', instruction: 'COMPLETA UNA HIPÓTESIS PRESENTE', prompt: 'If I ___ more confident, I would speak in class.', hint: 'La situación es imaginaria o poco probable en el presente.', options: ['am', 'were', 'will be', 'had been'], answer: 'were', title: 'Second conditional', explanation: 'El second conditional expresa situaciones imaginarias: if + past simple, would + verbo base. En inglés formal se usa were con todas las personas en esta estructura.', example: 'If she were here, she would help us.', translation: 'Si ella estuviera aquí, nos ayudaría.' },
    { category: 'Gramática', instruction: 'COMPLETA LA PASIVA EN PRESENT PERFECT', prompt: 'The classroom ___ recently ___.', hint: 'El salón recibe la acción y no decimos quién la hizo.', options: ['has / painted', 'has been / painted', 'was / painting', 'is / paint'], answer: 'has been / painted', title: 'Present perfect passive', explanation: 'La pasiva del present perfect se forma con has/have + been + past participle. El sujeto (the classroom) recibe la acción.', example: 'The computers have been updated.', translation: 'Las computadoras han sido actualizadas.' },
    { category: 'Gramática', instruction: 'ELIGE LA DEDUCCIÓN MÁS LÓGICA', prompt: 'The lights are off and nobody answers. They ___ gone home.', hint: 'Deduce una conclusión probable a partir de las pistas.', options: ['must have', 'should', 'can', 'would have'], answer: 'must have', title: 'Must have para una deducción pasada', explanation: 'Must have + participio expresa una deducción muy probable sobre el pasado. La oración no describe una obligación, sino una conclusión basada en las pistas.', example: 'Her bag is here; she must have left on foot.', translation: 'Su bolso está aquí; debe de haberse ido a pie.' },
    { category: 'Gramática', instruction: 'ELIGE LA PETICIÓN MÁS CORTÉS', prompt: '___ you mind explaining the last step again?', hint: 'Busca la estructura cortés seguida de un verbo en -ing.', options: ['Would', 'Must', 'Do', 'Are'], answer: 'Would', title: 'Would you mind + gerund', explanation: 'La fórmula Would you mind + verbo en -ing se usa para hacer una petición amable. Por eso la frase es Would you mind explaining...?', example: 'Would you mind opening the window?', translation: '¿Te importaría abrir la ventana?' },
    { category: 'Vocabulario', instruction: 'COMPLETA LA COLLOCACIÓN NATURAL', prompt: 'Students should ___ responsibility for their own learning.', hint: 'En inglés, responsibility suele combinarse con un verbo específico.', options: ['make', 'take', 'do', 'get'], answer: 'take', title: 'Collocation: take responsibility', explanation: 'La combinación habitual es take responsibility, que significa asumir responsabilidad. Las collocations se aprenden como expresiones completas.', example: 'Our group took responsibility for the presentation.', translation: 'Nuestro grupo asumió la responsabilidad de la presentación.' },
    { category: 'Vocabulario', instruction: 'ELIGE LA FORMA DE PALABRA CORRECTA', prompt: 'The river is heavily ___ by factory waste.', hint: 'Después de is heavily necesitamos un participio que describa el río.', options: ['pollution', 'pollute', 'polluted', 'polluting'], answer: 'polluted', title: 'Familia de palabras: pollute', explanation: 'Polluted es el participio usado como adjetivo: heavily polluted. Pollution es un sustantivo, pollute es un verbo y polluting describe algo que causa contaminación.', example: 'The polluted river needs protection.', translation: 'El río contaminado necesita protección.' },
    { category: 'Lectura', instruction: 'IDENTIFICA LA IDEA PRINCIPAL', prompt: 'What is the main benefit of the school garden?', hint: 'Elige la idea que engloba las distintas actividades del texto.', context: 'At Green Valley School, students designed a garden using recycled containers. Science classes measure plant growth, while language classes keep weekly journals. The harvest is shared with families. Teachers say the project connects classroom subjects with practical skills.', options: ['It connects different subjects with hands-on learning.', 'It replaces all science and language lessons.', 'It teaches students to sell recycled containers.', 'It is used only to grow food for teachers.'], answer: 'It connects different subjects with hands-on learning.', title: 'Lectura: síntesis de ideas', explanation: 'El texto menciona ciencia, escritura y colaboración como partes del mismo proyecto. La última oración sintetiza esos ejemplos: conecta materias con habilidades prácticas.', example: 'The project connects classroom subjects with practical skills.', translation: 'El proyecto conecta las materias con habilidades prácticas.' },
    { category: 'Lectura', instruction: 'INFIERE EL SIGNIFICADO POR CONTEXTO', prompt: 'In the text, what does harvest most likely mean?', hint: 'Usa las pistas de garden y grow plants.', context: 'At Green Valley School, students designed a garden using recycled containers. Science classes measure plant growth, while language classes keep weekly journals. The harvest is shared with families. Teachers say the project connects classroom subjects with practical skills.', options: ['The plants collected when they are ready.', 'A tool used to measure plant growth.', 'A journal written in language class.', 'The containers used to build the garden.'], answer: 'The plants collected when they are ready.', title: 'Lectura: inferir vocabulario', explanation: 'Garden, plant growth y shared with families indican que harvest se refiere a lo que se recoge del cultivo cuando está listo: la cosecha.', example: 'The harvest is shared with families.', translation: 'La cosecha se comparte con las familias.' },
    { category: 'Escritura', instruction: 'ELIGE LA EVIDENCIA QUE MEJOR RESPALDA LA TESIS', prompt: 'Claim: Short movement breaks can help students focus.', hint: 'La mejor evidencia debe ser pertinente y provenir de una fuente concreta.', options: ['A study of four classrooms recorded fewer off-task minutes after movement breaks.', 'Everyone knows students dislike sitting.', 'My cousin likes running after school.', 'Movement breaks are fun and exciting.'], answer: 'A study of four classrooms recorded fewer off-task minutes after movement breaks.', title: 'Escritura: evidencia pertinente', explanation: 'La evidencia sólida es específica, relevante y comprobable. El dato de un estudio apoya directamente la afirmación; las otras opciones son opiniones o experiencias aisladas.', example: 'A study recorded fewer off-task minutes after movement breaks.', translation: 'Un estudio registró menos minutos de distracción después de pausas activas.' },
  ],
  11: [
    { category: 'Gramática', instruction: 'COMPLETA LA INVERSIÓN FORMAL', prompt: 'Rarely ___ students question the source of an online claim.', hint: 'Rarely al inicio de una oración formal exige invertir auxiliar y sujeto.', options: ['students do', 'do students', 'students did', 'are students'], answer: 'do students', title: 'Inversión con adverbios negativos', explanation: 'Cuando rarely, never o seldom aparece al inicio para dar énfasis, se invierte el auxiliar y el sujeto: Rarely + do + sujeto + verbo base.', example: 'Never have I seen such a clear explanation.', translation: 'Nunca había visto una explicación tan clara.' },
    { category: 'Gramática', instruction: 'EXPRESA UN ARREPENTIMIENTO DEL PASADO', prompt: 'I wish I ___ more carefully before choosing the course.', hint: 'El deseo se refiere a una decisión pasada que no puedes cambiar.', options: ['read', 'had read', 'would read', 'have read'], answer: 'had read', title: 'Wish + past perfect', explanation: 'Para expresar arrepentimiento sobre el pasado, usamos wish + past perfect. La persona no leyó con cuidado y ahora desea que hubiera ocurrido.', example: 'She wishes she had saved a copy.', translation: 'Ella desearía haber guardado una copia.' },
    { category: 'Gramática', instruction: 'ELIGE LA ESTRUCTURA CAUSATIVA', prompt: 'We had our science poster ___ by a local designer.', hint: 'Otra persona hizo el trabajo para nosotros.', options: ['design', 'designed', 'to design', 'designing'], answer: 'designed', title: 'Causative have + object + participle', explanation: 'Usamos have + objeto + past participle para decir que encargamos o gestionamos que otra persona haga algo. El póster recibe la acción: had it designed.', example: 'They had the classroom painted during the break.', translation: 'Mandaron pintar el salón durante el descanso.' },
    { category: 'Gramática', instruction: 'ELIGE EL MODAL DE DEDUCCIÓN', prompt: 'The conclusion is uncertain; the results ___ indicate a connection.', hint: 'El autor presenta una posibilidad, no una certeza.', options: ['must', 'might', 'have to', 'need to'], answer: 'might', title: 'Might para posibilidad cautelosa', explanation: 'Might indica posibilidad y es útil para expresar cautela al interpretar resultados. Must comunica una deducción mucho más firme.', example: 'These findings might support the hypothesis.', translation: 'Estos hallazgos podrían respaldar la hipótesis.' },
    { category: 'Gramática', instruction: 'COMPLETA LA REDUCCIÓN DE LA ORACIÓN RELATIVA', prompt: 'Students ___ in the competition must register by Friday.', hint: 'La forma reducida describe a los estudiantes que participan.', options: ['participating', 'participated', 'participate', 'are participated'], answer: 'participating', title: 'Reduced relative clauses', explanation: 'La forma students participating equivale a students who are participating. El participio presente reduce una cláusula relativa activa.', example: 'People working remotely need reliable internet.', translation: 'Las personas que trabajan a distancia necesitan internet fiable.' },
    { category: 'Vocabulario', instruction: 'ELIGE LA COLLOCACIÓN ACADÉMICA', prompt: 'Before drawing conclusions, researchers must ___ the data carefully.', hint: 'El verbo debe significar examinar la información con atención.', options: ['analyze', 'invent', 'borrow', 'ignore'], answer: 'analyze', title: 'Collocation: analyze data', explanation: 'Analyze data es una combinación habitual en contextos académicos: examinar datos para identificar patrones o llegar a conclusiones.', example: 'The class analyzed data from the survey.', translation: 'La clase analizó los datos de la encuesta.' },
    { category: 'Vocabulario', instruction: 'ELIGE EL ADVERBIO QUE MODIFICA EL VERBO', prompt: 'The number of participants increased ___ after the campaign.', hint: 'Modifica increased; necesitas un adverbio.', options: ['significant', 'significance', 'significantly', 'signifying'], answer: 'significantly', title: 'Formación de adverbios', explanation: 'Significantly es un adverbio que modifica el verbo increased. Significant es un adjetivo y significance es un sustantivo.', example: 'Attendance improved significantly this term.', translation: 'La asistencia mejoró significativamente este periodo.' },
    { category: 'Lectura', instruction: 'EVALÚA LA LIMITACIÓN DEL ARGUMENTO', prompt: 'Why does the writer say the survey cannot prove that screens cause poor sleep?', hint: 'Observa si el estudio controla otras explicaciones posibles.', context: 'A survey of 300 teenagers found that those who used phones late at night reported less sleep. The researchers noted that the survey measured habits at one point in time and did not control for stress or homework. They recommend a longer study before making causal claims.', options: ['It shows a relationship but does not rule out other factors.', 'It included too many teenagers to be useful.', 'It measured sleep for several years.', 'It proves phones have no effect on sleep.'], answer: 'It shows a relationship but does not rule out other factors.', title: 'Lectura: correlación y causalidad', explanation: 'El propio texto señala que el sondeo es de un solo momento y no controla estrés ni tareas. Por eso muestra una asociación, pero no permite afirmar que el teléfono sea la causa.', example: 'The survey measured habits at one point in time.', translation: 'La encuesta midió los hábitos en un solo momento.' },
    { category: 'Lectura', instruction: 'VALORA LA FIABILIDAD DE UNA FUENTE', prompt: 'Which source would best support a research essay about sleep?', hint: 'Considera autoría, método y evidencia, no solo el título.', context: 'A student is writing about how sleep affects memory. They find four sources: a personal blog with no references, a sleep-science article by university researchers, a product page selling a sleep tracker, and a short social-media post.', options: ['A peer-reviewed study by university researchers with methods and references.', 'A product page promoting a sleep tracker.', 'A personal blog with no references.', 'A short social-media post with no author.'], answer: 'A peer-reviewed study by university researchers with methods and references.', title: 'Lectura crítica: credibilidad', explanation: 'Una fuente con autoría experta, método explícito y referencias permite revisar cómo se obtuvo la evidencia. Los materiales promocionales y publicaciones sin fuentes requieren más verificación.', example: 'Check the author, methods, date, and references.', translation: 'Revisa la autoría, el método, la fecha y las referencias.' },
    { category: 'Escritura', instruction: 'ELIGE LA RESPUESTA AL CONTRAARGUMENTO', prompt: 'Some argue that public transport is inconvenient. Which response is strongest?', hint: 'Reconoce la objeción y responde con evidencia o una solución concreta.', options: ['That opinion is completely wrong.', 'Although some routes need improvement, frequent service on main lines can reduce commute times.', 'Public transport is a topic many people discuss.', 'I personally enjoy travelling by bus.'], answer: 'Although some routes need improvement, frequent service on main lines can reduce commute times.', title: 'Escritura: contraargumento y respuesta', explanation: 'Una respuesta eficaz reconoce una limitación real y presenta una razón concreta. La opción usa although para conceder un punto y luego defiende la propuesta; las otras descartan la objeción o expresan opiniones sin respaldo.', example: 'Although the plan is costly, it could benefit more residents.', translation: 'Aunque el plan es costoso, podría beneficiar a más residentes.' },
  ],
};

const assessmentDetails = {
  review: { label: 'Quiz de repaso', description: 'Repasa conceptos clave y recibe explicación después de cada respuesta.' },
  advanced: { label: 'Prueba avanzada', description: 'Preguntas nuevas de aplicación, análisis, inferencia y razonamiento.' },
  mock: { label: 'Simulacro mixto', description: '15 preguntas aleatorias combinadas de repaso y nivel avanzado.' },
};

const categoryOrder = ['Gramática', 'Vocabulario', 'Lectura', 'Escritura'];

const learningUnits = {
  10: {
    Gramática: { title: 'Present perfect', description: 'Usamos este tiempo para conectar una experiencia o situación pasada con el presente. Aparece con since y for, y también con palabras como already, yet y ever.', rule: 'have / has + past participle\nSince + punto de inicio · For + duración', example: 'I have studied English for three years.', translation: 'He estudiado inglés durante tres años.', tip: 'Usa since para decir cuándo comenzó algo (since 2023) y for para decir cuánto tiempo ha durado (for two years).', vocabulary: [['since', 'desde un momento'], ['for', 'durante un periodo'], ['already', 'ya']], activity: { prompt: 'My brother ___ his project yet.', options: ['has not finished', 'did not finished', 'is not finish', 'have not finish'], answer: 'has not finished', explanation: 'Yet suele aparecer en preguntas y negativas con present perfect. Con he/she/it usamos has + participio: has not finished.' } },
    Vocabulario: { title: 'Phrasal verbs académicos', description: 'Un phrasal verb combina un verbo con una partícula y puede adquirir un significado nuevo. Apréndelo dentro de una frase, no como una lista aislada.', rule: 'carry out = realizar · look up = buscar información\nfind out = averiguar', example: 'We carried out a survey about study habits.', translation: 'Realizamos una encuesta sobre hábitos de estudio.', tip: 'Anota cada expresión con un ejemplo propio. Algunas partículas se separan del verbo y otras no; verifica el patrón al aprenderla.', vocabulary: [['carry out', 'realizar'], ['look up', 'buscar'], ['find out', 'averiguar']], activity: { prompt: 'The students ___ an experiment in science class.', options: ['carried out', 'looked after', 'found out', 'gave up'], answer: 'carried out', explanation: 'Carry out significa llevar a cabo o realizar una tarea planificada, como un experimento, una encuesta o una investigación.' } },
    Lectura: { title: 'Skimming y scanning', description: 'Skimming sirve para captar la idea general; scanning sirve para localizar un dato concreto. Antes de leer, identifica qué tipo de información necesitas.', rule: 'Skimming → título, primera oración, idea global\nScanning → nombres, fechas, cifras, palabras clave', example: 'The school garden opened in May. Students grow vegetables and donate some of the harvest to a local food bank.', translation: 'El huerto escolar abrió en mayo. Los estudiantes cultivan verduras y donan parte de la cosecha a un banco de alimentos local.', tip: 'No traduzcas palabra por palabra en la primera lectura. Usa el contexto, los conectores y las palabras que se repiten.', vocabulary: [['harvest', 'cosecha'], ['donate', 'donar'], ['local', 'local']], activity: { prompt: 'According to the text, where do some vegetables go?', options: ['To a local food bank', 'To a new school library', 'To a sports centre', 'To a supermarket'], answer: 'To a local food bank', explanation: 'Esta pregunta pide un dato específico, así que usamos scanning y buscamos food bank en el texto.' } },
    Escritura: { title: 'Construye un párrafo claro', description: 'Un buen párrafo desarrolla una sola idea principal. Apóyala con razones o detalles y cierra con una oración que conecte con el propósito.', rule: 'Topic sentence → supporting details → example → concluding sentence', example: 'Reading every day improves vocabulary because students meet words in context.', translation: 'Leer todos los días mejora el vocabulario porque los estudiantes encuentran palabras en contexto.', tip: 'Usa first, also y for example para ordenar ideas. Revisa que cada oración apoye la idea principal.', vocabulary: [['first', 'primero'], ['also', 'además'], ['for example', 'por ejemplo']], activity: { prompt: 'Which sentence is the clearest topic sentence for a paragraph about school gardens?', options: ['School gardens help students learn science and responsibility.', 'Some gardens have green leaves.', 'I ate lunch at noon yesterday.', 'Plants need water.'], answer: 'School gardens help students learn science and responsibility.', explanation: 'Una topic sentence presenta la idea central del párrafo y permite desarrollarla. Las otras opciones son detalles aislados o no se relacionan con el tema completo.' } },
  },
  11: {
    Gramática: { title: 'Conditionals: situaciones reales e hipotéticas', description: 'Los condicionales relacionan una condición con un resultado. El tipo depende de si hablamos de una posibilidad real, una hipótesis presente o un pasado que no ocurrió.', rule: 'First: If + present, will + verb\nSecond: If + past, would + verb\nThird: If + past perfect, would have + participle', example: 'If I had more time, I would join the debate club.', translation: 'Si tuviera más tiempo, me uniría al club de debate.', tip: 'No pongas would en la cláusula que empieza con if. Primero identifica si la situación es real, hipotética o contraria a un hecho pasado.', vocabulary: [['unless', 'a menos que'], ['provided that', 'siempre que'], ['otherwise', 'de lo contrario']], activity: { prompt: 'If they had checked the map, they ___ lost.', options: ['would not have got', 'will not get', 'would not get', 'did not get'], answer: 'would not have got', explanation: 'Es una situación pasada que no ocurrió. El third conditional usa if + past perfect y would have + participio en el resultado.' } },
    Vocabulario: { title: 'Vocabulario académico y collocations', description: 'Las collocations son combinaciones de palabras que suelen aparecer juntas. Aprenderlas ayuda a expresarse con más naturalidad en ensayos, presentaciones y debates.', rule: 'conduct research · draw a conclusion\nraise awareness · address an issue', example: 'The report raises awareness about water pollution.', translation: 'El informe crea conciencia sobre la contaminación del agua.', tip: 'Agrupa las palabras por tema y registra la combinación completa. No traduzcas cada palabra de manera independiente.', vocabulary: [['evidence', 'evidencia'], ['issue', 'asunto / problema'], ['reliable', 'fiable']], activity: { prompt: 'After reviewing the evidence, the researchers ___ a conclusion.', options: ['drew', 'did', 'made up', 'took'], answer: 'drew', explanation: 'La collocation natural es draw a conclusion. En pasado, draw cambia a drew. Las collocations se aprenden como bloques de vocabulario.' } },
    Lectura: { title: 'Evalúa argumentos y evidencia', description: 'Una lectura crítica distingue la afirmación del autor, las razones que la apoyan y la evidencia que puede comprobarse. También reconoce límites o contraargumentos.', rule: 'Claim → reason → evidence → counterargument\nPregunta: ¿qué dato respalda la afirmación?', example: 'A survey of 500 students found that 68% slept longer after reducing evening screen time.', translation: 'Una encuesta a 500 estudiantes encontró que el 68 % durmió más después de reducir el uso de pantallas por la noche.', tip: 'Diferencia un hecho verificable de una opinión. Una cifra sin fuente no siempre es evidencia suficiente.', vocabulary: [['claim', 'afirmación'], ['survey', 'encuesta'], ['support', 'respaldar']], activity: { prompt: 'Which part of the example is measurable evidence?', options: ['A survey of 500 students found that 68% slept longer.', 'Sleep is important for everyone.', 'Phones are always distracting.', 'Students should change their habits.'], answer: 'A survey of 500 students found that 68% slept longer.', explanation: 'La cantidad de participantes y el porcentaje son datos medibles. Las otras opciones son una opinión general, una afirmación absoluta o una recomendación.' } },
    Escritura: { title: 'Escribe un argumento sólido', description: 'Un texto argumentativo presenta una tesis debatible, la desarrolla con razones y evidencia, considera otra perspectiva y concluye reforzando su postura.', rule: 'Thesis → reason + evidence → counterargument → response → conclusion', example: 'Although online learning offers flexibility, schools should keep group projects because they develop communication skills.', translation: 'Aunque el aprendizaje en línea ofrece flexibilidad, las escuelas deberían mantener los proyectos grupales porque desarrollan habilidades de comunicación.', tip: 'Usa however o nevertheless para contrastar, because para justificar y therefore para expresar una consecuencia.', vocabulary: [['although', 'aunque'], ['however', 'sin embargo'], ['therefore', 'por lo tanto']], activity: { prompt: 'The policy is costly. ___, it could reduce energy use over time.', options: ['Nevertheless', 'For example', 'Similarly', 'Because'], answer: 'Nevertheless', explanation: 'La segunda oración presenta una idea que contrasta con el costo mencionado. Nevertheless equivale a “aun así” o “sin embargo”.' } },
  },
};

const flashcardsByGrade = {
  10: [
    { front: 'durante tres años', back: 'for three years', example: 'I have lived here for three years.', translation: 'He vivido aquí durante tres años.' },
    { front: 'desde 2023', back: 'since 2023', example: 'She has studied English since 2023.', translation: 'Ella estudia inglés desde 2023.' },
    { front: 'llevar a cabo', back: 'carry out', example: 'They carried out an experiment.', translation: 'Llevaron a cabo un experimento.' },
    { front: 'averiguar', back: 'find out', example: 'We found out the answer.', translation: 'Averiguamos la respuesta.' },
    { front: 'cosecha', back: 'harvest', example: 'The harvest was shared with the community.', translation: 'La cosecha se compartió con la comunidad.' },
    { front: 'por ejemplo', back: 'for example', example: 'For example, students can grow herbs.', translation: 'Por ejemplo, los estudiantes pueden cultivar hierbas.' },
  ],
  11: [
    { front: 'a menos que', back: 'unless', example: 'We will go unless it rains.', translation: 'Iremos a menos que llueva.' },
    { front: 'evidencia', back: 'evidence', example: 'The claim needs stronger evidence.', translation: 'La afirmación necesita evidencia más sólida.' },
    { front: 'llegar a una conclusión', back: 'draw a conclusion', example: 'We drew a conclusion from the data.', translation: 'Llegamos a una conclusión a partir de los datos.' },
    { front: 'sin embargo', back: 'nevertheless', example: 'The task was difficult. Nevertheless, we finished it.', translation: 'La tarea fue difícil. Aun así, la terminamos.' },
    { front: 'fiable', back: 'reliable', example: 'Use reliable sources in your essay.', translation: 'Usa fuentes fiables en tu ensayo.' },
    { front: 'por lo tanto', back: 'therefore', example: 'It was late; therefore, we went home.', translation: 'Era tarde; por lo tanto, nos fuimos a casa.' },
  ],
};

function getTodayKey() {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
}

const scoreStorageKey = `wordtrip-score-${getTodayKey()}`;

function getDailyScore() {
  try {
    return Number(localStorage.getItem(scoreStorageKey)) || 0;
  } catch {
    return 0;
  }
}

const state = { grade: '10', index: 0, correct: 0, dailyCorrect: getDailyScore(), streak: 0, answered: false, sound: true, answers: [], module: 'Gramática', activityAnswered: false, view: 'learn', flashcardIndex: 0, flashcardFlipped: false, assessment: 'review', assessmentQuestions: quizzes[10].questions };
const elements = {
  answerGrid: document.querySelector('#answer-grid'),
  answerHeading: document.querySelector('.answer-heading'),
  questionCount: document.querySelector('#question-count'),
  progressFill: document.querySelector('#progress-fill'),
  progressTrack: document.querySelector('.progress-track'),
  questionBlock: document.querySelector('.question-block'),
  questionWord: document.querySelector('#question-word'),
  questionHint: document.querySelector('#question-hint'),
  questionLabel: document.querySelector('#question-label'),
  readingContext: document.querySelector('#reading-context'),
  readingText: document.querySelector('#reading-text'),
  explanationPanel: document.querySelector('#explanation-panel'),
  explanationIcon: document.querySelector('#explanation-icon'),
  explanationKicker: document.querySelector('#explanation-kicker'),
  explanationTitle: document.querySelector('#explanation-title'),
  explanationBody: document.querySelector('#explanation-body'),
  explanationExample: document.querySelector('#explanation-example'),
  explanationTranslation: document.querySelector('#explanation-translation'),
  resultsPanel: document.querySelector('#results-panel'),
  resultScore: document.querySelector('#result-score'),
  resultMessage: document.querySelector('#result-message'),
  resultsBreakdown: document.querySelector('#results-breakdown'),
  nextButton: document.querySelector('#next-button'),
  scoreValue: document.querySelector('#score-value'),
  streakValue: document.querySelector('#streak-value'),
  encouragement: document.querySelector('#encouragement'),
  pronounceButton: document.querySelector('#pronounce-button'),
  soundToggle: document.querySelector('#sound-toggle'),
  soundLabel: document.querySelector('#sound-label'),
  gradeBadge: document.querySelector('#grade-badge'),
  courseDescription: document.querySelector('#course-description'),
  footerHint: document.querySelector('#quiz-footer-hint'),
  lessonGrade: document.querySelector('#lesson-grade'),
  lessonUnit: document.querySelector('#lesson-unit'),
  lessonKicker: document.querySelector('#lesson-kicker'),
  lessonTitle: document.querySelector('#lesson-title'),
  lessonDescription: document.querySelector('#lesson-description'),
  lessonRule: document.querySelector('#lesson-rule'),
  lessonExample: document.querySelector('#lesson-example'),
  lessonTranslation: document.querySelector('#lesson-translation'),
  lessonTip: document.querySelector('#lesson-tip'),
  lessonVocabulary: document.querySelector('#lesson-vocabulary'),
  activityPrompt: document.querySelector('#activity-prompt'),
  activityOptions: document.querySelector('#activity-options'),
  activityFeedback: document.querySelector('#activity-feedback'),
  lessonAudio: document.querySelector('#lesson-audio'),
  flashcard: document.querySelector('#flashcard'),
  flashcardCount: document.querySelector('#flashcard-count'),
  flashcardLabel: document.querySelector('#flashcard-label'),
  flashcardWord: document.querySelector('#flashcard-word'),
  flashcardExample: document.querySelector('#flashcard-example'),
  flashcardAction: document.querySelector('#flashcard-action'),
  flashcardNext: document.querySelector('#flashcard-next'),
  flashcardSound: document.querySelector('#flashcard-sound'),
  assessmentDescription: document.querySelector('#assessment-description'),
  resultKicker: document.querySelector('.results-kicker'),
};

elements.scoreValue.textContent = String(state.dailyCorrect);

function currentQuiz() {
  const baseQuiz = quizzes[state.grade];
  const assessment = assessmentDetails[state.assessment];
  return {
    ...baseQuiz,
    questions: state.assessmentQuestions,
    assessmentLabel: assessment.label,
    assessmentDescription: assessment.description,
  };
}

function buildAssessmentQuestions(grade, assessment) {
  if (assessment === 'review') return quizzes[grade].questions;
  if (assessment === 'advanced') return advancedQuestions[grade];
  const mixedQuestions = [...quizzes[grade].questions, ...advancedQuestions[grade]];
  for (let index = mixedQuestions.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [mixedQuestions[index], mixedQuestions[swapIndex]] = [mixedQuestions[swapIndex], mixedQuestions[index]];
  }
  return mixedQuestions.slice(0, 15);
}

function startAssessment(assessment) {
  state.assessment = assessment;
  state.assessmentQuestions = buildAssessmentQuestions(state.grade, assessment);
  state.index = 0;
  state.correct = 0;
  state.streak = 0;
  state.answers = [];
  state.answered = false;
  elements.streakValue.textContent = '0';
  elements.encouragement.textContent = 'Cada pregunta es una oportunidad para aprender.';
  document.querySelectorAll('.assessment-tab').forEach((tab) => {
    const active = tab.dataset.assessment === assessment;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-pressed', String(active));
  });
}
function renderLesson() {
  const unit = learningUnits[state.grade][state.module];
  elements.lessonGrade.textContent = `GRADO ${state.grade} · ${currentQuiz().level}`;
  elements.lessonUnit.textContent = `UNIDAD ${String(categoryOrder.indexOf(state.module) + 1).padStart(2, '0')}`;
  elements.lessonKicker.textContent = `${state.module.toUpperCase()} EN CONTEXTO`;
  elements.lessonTitle.textContent = unit.title;
  elements.lessonDescription.textContent = unit.description;
  elements.lessonRule.textContent = unit.rule;
  elements.lessonExample.textContent = unit.example;
  elements.lessonTranslation.textContent = unit.translation;
  elements.lessonTip.textContent = unit.tip;
  elements.activityPrompt.textContent = unit.activity.prompt;
  elements.activityOptions.replaceChildren();
  elements.lessonVocabulary.replaceChildren();
  elements.activityFeedback.hidden = true;
  elements.activityFeedback.classList.remove('is-wrong');
  state.activityAnswered = false;

  document.querySelectorAll('.module-tab').forEach((tab) => {
    const active = tab.dataset.module === state.module;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-selected', String(active));
  });

  unit.vocabulary.forEach(([word, meaning]) => {
    const row = document.createElement('div');
    row.className = 'vocabulary-row';
    const term = document.createElement('strong');
    const definition = document.createElement('span');
    term.textContent = word;
    definition.textContent = meaning;
    row.append(term, definition);
    elements.lessonVocabulary.append(row);
  });

  unit.activity.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'activity-option';
    button.type = 'button';
    button.textContent = option;
    button.setAttribute('aria-label', `Opción ${index + 1}: ${option}`);
    button.addEventListener('click', () => answerActivity(button, option, unit.activity));
    elements.activityOptions.append(button);
  });
}

function answerActivity(button, selected, activity) {
  if (state.activityAnswered) return;
  state.activityAnswered = true;
  const isCorrect = selected === activity.answer;
  elements.activityOptions.querySelectorAll('button').forEach((option) => {
    option.disabled = true;
    if (option.textContent === activity.answer) option.classList.add('is-correct');
  });
  if (!isCorrect) button.classList.add('is-wrong');
  elements.activityFeedback.textContent = `${isCorrect ? '¡Correcto!' : `La respuesta correcta es “${activity.answer}”.`} ${activity.explanation}`;
  elements.activityFeedback.classList.toggle('is-wrong', !isCorrect);
  elements.activityFeedback.hidden = false;
}

function renderFlashcard() {
  const cards = flashcardsByGrade[state.grade];
  const card = cards[state.flashcardIndex];
  elements.flashcardCount.textContent = `TARJETA ${String(state.flashcardIndex + 1).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`;
  elements.flashcard.classList.toggle('is-flipped', state.flashcardFlipped);
  elements.flashcardLabel.textContent = state.flashcardFlipped ? 'EN INGLÉS' : 'RECUERDA EN INGLÉS';
  elements.flashcardWord.textContent = state.flashcardFlipped ? card.back : card.front;
  elements.flashcardExample.textContent = state.flashcardFlipped ? `${card.example} ${card.translation}` : '';
  elements.flashcardAction.innerHTML = state.flashcardFlipped ? 'Volver a la pregunta <span aria-hidden="true">↶</span>' : 'Pulsa para revelar <span aria-hidden="true">↗</span>';
  elements.flashcard.setAttribute('aria-label', state.flashcardFlipped ? `Respuesta: ${card.back}. Pulsa para volver.` : `Pregunta: ${card.front}. Pulsa para revelar.`);
}

function showView(view) {
  state.view = view;
  document.querySelectorAll('.learning-tab').forEach((tab) => {
    const active = tab.dataset.view === view;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-selected', String(active));
  });
  document.querySelectorAll('.app-view').forEach((panel) => {
    panel.hidden = panel.id !== `${view}-view`;
  });
}

function speakEnglish(text) {
  if (!state.sound || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.86;
  window.speechSynthesis.speak(utterance);
}

function renderResults() {
  const quiz = currentQuiz();
  const total = quiz.questions.length;
  const percentage = Math.round((state.correct / total) * 100);
  elements.questionBlock.hidden = true;
  elements.readingContext.hidden = true;
  elements.answerHeading.hidden = true;
  elements.answerGrid.hidden = true;
  elements.explanationPanel.hidden = true;
  elements.resultsPanel.hidden = false;
    elements.resultKicker.textContent = `${quiz.assessmentLabel.toUpperCase()} · RESULTADO FINAL`;
  elements.questionCount.innerHTML = 'QUIZ <span>COMPLETADO</span>';
  elements.progressTrack.setAttribute('aria-valuenow', String(total));
  elements.progressFill.style.width = '100%';
  elements.resultScore.textContent = `${state.correct}/${total}`;
  elements.resultMessage.textContent = percentage >= 80
    ? `¡Excelente trabajo! Lograste ${percentage}%. Ya dominas buena parte del contenido.`
    : percentage >= 60
      ? `Vas avanzando: ${percentage}%. Revisa las explicaciones y vuelve a intentarlo.`
      : `Este repaso te mostró qué practicar. Revisa las explicaciones y vuelve a intentarlo.`;
  elements.resultsBreakdown.replaceChildren();

  categoryOrder.forEach((category) => {
    const categoryQuestions = quiz.questions.filter((question) => question.category === category);
    const categoryCorrect = state.answers.filter((answer) => answer.category === category && answer.correct).length;
    if (!categoryQuestions.length) return;
    const row = document.createElement('div');
    row.className = 'breakdown-row';
    const label = document.createElement('span');
    label.textContent = category;
    const score = document.createElement('strong');
    score.textContent = `${categoryCorrect}/${categoryQuestions.length}`;
    row.append(label, score);
    elements.resultsBreakdown.append(row);
  });

  elements.nextButton.innerHTML = 'Repetir quiz <span aria-hidden="true">↻</span>';
  elements.nextButton.dataset.action = 'restart';
  elements.nextButton.hidden = false;
  elements.footerHint.textContent = 'Cada intento te ayuda a fijar lo aprendido.';
}

function renderQuestion() {
  const quiz = currentQuiz();
  const isComplete = state.index >= quiz.questions.length;

  elements.answerGrid.replaceChildren();
  elements.questionBlock.hidden = false;
  elements.answerHeading.hidden = false;
  elements.answerGrid.hidden = false;
  elements.resultsPanel.hidden = true;
  elements.explanationPanel.hidden = true;
  elements.readingContext.hidden = true;
  elements.nextButton.hidden = true;
  elements.progressTrack.setAttribute('aria-valuemax', String(quiz.questions.length));
  elements.progressTrack.setAttribute('aria-valuenow', String(Math.min(state.index, quiz.questions.length)));
  elements.progressFill.style.width = `${(Math.min(state.index, quiz.questions.length) / quiz.questions.length) * 100}%`;

  if (isComplete) {
    renderResults();
    return;
  }

  const question = quiz.questions[state.index];
  elements.gradeBadge.textContent = `GRADO ${state.grade} · ${quiz.level}`;
    elements.courseDescription.textContent = quiz.description;
    elements.assessmentDescription.textContent = quiz.assessmentDescription;
  elements.courseDescription.textContent = quiz.description;
  elements.questionCount.innerHTML = `PREGUNTA ${String(state.index + 1).padStart(2, '0')} <span>/ ${String(quiz.questions.length).padStart(2, '0')}</span>`;
  elements.questionLabel.textContent = `${question.category.toUpperCase()} · ${question.instruction}`;
  elements.questionWord.textContent = question.prompt;
  elements.questionHint.textContent = question.hint;
  elements.readingContext.hidden = !question.context;
  elements.readingText.textContent = question.context || '';
  elements.encouragement.classList.remove('complete-message');
  elements.footerHint.textContent = 'Lee la explicación: también cuenta como aprendizaje.';
  elements.nextButton.dataset.action = 'next';
  elements.nextButton.setAttribute('aria-label', state.index === quiz.questions.length - 1 ? 'Ver resultado' : 'Siguiente pregunta');

  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'answer-option';
    button.type = 'button';
    button.textContent = option;
    button.setAttribute('aria-label', `Opción ${index + 1}: ${option}`);
    button.addEventListener('click', () => selectAnswer(button, option, question));
    elements.answerGrid.append(button);
  });
}

function selectAnswer(button, selected, question) {
  if (state.answered) return;
  state.answered = true;
  const isCorrect = selected === question.answer;

  elements.answerGrid.querySelectorAll('button').forEach((option) => {
    option.disabled = true;
    if (option.textContent === question.answer) option.classList.add('is-correct');
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
    elements.encouragement.textContent = '¡Muy bien! Ya puedes explicar por qué esa respuesta funciona.';
  } else {
    state.streak = 0;
    button.classList.add('is-wrong');
    elements.encouragement.textContent = 'Un error útil: ahora sabes qué regla repasar.';
  }

  state.answers.push({ category: question.category, correct: isCorrect });
  elements.explanationPanel.classList.toggle('is-incorrect', !isCorrect);
  elements.explanationIcon.textContent = isCorrect ? '✓' : '!';
  elements.explanationKicker.textContent = isCorrect ? '¡CORRECTO!' : `RESPUESTA: ${question.answer}`;
  elements.explanationTitle.textContent = question.title;
  elements.explanationBody.textContent = question.explanation;
  elements.explanationExample.textContent = question.example;
  elements.explanationTranslation.textContent = question.translation;
  elements.explanationPanel.hidden = false;
  elements.scoreValue.textContent = String(state.dailyCorrect);
  elements.streakValue.textContent = String(state.streak);
  elements.nextButton.innerHTML = state.index === currentQuiz().questions.length - 1
    ? 'Ver resultados <span aria-hidden="true">→</span>'
    : 'Siguiente pregunta <span aria-hidden="true">→</span>';
  elements.nextButton.hidden = false;
}

document.querySelectorAll('.topic-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    state.grade = tab.dataset.grade;
    startAssessment(state.assessment);
    document.querySelectorAll('.topic-tab').forEach((item) => {
      const active = item === tab;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    state.flashcardIndex = 0;
    state.flashcardFlipped = false;
    renderLesson();
    renderFlashcard();
    renderQuestion();
  });
});

document.querySelectorAll('.assessment-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    startAssessment(tab.dataset.assessment);
    renderQuestion();
  });
});

document.querySelectorAll('.learning-tab').forEach((tab) => {
  tab.addEventListener('click', () => showView(tab.dataset.view));
});

document.querySelectorAll('[data-open-view]').forEach((button) => {
  button.addEventListener('click', () => showView(button.dataset.openView));
});

document.querySelectorAll('.module-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    state.module = tab.dataset.module;
    renderLesson();
  });
});

elements.nextButton.addEventListener('click', () => {
  if (elements.nextButton.dataset.action === 'restart') {
    startAssessment(state.assessment);
  } else {
    state.index += 1;
  }
  state.answered = false;
  renderQuestion();
});

elements.pronounceButton.addEventListener('click', () => {
  const question = currentQuiz().questions[state.index];
  if (!question) return;
  speakEnglish(question.context || question.prompt);
});

elements.lessonAudio.addEventListener('click', () => {
  speakEnglish(learningUnits[state.grade][state.module].example);
});

elements.flashcard.addEventListener('click', () => {
  state.flashcardFlipped = !state.flashcardFlipped;
  renderFlashcard();
});

elements.flashcardNext.addEventListener('click', () => {
  state.flashcardIndex = (state.flashcardIndex + 1) % flashcardsByGrade[state.grade].length;
  state.flashcardFlipped = false;
  renderFlashcard();
});

elements.flashcardSound.addEventListener('click', () => {
  speakEnglish(flashcardsByGrade[state.grade][state.flashcardIndex].back);
});

elements.soundToggle.addEventListener('click', () => {
  state.sound = !state.sound;
  elements.soundToggle.setAttribute('aria-pressed', String(state.sound));
  elements.soundLabel.textContent = state.sound ? 'Sonido activo' : 'Sonido apagado';
  if (!state.sound && 'speechSynthesis' in window) window.speechSynthesis.cancel();
});

renderLesson();
renderFlashcard();
renderQuestion();
showView('learn');