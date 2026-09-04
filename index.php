<?php
$site = [
    'title' => 'Envejecimiento en casa | MexIHC 2026',
    'description' => 'Taller MexIHC 2026 sobre diseño, implementación y evaluación de tecnologías para apoyar el envejecimiento saludable en casa.',
    'logo' => 'assets/logo-big.svg',
    'heroImage' => 'assets/LMZF.jpeg',
    'eventDate' => '27 al 30 de octubre de 2026',
    'capacity' => 'Cupo sugerido: 10 participantes',
];

$nav = [
    '#about' => 'Acerca',
    '#topics' => 'Tópicos',
    '#program' => 'Agenda',
    '#submission' => 'Participa',
    '#committee' => 'Comité',
    '#dates' => 'Fechas',
];

$features = [
    [
        'number' => '01',
        'title' => 'Necesidades situadas',
        'text' => 'Compartir experiencias y lecciones aprendidas de proyectos desarrollados con personas mayores viviendo solas o en contextos de cuidado cotidiano.',
    ],
    [
        'number' => '02',
        'title' => 'Colaboración interdisciplinaria',
        'text' => 'Conectar comunidades de investigación, diseño, salud, cuidado y desarrollo tecnológico alrededor de problemas centrados en las personas.',
    ],
    [
        'number' => '03',
        'title' => 'Evaluación responsable',
        'text' => 'Discutir privacidad, ética, autonomía, adopción y medición longitudinal del impacto de tecnologías ubicuas, IA y salud digital.',
    ],
];

$topics = [
    'Envejecimiento en casa',
    'Vida independiente',
    'Diseño participativo',
    'Personas mayores y cuidadores',
    'Salud, bienestar y calidad de vida',
    'Hogares inteligentes',
    'Ambientes asistidos',
    'Monitoreo remoto',
    'Tecnologías ubicuas',
    'Biomarcadores digitales',
    'Fenotipado digital',
    'IA para envejecimiento saludable',
    'Aislamiento social y soledad',
    'Evaluación longitudinal',
    'Ética, privacidad y autonomía',
    'Apropiación tecnológica',
];

$audience = [
    'Estudiantes de licenciatura y posgrado',
    'Investigadores en HCI',
    'Profesionales en diseño de interacción',
    'Desarrolladores de tecnologías para envejecimiento saludable',
    'Profesionales de la salud y cuidadores',
];

$agenda = [
    ['time' => '10 min', 'title' => 'Introducción al taller', 'text' => 'Bienvenida, presentación de organizadores, participantes y objetivos.'],
    ['time' => '40 min', 'title' => 'Keynote', 'text' => 'Conferencia principal del taller.'],
    ['time' => '50 min', 'title' => 'Sesión 1: Diseñando para envejecer en casa', 'text' => '5 presentaciones cortas: 7 minutos de presentación y 3 minutos de preguntas.'],
    ['time' => '10 min', 'title' => 'Resumen de la sesión 1', 'text' => 'Síntesis de desafíos, necesidades y oportunidades identificadas.'],
    ['time' => '20 min', 'title' => 'Receso', 'text' => 'Café y networking informal.'],
    ['time' => '50 min', 'title' => 'Sesión 2: Diseñando para envejecer en casa', 'text' => '5 presentaciones cortas: 7 minutos de presentación y 3 minutos de preguntas.'],
    ['time' => '30 min', 'title' => 'Discusión grupal', 'text' => 'Cómo medir el impacto de la tecnología en personas mayores: estudios longitudinales, salud digital, biomarcadores, fenotipado, monitoreo, métodos mixtos, privacidad y ética.'],
    ['time' => '10 min', 'title' => 'Reflexión final y cierre', 'text' => 'Construcción de agenda de investigación, oportunidades de colaboración y retos prioritarios para la comunidad IHC.'],
];

$organizers = [
    [
        'name' => 'Luis Miguel Zamudio Fuentes',
        'affiliation' => 'CICESE / CITEDI-IPN',
        'email' => 'lmzamudio@citedi.mx',
        'image' => 'assets/LMZF.jpeg',
    ],
    [
        'name' => 'Lizbeth Olivia Escobedo Bravo',
        'affiliation' => 'Faculty of Computer Science, Dalhousie University, Canadá',
        'email' => 'lz750872@dal.ca',
        'image' => 'assets/Lizbeth_Olivia_Escobedo_JPG.jpg.avif',
    ],
];

$committee = [
    [
        'name' => 'Mónica Tentori Espinosa',
        'affiliation' => 'CICESE',
        'email' => 'mtentori@cicese.edu.mx',
        'image' => 'assets/Monica-Tentori.jpg',
    ],
    [
        'name' => 'Jesús Favela Vara',
        'affiliation' => 'CICESE',
        'email' => 'favela@cicese.edu.mx',
        'image' => 'assets/favela.jpg',
    ],
    [
        'name' => 'Luis Adrián Castro Quiroa',
        'affiliation' => 'ITSON',
        'email' => 'luis.castro@itson.edu.mx',
        'image' => 'assets/LuisCastro.JPG',
    ],
];

$dates = [
    ['date' => '20 ago 2026', 'text' => 'Límite para recepción de trabajos'],
    ['date' => '28 ago 2026', 'text' => 'Notificación de aceptación'],
    ['date' => '14 sep 2026', 'text' => 'Entrega de versión final'],
    ['date' => '27-30 oct 2026', 'text' => 'Celebración de MexIHC 2026'],
];

function e(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

function personCard(array $person): string
{
    return sprintf(
        '<article class="person">
          <img src="%s" alt="%s">
          <div>
            <h3>%s</h3>
            <p>%s</p>
            <a href="mailto:%s">%s</a>
          </div>
        </article>',
        e($person['image']),
        e($person['name']),
        e($person['name']),
        e($person['affiliation']),
        e($person['email']),
        e($person['email'])
    );
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= e($site['title']) ?></title>
  <meta name="description" content="<?= e($site['description']) ?>">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="site-header" data-header>
    <a class="brand" href="#inicio" aria-label="Ir al inicio">
      <img src="<?= e($site['logo']) ?>" alt="Logo de la organización">
      <span>MexIHC 2026</span>
    </a>
    <button class="nav-toggle" type="button" aria-label="Abrir menú" aria-expanded="false" data-nav-toggle>
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav class="site-nav" data-nav>
      <?php foreach ($nav as $href => $label): ?>
        <a href="<?= e($href) ?>"><?= e($label) ?></a>
      <?php endforeach; ?>
    </nav>
  </header>

  <main>
    <section class="hero" id="inicio">
      <div class="hero-bg" aria-hidden="true"></div>
      <div class="hero-content">
        <img class="hero-logo" src="<?= e($site['logo']) ?>" alt="Logo de la organización">
        <p class="eyebrow">Taller MexIHC 2026</p>
        <h1>Envejecimiento en casa: Diseño, implementación y evaluación en contextos reales</h1>
        <p class="hero-copy">Un espacio interdisciplinario para discutir tecnologías centradas en las personas que promuevan autonomía, bienestar y calidad de vida de personas mayores en el hogar.</p>
        <div class="hero-actions">
          <a class="button primary" href="#submission">Enviar trabajo</a>
          <a class="button secondary" href="#program">Ver agenda</a>
        </div>
        <div class="hero-meta" aria-label="Información principal del taller">
          <span><?= e($site['eventDate']) ?></span>
          <span>MexIHC 2026</span>
          <span><?= e($site['capacity']) ?></span>
        </div>
      </div>
    </section>

    <section class="theme-panel" aria-labelledby="tema-central">
      <div class="theme-label">
        <span>Tema central</span>
      </div>
      <div class="theme-copy">
        <h2 id="tema-central">Tecnologías para envejecer en casa con autonomía, bienestar y cuidado centrado en la persona</h2>
        <p>El taller se enfoca en soluciones de HCI evaluadas en contextos reales: hogares inteligentes, monitoreo remoto, IA, salud digital y diseño participativo con personas mayores, cuidadores y profesionales de la salud.</p>
      </div>
      <div class="theme-stat">
        <strong>4 páginas</strong>
        <span>artículos cortos en plantilla MexIHC</span>
      </div>
    </section>

    <section class="section intro-grid" id="about">
      <div>
        <p class="section-kicker">Acerca del taller</p>
        <h2>Diseñar tecnologías para vivir y envejecer con autonomía</h2>
      </div>
      <div class="body-copy">
        <p>El taller reúne a investigadores, estudiantes, profesionales, cuidadores y personas mayores interesadas en el diseño, implementación y evaluación de tecnologías desde la Interacción Humano-Computadora.</p>
        <p>A través de experiencias, metodologías y casos de estudio, los participantes discutirán retos y oportunidades para desarrollar soluciones que apoyen el envejecimiento saludable, la vida independiente y el cuidado centrado en la persona.</p>
      </div>
    </section>

    <section class="section relevance">
      <div class="section-heading">
        <p class="section-kicker">Relevancia</p>
        <h2>HCI con impacto social en escenarios reales</h2>
      </div>
      <div class="feature-grid">
        <?php foreach ($features as $feature): ?>
          <article>
            <span><?= e($feature['number']) ?></span>
            <h3><?= e($feature['title']) ?></h3>
            <p><?= e($feature['text']) ?></p>
          </article>
        <?php endforeach; ?>
      </div>
    </section>

    <section class="section" id="topics">
      <div class="section-heading">
        <p class="section-kicker">Tópicos de interés</p>
        <h2>Temas para trabajos, demos y discusiones</h2>
      </div>
      <div class="topics-list">
        <?php foreach ($topics as $topic): ?>
          <span><?= e($topic) ?></span>
        <?php endforeach; ?>
      </div>
    </section>

    <section class="section audience">
      <div class="section-heading">
        <p class="section-kicker">Público objetivo</p>
        <h2>Una conversación abierta entre investigación, diseño y cuidado</h2>
      </div>
      <div class="audience-grid">
        <?php foreach ($audience as $group): ?>
          <p><?= e($group) ?></p>
        <?php endforeach; ?>
      </div>
    </section>

    <section class="section program" id="program">
      <div class="section-heading">
        <p class="section-kicker">Contenido y agenda</p>
        <h2>Presentaciones breves, discusión colaborativa y cierre común</h2>
      </div>
      <div class="timeline">
        <?php foreach ($agenda as $item): ?>
          <div class="timeline-item">
            <time><?= e($item['time']) ?></time>
            <div>
              <h3><?= e($item['title']) ?></h3>
              <p><?= e($item['text']) ?></p>
            </div>
          </div>
        <?php endforeach; ?>
      </div>
    </section>

    <section class="section submission" id="submission">
      <div class="submission-panel">
        <div>
          <p class="section-kicker">Convocatoria</p>
          <h2>Envía un artículo corto de 4 páginas</h2>
          <p>El taller aceptará trabajos en progreso, casos de estudio, experiencias de investigación en contextos reales, proyectos sobre envejecimiento saludable, lecciones aprendidas, resultados negativos, desafíos, demostraciones y prototipos.</p>
        </div>
        <div class="submission-details">
          <p><strong>Formato:</strong> plantilla oficial de MexIHC</p>
          <p><strong>Plataforma:</strong> EasyChair</p>
          <p><strong>Enfoque:</strong> diseño, implementación y evaluación de tecnologías para autonomía, bienestar y vida independiente en el hogar.</p>
        </div>
      </div>
    </section>

    <section class="section organizers" id="committee">
      <div class="section-heading">
        <p class="section-kicker">Organizadores</p>
        <h2>Equipo organizador</h2>
      </div>
      <div class="people-grid organizers-grid">
        <?php foreach ($organizers as $person): ?>
          <?= personCard($person) ?>
        <?php endforeach; ?>
      </div>

      <div class="section-heading compact">
        <p class="section-kicker">Comité académico</p>
        <h2>Revisión y acompañamiento académico</h2>
      </div>
      <div class="people-grid committee-grid">
        <?php foreach ($committee as $person): ?>
          <?= personCard($person) ?>
        <?php endforeach; ?>
      </div>
    </section>

    <section class="section dates" id="dates">
      <div class="section-heading">
        <p class="section-kicker">Fechas importantes</p>
        <h2>Calendario</h2>
      </div>
      <div class="dates-grid">
        <?php foreach ($dates as $date): ?>
          <article>
            <span><?= e($date['date']) ?></span>
            <p><?= e($date['text']) ?></p>
          </article>
        <?php endforeach; ?>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <p>Envejecimiento en casa: Diseño, implementación y evaluación en contextos reales</p>
    <a href="#inicio">Volver arriba</a>
  </footer>

  <script src="script.js"></script>
</body>
</html>
