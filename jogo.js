"use strict";

const paths = {
  logo: '<path d="m12 2 9 5v10l-9 5-9-5V7z"/><path d="m7 15 5-8 5 8m-7-2h4"/>',
  arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>', back: '<path d="M20 12H5m6 6-6-6 6-6"/>',
  chevron: '<path d="m9 6 6 6-6 6"/>', lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  check: '<path d="m5 12 4 4L19 6"/>', plus: '<path d="M12 5v14m-7-7h14"/>', close: '<path d="m6 6 12 12M18 6 6 18"/>',
  bolt: '<path d="m13 2-9 12h7l-1 8 10-12h-7z"/>', star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9z"/>',
  trophy: '<path d="M8 4h8v7a4 4 0 0 1-8 0zM8 6H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4m-4 3v5m-4 0h8"/>',
  search: '<circle cx="10" cy="10" r="5.5"/><path d="m14 14 6 6"/><path d="M10 8v4M8 10h4"/>',
  scan: '<path d="M3 8V4h4m10 0h4v4m0 8v4h-4m-10 0H3v-4M3 12h18"/><circle cx="12" cy="12" r="4"/>',
  mountain: '<path d="m2 18 6-8 3 4 5-9 6 13zM2 21h20"/>',
  branch: '<path d="M5 5v14m0-7h7a5 5 0 0 0 5-5V4m-3 3 3-3 3 3m-8 5a5 5 0 0 1 5 5v3m-3-3 3 3 3-3"/>',
  kit: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V4h8v3M3 12h18m-12 0v3h6v-3"/>',
  clipboard: '<rect x="5" y="5" width="14" height="16" rx="2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6m-6 4h6"/>',
  gamepad: '<path d="M8 7h8a4 4 0 0 1 4 3l1 5a3 3 0 0 1-5 3l-2-2h-4l-2 2a3 3 0 0 1-5-3l1-5a4 4 0 0 1 4-3zm0 3v4m-2-2h4m6-1h.01m2 2h.01"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  hourglass: '<path d="M6 3h12M6 21h12M7 3v3c0 3 3 4 5 6-2 2-5 3-5 6v3m10-18v3c0 3-3 4-5 6 2 2 5 3 5 6v3"/>',
  message: '<path d="M4 5h16v12H9l-5 3zM8 10h8m-8 3h5"/>',
  flag: '<path d="M5 21V4m0 1c6-4 7 4 14 0v10c-7 4-8-4-14 0"/>',
  box: '<path d="m3 7 9-4 9 4v10l-9 4-9-4zm0 0 9 4 9-4m-9 4v10M7.5 5l9 4"/>',
  people: '<circle cx="9" cy="8" r="3"/><path d="M3 20v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3m1-15a3 3 0 0 1 0 6m2 3a4 4 0 0 1 3 4v2"/>',
  alert: '<path d="m12 3 10 17H2zM12 9v4m0 3h.01"/>',
  layers: '<path d="m12 3 10 5-10 5L2 8zm10 9-10 5-10-5m20 4-10 5-10-5"/>',
  checklist: '<path d="m3 6 1 1 2-2m-3 7 1 1 2-2m-3 7 1 1 2-2M9 6h12M9 12h12m-12 6h12"/>',
  heart: '<path d="M12 20 4 12a4.7 4.7 0 0 1 7-6l1 1 1-1a4.7 4.7 0 0 1 7 6z"/>',
  hand: '<path d="M7 13V6a1.5 1.5 0 0 1 3 0v4-6a1.5 1.5 0 0 1 3 0v6-5a1.5 1.5 0 0 1 3 0v6-3a1.5 1.5 0 0 1 3 0v7a6 6 0 0 1-6 6h-1a6 6 0 0 1-5-3l-3-5c-1-2 1-3 3 0z"/>',
  flame: '<path d="M12 22a7 7 0 0 0 7-7c0-4-3-7-4-8 0 3-2 4-2 4 1-5-2-9-3-9 1 5-5 7-5 13a7 7 0 0 0 7 7z"/><path d="M12 22c-4-2-3-5 0-8 0 3 3 3 3 5 0 1-1 2-3 3z"/>',
  wind: '<path d="M3 8h12a2.5 2.5 0 1 0-2.5-2.5M3 12h16a2.5 2.5 0 1 0-2.5-2.5M3 16h10a2.5 2.5 0 1 1-2.5 2.5"/>',
  exit: '<path d="M11 4H5v16h6m1-8h9m-4-4 4 4-4 4"/>',
  brain: '<path d="M12 5a3 3 0 0 0-5-2 3 3 0 0 0-3 4 4 4 0 0 0 0 7 4 4 0 0 0 3 5 3 3 0 0 0 5-1m0-13a3 3 0 0 1 5-2 3 3 0 0 1 3 4 4 4 0 0 1 0 7 4 4 0 0 1-3 5 3 3 0 0 1-5-1zM8 9c0 3 2 4 4 4m4-4c0 3-2 4-4 4"/>',
  pause: '<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',
  headphones: '<path d="M3 14v-2a9 9 0 0 1 18 0v2M3 14a2 2 0 0 1 2-2h2v8H5a2 2 0 0 1-2-2zm18 0a2 2 0 0 0-2-2h-2v8h2a2 2 0 0 0 2-2z"/>',
  bot: '<rect x="4" y="7" width="16" height="12" rx="4"/><path d="M12 4v3M8 13h2m4 0h2M2 11v4m20-4v4"/>',
  gauge: '<path d="M4 18a9 9 0 1 1 16 0zM12 14l4-4"/>',
  ripple: '<path d="M2 8c4 0 4-3 7-3s4 3 7 3 3-2 6-2M2 13c4 0 4-3 7-3s4 3 7 3 3-2 6-2M2 18c4 0 4-3 7-3s4 3 7 3 3-2 6-2"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>'
};

const icon = (name, size = 20) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.star}</svg>`;
const num = value => String(value).padStart(2, "0");
const esc = value => String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
const imagePath = name => `assets/${name}.webp`;
const image = (name, className = "", alt = "") => `<img class="${className}" src="${imagePath(name)}" alt="${alt}" draggable="false">`;
const read = selector => document.querySelector(selector);

function newSession() {
  return {
    phase: 0,
    step: "cases",
    unlocked: 1,
    done: Array(5).fill(false),
    earned: new Map(),
    cases: casos.map(() => ({ intensity: "", thought: -1, reaction: -1, thoughtText: "", reactionText: "", saved: false })),
    scanner: { signs: [], empty: false, first: "" },
    thermometer: { index: 0, values: Array(situacoesTermometro.length + 1).fill(0) },
    iceberg: { seen: false, layer: "above", index: 0, choices: casosIceberg.map(() => []), text: "" },
    decisions: decisoes.map(() => ({ choice: -1, alternative: "", showAlternative: false, saved: false })),
    decisionIndex: 0,
    kit: [],
    kitAnswers: ["", "", ""],
    finalKit: null,
    notes: Array(7).fill("")
  };
}

let state = newSession();
let caseIndex = 0;
let notesIndex = 0;
let toastTimeout;
let lastFocus;

function action(name, label, opts = {}) {
  const { value, style = "secondary", pre, post, disabled = false, title } = opts;
  return `<button type="button" class="button ${style}" data-act="${name}"${value === undefined ? "" : ` data-value="${value}"`}${disabled ? " disabled" : ""}${title ? ` title="${esc(title)}"` : ""}>${pre ? icon(pre) : ""}<span>${label}</span>${post ? icon(post) : ""}</button>`;
}

function press(name, value, label, active, { glyph, detail, className = "", disabled = false } = {}) {
  return `<button type="button" class="option ${className}${active ? " selected" : ""}" data-act="${name}" data-value="${value}" aria-pressed="${active}"${disabled ? " disabled" : ""}>${glyph || ""}<span class="option-text">${label}${detail ? `<small>${detail}</small>` : ""}</span><span class="option-mark" aria-hidden="true">${active ? icon("check", 14) : ""}</span></button>`;
}

function input(label, name, value, { placeholder = "Se quiser, escreva aqui…", rows = 2 } = {}) {
  return `<label class="field"><span>${label}</span><textarea rows="${rows}" maxlength="2500" data-field="${name}" placeholder="${placeholder}">${esc(value)}</textarea></label>`;
}

function speech(message) {
  return `<div class="speech"><span class="bot-avatar">${icon("bot", 22)}</span><div><span class="voice">NEX <span>· ROBÔ GUIA</span></span><p>${message}</p></div></div>`;
}

function points() {
  return [...state.earned.values()].reduce((total, value) => total + value, 0);
}

function earn(key, value) {
  if (state.earned.has(key)) return 0;
  state.earned.set(key, value);
  return value;
}

function notify(message) {
  const toast = read("#aviso");
  clearTimeout(toastTimeout);
  toast.innerHTML = `${icon("check", 18)} <span>${message}</span>`;
  toast.classList.add("visible");
  toastTimeout = setTimeout(() => toast.classList.remove("visible"), 3200);
}

function header() {
  const complete = state.done.filter(Boolean).length;
  read("#cabecalho").innerHTML = `<div class="shell top-inner">
    <button type="button" class="brand" data-act="home" aria-label="Voltar à Central de comando"><span class="brand-symbol">${icon("logo", 25)}</span><span>MISSÃO <strong>SOB CONTROLE</strong></span></button>
    <div class="top-progress" role="group" aria-label="Progresso: ${complete} de 5 fases concluídas">
      <div class="progress-top"><span>PROGRESSO DA MISSÃO</span><strong>${complete} / 5</strong></div>
      <div class="progress-segments">${fases.map((fase, i) => `<span title="${fase.nome}" class="${state.done[i] ? "filled" : state.phase === i + 1 ? "current" : ""}"></span>`).join("")}</div>
    </div>
    <div class="top-actions"><div class="top-points" aria-label="${points()} pontos" title="Pontos por atividades concluídas">${icon("bolt", 18)} <strong>${points()}</strong><span> pts</span></div>
      <button type="button" class="therapist-button" data-act="therapist" aria-label="Abrir painel do terapeuta" title="Painel do terapeuta">${icon("clipboard", 18)}<span>Terapeuta</span></button>
    </div></div>`;
}

function footer() {
  const active = state.earned.size || state.phase || state.unlocked > 1 || state.notes.some(Boolean);
  read("#rodape").innerHTML = `<span>${icon("logo", 15)} MISSÃO SOB CONTROLE</span>${active ? action("reset-dialog", "Nova sessão", { style: "quiet" }) : ""}`;
}

function missionMap() {
  const count = state.done.filter(Boolean).length;
  return `<section class="mission-map" aria-labelledby="mapa-titulo">
    <div class="section-heading"><div class="map-title"><span class="map-symbol">${icon("layers", 20)}</span><h2 id="mapa-titulo">Mapa de missões</h2></div><span class="map-count"><strong>${count} de 5</strong> concluídas</span></div>
    <div class="mission-grid">${fases.map((fase, i) => {
      const locked = i + 1 > state.unlocked;
      const done = state.done[i];
      return `<button type="button" class="mission-card ${locked ? "locked" : ""} ${done ? "complete" : ""}" style="--accent:${fase.cor}" data-act="phase" data-value="${i + 1}" ${locked ? "disabled" : ""}>
        <div class="card-image">${image(fase.imagem)}<span class="card-number">${num(i + 1)}</span><span class="card-status">${icon(locked ? "lock" : done ? "check" : "arrow", 16)}</span></div>
        <div class="mission-info"><span class="card-category">${done ? "CONCLUÍDA" : locked ? "BLOQUEADA" : "DISPONÍVEL"}</span><strong>${fase.nome}</strong></div>
      </button>`;
    }).join("")}</div>
  </section>`;
}

function home() {
  const started = state.unlocked > 1 || state.cases.some(record => record.intensity || record.thought >= 0 || record.reaction >= 0);
  return `<section class="home-hero">
    ${image("central", "hero-image")}
    <div class="hero-shade"></div>
    <div class="hero-copy">
      <div class="kicker"><span class="status-dot"></span> CENTRAL DE COMANDO</div>
      <h1>MISSÃO SOB<br><em>CONTROLE</em></h1>
      ${speech(abertura)}
      <div class="hero-buttons">${action("phase", started ? "Continuar missão" : "Iniciar missão", { value: state.unlocked, style: "primary", post: "arrow" })}</div>
    </div>
    <div class="robot-tag"><span class="status-dot"></span> NEX <span>· SISTEMA ATIVO</span></div>
  </section>
  ${missionMap()}
  <section class="achievement-strip" aria-label="Pontuação e conquistas">
    <div class="award-icon">${icon("trophy", 24)}</div>
    <div><strong>Agente do Autocontrole</strong><span>Conclua as cinco missões para desbloquear esta conquista.</span></div>
    <span class="award-state">${icon("lock", 15)} Bloqueada</span>
  </section>`;
}

function phaseHeading(fase) {
  return `<div class="breadcrumb">${action("home", "Central de comando", { style: "quiet", pre: "back" })}<span>MISSÃO ${num(state.phase)} / 05</span></div>
    <section class="phase-banner" style="--accent:${fase.cor}">
      ${image(fase.imagem, "banner-image")}
      <div class="banner-gradient"></div>
      <div class="banner-content"><span class="banner-icon">${icon(fase.icone, 24)}</span><div><div class="kicker">${fase.objetivo}</div><h1>${fase.nome}</h1></div></div>
    </section>`;
}

function phaseNav() {
  return `<nav class="phase-nav" aria-label="Navegação entre fases">
    ${state.phase > 1 ? action("phase", "Fase anterior", { value: state.phase - 1, pre: "back" }) : action("home", "Central de comando", { pre: "back" })}
    ${state.phase < state.unlocked ? action("phase", "Próxima fase", { value: state.phase + 1, post: "arrow" })
      : state.finalKit && state.phase === 5 ? action("home", "Ver resultado", { post: "arrow" }) : ""}
  </nav>`;
}

function row(content, className = "") {
  return `<div class="controls ${className}">${content}</div>`;
}

function detective() {
  const count = state.cases.filter(record => record.saved).length;
  if (state.step === "case") {
    const [title, scene, glyph, thoughts, reactions] = casos[caseIndex];
    const answer = state.cases[caseIndex];
    return `${row(action("cases", "Voltar aos casos", { pre: "back", style: "quiet" }))}
      <div class="panel case-panel"><div class="case-head"><div class="feature-icon">${icon(glyph, 28)}</div><div><span class="kicker">CASO ${num(caseIndex + 1)}</span><h2>${title}</h2></div></div>
      <p class="scenario">${scene}</p>
      <fieldset><legend>Como você se sentiria?</legend><div class="options intensity-options">${[["Pouco", "😌"], ["Médio", "😠"], ["Muito", "🤬"]].map(([label, emoji], i) => press("intensity", i, label, answer.intensity === label, { glyph: `<span class="emoji" aria-hidden="true">${emoji}</span>` })).join("")}</div></fieldset>
      <fieldset><legend>O que passaria pela sua cabeça?</legend><div class="options grid-two">${[...thoughts.map(thought => `“${thought}”`), "Outra coisa: quero explicar."].map((label, i) => press("thought", i, label, answer.thought === i)).join("")}</div>
      ${answer.thought === thoughts.length ? input("O que você pensaria? (opcional)", "thoughtText", answer.thoughtText) : ""}</fieldset>
      <fieldset><legend>O que você teria vontade de fazer?</legend><div class="options grid-two">${[...reactions, "Outra reação."].map((label, i) => press("reaction", i, label, answer.reaction === i)).join("")}</div>
      ${answer.reaction === reactions.length ? input("O que teria vontade de fazer? (opcional)", "reactionText", answer.reactionText) : ""}</fieldset>
      ${row(action("save-case", answer.saved ? "Atualizar investigação" : "Registrar investigação", { style: "primary", pre: "check", disabled: !answer.intensity || answer.thought < 0 || answer.reaction < 0 }), "end")}
    </div>`;
  }
  if (state.step === "brief") return `<section class="panel debrief"><div class="feature-icon">${icon("search", 30)}</div><h2>Investigação concluída</h2>${speech(fimInvestigacao)}${row(action("cases", "Rever casos", { pre: "back" }) + action("complete", "Abrir laboratório", { style: "primary", post: "arrow" }))}</section>`;
  return `${speech(fases[0].fala)}
    <div class="section-heading inset-heading"><h2>Arquivos da investigação</h2><span class="pill">${count} de 12 investigados</span></div>
    <div class="case-grid">${casos.map(([title, , glyph], i) => `<button type="button" class="case-tile${state.cases[i].saved ? " solved" : ""}" data-act="open-case" data-value="${i}">
      <span class="case-emblem">${icon(glyph, 24)}</span><span class="case-copy"><small>CASO ${num(i + 1)}</small><strong>${title}</strong></span><span class="case-state">${icon(state.cases[i].saved ? "check" : "chevron", 17)}</span></button>`).join("")}</div>
    ${row(`<p class="help">${count ? "Você pode investigar outros casos ou seguir para a próxima missão." : "Investigue pelo menos um caso para liberar a próxima missão."}</p>` + action("case-brief", "Concluir investigação", { style: "primary", post: "arrow", disabled: !count }), "between")}`;
}

function lab() {
  const scanner = state.scanner;
  if (state.step !== "thermometer") {
    const locations = [[52, 39], [41, 55], [50, 22], [47, 45], [53, 28], [60, 47], [47, 76], [50, 15]];
    return `${speech(fases[1].fala)}
      <section class="panel">
        <div class="section-heading"><h2>Scanner corporal</h2><span class="pill">${scanner.signs.length} sinais</span></div>
        <div class="scanner-grid"><div class="scanner-art">${image("laboratorio", "", "Silhueta do corpo humano no scanner")}
          <div class="scan-line" aria-hidden="true"></div>
          ${locations.map(([x, y], i) => `<span class="scan-dot${scanner.signs.includes(i) ? " lit" : ""}" style="--x:${x}%;--y:${y}%" aria-hidden="true"></span>`).join("")}
        </div><div>
          <fieldset><legend>Quais sinais você percebe em você?</legend>
          <div class="options grid-two">${sinais.map(([label, glyph], i) => press("sign", i, label, scanner.signs.includes(i), { glyph: icon(glyph, 18) })).join("")}</div>
          <div class="options spacer">${press("no-signs", 0, "Ainda não reconheço nenhum sinal", scanner.empty)}</div></fieldset>
          ${scanner.signs.length ? `<fieldset><legend>Qual desses sinais costuma aparecer primeiro quando você começa a ficar irritado?</legend>
            <div class="options grid-two">${scanner.signs.map(i => press("first-sign", i, sinais[i][0], scanner.first === String(i))).join("")}${press("first-sign", "unsure", "Não tenho certeza", scanner.first === "unsure")}</div></fieldset>` : ""}
        </div></div>
        ${row(action("thermometer", "Abrir termômetro", { style: "primary", post: "arrow", disabled: !(scanner.empty || scanner.signs.length && scanner.first !== "") }), "end")}
      </section>`;
  }

  const meter = state.thermometer;
  const current = meter.values[meter.index];
  const personal = meter.index === situacoesTermometro.length;
  const range = current ? niveis.find(([min, max]) => current >= min && current <= max) : null;
  const complete = meter.values.every(Boolean);
  return `${speech("Agora use o termômetro para marcar quanto de raiva você imagina sentir em cada situação. Depois, marque quando costuma notar que está perdendo a paciência.")}
    <section class="panel thermometer-panel">
      <div class="section-heading"><h2>Termômetro da raiva</h2><span class="pill">${meter.values.filter(Boolean).length} de 4 leituras</span></div>
      <div class="step-selector" aria-label="Escolher situação do termômetro">${[...situacoesTermometro, "Minha percepção"].map((label, i) => `<button type="button" data-act="meter-case" data-value="${i}" aria-pressed="${i === meter.index}" title="${label}">${meter.values[i] ? icon("check", 15) : i === 3 ? icon("gauge", 15) : num(i + 1)}<span>${i === 3 ? label : `Situação ${i + 1}`}</span></button>`).join("")}</div>
      <p class="scenario">${personal ? "Em qual nível você costuma perceber que está começando a perder a paciência?" : situacoesTermometro[meter.index]}</p>
      <div class="meter" aria-label="Nível de raiva de 1 a 10">${Array.from({ length: 10 }, (_, i) => {
        const value = i + 1, [, , label, , color] = niveis.find(([min, max]) => value >= min && value <= max);
        return `<button type="button" data-act="level" data-value="${value}" aria-label="${value}, ${label}" aria-pressed="${value === current}" class="${value <= current ? "up" : ""}" style="--level-color:${color}">${value}</button>`;
      }).join("")}</div>
      <p class="meter-reading" aria-live="polite">${range ? `<strong style="color:${range[4]}">${current} · ${range[2]}</strong> ${range[3]}` : "Toque em um número para registrar sua leitura."}</p>
      <div class="levels-legend">${niveis.map(([min, max, title, explanation, color]) => `<div style="--level-color:${color}"><strong>${min}–${max} · ${title}</strong><p>${explanation}</p></div>`).join("")}</div>
      ${row(action("scanner", "Voltar ao scanner", { pre: "back" }) + (complete ? action("complete", "Concluir laboratório", { style: "primary", post: "arrow" }) : action("meter-next", "Próxima leitura", { style: "primary", post: "arrow", disabled: !current })), "between")}
    </section>`;
}

function iceberg() {
  const ice = state.iceberg;
  const below = ice.layer === "below";
  const scene = casosIceberg[ice.index];
  return `${speech(fases[2].fala)}
    <section class="ice-grid">
      <div class="ice-art ${below ? "diving" : ""}">
        ${image("iceberg", "", "Uma pequena parte do iceberg acima da água e uma parte maior submersa")}
        <div class="ice-control">
          ${action("ice-layer", "Superfície", { pre: "mountain", value: "above", style: below ? "secondary" : "active" })}
          ${action("ice-layer", "Mergulhar", { pre: "ripple", value: "below", style: below ? "active" : "secondary" })}
        </div>
      </div>
      <div class="panel ice-description">
        <span class="kicker">${below ? "ABAIXO DA ÁGUA" : "ACIMA DA ÁGUA"}</span>
        <h2>${below ? "O que posso sentir por dentro" : "O que as pessoas podem ver"}</h2>
        <div class="tag-list">${(below ? profundidade : superficie).map(value => `<span>${value}</span>`).join("")}</div>
        <p class="help">${below ? "Pode haver uma, várias ou nenhuma dessas emoções junto da raiva." : "Mergulhe para descobrir emoções que podem estar junto da raiva."}</p>
      </div>
    </section>
    ${ice.seen ? `<section class="panel">
      <div class="section-heading"><h2>Investigue o que pode estar escondido</h2></div>
      <div class="step-selector" aria-label="Escolher situação">${casosIceberg.map(({ nome }, i) => `<button type="button" data-act="ice-case" data-value="${i}" aria-pressed="${i === ice.index}">${ice.choices[i].length ? icon("check", 15) : ""}<span>${nome}</span></button>`).join("")}</div>
      <p class="scenario">${scene.cena}</p>
      <details class="reflection"><summary>Pistas para explorar</summary><ul>${scene.pistas.map(item => `<li>${item}</li>`).join("")}</ul></details>
      <fieldset><legend>O que poderia estar presente? Escolha quantas quiser.</legend>
      <div class="options grid-three">${[...profundidade, "A raiva é o que mais aparece", "Não sei dizer"].map((label, i) => press("ice-choice", i, label, ice.choices[ice.index].includes(i))).join("")}</div></fieldset>
      ${input("Se a sua raiva pudesse falar, o que ela estaria tentando dizer? (opcional)", "iceText", ice.text)}
      ${row(action("complete", "Concluir exploração", { style: "primary", post: "arrow", disabled: !ice.choices.some(list => list.length) }), "end")}
    </section>` : ""}`;
}

function decision() {
  const i = state.decisionIndex;
  const scenario = decisoes[i];
  const record = state.decisions[i];
  const ready = state.decisions.every(item => item.saved);
  return `${speech(fases[3].fala)}
    <section class="panel decision-panel">
      <div class="section-heading"><h2>Simulador de escolhas</h2><span class="pill">${state.decisions.filter(item => item.saved).length} de 3 simuladas</span></div>
      <div class="step-selector" aria-label="Escolher desafio">${decisoes.map(({ nome, icone }, index) => `<button type="button" data-act="decision-case" data-value="${index}" aria-pressed="${i === index}">${icon(state.decisions[index].saved ? "check" : icone, 17)}<span>${nome}</span></button>`).join("")}</div>
      <p class="scenario">${scenario.cena}</p>
      <fieldset><legend>Qual reação você quer simular?</legend>
      <div class="options decisions-options">${scenario.opcoes.map(([label], o) => press("decision-choice", o, label, record.choice === o, { glyph: `<span class="letter">${"ABC"[o]}</span>` })).join("")}</div></fieldset>
      ${record.choice >= 0 ? `<div class="consequence" aria-live="polite"><span class="kicker">${icon("branch", 16)} POSSÍVEIS CONSEQUÊNCIAS</span><p>${scenario.opcoes[record.choice][1]}</p></div>
        <details class="reflection"><summary>Perguntas para conversar</summary><ul>${perguntasDecisao.map(question => `<li>${question}</li>`).join("")}</ul></details>
        ${record.showAlternative ? `<div class="alternative">${input("D. Construa uma quarta resposta (opcional)", "alternative", record.alternative, { placeholder: "O que mais você poderia fazer?" })}</div>` : action("alternative", "Construir uma quarta resposta", { pre: "plus" })}` : ""}
      ${row((ready ? action("complete", "Concluir central de decisões", { style: "primary", post: "arrow" }) : "") +
        (!record.saved && record.choice >= 0 ? action("save-decision", "Registrar simulação", { style: "primary", pre: "check" }) : ""), "end")}
    </section>`;
}

function toolCard(tool, i) {
  const selected = state.kit.includes(i);
  return `<button type="button" class="tool-card${selected ? " selected" : ""}" style="--tool-color:${tool.cor}" data-act="tool" data-value="${i}" aria-pressed="${selected}">
    <span class="tool-symbol">${icon(tool.icone, 26)}</span><span class="tool-label"><strong>${tool.nome}</strong><small>${tool.descricao}</small></span><span class="tool-mark">${icon(selected ? "check" : "plus", 17)}</span>
  </button>`;
}

function kit() {
  if (state.step === "kit-answers" && state.kit.length === 3) {
    return `${speech("Seu kit está montado. Pense em quando você poderia usar essas ferramentas.")}<section class="panel">
      <div class="section-heading"><h2>Meu plano de ação</h2><span class="pill">3 ferramentas</span></div>
      <div class="tag-list">${state.kit.map(i => `<span>${icon(ferramentas[i].icone, 16)} ${ferramentas[i].nome}</span>`).join("")}</div>
      <fieldset><legend>${perguntasKit[0]}</legend><div class="options grid-three">${state.kit.map(i => press("best-tool", i, ferramentas[i].nome, state.kitAnswers[0] === String(i), { glyph: icon(ferramentas[i].icone, 17) })).join("")}</div></fieldset>
      ${input(perguntasKit[1] + " (opcional)", "kit-situation", state.kitAnswers[1])}
      ${input(perguntasKit[2] + " (opcional)", "kit-barrier", state.kitAnswers[2])}
      ${row(action("kit-tools", "Trocar ferramentas", { pre: "back" }) + action("complete", "Finalizar missão", { style: "primary", post: "trophy" }), "between")}
    </section>`;
  }
  return `${speech(fases[4].fala)}<section class="panel">
    <div class="section-heading"><h2>Monte seu kit pessoal</h2><span class="pill">${state.kit.length} de 3 selecionadas</span></div>
    <div class="kit-slots" aria-label="Ferramentas no kit">${Array.from({ length: 3 }, (_, i) => {
      const tool = ferramentas[state.kit[i]];
      return tool ? `<span class="occupied" style="--tool-color:${tool.cor}">${icon(tool.icone, 19)} ${tool.nome}</span>` : `<span>${icon("plus", 19)} Espaço livre</span>`;
    }).join("")}</div>
    <div class="tool-grid">${ferramentas.map(toolCard).join("")}</div>
    ${row(`<p class="help">${state.kit.length === 3 ? "Para trocar uma ferramenta, desmarque uma das escolhidas." : "Escolha três ferramentas para liberar o plano de ação."}</p>` + action("kit-answers", "Preparar plano de ação", { style: "primary", post: "arrow", disabled: state.kit.length !== 3 }), "between")}
  </section>`;
}

function finalScreen() {
  const { tools, answers } = state.finalKit;
  return `<section class="home-hero final-hero">
    ${image("conquista", "hero-image")}
    <div class="hero-shade"></div>
    <div class="hero-copy">
      <div class="kicker"><span class="status-dot"></span> CENTRAL DE COMANDO</div>
      <h1>MISSÃO<br><em>CONCLUÍDA!</em></h1>
      ${speech(encerramento)}
    </div>
  </section>
  <section class="achievement-strip unlocked" aria-label="Conquista desbloqueada">
    <div class="award-icon">${icon("trophy", 27)}</div>
    <div><strong>AGENTE DO AUTOCONTROLE</strong><span>Missão concluída! Você desbloqueou novas ferramentas para lidar com suas emoções.</span></div>
    <span class="award-state">${icon("check", 15)} Desbloqueada</span>
  </section>
  <section class="panel final-kit">
    <div class="section-heading"><h2>Seu kit de sobrevivência</h2><span class="pill">3 ferramentas</span></div>
    <div class="tool-grid">${tools.map(i => {
      const tool = ferramentas[i];
      return `<div class="tool-card picked" style="--tool-color:${tool.cor}"><span class="tool-symbol">${icon(tool.icone, 26)}</span><span class="tool-label"><strong>${tool.nome}</strong><small>${tool.descricao}</small></span></div>`;
    }).join("")}</div>
    ${answers.some(Boolean) ? `<dl class="final-answers">${answers.map((answer, i) => answer ? `<div><dt>${perguntasKit[i]}</dt><dd>${i === 0 ? ferramentas[Number(answer)].nome : esc(answer)}</dd></div>` : "").join("")}</dl>` : ""}
    ${row(action("phase", "Rever meu kit", { value: 5, pre: "kit" }))}
  </section>
  ${missionMap()}`;
}

function render({ route = false, source } = {}) {
  const main = read("#conteudo");
  const openDetails = !route && Array.from(main.querySelectorAll("details"), detail => detail.open);
  header();
  footer();
  if (!state.phase) {
    main.style.removeProperty("--accent");
    main.innerHTML = state.finalKit ? finalScreen() : home();
  } else {
    const fase = fases[state.phase - 1];
    main.style.setProperty("--accent", fase.cor);
    main.innerHTML = phaseHeading(fase) + [detective, lab, iceberg, decision, kit][state.phase - 1]() + phaseNav();
  }
  if (route) {
    const target = main.querySelector("h1");
    target.tabIndex = -1;
    target.focus({ preventScroll: true });
    window.scrollTo(0, 0);
    main.classList.remove("enter");
    requestAnimationFrame(() => main.classList.add("enter"));
  } else {
    main.querySelectorAll("details").forEach((detail, index) => { detail.open = !!openDetails[index]; });
    if (source) {
      const next = Array.from(document.querySelectorAll("[data-act]")).find(button => button.dataset.act === source.act && button.dataset.value === source.value);
      next?.focus({ preventScroll: true });
    }
  }
}

function enterPhase(phase) {
  if (phase > state.unlocked || phase < 1) return;
  state.phase = phase;
  state.step = ["cases", "scanner", "iceberg", "decisions", "kit-tools"][phase - 1];
  render({ route: true });
}

function completePhase() {
  const phase = state.phase;
  let awarded = 0;
  if (phase === 2) awarded = earn("thermometer", 15);
  if (phase === 3) awarded = earn("iceberg", 20);
  if (phase === 5) {
    if (state.kit.length !== 3) return;
    awarded = earn("kit", 25);
    state.finalKit = { tools: [...state.kit], answers: [...state.kitAnswers] };
  }
  state.done[phase - 1] = true;
  state.unlocked = Math.max(state.unlocked, Math.min(5, phase + 1));
  if (phase === 5) {
    state.phase = 0;
    render({ route: true });
  } else {
    enterPhase(phase + 1);
  }
  notify(awarded ? `Missão concluída · +${awarded} pts` : "Missão concluída");
}

function notesPane() {
  const current = roteiro[notesIndex];
  read("#painel").innerHTML = `<div class="dialog-heading">
      <div><span class="kicker">${icon("clipboard", 16)} APOIO À SESSÃO</span><h2 id="painel-titulo">Painel do terapeuta</h2></div>
      <button type="button" class="icon-button" data-act="close-therapist" aria-label="Fechar painel">${icon("close")}</button>
    </div>
    <div class="dialog-body">
      <label class="field"><span>Etapa da sessão</span><select id="notes-stage">${roteiro.map(({ nome }, i) => `<option value="${i}"${notesIndex === i ? " selected" : ""}>${nome}</option>`).join("")}</select></label>
      <section class="therapist-questions"><div class="section-heading"><h3>Perguntas complementares</h3><span class="pill">${current.tempo} min</span></div>
      <ul>${current.perguntas.map(question => `<li>${question}</li>`).join("")}</ul></section>
      ${input("Observações da etapa", "notes", state.notes[notesIndex], { rows: 5, placeholder: "Registre os pontos que surgirem durante a conversa…" })}
      <p class="help">As anotações ficam nesta sessão até fechar ou recarregar a página. Baixe uma cópia para guardar.</p>
      <details class="reflection"><summary>Distribuição sugerida · 50 min</summary><ul class="schedule">${roteiro.map(({ nome, tempo }) => `<li><span>${nome}</span><strong>${tempo} min</strong></li>`).join("")}</ul><p class="help">Adapte o tempo e o número de casos ao andamento da sessão.</p></details>
    </div>
    <div class="dialog-actions">${action("download-notes", "Baixar anotações", { pre: "download", disabled: !state.notes.some(note => note.trim()) })}${action("close-therapist", "Voltar ao jogo", { style: "primary" })}</div>`;
}

function showNotes(button) {
  notesIndex = state.phase || (state.finalKit ? 6 : 0);
  lastFocus = button;
  notesPane();
  read("#painel").showModal();
}

function closeNotes() {
  read("#painel").close();
  footer();
}

function downloadNotes() {
  if (!state.notes.some(note => note.trim())) return;
  const notes = roteiro.map(({ nome }, i) => state.notes[i].trim() ? `${nome}\n${state.notes[i].trim()}` : "").filter(Boolean);
  const text = ["MISSÃO SOB CONTROLE", "Observações da sessão", ...notes].join("\n\n");
  const url = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "observacoes-missao-sob-controle.txt";
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
}

function resetDialog() {
  const dialog = read("#reiniciar");
  dialog.innerHTML = `<div class="dialog-heading"><h2 id="reiniciar-titulo">Iniciar uma nova sessão?</h2></div>
    <div class="dialog-body"><p>Isso apaga as respostas, a pontuação e as observações da sessão atual.</p></div>
    <div class="dialog-actions">${action("cancel-reset", "Cancelar")}${action("reset", "Iniciar nova sessão", { style: "primary" })}</div>`;
  dialog.showModal();
}

function toggle(list, value) {
  const index = list.indexOf(value);
  if (index === -1) list.push(value);
  else list.splice(index, 1);
}

function handle(button) {
  const { act, value } = button.dataset;
  const index = Number(value);
  const refresh = () => render({ source: { act, value } });
  const step = next => { state.step = next; render({ route: true }); };
  const caseAnswer = state.cases[caseIndex];
  const scanner = state.scanner;
  const meter = state.thermometer;
  const ice = state.iceberg;
  const decisionRecord = state.decisions[state.decisionIndex];
  switch (act) {
    case "home": state.phase = 0; return render({ route: true });
    case "phase": return enterPhase(index);
    case "therapist": return showNotes(button);
    case "close-therapist": return closeNotes();
    case "download-notes": return downloadNotes();
    case "reset-dialog": return resetDialog();
    case "cancel-reset": return read("#reiniciar").close();
    case "reset":
      state = newSession();
      read("#reiniciar").close();
      return render({ route: true });
    case "cases": return step("cases");
    case "open-case": caseIndex = index; return step("case");
    case "intensity": caseAnswer.intensity = ["Pouco", "Médio", "Muito"][index]; return refresh();
    case "thought": caseAnswer.thought = index; return refresh();
    case "reaction": caseAnswer.reaction = index; return refresh();
    case "save-case": {
      caseAnswer.saved = true;
      const awarded = earn(`case-${caseIndex}`, 10);
      step("cases");
      notify(awarded ? `Caso investigado · +${awarded} pts` : "Investigação atualizada");
      return;
    }
    case "case-brief": return step("brief");
    case "scanner": return step("scanner");
    case "sign":
      scanner.empty = false;
      toggle(scanner.signs, index);
      if (scanner.first === value && !scanner.signs.includes(index)) scanner.first = "";
      return refresh();
    case "no-signs":
      scanner.empty = !scanner.empty;
      scanner.signs = [];
      scanner.first = "";
      return refresh();
    case "first-sign": scanner.first = value; return refresh();
    case "thermometer": {
      const awarded = earn("scanner", 15);
      step("thermometer");
      if (awarded) notify("Scanner concluído · +15 pts");
      return;
    }
    case "meter-case": meter.index = index; return refresh();
    case "level": meter.values[meter.index] = index; return refresh();
    case "meter-next":
      meter.index = meter.values.findIndex((level, i) => !level && i > meter.index);
      if (meter.index < 0) meter.index = meter.values.findIndex(level => !level);
      return refresh();
    case "ice-layer":
      ice.layer = value;
      if (value === "below") ice.seen = true;
      return refresh();
    case "ice-case": ice.index = index; return refresh();
    case "ice-choice": {
      const choices = ice.choices[ice.index];
      if (index === profundidade.length + 1) {
        ice.choices[ice.index] = choices.includes(index) ? [] : [index];
      } else {
        const unsure = choices.indexOf(profundidade.length + 1);
        if (unsure >= 0) choices.splice(unsure, 1);
        toggle(choices, index);
      }
      return refresh();
    }
    case "decision-case": state.decisionIndex = index; return refresh();
    case "decision-choice": decisionRecord.choice = index; return refresh();
    case "alternative": decisionRecord.showAlternative = true; return refresh();
    case "save-decision": {
      decisionRecord.saved = true;
      const awarded = earn(`decision-${state.decisionIndex}`, 15);
      const next = state.decisions.findIndex((record, i) => !record.saved && i > state.decisionIndex);
      if (next >= 0) state.decisionIndex = next;
      else if (state.decisions.some(record => !record.saved)) state.decisionIndex = state.decisions.findIndex(record => !record.saved);
      refresh();
      if (awarded) notify("Simulação registrada · +15 pts");
      return;
    }
    case "tool":
      if (state.kit.length === 3 && !state.kit.includes(index)) {
        notify("Kit cheio. Desmarque uma ferramenta para trocar.");
        return;
      }
      toggle(state.kit, index);
      if (!state.kit.includes(Number(state.kitAnswers[0])) || state.kitAnswers[0] === value) state.kitAnswers[0] = "";
      return refresh();
    case "kit-tools": return step("kit-tools");
    case "kit-answers": return step("kit-answers");
    case "best-tool": state.kitAnswers[0] = state.kitAnswers[0] === value ? "" : value; return refresh();
    case "complete": return completePhase();
  }
}

document.addEventListener("click", event => {
  const button = event.target.closest("button[data-act]");
  if (button && !button.disabled) handle(button);
});

document.addEventListener("input", event => {
  const { field } = event.target.dataset;
  const { value } = event.target;
  switch (field) {
    case "thoughtText":
    case "reactionText": state.cases[caseIndex][field] = value; break;
    case "iceText": state.iceberg.text = value; break;
    case "alternative": state.decisions[state.decisionIndex].alternative = value; break;
    case "kit-situation": state.kitAnswers[1] = value; break;
    case "kit-barrier": state.kitAnswers[2] = value; break;
    case "notes":
      state.notes[notesIndex] = value;
      read('[data-act="download-notes"]').disabled = !state.notes.some(note => note.trim());
      break;
  }
});

read("#painel").addEventListener("change", event => {
  if (event.target.id !== "notes-stage") return;
  notesIndex = Number(event.target.value);
  notesPane();
  read("#notes-stage").focus();
});
read("#painel").addEventListener("close", () => lastFocus?.focus());
render();
