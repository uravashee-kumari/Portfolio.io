const SKILL_GROUPS = [
  { name: "Languages", color: "#3A42AD", items: ["JavaScript", "Java"] },
  { name: "Frontend", color: "#FF6B6B", items: ["React.js", "HTML5", "CSS3", "Bootstrap"] },
  { name: "Tools & Data", color: "#06B6A0", items: ["Git & GitHub", "MySQL", "Node.js (learning)"] },
  { name: "Fundamentals", color: "#8B5CF6", items: ["OOP", "DSA", "Operating Systems"] }
];

const EXPERIENCE = [
  {
    icon: "💻",
    role: "Full Stack Developer Intern",
    org: "Cognevance Technologies",
    meta: "July 2025 — Present",
    points: [
      "Develop responsive, user-friendly web applications using HTML, CSS, JavaScript, and React.js.",
      "Build reusable frontend components and integrate them with REST APIs for dynamic data handling.",
      "Collaborate through Git/GitHub, take part in code reviews, and resolve bugs to improve reliability.",
      "Test features and optimize for responsiveness, performance, and cross-browser compatibility."
    ],
    tags: ["JavaScript", "React.js", "REST APIs", "Git & GitHub"]
  },
  {
    icon: "🏗️",
    role: "Technical Intern",
    org: "RUIDP (Rajasthan Urban Infrastructure Development Project)",
    meta: "45 Days · June 2025 — July 2025",
    points: [
      "Assisted with technical documentation, project coordination, and operational workflows on active infrastructure projects.",
      "Collaborated with multidisciplinary teams on field-level observations and status reporting.",
      "Strengthened analytical thinking, communication, and problem-solving in a professional engineering environment."
    ],
    tags: ["Documentation", "Coordination", "Field Reporting"]
  }
];

// For projects: "images" left empty means no real screenshot is available yet.
// "repo" links to GitHub — defaults to the profile page until specific repo URLs are provided.
const GITHUB_PROFILE = "https://github.com/uravashee-kumari";

const PROJECTS = [
  {
    title: "Telemedicine Access for Rural Healthcare",
    badge: "Frontend · Research",
    desc: "A responsive frontend platform simulating rural telemedicine access — patient booking, appointment views, and admin/doctor dashboards, with client-side data handling (localStorage) and a preliminary AI-assisted triage UI concept.",
    tags: ["HTML5", "CSS3", "JavaScript", "localStorage"],
    note: "Co-authored and presented as a research paper at ICMART-2026 (Paper ID 97).",
    images: [
      "assets/proj-telemedicine-home.jpg",
      "assets/proj-telemedicine-patient.jpg",
      "assets/proj-telemedicine-booking.jpg"
    ],
    repo: GITHUB_PROFILE
  },
  {
    title: "Smart Factory Monitoring System",
    badge: "Frontend",
    desc: "A responsive dashboard visualizing simulated real-time data for temperature, humidity, and machine status, with client-side alert logic and historical data / reporting views.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    note: "Frontend-only build — data is simulated in JavaScript to demonstrate the monitoring UI.",
    images: [
      "assets/proj-smartfactory-dashboard.jpg",
      "assets/proj-smartfactory-machines.jpg"
    ],
    repo: GITHUB_PROFILE
  },
  {
    title: "Amazon Homepage Clone",
    badge: "Frontend",
    desc: "A static frontend clone of the Amazon homepage UI, recreating the hero banner, category grid, and product cards with HTML and CSS.",
    tags: ["HTML5", "CSS3"],
    note: "Static markup and styling only — no JavaScript or cart functionality.",
    images: [
      "assets/proj-amazonclone-home.jpg"
    ],
    repo: GITHUB_PROFILE
  }
];

// MERN Stack Web Development entry removed per request (no certificate image available for it).
const CERTIFICATIONS = [
  {
    name: "Competitive Programming (with distinction)",
    org: "Grass Solutions",
    meta: "Oct 30, 2024",
    img: "assets/cert-competitive-programming.jpg",
    desc: "A distinction-level course covering core competitive programming skills and problem-solving patterns, completed through Grass Solutions."
  },
  {
    name: "AWS Cloud with Artificial Intelligence Workshop",
    org: "LinuxWorld Informatics — Engineer's Tech Rath Yatra",
    meta: "Apr 16, 2025",
    img: "assets/cert-aws-ai.jpg",
    desc: "A 6+ hour hands-on workshop as part of the national-level Engineer's Tech Rath Yatra initiative, covering cloud computing fundamentals, Python modules, OpenCV-based computer vision, hand tracking, AWS CLI, Boto3, and launching AWS EC2 instances, mentored by Vimal Daga."
  },
  {
    name: "IBM Granite Models for Software Development",
    org: "IBM SkillsBuild",
    meta: "Digital badge",
    img: "assets/cert-ibm-granite.jpg",
    desc: "A digital badge recognizing completion of an IBM SkillsBuild course on using IBM's Granite AI models to support software development tasks."
  },
  {
    name: "SDGs Awareness Workshop",
    org: "Movers Programme",
    meta: "2-hour workshop",
    img: "assets/cert-sdg.jpg",
    desc: "A 2-hour workshop organized by volunteers of the Movers Programme to raise awareness of the United Nations Sustainable Development Goals and encourage youth action."
  }
];

/* ============================================
   RENDER
   ============================================ */

function renderSkills(){
  const wrap = document.getElementById("skill-groups");
  wrap.innerHTML = SKILL_GROUPS.map(g => `
    <div class="skill-group">
      <p class="skill-group-name">${g.name}</p>
      <div class="skill-tags">
        ${g.items.map(item => `<span class="skill-tag" style="background:${g.color}">${item}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

function renderExperience(){
  const wrap = document.getElementById("exp-cards");
  wrap.innerHTML = EXPERIENCE.map((e, i) => `
    <div class="exp-card reveal" data-exp-index="${i}">
      <div class="exp-icon">${e.icon}</div>
      <div>
        <p class="exp-role">${e.role}</p>
        <p class="exp-org">${e.org}</p>
        <p class="exp-meta">${e.meta}</p>
        <ul class="exp-list">
          ${e.points.slice(0, 2).map(p => `<li>${p}</li>`).join("")}
        </ul>
      </div>
      <span class="exp-arrow">→</span>
    </div>
  `).join("");

  wrap.querySelectorAll(".exp-card").forEach(card => {
    card.addEventListener("click", () => openExpModal(EXPERIENCE[card.dataset.expIndex]));
  });
}

function renderProjects(){
  const wrap = document.getElementById("project-list");
  wrap.innerHTML = PROJECTS.map((p, i) => {
    const media = p.images.length
      ? `
        <div class="carousel" data-carousel-index="${i}">
          ${p.images.map((img, imgI) => `
            <img src="${img}" alt="${p.title} screenshot ${imgI + 1}" class="js-lightbox-img carousel-slide ${imgI === 0 ? "active" : ""}">
          `).join("")}
          <div class="media-hover-hint"><span>🔍</span></div>
          ${p.images.length > 1 ? `
            <div class="carousel-dots">
              ${p.images.map((_, dotI) => `<button class="carousel-dot ${dotI === 0 ? "active" : ""}" data-dot-index="${dotI}" aria-label="Show screenshot ${dotI + 1}"></button>`).join("")}
            </div>
          ` : ""}
        </div>`
      : `<div class="project-media-empty"><span class="icon">🖼️</span><span>Screenshot not available yet — add one to the "images" array in script.js</span></div>`;
    return `
    <article class="project-item reveal ${i % 2 === 1 ? "reverse" : ""}">
      <div class="project-media">${media}</div>
      <div class="project-copy">
        <span class="project-badge">${p.badge}</span>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
        <p class="project-note">${p.note}</p>
        <a class="view-code-btn" href="${p.repo}" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="2.6"/><circle cx="17" cy="8" r="1.8"/><circle cx="15" cy="16" r="1.8"/><path d="M9 10.6V21M17 9.6c0 3-2 4-2 4M15 17.8v3.2M9 15c2.5 0 4-1 4-1"/></svg>
          View Code
        </a>
      </div>
    </article>
  `;
  }).join("");
}

/* ============================================
   PROJECT IMAGE CAROUSEL — auto-advances every 2s
   ============================================ */
function initCarousels(){
  document.querySelectorAll(".carousel").forEach(carousel => {
    const slides = carousel.querySelectorAll(".carousel-slide");
    const dots = carousel.querySelectorAll(".carousel-dot");
    if (slides.length <= 1) return;

    let current = 0;
    let timer = null;

    function show(index){
      slides.forEach((s, i) => s.classList.toggle("active", i === index));
      dots.forEach((d, i) => d.classList.toggle("active", i === index));
      current = index;
    }

    function next(){
      show((current + 1) % slides.length);
    }

    function start(){
      timer = setInterval(next, 2000);
    }
    function stop(){
      clearInterval(timer);
    }

    dots.forEach(dot => {
      dot.addEventListener("click", () => {
        show(Number(dot.dataset.dotIndex));
        stop();
        start();
      });
    });

    carousel.addEventListener("mouseenter", stop);
    carousel.addEventListener("mouseleave", start);

    start();
  });
}

function renderCertifications(){
  const wrap = document.getElementById("cert-gallery");
  wrap.innerHTML = CERTIFICATIONS.map((c, i) => `
    <div class="cert-card reveal" data-cert-index="${i}">
      <div class="cert-media">
        <img src="${c.img}" alt="${c.name} certificate">
        <div class="media-hover-hint"><span>🔍</span></div>
      </div>
      <div class="cert-info">
        <p class="cert-name">${c.name}</p>
        <p class="cert-org">${c.org}</p>
        <p class="cert-meta">${c.meta}</p>
      </div>
    </div>
  `).join("");

  wrap.querySelectorAll(".cert-card").forEach(card => {
    card.addEventListener("click", () => openCertModal(CERTIFICATIONS[card.dataset.certIndex]));
  });
}

/* ============================================
   MODALS
   ============================================ */
function openModal(id){
  document.getElementById(id).classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal(id){
  document.getElementById(id).classList.remove("open");
  document.body.style.overflow = "";
}

function openCertModal(c){
  document.getElementById("cert-modal-img").src = c.img;
  document.getElementById("cert-modal-img").alt = c.name;
  document.getElementById("cert-modal-name").textContent = c.name;
  document.getElementById("cert-modal-org").textContent = c.org;
  document.getElementById("cert-modal-meta").textContent = c.meta;
  document.getElementById("cert-modal-desc").textContent = c.desc;
  openModal("cert-modal");
}

function openExpModal(e){
  document.getElementById("exp-modal-role").textContent = e.role;
  document.getElementById("exp-modal-org").textContent = e.org;
  document.getElementById("exp-modal-meta").textContent = e.meta;
  document.getElementById("exp-modal-list").innerHTML = e.points.map(p => `<li>${p}</li>`).join("");
  document.getElementById("exp-modal-tags").innerHTML = e.tags.map(t => `<span>${t}</span>`).join("");
  openModal("exp-modal");
}

function initModalClosers(){
  document.querySelectorAll("[data-close-modal]").forEach(btn => {
    btn.addEventListener("click", () => closeModal(btn.dataset.closeModal));
  });
  document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal(modal.id);
    });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape"){
      document.querySelectorAll(".modal.open").forEach(m => closeModal(m.id));
    }
  });
}

/* ============================================
   HIRE ME FORM (opens default email app via mailto)
   ============================================ */
function initHireForm(){
  ["hire-btn-nav", "hire-btn-hero", "hire-btn-contact"].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener("click", () => openModal("hire-modal"));
  });

  document.getElementById("hire-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("hire-name").value.trim();
    const email = document.getElementById("hire-email").value.trim();
    const role = document.getElementById("hire-role").value.trim();
    const message = document.getElementById("hire-message").value.trim();

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      role ? `Role / Company: ${role}` : null,
      "",
      message
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join("\n"));

    window.location.href = `mailto:uravasheeparihar@gmail.com?subject=${subject}&body=${body}`;
    closeModal("hire-modal");
    document.getElementById("hire-form").reset();
  });
}
function initLightbox(){
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("js-lightbox-img")){
      lightboxImg.src = e.target.src;
      lightboxImg.alt = e.target.alt;
      lightbox.classList.add("open");
    }
  });

  function close(){
    lightbox.classList.remove("open");
    lightboxImg.src = "";
  }
  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}
function initMobileNav(){
  const burger = document.getElementById("nav-burger");
  const mobileNav = document.getElementById("nav-links-mobile");
  burger.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(isOpen));
  });
  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => mobileNav.classList.remove("open"));
  });
}
function initScrollReveal(){
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}
function initBackToTop(){
  document.getElementById("back-to-top").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderExperience();
  renderProjects();
  renderCertifications();
  initModalClosers();
  initHireForm();
  initLightbox();
  initCarousels();
  initMobileNav();
  initBackToTop();
  document.getElementById("year").textContent = new Date().getFullYear();
  requestAnimationFrame(initScrollReveal);
});
