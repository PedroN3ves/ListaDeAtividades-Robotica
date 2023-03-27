// Obtém o botão e o modal
const openModalBtn = document.getElementById("open-modal");
const modal = document.getElementById("modal");

// Obtém o elemento de fechar o modal
const closeModal = document.getElementsByClassName("close-modal")[0];

// Quando o usuário clica no botão, abra o modal
openModalBtn.onclick = function() {
  modal.style.display = "block";
}

// Quando o usuário clica no botão de fechar, feche o modal
closeModal.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clicar fora do modal, feche-o
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
