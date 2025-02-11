//Función para mostrar el formulario de contacto
function showForm() {
  let preForm = document.querySelector(".pre-button");
  let flexForm = document.querySelector(".flex-form");

  if (preForm) {
    preForm.style.display = "none";
  }

  if (flexForm) {
    flexForm.style.display = "flex";
  }
}
