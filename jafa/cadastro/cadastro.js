/**
 * Arquivo JavaScript específico para a página cadastro.html
 * Contém funcionalidades para cadastro de cursos/eventos
 */

// Elementos do DOM
const cadastroForm = document.getElementById("cadastroForm")
const backButton = document.getElementById("backButton")
const nomePalestrante = document.getElementById("nomePalestrante")
const descricaoPalestra = document.getElementById("descricaoPalestra")
const horarioPalestra = document.getElementById("horarioPalestra")
const localPalestra = document.getElementById("localPalestra")
const tipoEvento = document.getElementById("tipoEvento");

/**
 * Valida o formulário de cadastro
 * @returns {boolean} Retorna true se o formulário for válido, false caso contrário
 */
function validarFormulario() {
  if (!nomePalestrante.value.trim()) {
    mostrarMensagem("Por favor, informe o nome do palestrante.")
    return false
  }

  if (!descricaoPalestra.value.trim()) {
    mostrarMensagem("Por favor, forneça uma descrição para a palestra.")
    return false
  }

  if (!horarioPalestra.value) {
    mostrarMensagem("Por favor, defina um horário para a palestra.")
    return false
  }

  if (!localPalestra.value.trim()) {
    mostrarMensagem("Por favor, informe o local da palestra.")
    return false
  }

  return true
}

/**
 * Exibe uma mensagem para o usuário
 * @param {string} mensagem - A mensagem a ser exibida
 */
function mostrarMensagem(mensagem) {
  alert(mensagem)
}

/**
 * Processa o envio do formulário
 * @param {Event} event - O evento de submit do formulário
 */
function processarEnvio(event) {
  event.preventDefault()

  if (validarFormulario()) {
    // Aqui você poderia enviar os dados para um servidor
    // Por enquanto, apenas exibimos uma mensagem de sucesso
    const dadosCurso = {
      palestrante: nomePalestrante.value,
      descricao: descricaoPalestra.value,
      horario: horarioPalestra.value,
      local: localPalestra.value,
      tipo: tipoEvento.value,
    }

    console.log("Dados do curso:", dadosCurso)
    mostrarMensagem("Curso cadastrado com sucesso!")

    // Limpa o formulário
    cadastroForm.reset()
  }
}

/**
 * Volta para a página inicial
 */
function voltarParaInicio() {
  window.location.href = "../login/login.html"
}

// Event Listeners
cadastroForm.addEventListener("submit", processarEnvio)
backButton.addEventListener("click", voltarParaInicio)

