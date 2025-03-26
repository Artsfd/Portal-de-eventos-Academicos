/**
 * Arquivo JavaScript específico para a página eventos.html
 * Contém funcionalidades para exibição e interação com eventos
 */

// Elementos do DOM
const eventsList = document.getElementById("eventsList")
const backButton = document.getElementById("backButton")
const filterButtons = document.querySelectorAll(".filter-button")
const eventCardTemplate = document.getElementById("event-card-template")

/**
 * Dados de exemplo para eventos
 * Em um ambiente real, estes dados viriam de uma API ou banco de dados
 */
const eventosDisponiveis = [
  {
    id: 1,
    titulo: "Palestra de Tecnologia",
    categoria: "palestra",
    descricao:
      "Descrição da palestra sobre tecnologias emergentes e suas aplicações no mercado atual. Venha descobrir as últimas tendências!",
    horario: "14:00",
    local: "Auditório Principal",
    palestrante: "Dr. Carlos Silva",
    vagas: 50,
    inscritos: 30,
  },
  {
    id: 2,
    titulo: "Workshop de Programação",
    categoria: "workshop",
    descricao:
      "Aprenda programação na prática com exercícios e projetos reais. Ideal para iniciantes e intermediários.",
    horario: "15:30",
    local: "Laboratório 3",
    palestrante: "Profa. Ana Oliveira",
    vagas: 20,
    inscritos: 18,
  },
  {
    id: 3,
    titulo: "Seminário de Inovação",
    categoria: "seminario",
    descricao: "Discussão sobre inovação e empreendedorismo no contexto universitário. Cases reais e networking.",
    horario: "10:00",
    local: "Sala 205",
    palestrante: "Prof. Roberto Santos",
    vagas: 30,
    inscritos: 15,
  },
  {
    id: 4,
    titulo: "Workshop de UX/UI Design",
    categoria: "workshop",
    descricao: "Aprenda os fundamentos de design de interface e experiência do usuário com práticas modernas.",
    horario: "13:30",
    local: "Laboratório 2",
    palestrante: "Designer Maria Costa",
    vagas: 25,
    inscritos: 20,
  },
  {
    id: 5,
    titulo: "Palestra sobre IA",
    categoria: "palestra",
    descricao: "Inteligência Artificial e seu impacto no futuro do trabalho e da sociedade.",
    horario: "16:00",
    local: "Auditório 2",
    palestrante: "Dr. Paulo Mendes",
    vagas: 100,
    inscritos: 45,
  },
]

/**
 * Cria um elemento HTML para um evento usando o template
 * @param {Object} evento - Dados do evento
 * @returns {HTMLElement} Elemento HTML do evento
 */
function criarElementoEvento(evento) {
  const template = eventCardTemplate.content.cloneNode(true)
  const card = template.querySelector(".event-card")

  // Adiciona categoria e estilo
  const categoryBadge = card.querySelector(".event-card__category")
  categoryBadge.textContent = evento.categoria.charAt(0).toUpperCase() + evento.categoria.slice(1)
  categoryBadge.classList.add(`event-card__category--${evento.categoria}`)

  // Preenche os dados do evento
  card.querySelector(".event-card__title").textContent = evento.titulo
  card.querySelector(".event-card__description").textContent = evento.descricao
  card.querySelector(".event-card__time").textContent = evento.horario
  card.querySelector(".event-card__location").textContent = evento.local
  card.querySelector(".event-card__speaker").textContent = evento.palestrante

  // Configura o status de vagas
  const status = card.querySelector(".event-card__status")
  const vagasRestantes = evento.vagas - evento.inscritos
  if (vagasRestantes <= 5) {
    status.textContent = `Últimas ${vagasRestantes} vagas!`
    status.classList.add("event-card__status--limited")
  } else {
    status.textContent = `${vagasRestantes} vagas disponíveis`
    status.classList.add("event-card__status--available")
  }

  // Configura o botão de inscrição
  const button = card.querySelector(".event-card__button")
  button.addEventListener("click", () => inscreverEvento(evento.id))

  // Adiciona delay para animação
  card.style.animationDelay = `${Math.random() * 0.3}s`

  return card
}

/**
 * Carrega os eventos na página
 * @param {string} filtro - Categoria para filtrar os eventos
 */
function carregarEventos(filtro = "all") {
  // Limpa a lista de eventos
  eventsList.innerHTML = ""

  // Filtra e adiciona os eventos
  const eventosFiltrados =
    filtro === "all" ? eventosDisponiveis : eventosDisponiveis.filter((evento) => evento.categoria === filtro)

  eventosFiltrados.forEach((evento) => {
    const eventoElement = criarElementoEvento(evento)
    eventsList.appendChild(eventoElement)
  })
}

/**
 * Função para inscrição em um evento
 * @param {number} eventoId - ID do evento
 */
function inscreverEvento(eventoId) {
  const evento = eventosDisponiveis.find((e) => e.id === eventoId)
  if (evento) {
    const vagasRestantes = evento.vagas - evento.inscritos
    if (vagasRestantes > 0) {
      alert(`Inscrição realizada com sucesso para o evento: ${evento.titulo}`)
      evento.inscritos++ // Incrementa o número de inscritos
      carregarEventos(document.querySelector(".filter-button.active").dataset.filter) // Recarrega os eventos
    } else {
      alert("Desculpe, não há mais vagas disponíveis para este evento.")
    }
  }
}

/**
 * Volta para a página inicial
 */
function voltarParaInicio() {
  window.location.href = "../login/login.html"
}

// Event Listeners
backButton.addEventListener("click", voltarParaInicio)

// Configuração dos filtros
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove a classe active de todos os botões
    filterButtons.forEach((btn) => btn.classList.remove("active"))
    // Adiciona a classe active ao botão clicado
    button.classList.add("active")
    // Carrega os eventos com o filtro selecionado
    carregarEventos(button.dataset.filter)
  })
})

// Inicialização
document.addEventListener("DOMContentLoaded", () => carregarEventos())

