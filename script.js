const translations = {
  en: {
    "brand.affiliation": "Center of Auditory and Language Intelligence",
    "nav.about": "About",
    "nav.research": "Research",
    "nav.team": "Team",
    "nav.approach": "Innovation Chain",
    "nav.partners": "Partners",
    "nav.connect": "Connect",
    "hero.eyebrow": "Center of Auditory and Language Intelligence @ Soochow University",
    "hero.line1": "From sound to",
    "hero.line2": "understanding and cognition.",
    "hero.intro": "An innovation and talent development hub for the intelligent fusion of sound, hearing, speech, knowledge, and cognition — advancing embodied audition, distributed agents, multimodal perception, and intelligent engineering.",
    "hero.ctaPrimary": "Explore our research",
    "hero.ctaSecondary": "Visit GitHub",
    "hero.sideNote": "Soochow University · Suzhou, China",
    "hero.scroll": "Scroll to discover",
    "visual.sound": "sound",
    "visual.hearing": "hearing",
    "visual.speech": "speech",
    "visual.knowledge": "knowledge & cognition",
    "about.index": "ABOUT",
    "about.kicker": "Listen deeper. Think wider.",
    "about.title": "Research anchored in industry. Talent prepared for the AI era.",
    "about.body1": "CaLi is a research center of Soochow University. As a key supporting unit of the Jiangsu Provincial Key Laboratory for Language Computing and Application, it is an innovative talent development hub jointly supported by Jiangsu Province and Soochow University. The center brings together leading faculty, guided by an IEEE Fellow, former Huawei senior experts, and Jiangsu Industrial Professors. Direct research links with C9 universities connect academic exploration with frontier industrial needs. Starting from real industry problems, the center builds a deeply integrated innovation community across industry, academia, research, and application. It focuses on frontier core technologies such as embodied audition and distributed agents, connecting key technology breakthroughs with industrial deployment while cultivating innovative AI-era talent.",
    "research.index": "RESEARCH",
    "research.kicker": "Four connected frontiers",
    "research.title": "From perception and cognition to intelligent engineering.",
    "research.card1Title": "Language & Multimodal Perception",
    "research.card1Body": "Enabling intelligent systems to jointly perceive speech, vision, sound, and context in complex real-world environments.",
    "research.card1Tag1": "Language perception",
    "research.card1Tag2": "Multimodal fusion",
    "research.card1Tag3": "Embodied sensing",
    "research.card2Title": "Audio Signal Analysis & Processing",
    "research.card2Body": "Discovering structure in acoustic signals and building robust methods for enhancement, separation, spatial analysis, and machine listening.",
    "research.card2Tag1": "Signal enhancement",
    "research.card2Tag2": "Spatial audio",
    "research.card2Tag3": "Acoustic analysis",
    "research.card3Title": "Multimodal & Language Cognition",
    "research.card3Body": "Studying how language, sensory information, knowledge, and cognition are represented, fused, and reasoned over in human and machine intelligence.",
    "research.card3Tag1": "Language cognition",
    "research.card3Tag2": "Cross-modal reasoning",
    "research.card3Tag3": "Distributed agents",
    "research.card4Title": "High-Performance Computing & Intelligent Engineering",
    "research.card4Body": "Turning frontier AI into efficient, scalable, and deployable systems for demanding scientific and industrial scenarios.",
    "research.card4Tag1": "AI systems",
    "research.card4Tag2": "High-performance computing",
    "research.card4Tag3": "Intelligent engineering",
    "team.index": "TEAM",
    "team.kicker": "Research team",
    "team.title": "The center brings together leading faculty, guided by an IEEE Fellow and former Huawei senior experts.",
    "team.line1": "Director: Prof. Kai Yu",
    "team.yuInfo1": "IEEE Fellow and ISCA Fellow.",
    "team.yuInfo2": "Distinguished Professor and PhD supervisor at Shanghai Jiao Tong University; Adjunct Chair Professor at Soochow University.",
    "team.line2": "Deputy Director: Prof. Mengyao Zhu",
    "team.zhuInfo1": "Professor and PhD supervisor at Soochow University’s School of Future Science and Engineering.",
    "team.zhuInfo2": "Co-chair of the UWA Audio Standards Group; Deputy Director of the Sound and Music Technology Committee of CAIA.",
    "team.line3": "Shichao Hu, Associate Professor; Chunyang Xu, Lecturer",
    "approach.index": "CHAIN",
    "approach.kicker": "One continuous innovation chain",
    "approach.title": "Discover. Translate. Cultivate.",
    "approach.body": "Real industry challenges become research questions; research breakthroughs become deployable systems; every stage becomes a setting for educating creative AI talent.",
    "approach.step1Title": "Discover",
    "approach.step1Body": "Advance core technologies in embodied audition, multimodal cognition, and distributed intelligence.",
    "approach.step2Title": "Translate",
    "approach.step2Body": "Connect key breakthroughs with frontier industry needs and validate them in real scenarios.",
    "approach.step3Title": "Cultivate",
    "approach.step3Body": "Develop innovative talent through the deep integration of research, education, industry, and application.",
    "partners.index": "PARTNERS",
    "partners.kicker": "Collaborating unit",
    "partners.label": "Key Laboratory",
    "partners.name": "Jiangsu Provincial Key Laboratory for Language Computing and Application",
    "partners.body": "Collaborating on language computing, speech-language intelligence, and industrial applications.",
    "connect.kicker": "Ideas travel further together",
    "connect.title": "From hearing to understanding and cognition — for people and machines.",
    "connect.body": "We welcome conversations with students, researchers, and partners working across audio, speech, language, and intelligent interaction.",
    "connect.cta": "Start a conversation",
    "footer.copy": "Center of Auditory and Language Intelligence"
  }
};

const originalText = new Map();
document.querySelectorAll("[data-i18n]").forEach((node) => {
  originalText.set(node.dataset.i18n, node.textContent.trim());
});

let currentLanguage = "zh";
const languageToggle = document.querySelector(".language-toggle");

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = language === "en" ? translations.en[key] : originalText.get(key);
  });

  languageToggle.textContent = language === "zh" ? "EN" : "中文";
  languageToggle.setAttribute(
    "aria-label",
    language === "zh" ? "Switch to English" : "切换至中文"
  );
}

languageToggle.addEventListener("click", () => {
  setLanguage(currentLanguage === "en" ? "zh" : "en");
});

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!open));
  navigation.classList.toggle("is-open", !open);
  document.body.classList.toggle("menu-open", !open);
});

navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 3, 2) * 90}ms`;
  observer.observe(element);
});

document.getElementById("year").textContent = new Date().getFullYear();

const canvas = document.getElementById("sound-field");
const context = canvas.getContext("2d");
const visual = document.querySelector(".hero-visual");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let pointer = { x: 0.5, y: 0.5 };
let frame;

function sizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * ratio;
  canvas.height = rect.height * ratio;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function drawSoundField(time = 0) {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const centerX = width * (0.5 + (pointer.x - 0.5) * 0.35);
  const centerY = height * (0.5 + (pointer.y - 0.5) * 0.35);
  const size = Math.min(width, height);
  const t = time * 0.001;
  context.clearRect(0, 0, width, height);
  context.lineCap = "round";
  context.lineJoin = "round";

  const drawRibbon = (offset, alpha) => {
    context.beginPath();
    context.moveTo(width * 0.18, height * (0.53 + offset));
    context.bezierCurveTo(
      width * 0.34,
      height * (0.36 + Math.sin(t + offset * 10) * 0.025),
      width * 0.58,
      height * (0.31 + offset),
      width * 0.78,
      height * (0.36 - offset)
    );
    context.strokeStyle = `rgba(6, 42, 95, ${alpha})`;
    context.lineWidth = 1.1;
    context.stroke();
  };

  // Sound: breathing acoustic ripples surrounding the CaLi mark.
  for (let ring = 0; ring < 10; ring += 1) {
    const drift = (t * 0.012 + ring * 0.017) % 0.055;
    const baseRadius = size * (0.115 + ring * 0.052 + drift);
    context.beginPath();

    for (let point = 0; point <= 220; point += 1) {
      const angle = (point / 220) * Math.PI * 2;
      const motion =
        Math.sin(angle * 6 + t * 1.45 + ring * 0.75) * (1.2 + ring * 0.35) +
        Math.sin(angle * 2 - t * 0.9) * 1.4;
      const radius = baseRadius + motion;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      if (point === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    }

    context.closePath();
    context.lineWidth = ring % 3 === 0 ? 1.1 : 0.75;
    context.strokeStyle = `rgba(6, 42, 95, ${0.2 - ring * 0.012})`;
    context.stroke();
  }

  // Hearing: ear-like auditory paths on the left, echoing the logo without duplicating it.
  for (let arc = 0; arc < 4; arc += 1) {
    const shift = arc * 0.026;
    context.beginPath();
    context.moveTo(width * (0.31 - shift), height * (0.28 + shift));
    context.bezierCurveTo(
      width * (0.14 + shift * 0.25),
      height * (0.36 + shift),
      width * (0.15 + shift * 0.2),
      height * (0.66 - shift * 0.4),
      width * (0.31 + shift * 0.7),
      height * (0.79 - shift)
    );
    context.strokeStyle = `rgba(6, 42, 95, ${0.18 - arc * 0.025})`;
    context.lineWidth = 1.4 + arc * 0.18;
    context.stroke();
  }

  // Speech: an animated waveform crossing the lower field like an utterance trace.
  context.beginPath();
  const speechBaseY = height * 0.705;
  const speechStart = width * 0.22;
  const speechEnd = width * 0.79;
  const speechSteps = 150;
  for (let step = 0; step <= speechSteps; step += 1) {
    const p = step / speechSteps;
    const envelope = Math.sin(Math.PI * p) ** 1.8;
    const x = speechStart + (speechEnd - speechStart) * p;
    const amplitude = size * (0.012 + 0.015 * Math.sin(p * Math.PI * 5 + t * 1.3) ** 2);
    const y =
      speechBaseY +
      Math.sin(p * Math.PI * 24 - t * 2.8) * amplitude * envelope +
      Math.sin(p * Math.PI * 8 + t * 1.6) * amplitude * 0.45 * envelope;
    if (step === 0) context.moveTo(x, y);
    else context.lineTo(x, y);
  }
  context.strokeStyle = "rgba(6, 42, 95, 0.44)";
  context.lineWidth = 2.1;
  context.stroke();

  // Knowledge & cognition: semantic/cognitive contours, intentionally not node graphs.
  const cognitionX = width * 0.61;
  const cognitionY = height * 0.30;
  for (let layer = 0; layer < 5; layer += 1) {
    const rx = size * (0.105 + layer * 0.027);
    const ry = size * (0.065 + layer * 0.018);
    context.beginPath();
    for (let point = 0; point <= 180; point += 1) {
      const angle = (point / 180) * Math.PI * 2;
      const flex = Math.sin(angle * 3 + t * 0.75 + layer) * size * 0.006;
      const x = cognitionX + Math.cos(angle) * (rx + flex);
      const y = cognitionY + Math.sin(angle) * (ry - flex * 0.45);
      if (point === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    }
    context.closePath();
    context.strokeStyle = `rgba(6, 42, 95, ${0.12 - layer * 0.012})`;
    context.lineWidth = 1;
    context.stroke();
  }

  drawRibbon(-0.075, 0.12);
  drawRibbon(-0.02, 0.16);
  drawRibbon(0.04, 0.11);

  context.save();
  context.globalAlpha = 0.16 + Math.sin(t * 1.2) * 0.03;
  context.fillStyle = "#062a5f";
  context.font = `600 ${Math.max(16, size * 0.045)}px "Noto Serif SC", "Microsoft YaHei", serif`;
  context.fillText("知", width * 0.55, height * 0.255);
  context.fillText("认", width * 0.67, height * 0.345);
  context.restore();

  if (!prefersReducedMotion.matches) frame = requestAnimationFrame(drawSoundField);
}

visual.addEventListener("pointermove", (event) => {
  const bounds = visual.getBoundingClientRect();
  pointer = {
    x: 0.5 + ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.08,
    y: 0.5 + ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.08
  };
});

visual.addEventListener("pointerleave", () => {
  pointer = { x: 0.5, y: 0.5 };
});

window.addEventListener("resize", sizeCanvas);
sizeCanvas();
drawSoundField();

prefersReducedMotion.addEventListener("change", () => {
  cancelAnimationFrame(frame);
  drawSoundField();
});
